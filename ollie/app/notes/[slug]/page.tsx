import Link from "next/link";
import { getAllNotes, getNote } from "@/lib/notes";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }));
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = await getNote(slug);
  if (!note) notFound();

  return (
    <div className="bg-stone-100 w-full min-h-screen flex justify-center text-black font-serif">
      <div className="w-xl lg:w-full lg:max-w-2xl h-full px-6 space-y-8">
        <div className="flex sm:pt-20 pt-8 flex-col space-y-4">
          <Link href="/notes" className="text-sm">&#8592; Notes</Link>
          <h1 className="text-3xl font-serif">{note.title}</h1>
        </div>

        <div
          className="blog-content pb-16"
          dangerouslySetInnerHTML={{ __html: note.html }}
        />

        <footer className="py-4 text-sm flex justify-between border-t border-stone-300">
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
