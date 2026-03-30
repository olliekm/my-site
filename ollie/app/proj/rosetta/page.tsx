import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-stone-100 w-full min-h-screen h-auto flex justify-center text-black font-serif">
      <div className="w-xl h-full px-6 space-y-8">
        {/* Title + description */}
        <div className="w-full flex sm:pt-20 pt-8 flex-col space-y-4">
        <Link href={"/"}>&#8592; Back</Link>
          <h1 className="text-3xl font-serif">Rosetta</h1>
          <p className="italic">NER Model Benchmarking for Skill Extraction</p>
          <a href="https://github.com/olliekm/rosetta" target="_blank" rel="noopener noreferrer" className="underline">Project Link</a>
        </div>

        <div className="space-y-6">
            <p>
                <span className="italic">Rosetta</span> is an ML experimentation framework for Named Entity Recognition on job postings. Built to benchmark transformer models on the SkillSpan dataset for extracting skills and knowledge entities from job descriptions.
            </p>

            <div>
                <p className="font-semibold mb-2">Technical Highlights:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Benchmarked 8+ models with a full automated evaluation harness</li>
                    <li>Custom metrics: F1, per-class precision/recall, overfitting gap, inference latency, confusion patterns</li>
                    <li>Best model: distilbert-base-uncased with <span className="font-mono">51% F1</span>, <span className="font-mono">3.47ms</span> inference latency, <span className="font-mono">66M</span> params</li>
                    <li>Near-zero overfitting gap (0.001) after 12.6 min training on CPU</li>
                </ul>
            </div>

            {/* Performance Comparison Chart */}
            <div className="space-y-2">
                <p className="font-semibold">Performance Comparison:</p>
                <Image
                    src="/model_analysis_files/model_analysis_5_0.png"
                    alt="Model performance comparison showing F1, precision, recall metrics for uncased vs cased models"
                    width={600}
                    height={400}
                    className="rounded-lg border border-stone-300"
                />
            </div>

            <div>
                <p className="font-semibold mb-2">Key Findings:</p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>Knowledge entities easier to detect (F1 ~0.60) than Skills (F1 ~0.41)</li>
                    <li>Root cause: Skills are multi-word phrases (&quot;problem solving&quot;, &quot;attention to detail&quot;) while knowledge entities are single tokens (&quot;python&quot;, &quot;javascript&quot;)</li>
                    <li>Dominant error mode: I-Skill boundary confusion (missing span continuations)</li>
                    <li>Uncased model has better recall (+2.8%), cased has slightly better precision</li>
                </ul>
            </div>

            {/* Overfitting Analysis Chart */}
            <div className="space-y-2">
                <p className="font-semibold">Overfitting Analysis:</p>
                <Image
                    src="/model_analysis_files/model_analysis_9_0.png"
                    alt="Overfitting analysis showing minimal gap between dev and test F1 scores"
                    width={600}
                    height={400}
                    className="rounded-lg border border-stone-300"
                />
                <p className="text-sm text-stone-600">Both models show minimal overfitting (gap &lt; 0.02)</p>
            </div>

            {/* Error Analysis Chart */}
            <div className="space-y-2">
                <p className="font-semibold">Error Analysis:</p>
                <Image
                    src="/model_analysis_files/model_analysis_12_0.png"
                    alt="Confusion matrix showing error patterns between predicted and true labels"
                    width={600}
                    height={400}
                    className="rounded-lg border border-stone-300"
                />
                <div className="text-sm text-stone-600 space-y-1">
                    <p>Top confusion pairs for distilbert-base-uncased:</p>
                    <ul className="list-disc list-inside pl-4">
                        <li>O → I-Skill: 820 errors</li>
                        <li>I-Skill → O: 793 errors</li>
                        <li>B-Skill → O: 243 errors</li>
                    </ul>
                </div>
            </div>

            <div>
                <p className="font-semibold mb-2">Production Pipeline:</p>
                <p>
                    Beyond benchmarking, the project includes a deployment pipeline (<span className="font-mono">taxonomy.py</span>) that runs the trained model against real job posting data (jacob-hugging-face/job-descriptions) with batched inference, chunking logic, and JSON output&mdash;a full loop from fine-tuning to production inference.
                </p>
            </div>

            <p className="text-sm text-stone-600 italic">
                Built with Python, PyTorch, Transformers, and Hugging Face datasets.
            </p>
        </div>

        <footer className="py-4 text-sm flex justify-between">
          <p>Oliver Kwun-Morfitt</p>
          <div className="flex space-x-2">
            <a href="https://www.linkedin.com/in/oliver-kwun-morfitt/" target="_blank" rel="noopener noreferrer" className="underline">linkedin</a>
            <a href="https://github.com/olliekm" target="_blank" rel="noopener noreferrer" className="underline">github</a>
            <a href="https://github.com/olliekm/Resume/blob/main/oliverkm_resume.pdf" target="_blank" rel="noopener noreferrer" className="underline">resume</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
