import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-[#06162d] text-white">
      <Image
        src="/images/hero-diver.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#041124]/95 via-[#06162d]/80 to-[#06162d]/45" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Bergen · Ado Arena
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Vil du lære deg å stupe?
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Opplev mestring, utfordringer og et inkluderende treningsmiljø.
            Vi tilbyr stuping for barn, ungdom og voksne.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/pamelding"
              className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-[#06162d] transition hover:bg-cyan-300"
            >
              Meld deg på
            </Link>

            <Link
              href="/bli-medlem"
              className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              Se treningstilbudet
            </Link>
          </div>
        </div>

        <aside className="rounded-3xl border border-white/15 bg-[#06162d]/65 p-7 shadow-2xl backdrop-blur sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            Ny i stuping?
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Stupskole for nybegynnere
          </h2>

          <p className="mt-4 leading-7 text-slate-200">
            På stupskolen lærer du grunnleggende teknikk i trygge omgivelser,
            sammen med erfarne trenere.
          </p>

          <ul className="mt-7 space-y-4 text-slate-100">
            <li className="flex gap-3">
              <span className="font-bold text-cyan-300">✓</span>
              Trygt og inkluderende miljø
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-cyan-300">✓</span>
              Tilpasset alder og nivå
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-cyan-300">✓</span>
              Trening i Ado Arena
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
