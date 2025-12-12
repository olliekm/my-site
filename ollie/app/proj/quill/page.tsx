import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-stone-100 w-full min-h-screen h-auto flex justify-center text-black font-serif">
      <div className="w-xl h-full px-6 space-y-8">
        {/* Title + description */}
        <div className="w-full flex sm:pt-20 pt-8 flex-col space-y-4">
        <Link href={"/"}>&#8592; Back</Link>
          <h1 className="text-3xl font-serif">Quill</h1>
          <p className="italic">An SQL Optimizer</p>
          <a href="https://github.com/olliekm/quill" target="_blank" rel="noopener noreferrer" className="underline">Project Link</a>
          {/* <div className="flex space-x-2">
            <a href="https://www.linkedin.com/in/oliver-kwun-morfitt/" target="_blank" rel="noopener noreferrer" className="underline">linkedin</a>
            <a href="https://github.com/olliekm" target="_blank" rel="noopener noreferrer" className="underline">github</a>
            <a href="https://github.com/olliekm/Resume/blob/main/oliverkm_resume.pdf" target="_blank" rel="noopener noreferrer" className="underline">resume</a>
          </div> */}
        </div>
        <div className="space-y-4">
            <p>
                <span className="italic">Quill</span> is a SQL query optimizer that leverages ReST^EM to deliver frontier model performance on query optimization tasks. By integrating LLMs into the optimization pipeline with QWEN-7B, Quill achieves significant latency reductions while maintaining accuracy.
            </p>

            <div>
                Key features of Quill include:
                <ul className="list-disc list-inside pl-4">
                    <li>LLM-powered query optimization using QWEN-7B</li>
                    <li>ReST^EM integration for frontier model performance</li>
                    <li>Significant query latency reductions</li>
                    <li>Built with Python, SQLite, and OpenAI</li>
                </ul>
            </div>

            <p>
                The optimizer analyzes SQL queries and applies advanced optimization techniques to improve execution performance, making database operations faster and more efficient.
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
