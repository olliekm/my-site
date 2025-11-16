import Image from "next/image";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="bg-stone-100 w-full min-h-screen h-auto flex justify-center text-black font-serif">
      <div className="w-xl h-full px-6 space-y-8">
        {/* Title + description */}
        <div className="w-full flex sm:pt-20 pt-8 flex-col space-y-4">
          <h1 className="text-3xl font-serif">Realtime Ledger API</h1>
          <p className="italic">Real-time double-entry ledger backend with strict consistency, idempotent writes, and streaming balance updates.</p>
          <a href="https://github.com/olliekm/realtime-ledger" target="_blank" rel="noopener noreferrer" className="underline">Project Link</a>
          {/* <div className="flex space-x-2">
            <a href="https://www.linkedin.com/in/oliver-kwun-morfitt/" target="_blank" rel="noopener noreferrer" className="underline">linkedin</a>
            <a href="https://github.com/olliekm" target="_blank" rel="noopener noreferrer" className="underline">github</a>
            <a href="https://github.com/olliekm/Resume/blob/main/oliverkm_resume.pdf" target="_blank" rel="noopener noreferrer" className="underline">resume</a>
          </div> */}
        </div>
        <div className="space-y-4">
            <p>
                I&apos;m building <span className="italic">chrollo</span> to simplify the process of hyperparameter tuning for machine learning models. It allows users to easily distribute their hyperparameter search across multiple machines, making it faster and more efficient.
            </p>

            <div>
                Key features of chrollo include:
                <ul className="list-disc list-inside pl-4">
                    <li>Easy setup and configuration</li>
                    <li>Support for various search algorithms (grid search, random search, Bayesian optimization)</li>
                    <li>Real-time monitoring of experiments</li>
                    <li>Scalability to handle large hyperparameter spaces</li>
                </ul>
            </div>
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
