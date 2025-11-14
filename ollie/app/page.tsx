import Image from "next/image";
import Experience from "@/components/Experience";

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
            Rock climber who grade chases on the <a href="https://boardstalker.com/climber/14b441fd-0db8-4bd6-9418-24b48a583b6a" target="_blank" rel="noopener noreferrer" className="underline">moonboard 🌙</a> &#40;sent 7 V7s so far&#41; in my free time. Currently climbing around V6-7. Goal of climbing V10 before I graduate.
          </p>

          <p>
          email me: oliverkwunmorfitt[at]gmail[dot]com
          </p>
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

          <p>Thinking of building an NLP calender app. Mapping out system architecture now.</p>
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
