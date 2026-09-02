import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bli medlem",
  description:
    "Les om stupskolen, treningene og hvordan du blir medlem i Bergen Stupeklubb.",
};

const trainingSteps = [
  {
    number: "01",
    title: "Oppvarming",
    text: "Treningen begynner med omtrent 20 minutter oppvarming i lett treningstøy.",
  },
  {
    number: "02",
    title: "Tørrtrening",
    text: "Deretter trener vi basisøvelser på trampoline, sprettgulv, tørrsvikt, matter eller i skumgrop.",
  },
  {
    number: "03",
    title: "Stuptrening",
    text: "Til slutt går gruppen i bassenget og utvikler stupene steg for steg fra trygge, lave høyder.",
  },
];

const practicalItems = [
  {
    title: "Alder",
    text: "Stupskolen har tilbud fra 4 år og oppover. Det finnes ingen øvre aldersgrense.",
  },
  {
    title: "Treningstid",
    text: "En trening varer i 1,5 time. Det er mulig å trene én eller flere ganger i uken, mandag til torsdag.",
  },
  {
    title: "Ta med",
    text: "Shorts og t-skjorte til tørrtreningen, badedrakt eller badeshorts, håndkle og vanlig bassengutstyr.",
  },
  {
    title: "Treningssted",
    text: "All trening foregår i Ado Arena, Lungegårdskaien 40, sentralt i Bergen.",
  },
];

export default function MembershipPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate bg-[#06162d] text-white">
        <div className="absolute inset-0 -z-20 bg-[#06162d]" />
        <div className="absolute -left-32 top-10 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Bli medlem
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Din første stupetime starter her
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Du trenger ingen tidligere erfaring. På stupskolen lærer du
              grunnleggende teknikk i et trygt miljø, med trenere som hjelper
              deg videre på ditt nivå.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/pamelding"
                className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Meld interesse
              </Link>
              <a
                href="https://club.spond.com/landing/courses/bergenstupeklubb"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Se kurs og priser i Spond
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b315b] shadow-2xl">
            <Image
              src="/images/diving-practice.webp"
              alt="Stuper i luften under trening i Ado Arena"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06162d]/90 to-transparent px-6 pb-6 pt-20">
              <p className="font-bold">Stupskolen i Ado Arena</p>
              <p className="mt-1 text-sm text-slate-200">
                For nybegynnere og videregående stupere
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fc] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Stupskolen
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Fra nybegynner til konkurransestuper
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Stupskolen er grunnopplæringen for alle stupere og består av ni
              nivåer. Vi setter sammen stabile grupper og anbefaler gruppebytte
              når det gir bedre trygghet, mestring og utvikling.
            </p>
          </header>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 font-black text-[#06162d]">
                1
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#06162d]">
                Nybegynnerkurs
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                For deg som ikke har gått på stupskole tidligere. Det første
                semesteret handler om å bli trygg i anlegget og lære
                grunnleggende bevegelser og stup.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span className="font-bold text-cyan-600" aria-hidden="true">
                    ✓
                  </span>
                  Ingen tidligere erfaring nødvendig
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-cyan-600" aria-hidden="true">
                    ✓
                  </span>
                  Vi begynner på lave høyder
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-cyan-600" aria-hidden="true">
                    ✓
                  </span>
                  Fokus på trygghet og mestring
                </li>
              </ul>
            </article>

            <article className="rounded-3xl bg-[#06162d] p-7 text-white shadow-sm sm:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400 font-black text-[#06162d]">
                9
              </div>
              <h3 className="mt-6 text-2xl font-bold">
                Videregående kurs
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                For deg som allerede har fullført minst ett semester på
                stupskolen. De ni nivåene gir en tydelig vei videre mot mer
                avanserte stup og konkurransetrening.
              </p>
              <ul className="mt-6 space-y-3 text-slate-200">
                <li className="flex gap-3">
                  <span className="font-bold text-cyan-300" aria-hidden="true">
                    ✓
                  </span>
                  Videre utvikling av teknikk
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-cyan-300" aria-hidden="true">
                    ✓
                  </span>
                  Progresjon tilpasset utøveren
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-cyan-300" aria-hidden="true">
                    ✓
                  </span>
                  Mulighet for konkurranseutvikling
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <header>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                Slik foregår treningen
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
                Trygg progresjon steg for steg
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Vi kombinerer trening på land og i vann. Ingen går på tre meter
                eller høyere før de er trygge på kantbrett, minisvikt eller én
                meter.
              </p>
            </header>

            <ol className="space-y-5">
              {trainingSteps.map((step) => (
                <li
                  key={step.number}
                  className="grid gap-4 rounded-3xl border border-slate-200 p-6 sm:grid-cols-[4rem_1fr] sm:items-start sm:p-8"
                >
                  <span className="text-2xl font-black text-cyan-600">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#06162d]">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-[#edf5fb] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Praktisk informasjon
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Dette trenger du å vite
            </h2>
          </header>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {practicalItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl bg-white p-7 shadow-sm sm:p-8"
              >
                <h3 className="text-xl font-bold text-[#06162d]">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-200 bg-cyan-50 p-7 sm:p-8">
            <h3 className="text-xl font-bold text-[#06162d]">
              Tilrettelegging og viktig informasjon
            </h3>
            <p className="mt-3 max-w-4xl leading-7 text-slate-700">
              Klubben ønsker at alle skal føle seg velkommen. I
              påmeldingsskjemaet kan du opplyse om behov eller utfordringer
              trenerne bør kjenne til, slik at treningen kan tilpasses best
              mulig.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cyan-400 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/70">
              Klar for stupskolen?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
              Finn kurset som passer for deg
            </h2>
            <p className="mt-3 text-lg leading-8 text-cyan-950/80">
              Meld interesse, så kan klubben hjelpe deg videre til riktig gruppe.
            </p>
          </div>

          <Link
            href="/pamelding"
            className="shrink-0 rounded-full bg-[#06162d] px-8 py-4 text-center font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
          >
            Gå til påmelding
          </Link>
        </div>
      </section>
    </div>
  );
}
