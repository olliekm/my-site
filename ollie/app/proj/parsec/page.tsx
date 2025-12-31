import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-100 w-full min-h-screen h-auto flex justify-center text-black font-serif">
      <div className="w-xl h-full px-6 space-y-8">
        {/* Title + description */}
        <div className="w-full flex sm:pt-20 pt-8 flex-col space-y-4">
            <Link href={"/"}>&#8592; Back</Link>
          <h1 className="text-3xl font-serif">parsec</h1>
          <p className="italic">Structured LLM Output Enforcer</p>

          <div className="flex space-x-4">
            <a href="https://github.com/olliekm/parsec" target="_blank" rel="noopener noreferrer" className="underline">SDK Repository</a>
            <a href="https://github.com/olliekm/parsec-playground" target="_blank" rel="noopener noreferrer" className="underline">Playground Repository</a>
          </div>
          {/* <div className="flex space-x-2">
            <a href="https://www.linkedin.com/in/oliver-kwun-morfitt/" target="_blank" rel="noopener noreferrer" className="underline">linkedin</a>
            <a href="https://github.com/olliekm" target="_blank" rel="noopener noreferrer" className="underline">github</a>
            <a href="https://github.com/olliekm/Resume/blob/main/oliverkm_resume.pdf" target="_blank" rel="noopener noreferrer" className="underline">resume</a>
          </div> */}
        </div>
        <div className="space-y-6">
          <a href="https://parsec.olliekm.com" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-bl from-gray-700 via-gray-900 to-black text-white font-sans px-4 py-2 rounded-xl flex items-baseline space-x-4 text-center mb-4 hover:scale-[102%] transition-transform">
            <h3 className="font-bold">parsec playground</h3>
            <small>View live site</small>
          </a>

          <div>
            <h2 className="text-xl mb-2">Overview</h2>
            <p>
              <span className="italic">parsec</span> is a Python SDK that ensures LLM outputs conform to specified structures using Pydantic models. The <span className="italic">parsec playground</span> is a web-based development environment for testing LLM prompts with structured JSON schema validation.
            </p>
          </div>

          <div>
            <h2 className="text-xl mb-2">Key Features</h2>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Test LLM prompts with structured JSON schema validation</li>
              <li>Multi-provider comparison (OpenAI and Anthropic)</li>
              <li>Real-time validation with automatic retry enforcement</li>
              <li>Complete history tracking with filtering options</li>
              <li>Performance metrics monitoring (latency, token usage)</li>
              <li>Dark-mode interface inspired by Cursor with Monaco Editor</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl mb-2">How It Works</h2>
            <p className="mb-2">
              Parsec&apos;s EnforcementEngine automatically retries failed validations, ensuring your LLM outputs always match your JSON schema. The enforcement process involves:
            </p>
            <ol className="list-decimal list-inside pl-4 space-y-1">
              <li>Prompt enhancement with schema context</li>
              <li>LLM generation</li>
              <li>Output validation against schemas</li>
              <li>Automatic retry logic (up to 3 attempts)</li>
              <li>Metrics tracking</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl mb-2">Tech Stack</h2>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Backend:</span> Python 3.13, FastAPI, SQLAlchemy (SQLite), Pydantic
              </div>
              <div>
                <span className="font-medium">Frontend:</span> Next.js 16, TypeScript, Tailwind CSS, Monaco Editor
              </div>
            </div>
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
