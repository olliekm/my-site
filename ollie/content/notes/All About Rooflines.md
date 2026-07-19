There are three things involved when running algorithms on hardware:
- How fast can it do math (OPs/second)
- How fast can we move the data around ie bandwidth (bytes/second)
- How much much data can we store ie memory (bytes)
Using a roofline model can help us upper and lower bound the time of a given computation with the three factors in mind.

For computation, deep learning is just matmuls, and each matmul is just floating-point multiplication and addition operations (FLOPs). The accelerator speed determines how long this takes.
$$
T_\text{math} = \frac{\text{Computation FLOPs}}{\text{Accelerator FLOPs/s}}
$$

For communication within a chip, tensors need to be transferred between accelerator memory or HBM and the compute cores. On an h100 its about 3.35TB/s and a TPU v6e about 1.6TB/s.

Then to communicate between chips we can use a few hardware options (ICI, DCN, PCIe), each of them have different bandwidths. This happens when we want to distribute a model across multiple accelerators.

Between and within chips, we measure speed of communication as bytes/s and estimate the total communication time as
$$
T_{\text{comms}} = \frac{\text{Communication Bytes}}{\text{Network/Memory Bandwidth Bytes/s}}
$$
We can usually overlap the computation within a chip and communication within the chip. This means that we can lower-bound the training and inference time by using the maximum of the two times. Then the upper bound can be the sum of the two. 
$$
T_{\text{lower}} = max(T_{\text{math}}, T_{\text{comms}}) 
$$
$$
T_{\text{upper}} = T_{\text{math}} + T_{\text{comms}}
$$
If we assume a perfect overlap in the communication steps and the computation then we can differentiate the bounds. if time to compute is longer than comm then we are compute-bound and when comm is longer, communication-bound. One way to look at which type we fall into is using arithmetic intensity and operational intensity.

The arithmetic intensity of an algorithm is given by the ratio of the total FLOPs it performs to the number of bytes it needs to communicate. 
$$
\text{Arithmetic Intensity} = \frac{\text{Communication FLOPs}}{\text{Communication Bytes}}
$$
When arithmetic intensity is high, the FLOPs per byte is high, meaning that time to compute is large compared to time to communicate, and we use more of the available FLOPs. When the opposite is true, we spend more time communicating and end up with idle FLOPs. The point where this crosses over is the peak arithmetic intensity of our hardware. The ratio of peak accelerator FLOPs/s to accelerator bandwidth.
$$
T_{\text{math}} > T_{\text{comms}}\iff \text{Intensity(Computation)} > \text{Intensity(Acceleration)}
$$
The intensity of acceleration is the arithmetic intensity at which the accelerator achieves the peak FLOPs/s.

> [!example]
> **The dot product:**
>  if we want to do $x \cdot y$ where the function is  ``bf16[N], bf16[N] -> bf16[1]``  
> So two N dim vectors of floating point 16, to 1 floating point 16 value. 
> The steps are, load x and y into memory, each of which have 2N bytes (bf16 is 2 bytes large). Then we perform N multiplications and N-1 additions and then write 2 bytes back into HBM
> $$
> \text{Total FLOPs} = N + N -1
> $$
> $$
> \text{Total Bytes} = 2N + 2N + 2
> $$
> Recall intensity is $\frac{\text{Total FLOPs}}{\text{Total Bytes}}$ so we get
> $$
> \text{Intensity(dot product)} = \frac{\text{Total FLOPs}}{\text{Total Bytes}} = \frac{1}{2}
> $$
> *Note: theres a hidden limit as N -> Inf*
> So the dot product has an arithmetic intensity of 1/2 ie the dot product does 0.5 floating point ops per byte loaded. So the arithmetic intensity is lower than the hardware and so the dot product is thus, communication-bound.

> [!example]
> **Matrix multiplication:**
> Matmuls are X * Y -> Z where X, Y has shape `bf16[B,D], bf16[D,F]` respectively and Z has shape `bf[B,F]`. So X has BD bf16s so 2BD bytes and Y has DF bf16s and 2DF bytes. Doing some breakdown we get for every entry in Z, we do 2D FLOPs, and since Z is BF in size, we do 2DBF FLOPs. So now wan can try and calculate intensity
> $$
> \text{Intensity(matmul)} = \frac{2BDF}{2BD + 2DF + 2BF} = \frac{BDF}{BD+DF+BF}
> $$
> 
> Now we can do a nice simplification if we assume the batch size B is small relative to D and F
> $$
> \frac{BDF}{BD+DF+BF} \approx \frac{BDF}{DF} = B
> $$
> $$
> \text{Intensity(matmul)} > \text{Intensity(TPU)} \implies B > \frac{1.96e14}{8.20e11} = 240
> $$
> This is actually a reasonable assumption since batch size B is typically less that 1024 and D and F and usually much larger. So, we generally become compute bound when batch size B is greater than 240 tokens.
> 

We can also use rooflines for communication. This is because in most instances of large training or inference, we distribute matrix multiplications across multiple TPUs.

> [!question 1 int8 matmuls]
> 1. How many bytes need to be loaded from memory? How many need to be written back to memory?
> 	ans: X and Y have BD and DF int8s respectively, since each int8 is 1 byte, we have BD and DF total bytes needed to be loaded. Since Z has BF int8s we then need BF bytes written back into HBM.
> 2. How many total OPs are performed?
> 	ans: We need 2DBF FLOPs
> 3. What is the arithmetic intensity?
> 	ans: the arithmetic intensity is $\frac{2BDF}{BD+DF+BF}$ and then if we assume B is small, then we get $\frac{2BDF}{DF} = 2B > \frac{3.94e14}{8.2e11} \implies 2B > 480 \implies B > 240$
> 4. What is a roofline estimate for Tmath ​ and Tcomms? What are reasonable upper and lower bounds for the runtime of the whole operation?
> 	ans: 
> 	$T_{math} = \frac{2BDF}{3.94e14}$ and $T_{comms} = \frac{BF + DF + BD}{8.2e11}$
> 	the lower bound is $max(T_{math}, T_{comms})$ and upper bound is $T_{math} + T_{comms}$

Question 2 
In practice we often do different weight vs. activation quantization, so we might store our weights in very low precision but keep activations (and compute) in a higher precision. Say we want to quantize our weights in int8 but keep activations (and compute) in bfloat16. At what batch size do we become compute bound? Assume `1.97e14` bfloat16 FLOPs/s.
ans: Total bytes = $2BD + DF+2BF$ and FLOPs = $2BDF$ the same as before, using the same small B assumption we get arithmetic intensity of $2B$ > 240 so B > 120 is when we become compute bound