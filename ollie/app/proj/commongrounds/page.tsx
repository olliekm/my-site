import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-100 w-full min-h-screen h-auto flex justify-center text-black font-serif">
      <div className="w-xl h-full px-6 space-y-8">
        {/* Title + description */}
        <div className="w-full flex sm:pt-20 pt-8 flex-col space-y-4">
            <Link href={"/"}>&#8592; Back</Link>
          <h1 className="text-3xl font-serif">CommonGrounds</h1>
          <p className="italic">A swipe-based discovery platform for students</p>

          <div className="flex space-x-4">
            <a href="https://github.com/olliekm/Common-Grounds" target="_blank" rel="noopener noreferrer" className="underline">Repository</a>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-xl mb-2">Overview</h2>
            <p>
              <span className="italic">CommonGrounds</span> is a swipe-based discovery platform built at UofT Hacks 13. It helps students explore opportunities that reflect their evolving identity. Rather than forcing upfront self-definition, the app learns from user interactions to shape personalized recommendations.
            </p>
          </div>

          <div>
            <h2 className="text-xl mb-2">Core Concept</h2>
            <p>
              The platform separates personal and professional exploration into two modes: Matcha Mode for hobbies and personal growth, and Coffee Mode for career interests and peer projects. This allows users to discover different facets of themselves without mixing signals.
            </p>
          </div>

          <div>
            <h2 className="text-xl mb-2">Key Features</h2>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Dynamic identity development through swiping and engagement</li>
              <li>AI-powered personalization using embeddings and cosine similarity</li>
              <li>Reflective analytics dashboard with AI-generated insights</li>
              <li>Continuous user profile updates based on interaction patterns</li>
              <li>Dual-mode exploration (Matcha Mode and Coffee Mode)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl mb-2">Tech Stack</h2>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Frontend:</span> Next.js, TypeScript, CSS
              </div>
              <div>
                <span className="font-medium">Backend:</span> FastAPI, Supabase
              </div>
              <div>
                <span className="font-medium">AI/ML:</span> Gemini 2.5 Flash-Lite, all-MiniLM-L6-v2 (Sentence Transformers)
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-2">Screenshots</h2>
            <div className="space-y-4">
              <p className="text-gray-500 italic">Screenshots coming soon...</p>
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
