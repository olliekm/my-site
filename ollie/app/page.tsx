import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-stone-100 w-full h-auto flex justify-center text-black font-serif">
      <div className="w-xl lg:w-full lg:max-w-5xl h-full px-6 space-y-16">
        <div className="lg:flex lg:items-start lg:space-x-12 lg:space-y-0 space-y-16">
          {/* Title + description */}
          <div className="w-full lg:w-2/5 lg:shrink-0 flex sm:pt-20 pt-8 flex-col space-y-4 lg:sticky lg:top-20 lg:self-start">
            <h1 className="text-3xl font-serif">Oliver Kwun-Morfitt</h1>
            <div className="flex space-x-2">
              <a href="https://www.linkedin.com/in/oliver-kwun-morfitt/" target="_blank" rel="noopener noreferrer" className="underline">linkedin</a>
              <a href="https://github.com/olliekm" target="_blank" rel="noopener noreferrer" className="underline">github</a>
              <a href="https://github.com/olliekm/Resume/blob/main/oliverkm_resume.pdf" target="_blank" rel="noopener noreferrer" className="underline">resume</a>
            </div>
            <p className="font-serif text-md flex items-center gap-2">
              <Image src="/uoft.svg" alt="UofT" width={28} height={28} className="shrink-0" />
              <span>I&apos;m a student at UofT studying <span className="italic">Computer Science</span> and <span className="italic">Statistics</span>.</span>
            </p>
            <p className="font-serif text-md">
              I like building scalable systems for inference. I&apos;m currently interested in inference and scaling ML systems. Seeking winter 2027 internships.
            </p>
            <p className="font-serif text-md">
              Rock climber who grade chases on the moonboard 🌙 in my free time. Currently climbing around V9 level. Goal of climbing V10 before I graduate.
            </p>
            <Link href={'/climbing'} className="italic text-sm">video of me climbing 🧗</Link>
            <p>
            email me: oliverkwunmorfitt[at]gmail[dot]com
            </p>
          </div>

          <div className="w-full lg:flex-1 flex flex-col space-y-16 lg:pt-40">
            {/* Experience */}
            <div className="w-full flex flex-col space-y-8">
              <div className="">
                <h2 className="text-md italic">Experience</h2>
              </div>
                <Experience
                  title="ML/AI Scientist Intern"
                  company="RBC Borealis"
                  technologies="probably python"
                  description="Learning to build ML at scale."
                  startDate="incoming fall 2026" endDate="present" logo="/rbcborealis.jpg"
                  link="https://rbcborealis.com"
                  />
                <Experience
                  title="Software Engineer Intern"
                  company="NationGraph"
                  technologies="probably python"
                  description=""
                  startDate="incoming winter 2027" endDate="present" logo="/nationgraph_logo.jpeg"
                  link="https://www.nationgraph.com/"
                  />
                <Experience
                  title="Software Engineer Intern"
                  company="propertysearchgpt.ai"
                  technologies="python, fastapi, react, modelling"
                  description="Building out ELT pipeline, improving pricing model accuracy, and improving backend performance."
                  startDate="may 2026" endDate="present" logo="/properscearchgpt.svg"
                  link="https://propertysearchgpt.ai"
                  />
                <Experience
                  title="Infrastructure Developer"
                  company="University of Toronto Machine Intelligence Student Team"
                  technologies="go, docker"
                  description="Building CLI tools allowing remote access to compute."
                  startDate="sep 2025" endDate="may 2026" logo="/utmistlogo.svg"
                  link="https://github.com/UTMIST/Mist"
                  />
                <Experience
                  title="Full-Stack Developer"
                  company="University of Toronto Climbing Club"
                  technologies="next.js, react, tailwindcss"
                  description="Building scalable full-stack web application for the club&apos;s community."
                  startDate="may 2025" endDate="may 2026" logo="/uoftclimbs_logo.jpg"
                  link="/"
                  />
                  <Experience
                  title="Technical Writer &mdash; Applied ML"
                  company="University of Toronto Machine Intelligence Student Team"
                  technologies="python, pytorch, scikit-learn"
                  description="
                  Exploring predictive modeling techniques in trading applications. Published to deMistify.
                  "
                  startDate="sep 2024" endDate="may 2025" logo="/utmistlogo.svg"
                  link="https://medium.com/demistify"
                  />
            </div>

            {/* Projects */}
            <div className="w-full flex flex-col space-y-8  ">
              <div className="">
                <h2 className="text-md italic">Projects</h2>
              </div>
              <Project
                title="Rosetta: NER Model Benchmarking Framework"
                technologies="python, pytorch, transformers, huggingface"
                description="
                ML experimentation infrastructure for Named Entity Recognition on job postings. Benchmarked 8+ models with automated eval harness measuring F1, per-class precision/recall, overfitting gap, inference latency, and confusion patterns. Achieved 51% F1 with distilbert-base-uncased at 3.47ms inference latency.
                "
                year="2025" logo="/utmistlogo.svg"
                link="/proj/rosetta"
              />
              <Project
                title="Mobius: Smart Notetaking App"
                technologies="svelte, typescript, rust, tauri"
                description="
                An open-source notetaking application that uses LLMs to reduce organizational overhead. Features include automated note connections, topic clustering, and intelligent content parsing—all while maintaining a minimalist interface where AI augments the experience in the background.
                "
                year="2026" logo="/utmistlogo.svg"
                link="/proj/mobius"
              />
              <Project
                title="Quill: SQL optimizer using LLMs"
                technologies="python, sqllite, openai"
                description="
                Quill is a SQL query optimizer that leverages ReST^EM to deliver frontier model performance on query optimization tasks. By integrating LLMs into the optimization with QWEN-7B, Quill achieves significant latency reductions while maintaining accuracy.
                "
                year="2025" logo="/utmistlogo.svg"
                link="/proj/quill"
              />
              <Project
                title="parsec: Structured LLM Output Enforcer"
                technologies="python, pydantic"
                description="
                Parsec is a Python SDK that ensures LLM outputs conform to specified structures using Pydantic models. It simplifies prompt engineering by generating structured prompts and validating responses, enhancing reliability in applications like chatbots and data extraction.
                "
                year="2025" logo="/utmistlogo.svg"
                link="/proj/parsec"
              />
              <Project
                title="Realtime Ledger API"
                technologies="go, gorilla/mux, uuid, docker, REST"
                description="
                Minimal double-entry ledger API in Go with balance invariants and a pluggable store. The current build ships an in-memory store and REST endpoints for accounts, balances, journals, and entries.
                "
                year="2025" logo="/utmistlogo.svg"
                link="/proj/ledger"
              />
              <Project
                title="CommonGrounds: Student Discovery Platform"
                technologies="next.js, supabase, fastapi, gemini"
                description="
                A swipe-based discovery platform for students built at UofT Hacks 13. Uses AI-powered embeddings to personalize recommendations as users explore opportunities across two modes: Matcha Mode for hobbies and Coffee Mode for career interests.
                "
                year="2026" logo="/utmistlogo.svg"
                link="/proj/commongrounds"
              />

              <p>Next project ideas include: building out parsec</p>
              <p>Currently projecting climbs on  moonboard, doing school, and <a href="https://leetcode.com/u/olliekm/" target="_blank" rel="noopener noreferrer" className="underline">leetcoding</a>.</p>

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
