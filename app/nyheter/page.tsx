import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nyheter",
  description:
    "Les siste nytt om konkurranser, resultater, trening og klubbmiljøet i Bergen Stupeklubb.",
  alternates: {
    canonical: "/nyheter",
  },
};

const newsTopics = [
  {
    number: "01",
    title: "Konkurranser",
    text: "Resultater, medaljer og opplevelser fra stevner i Norge og utlandet.",
  },
  {
    number: "02",
    title: "Trening og leirer",
    text: "Oppdateringer fra samlinger, treningshverdagen og utviklingen i gruppene.",
  },
  {
    number: "03",
    title: "Klubbmiljøet",
    text: "Menneskene, aktivitetene og øyeblikkene som skaper fellesskapet vårt.",
  },
];

export default function NewsPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate bg-[#06162d] text-white">
        <div className="absolute -left-24 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-28 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Fra klubben
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Nyheter og historier
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Følg utøverne våre, se de siste resultatene og bli bedre kjent
              med livet i Bergen Stupeklubb.
            </p>
          </div>

          <article className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 text-sm font-bold">
                <span className="rounded-full bg-cyan-400 px-4 py-2 text-[#06162d]">
                  Siste nytt
                </span>
                <time dateTime="2025-12-16" className="text-slate-300">
                  16. desember 2025
                </time>
              </div>

              <h2 className="mt-7 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                Historisk innsats i Nordisk mesterskap
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Syv bergenske utøvere markerte seg sterkt i Helsinki med hele
                15 medaljer: åtte gull, tre sølv og fire bronse.
              </p>

              <dl className="mt-8 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-sm text-slate-400">Medaljer</dt>
                  <dd className="mt-1 text-3xl font-black text-cyan-300">15</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-sm text-slate-400">Gull</dt>
                  <dd className="mt-1 text-3xl font-black text-cyan-300">8</dd>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <dt className="text-sm text-slate-400">Utøvere</dt>
                  <dd className="mt-1 text-3xl font-black text-cyan-300">7</dd>
                </div>
              </dl>

              <Link
                href="/nyheter/nordisk-mesterskap-2025"
                className="mt-8 inline-flex w-fit items-center gap-2 font-bold text-white underline decoration-cyan-400 decoration-2 underline-offset-8 transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Les hele saken
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="relative min-h-80 lg:min-h-full">
              <Image
                src="/images/club-community.webp"
                alt="Utøvere fra Bergen Stupeklubb samlet ved bassenget"
                fill
                loading="eager"
                quality={88}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#06162d]/35 lg:to-transparent" />
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#f5f8fc] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Flere saker
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Fra arkivet og aktuelt nå
            </h2>
          </header>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/diving-practice.webp"
                  alt="Stuper i aksjon under en konkurranse"
                  fill
                  quality={88}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-5 top-5 rounded-full bg-[#06162d]/90 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                  Konkurranse
                </span>
              </div>

              <div className="p-7 sm:p-8">
                <time
                  dateTime="2023-12-13"
                  className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700"
                >
                  13. desember 2023
                </time>
                <h3 className="mt-4 text-2xl font-black leading-tight text-[#06162d] sm:text-3xl">
                  Beste klubb i både NM senior og landsfinalen
                </h3>
                <p className="mt-5 leading-7 text-slate-600">
                  Tjue bergensutøvere deltok i Aquarama. Hele laget bidro til
                  at Bergen Stupeklubb gikk til topps i begge konkurransene.
                </p>

                <Link
                  href="/nyheter/beste-klubb-nm-senior-og-landsfinalen"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#06162d] underline decoration-cyan-400 decoration-2 underline-offset-8 transition hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
                >
                  Les hele saken
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="group overflow-hidden rounded-3xl bg-[#06162d] text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/coach-feedback.webp"
                  alt="Trener som veileder en utøver ved bassenget"
                  fill
                  quality={88}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/65 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-[#06162d]">
                  Aktuelt
                </span>
              </div>

              <div className="p-7 sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">
                  Høstsemesteret 2026
                </p>
                <h3 className="mt-4 text-2xl font-black leading-tight sm:text-3xl">
                  Påmeldingen til Stupskolen er åpen
                </h3>
                <p className="mt-5 leading-7 text-slate-300">
                  Nye stupere i alle aldre kan bli kjent med sporten gjennom
                  trygg, tilpasset trening i Ado Arena.
                </p>

                <Link
                  href="/pamelding"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-white underline decoration-cyan-400 decoration-2 underline-offset-8 transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  Gå til påmelding
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <header>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                Hold deg oppdatert
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
                Dette skriver vi om
              </h2>
            </header>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              Nyhetssiden samler de viktigste historiene fra sporten og
              menneskene i klubben.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-slate-200 md:grid-cols-3">
            {newsTopics.map((topic) => (
              <article key={topic.title} className="bg-[#f8fafc] p-7 sm:p-9">
                <p className="text-sm font-black tracking-[0.18em] text-cyan-600">
                  {topic.number}
                </p>
                <h3 className="mt-6 text-2xl font-bold text-[#06162d]">
                  {topic.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{topic.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-400 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/70">
              Se hva som kommer
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
              Konkurranser, leirer og klubbaktiviteter
            </h2>
            <p className="mt-3 text-lg leading-8 text-cyan-950/80">
              Finn kommende aktiviteter og praktisk informasjon på
              arrangementssiden.
            </p>
          </div>

          <Link
            href="/arrangementer"
            className="shrink-0 rounded-full bg-[#06162d] px-8 py-4 text-center font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
          >
            Se hva som skjer
          </Link>
        </div>
      </section>
    </div>
  );
}
