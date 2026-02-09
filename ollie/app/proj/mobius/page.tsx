import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-stone-100 w-full min-h-screen h-auto flex justify-center text-black font-serif">
      <div className="w-xl h-full px-6 space-y-8">
        {/* Title + description */}
        <div className="w-full flex sm:pt-20 pt-8 flex-col space-y-4">
            <Link href={"/"}>&#8592; Back</Link>
          <h1 className="text-3xl font-serif">mobius</h1>
          <p className="italic">A smart & performant notetaking app</p>

          <div className="flex space-x-4">
            <a href="https://github.com/olliekm/mobius" target="_blank" rel="noopener noreferrer" className="underline">Repository</a>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <Image src="/mobius3.png" alt="Mobius screenshot 3" width={800} height={256} className="rounded-lg h-64 w-auto" />
            <h2 className="text-xl mb-2">Overview</h2>
            <p>
              <span className="italic">Mobius</span> is an open-source notetaking application designed as a modern alternative to traditional note-taking tools. It leverages LLMs to reduce organizational overhead while maintaining a minimalist user experience&mdash;an ambient environment where AI augments the experience in the background rather than dominating the interface.
            </p>
          </div>

          <div>
            <h2 className="text-xl mb-2">Key Features</h2>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Automated note connection forming</li>
              <li>Automated topic and note clustering</li>
              <li>Intelligent content parsing for augmenting existing notes</li>
              <li>Session-based learning with AI prompts for forming connections</li>
              <li>Integrated glossary editor with inline definition suggestions</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl mb-2">Philosophy</h2>
            <p>
              Mobius is built on the principle that AI should work in the background, quietly organizing and connecting your thoughts without requiring constant interaction. The goal is to create software where intelligence enhances your workflow naturally, letting you focus on what matters&mdash;your ideas.
            </p>
          </div>

          <div>
            <h2 className="text-xl mb-2">Tech Stack</h2>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Frontend:</span> Svelte, TypeScript, CSS
              </div>
              <div>
                <span className="font-medium">Backend:</span> Rust with Tauri (desktop application)
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-2">Screenshots</h2>
            <div className="space-y-4">
              <Image src="/mobius1.png" alt="Mobius screenshot 1" width={800} height={600} className="rounded-lg w-full h-auto" />
              <Image src="/mobius2.png" alt="Mobius screenshot 2" width={800} height={600} className="rounded-lg w-full h-auto" />
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
