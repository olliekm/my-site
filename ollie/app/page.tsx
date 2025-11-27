import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-100 w-full h-auto flex justify-center text-black font-serif">
      <div className="w-xl h-full px-6 space-y-16">
        {/* Title + description */}
        <div className="w-full flex sm:pt-20 pt-8 flex-col space-y-4">
          <h1 className="text-3xl font-serif">Oliver Kwun-Morfitt</h1>
          <div className="flex space-x-2">
            <a href="https://www.linkedin.com/in/oliver-kwun-morfitt/" target="_blank" rel="noopener noreferrer" className="underline">linkedin</a>
            <a href="https://github.com/olliekm" target="_blank" rel="noopener noreferrer" className="underline">github</a>
            <a href="https://github.com/olliekm/Resume/blob/main/oliverkm_resume.pdf" target="_blank" rel="noopener noreferrer" className="underline">resume</a>
          </div>
          <p className="font-serif text-md">
            I&apos;m a student at UofT studying <span className="italic">Computer Science</span> and <span className="italic">Statistics</span>.
          </p>
          <p className="font-serif text-md">
            I like building scalable systems for inference. I&apos;m currently interested in building distributed systems for large language models and RL agents. 
          </p>
          <p className="font-serif text-md">
            Rock climber who grade chases on the <a href="https://boardstalker.com/climber/14b441fd-0db8-4bd6-9418-24b48a583b6a" target="_blank" rel="noopener noreferrer" className="underline">moonboard 🌙</a> &#40;sent 7 V7s so far&#41; in my free time. Currently climbing around V7 level. Goal of climbing V10 before I graduate.
          </p>
          <Link href={'/climbing'} className="italic text-sm">video of me climbing 🧗</Link>
          <p>
          email me: oliverkwunmorfitt[at]gmail[dot]com
          </p>
          <a
            href="https://parsec.olliekm.com"
            target="_blank"
            className="group relative block px-8 py-3 rounded-2xl overflow-hidden w-fit"
            style={{
              backgroundImage: `url('/grad.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <span className="relative z-10 text-white font-medium font-sans">Check out <span className="font-bold group-hover:underline">parsec</span></span>
          </a>
        </div>

        {/* Experience */}
        <div className="w-full flex flex-col space-y-8">
          <div className="">
            <h2 className="text-md italic">Experience</h2>
          </div>
            <Experience 
              title="Infrastructure Developer" 
              company="University of Toronto Machine Intelligence Student Team" 
              technologies="go, docker"
              description="Building CLI tools allowing remote access to compute." 
              startDate="sep 2025" endDate="present" logo="/utmistlogo.svg" 
              link="https://github.com/UTMIST/Mist"
              />
            <Experience 
              title="Full-Stack Developer" 
              company="University of Toronto Climbing Club" 
              technologies="next.js, react, tailwindcss"
              description="Building scalable full-stack web application for the club&apos;s community." 
              startDate="may 2025" endDate="present" logo="/uoftclimbs_logo.jpg" 
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


          <p>Next project ideas include: building out parsec</p>
          <p>Currently projecting climbs on  moonboard, doing school, and <a href="https://leetcode.com/u/olliekm/" target="_blank" rel="noopener noreferrer" className="underline">leetcoding</a>.</p>

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
