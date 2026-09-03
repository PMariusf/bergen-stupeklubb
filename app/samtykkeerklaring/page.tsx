import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Samtykkeerklæring",
  description:
    "Informasjon om samtykke til publisering av bilder og film i Bergen Stupeklubb.",
  alternates: {
    canonical: "/samtykkeerklaring",
  },
};

const guidelines = [
  {
    title: "Innhent samtykke først",
    text: "Alle som kan identifiseres i et bilde eller en film skal ha samtykket før materialet publiseres. For barn under 15 år skal både barnet og foresatte samtykke.",
  },
  {
    title: "Samtykket skal være aktivt",
    text: "Bruk et tydelig samtykke der personen selv velger ja. Manglende svar regnes ikke som tillatelse.",
  },
  {
    title: "Barnets ønske veier tyngst",
    text: "Hvis et barn ikke ønsker at et bilde eller en film skal publiseres, skal dette respekteres selv om foresatte har samtykket.",
  },
  {
    title: "Vurder situasjonen",
    text: "Vær varsom med hvilke situasjoner som fotograferes, særlig når barn er lettkledd. Unngå unødvendig bruk av fullt navn.",
  },
  {
    title: "Avklar hver publisering",
    text: "Samtykke må også avklares når innhold deles i lukkede grupper eller på passordbeskyttede nettsider.",
  },
  {
    title: "Samtykke kan trekkes tilbake",
    text: "Dersom et samtykke trekkes tilbake, skal publiserte bilder og filmer fjernes.",
  },
];

export default function ConsentPage() {
  return (
    <div className="bg-white">
      <section className="relative isolate overflow-hidden bg-[#06162d] text-white">
        <div className="absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Bildesamtykke
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Samtykke til bilder og film
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-200">
              Vi tar bilder fra treninger og arrangementer for å vise frem
              aktivitet og idrettsglede. Ingen identifiserbare bilder
              publiseres uten samtykke.
            </p>
          </header>

          <aside className="rounded-3xl border border-white/15 bg-[#0a213d] p-7 shadow-2xl sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
              Kort fortalt
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              Utøveren skal alltid bli hørt
            </h2>
            <p className="mt-4 leading-7 text-slate-200">
              Utøvere over 15 år avgjør selv. For barn under 15 år innhenter
              klubben samtykke fra både barnet og foresatte.
            </p>
          </aside>
        </div>
      </section>

      <main>
        <section className="bg-[#f5f8fc] py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Trygg bildedeling
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Respekt for personvern
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Barn og unge har rett til privatliv. Noen kan ha særlige
                grunner til at de ikke ønsker å bli fotografert eller
                identifisert på nett. Derfor spør vi alltid før bilder tas og
                deles.
              </p>
              <p>
                Retningslinjene nedenfor gjelder bilder og film som brukes på
                nettsiden, i sosiale medier, i medlemsinformasjon og i andre
                publikasjoner knyttet til klubben.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <header className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                Retningslinjer
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
                Seks prinsipper for publisering
              </h2>
            </header>

            <ol className="mt-12 grid gap-6 md:grid-cols-2">
              {guidelines.map((guideline, index) => (
                <li
                  key={guideline.title}
                  className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 sm:p-8"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-black text-[#06162d]">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 text-2xl font-bold text-[#06162d]">
                    {guideline.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {guideline.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-cyan-400 py-16">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
            <div className="max-w-2xl text-[#06162d]">
              <p className="text-sm font-bold uppercase tracking-[0.2em]">
                Spørsmål eller tilbaketrekking
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Ta kontakt med klubben
              </h2>
              <p className="mt-4 text-lg leading-8">
                Kontakt oss dersom du har spørsmål eller ønsker å trekke
                tilbake et tidligere samtykke.
              </p>
            </div>
            <Link
              href="/kontakt"
              className="shrink-0 rounded-full bg-[#06162d] px-7 py-4 text-center font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
            >
              Kontakt oss
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
