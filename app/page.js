"use client";

import AnimateCardButton from "@/components/AnimateCardButton";

export default function Home() {
  return (
    <main>
      <a
        href="https://fernandohiroshi.vercel.app/"
        className="text-white hover:text-purple-400 ease-in-out duration-300 font-bold fixed right-8 md:right-16 top-8 underline"
        title="Hiroshi portfolio"
      >
        Contact me.
      </a>
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex flex-col justify-center">
        <h1 className="text-white tracking-widest text-center mb-16 text-3xl font-light flex items-center gap-4">
          Hover Me!
        </h1>
        <AnimateCardButton />
      </div>
    </main>
  );
}
{
  /* <AnimateCardButton /> */
}
