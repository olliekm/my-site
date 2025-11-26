import Image from "next/image";
import Experience from "@/components/Experience";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-100 w-full min-h-screen h-auto flex justify-center text-black font-serif">
      <div className="w-xl h-full px-6 space-y-8">
        {/* Title + description */}
        <div className="w-full flex sm:pt-20 pt-8 flex-col space-y-4">
            <Link href={"/"}>&#8592; Back</Link>
          <h1 className="text-3xl font-serif">parsec</h1>
          <p className="italic"></p>

          <a href="https://github.com/olliekm/parsec" target="_blank" rel="noopener noreferrer" className="underline">GitHub Link</a>
          {/* <div className="flex space-x-2">
            <a href="https://www.linkedin.com/in/oliver-kwun-morfitt/" target="_blank" rel="noopener noreferrer" className="underline">linkedin</a>
            <a href="https://github.com/olliekm" target="_blank" rel="noopener noreferrer" className="underline">github</a>
            <a href="https://github.com/olliekm/Resume/blob/main/oliverkm_resume.pdf" target="_blank" rel="noopener noreferrer" className="underline">resume</a>
          </div> */}
        </div>
        <div className="space-y-4">
        <a href="https://parsec.olliekm.com" target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-bl from-gray-700 via-gray-900 to-black text-white font-sans  px-4 py-2 rounded-xl flex items-baseline space-x-4 text-center mb-4 hover:scale-[102%] transition-transform">
            <h3 className="font-bold">parsec</h3>
            <small>View live site</small>
          </a>
          <p>
            <span className="italic">parsec</span> is a minimal Python SDK that ensures LLM outputs conform to specified structures using Pydantic models. It simplifies prompt engineering by generating structured prompts and validating responses, enhancing reliability in applications like chatbots and data extraction.
          </p>

          <p>
            The goal of the project is to provide a simple way to enforce structured outputs from LLMs, reducing the need for complex parsing logic and improving the robustness of applications that rely on LLM-generated data.
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
