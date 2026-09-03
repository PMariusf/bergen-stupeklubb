import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import RegistrationForm from "./RegistrationForm";

export const metadata: Metadata = {
  title: "Påmelding",
  description:
    "Send interesse for trening og finn et tilbud som passer i Bergen Stupeklubb.",
  alternates: {
    canonical: "/pamelding",
  },
};

const signupSteps = [
  {
    number: "1",
    title: "Fyll ut skjemaet",
    text: "Fortell hvem som vil delta, og hvilket tilbud som virker mest aktuelt.",
  },
  {
    number: "2",
    title: "Vi tar kontakt",
    text: "Klubben går gjennom opplysningene og hjelper deg med å finne riktig nivå.",
  },
  {
    number: "3",
    title: "Start treningen",
    text: "Du får informasjon om gruppe, treningstid og det du trenger før oppstart.",
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
              Fyll ut skjemaet, så har vi grunnlaget for å finne gruppen som
              passer alder, erfaring og mål.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#pameldingsskjema"
                className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-[#06162d] transition hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Fyll ut skjemaet
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
                Påmelding
              </p>
              <p className="mt-2 text-xl font-bold">
                Én registrering — så finner vi riktig gruppe
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pameldingsskjema"
        className="scroll-mt-24 bg-[#f5f8fc] py-20 sm:py-28"
      >
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <header className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Påmeldingsskjema
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Fortell oss hvem som vil stupe
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Du kan bygge og teste hele siden nå. Skjemaet sender ikke data før
              vi kobler det til en sikker løsning senere.
            </p>
          </header>

          <RegistrationForm />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Steg for steg
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Fra påmelding til første trening
            </h2>
          </header>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-slate-200 md:grid-cols-3">
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
              Vi fordeler utøverne etter alder og nivå. Velg «Jeg er usikker» i
              skjemaet hvis du ønsker hjelp til å finne riktig gruppe.
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
              Personvern
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
              Ingen opplysninger lagres ennå
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Denne versjonen tester bare skjemaet i nettleseren. Når
              innsendingen kobles til, legger vi også inn sikker lagring og en
              tydelig personverntekst.
            </p>
            <Link
              href="/samtykkeerklaring"
              className="mt-7 inline-flex items-center gap-2 font-bold text-cyan-800 underline decoration-cyan-300 decoration-2 underline-offset-4 transition hover:text-cyan-600"
            >
              Les om samtykke til bilder og film
              <span aria-hidden="true">→</span>
            </Link>
          </article>

          <article className="rounded-3xl bg-cyan-400 p-8 text-[#06162d] sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/65">
              Trenger du hjelp?
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Vi hjelper deg videre
            </h2>
            <p className="mt-5 text-lg leading-8 text-cyan-950/80">
              Ta kontakt hvis du er usikker på gruppe, påmelding eller hva som
              skjer etter at du har meldt interesse.
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
