import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Påmelding",
  description:
    "Meld deg på trening og bli en del av Bergen Stupeklubb gjennom Spond.",
};

const signupSteps = [
  {
    number: "1",
    title: "Lag en Spond-konto",
    text: "Start med å opprette en brukerkonto i Spond.",
  },
  {
    number: "2",
    title: "Velg hvem som skal delta",
    text: "Velg om du melder på deg selv eller et barn.",
  },
  {
    number: "3",
    title: "Fyll inn kontaktinformasjon",
    text: "Legg inn opplysningene klubben trenger, og ta stilling til bildesamtykke.",
  },
  {
    number: "4",
    title: "Vent på godkjenning",
    text: "Klubben behandler registreringen og sender betalingsinformasjon.",
  },
  {
    number: "5",
    title: "Betal halvårsavgiften",
    text: "Når betalingen er registrert, er du klar for trening.",
  },
  {
    number: "6",
    title: "Finn gruppen din",
    text: "Utøverne fordeles etter alder og nivå, slik at treningen passer best mulig.",
  },
];

const offers = [
  {
    title: "Stupskolen",
    text: "Et trygt sted å begynne for deg som ikke har stupt før.",
  },
  {
    title: "Videregående",
    text: "For deg som vil bygge videre på teknikken og utfordre deg selv.",
  },
  {
    title: "Voksne",
    text: "Et sosialt tilbud for voksne som vil lære eller ta opp igjen stuping.",
  },
];

export default function RegistrationPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate bg-[#06162d] text-white">
        <div className="absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Kom i gang
            </p>
            <h1 className="mt-4 max-w-xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Ditt første stup starter her
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Registreringen skjer i Spond. Følg stegene under, så hjelper
              klubben deg videre til riktig gruppe.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://bit.ly/3aiBiXi"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Start registreringen i Spond
              </a>
              <Link
                href="/bli-medlem"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Se treningstilbudet
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b315b] shadow-2xl">
            <Image
              src="/images/hero-diver.webp"
              alt="Stuper i et basseng under trening"
              fill
              loading="eager"
              quality={88}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Spond
              </p>
              <p className="mt-2 text-xl font-bold">
                Én registrering — så finner vi riktig gruppe
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fc] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10 lg:p-12">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-[#06162d]">
                  Påmelding
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">
                  Spond
                </span>
              </div>
              <h2 className="mt-6 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
                Slik registrerer du deg
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Alle medlemmer registreres gjennom Spond. Det gjør det enklere
                for klubben å holde oversikt over grupper, informasjon og
                betaling.
              </p>

              <a
                href="https://bit.ly/3aiBiXi"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#06162d] px-7 py-4 font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
              >
                Åpne Spond
                <span className="ml-2" aria-hidden="true">↗</span>
              </a>
            </article>

            <aside className="rounded-[2rem] bg-cyan-400 p-8 text-[#06162d] sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/65">
                Før du begynner
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Ha dette klart
              </h2>
              <ul className="mt-6 space-y-4 text-lg leading-7">
                <li className="flex gap-3">
                  <span className="font-black" aria-hidden="true">✓</span>
                  Navn og kontaktinformasjon
                </li>
                <li className="flex gap-3">
                  <span className="font-black" aria-hidden="true">✓</span>
                  Om du melder på deg selv eller et barn
                </li>
                <li className="flex gap-3">
                  <span className="font-black" aria-hidden="true">✓</span>
                  Valg om bildesamtykke
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Steg for steg
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Fra registrering til første trening
            </h2>
          </header>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
            {signupSteps.map((step) => (
              <li key={step.number} className="bg-[#f8fafc] p-7 sm:p-9">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#06162d] font-black text-cyan-300">
                  {step.number}
                </span>
                <h3 className="mt-7 text-2xl font-bold text-[#06162d]">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#06162d] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <header>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Finn riktig tilbud
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Hvilken gruppe passer for deg?
              </h2>
            </header>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
              Vi fordeler utøverne etter alder og nivå. Er du usikker, kan du
              registrere deg og ta kontakt med klubben etterpå.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-3">
            {offers.map((offer, index) => (
              <article key={offer.title} className="bg-[#0a213d] p-7 sm:p-9">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-black text-[#06162d]">
                  {index + 1}
                </span>
                <h3 className="mt-7 text-2xl font-bold">{offer.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{offer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf5fb] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 lg:grid-cols-2 lg:px-8">
          <article className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Bildesamtykke
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
              Vi spør alltid før bilder publiseres
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              For medlemmer under 15 år innhentes samtykke fra både barnet og
              foresatte før bilder eller film kan publiseres.
            </p>
            <a
              href="https://www.bergenstupeklubb.no/samtykkeerklring"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 font-bold text-[#06162d] underline decoration-cyan-400 decoration-2 underline-offset-8 transition hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
            >
              Les om bildesamtykke
              <span aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="rounded-3xl bg-cyan-400 p-8 text-[#06162d] sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/65">
              Trenger du hjelp?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Vi hjelper deg videre
            </h2>
            <p className="mt-5 text-lg leading-8 text-cyan-950/80">
              Ta kontakt hvis du er usikker på gruppe, registrering eller hva
              som skjer etter at du har meldt deg på.
            </p>
            <Link
              href="/kontakt"
              className="mt-7 inline-flex rounded-full bg-[#06162d] px-7 py-4 font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
            >
              Kontakt klubben
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
