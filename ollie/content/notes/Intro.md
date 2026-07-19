https://jax-ml.github.io/scaling-book/

Goals in understanding:
- Estimate how close you are to theoretical optimum
- Decide how to split computation across devices (optimize for different metrics)
- Estimate the cost and time to train and run LLMs
- Algorithms that optimize for hardware specific advantages
- Understand whats limits algorithm performance, design hardware to improve

Model scaling is about being able to increase the number of chips used for training and inference and achieve a proportional (linear) increase in throughput. AKA "Strong scaling".

Parallelism is great, usually it decrease compute time but at the cost of adding more chips and adding more communication overhead between them. When communication takes longer than computation, we are **communication bound** and cant scale "strongly".

![[Pasted image 20260708112104.png]]

