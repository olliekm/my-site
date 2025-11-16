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
            <span className="italic">realtime-ledger</span> is a minimal, high‑integrity double‑entry ledger API written in Go. It focuses on correctness, balance invariants, and a clean domain model while keeping the overall system small and easy to reason about.
          </p>

          <div>
            Key features include:
            <ul className="list-disc list-inside pl-4">
              <li>Strict double‑entry validation (postings must balance per currency)</li>
              <li>Balance safety checks preventing negative account states</li>
              <li>Typed <code>Money</code> model with currency‑aware amounts</li>
              <li>Pluggable storage layer (ships with an in‑memory store)</li>
              <li>Lightweight REST API for accounts, balances, journals, and entries</li>
              <li>Simple static‑token auth for quick testing</li>
            </ul>
          </div>

          <p>
            The goal of the project is to provide a clean reference implementation of a ledger core—small enough to understand end‑to‑end, but strict enough to serve as the foundation for more advanced financial systems. A Postgres‑backed store, idempotency keys, batching semantics, and full OpenAPI coverage are planned extensions.
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
