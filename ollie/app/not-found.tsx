import Image from "next/image";
import Experience from "@/components/Experience";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-100 w-full min-h-screen h-auto flex justify-center items-center text-black font-serif">
        {/* Title + description */}
        <div className="flex pt-8 flex-col space-y-4 -mt-20">
          <h1 className="text-3xl font-serif">⚠️ Looks like you&apos;re lost...</h1>
            <p className="font-serif text-md">
                The page you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link className="underline" href={"/"}>Go back to homepage</Link>
        </div>
    </div>
  );
}
