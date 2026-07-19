import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

export default function NotesIndex() {
  const notes = getAllNotes();
  return (
    <div className="bg-stone-100 w-full min-h-screen flex justify-center text-black font-serif">
      <div className="w-xl lg:w-full lg:max-w-2xl h-full px-6 space-y-12">
        <div className="flex sm:pt-20 pt-8 flex-col space-y-4">
          <Link href="/" className="text-sm">&#8592; Back</Link>
          <h1 className="text-3xl font-serif">Notes</h1>
          <p className="text-sm text-stone-500">{notes.length} notes</p>
        </div>

        <ul className="flex flex-col space-y-3">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link href={`/notes/${note.slug}`} className="hover:underline">
                {note.title}
              </Link>
            </li>
          ))}
        </ul>

        <footer className="py-4 text-sm flex justify-between">
          <p>Oliver Kwun-Morfitt</p>
          <div className="flex space-x-2">
            <a href="https://www.linkedin.com/in/oliver-kwun-morfitt/" target="_blank" rel="noopener noreferrer" className="underline">linkedin</a>
            <a href="https://github.com/olliekm" target="_blank" rel="noopener noreferrer" className="underline">github</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
