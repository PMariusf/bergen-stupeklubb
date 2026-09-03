import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hva skjer?",
  description:
    "Se arrangementer, konkurranser, treningsleirer og aktuelle aktiviteter i Bergen Stupeklubb.",
  alternates: {
    canonical: "/arrangementer",
  },
};

const eventTypes = [
  {
    label: "Stevner",
    title: "Konkurranser",
    text: "Følg klubbens utøvere på lokale, nasjonale og internasjonale stevner gjennom sesongen.",
  },
  {
    label: "Utvikling",
    title: "Treningsleirer",
    text: "Samlinger og leirer gir utøverne nye utfordringer, tett oppfølging og sterke opplevelser sammen.",
  },
  {
    label: "Fellesskap",
    title: "Klubbaktiviteter",
    text: "Avslutninger, samlinger og sosiale aktiviteter skaper minner både i og utenfor bassenget.",
  },
];

const practicalInfo = [
  "Dato, klokkeslett og oppmøtested",
  "Hvilke grupper aktiviteten gjelder for",
  "Påmeldingsfrist og eventuell deltakeravgift",
  "Praktisk informasjon om utstyr og reise",
];

export default function EventsPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate bg-[#06162d] text-white">
        <div className="absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-20 top-0 -z-10 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Kalender og aktiviteter
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Dette skjer i klubben
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Her samler vi påmeldinger, konkurranser, treningsleirer og
              klubbaktiviteter. Nye datoer legges ut når de er bekreftet.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#aktuelt"
                className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Se hva som er aktuelt
              </Link>
              <Link
                href="/nyheter"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Les klubbnyheter
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b315b] shadow-2xl">
            <Image
              src="/images/diving-practice.webp"
              alt="Stuper i aksjon under trening i Ado Arena"
              fill
              loading="eager"
              quality={88}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                  Ado Arena
                </p>
                <p className="mt-2 text-xl font-bold">
                  Trening, mestring og nye opplevelser
                </p>
              </div>
              <span className="hidden rounded-full border border-white/20 bg-[#06162d]/70 px-4 py-2 text-sm font-bold backdrop-blur sm:block">
                Bergen
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="aktuelt" className="scroll-mt-24 bg-[#f5f8fc] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Aktuelt nå
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Påmelding til høstens stupskole
            </h2>
          </header>

          <article className="mt-12 overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
            <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
              <div className="flex min-h-72 flex-col justify-between bg-cyan-400 p-8 text-[#06162d] sm:p-10">
                <div>
                  <span className="inline-flex rounded-full bg-[#06162d] px-4 py-2 text-sm font-bold text-white">
                    Påmelding åpen
                  </span>
                  <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/65">
                    Sesong
                  </p>
                  <p className="mt-2 text-5xl font-black tracking-tight">
                    Høst 2026
                  </p>
                </div>
                <p className="mt-10 font-bold">
                  Stupskole for barn, ungdom og voksne
                </p>
              </div>

              <div className="p-8 sm:p-10 lg:p-14">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                  Ny i stuping?
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
                  Prøv vannets vakreste sport
                </h3>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Stupskolen gir en trygg introduksjon til sporten med fokus på
                  fysisk og mental læring. Treningen tilpasses alder og behov,
                  og foregår sentralt i Bergen.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/pamelding"
                    className="rounded-full bg-[#06162d] px-7 py-4 text-center font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
                  >
                    Gå til påmelding
                  </Link>
                  <Link
                    href="/bli-medlem"
                    className="rounded-full border border-slate-300 px-7 py-4 text-center font-bold text-[#06162d] transition hover:border-cyan-400 hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
                  >
                    Se treningstilbudet
                  </Link>
                  <Link
                    href="/arrangementer/stupskolen-host-2026"
                    className="rounded-full border border-slate-300 px-7 py-4 text-center font-bold text-[#06162d] transition hover:border-cyan-400 hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
                  >
                    Les mer
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <header>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                Gjennom sesongen
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
                Mer enn den vanlige treningen
              </h2>
            </header>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              Aktivitetene rundt treningen gir utøverne mulighet til å utvikle
              seg, møte andre stupere og bli enda bedre kjent med klubbmiljøet.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {eventTypes.map((event, index) => (
              <article
                key={event.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-900">
                    {event.label}
                  </span>
                  <span
                    className="text-3xl font-black text-slate-200 transition group-hover:text-cyan-300"
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold text-[#06162d]">
                  {event.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{event.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#06162d] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Når datoene er klare
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Alt du trenger på ett sted
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Hvert arrangement blir oppdatert med informasjonen utøvere og
              foresatte trenger for å kunne planlegge og delta.
            </p>
          </div>

          <ul className="overflow-hidden rounded-3xl border border-white/15 bg-white/5">
            {practicalInfo.map((item, index) => (
              <li
                key={item}
                className="flex items-center gap-5 border-b border-white/10 p-5 last:border-b-0 sm:p-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-400 font-black text-[#06162d]">
                  {index + 1}
                </span>
                <span className="font-semibold text-slate-100">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#edf5fb] py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Siste høydepunkt
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Historisk innsats i Nordisk mesterskap
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Syv utøvere fra Bergen Stupeklubb tok til sammen 15 medaljer
              under Nordisk mesterskap i Helsinki i desember 2025 — et sterkt
              resultat for hele klubbmiljøet.
            </p>
            <Link
              href="/nyheter/nordisk-mesterskap-2025"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#06162d] underline decoration-cyan-400 decoration-2 underline-offset-8 transition hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
            >
              Les hele saken
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl">
            <Image
              src="/images/club-community.webp"
              alt="Utøvere fra Bergen Stupeklubb samlet ved bassenget"
              fill
              quality={88}
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex gap-3">
              <span className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-black text-[#06162d]">
                15 medaljer
              </span>
              <span className="rounded-full bg-[#06162d]/80 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                7 utøvere
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-400 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/70">
              Lurer du på noe?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
              Spør oss om neste aktivitet
            </h2>
            <p className="mt-3 text-lg leading-8 text-cyan-950/80">
              Vi hjelper deg med informasjon om påmelding, grupper og praktiske
              detaljer.
            </p>
          </div>

          <Link
            href="/kontakt"
            className="shrink-0 rounded-full bg-[#06162d] px-8 py-4 text-center font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
          >
            Kontakt klubben
          </Link>
        </div>
      </section>
    </div>
  );
}
