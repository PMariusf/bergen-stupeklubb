import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[65vh] items-center overflow-hidden bg-[#06162d] py-20 text-white">
      <div className="absolute -left-24 top-12 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
          Feil 404
        </p>
        <h1 className="mt-4 max-w-3xl text-5xl font-black tracking-tight sm:text-6xl">
          Denne siden tok et stup
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Vi finner ikke siden du leter etter. Gå tilbake til forsiden eller se
          treningstilbudet vårt.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Gå til forsiden
          </Link>
          <Link
            href="/bli-medlem"
            className="rounded-full border border-white/30 px-7 py-4 text-center font-bold transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Se treningstilbudet
          </Link>
        </div>
      </div>
    </section>
  );
}
