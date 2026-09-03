import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt oss",
  description:
    "Ta kontakt med Bergen Stupeklubb om trening, medlemskap, påmelding og aktiviteter.",
  alternates: {
    canonical: "/kontakt",
  },
};

const helpTopics = [
  {
    number: "01",
    title: "Trening og grupper",
    text: "Lurer du på hvilket tilbud eller hvilken gruppe som passer best? Vi hjelper deg å finne riktig nivå.",
  },
  {
    number: "02",
    title: "Medlemskap og påmelding",
    text: "Få svar på spørsmål om medlemskap, Stupskolen og hvordan du kommer i gang.",
  },
  {
    number: "03",
    title: "Klubben og aktiviteter",
    text: "Ta kontakt om konkurranser, treningsleirer, tilrettelegging eller andre klubbspørsmål.",
  },
];

export default function ContactPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate bg-[#06162d] text-white">
        <div className="absolute -left-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-20 top-0 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Vi hjelper deg
            </p>
            <h1 className="mt-4 max-w-xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Har du spørsmål? Ta kontakt.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Enten du er nysgjerrig på stuping, trenger hjelp med påmelding
              eller allerede er en del av klubben, er du velkommen til å ta
              kontakt.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hovedtrener@bergen-stupeklubb.no"
                className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Send en e-post
              </a>
              <a
                href="tel:+4793299995"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Ring +47 932 99 995
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b315b] shadow-2xl">
            <Image
              src="/images/coach-feedback.webp"
              alt="Trener som snakker med en utøver ved stupebassenget"
              fill
              loading="eager"
              quality={88}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Bergen Stupeklubb
              </p>
              <p className="mt-2 text-xl font-bold">
                Vi gleder oss til å høre fra deg
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fc] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                Direkte kontakt
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
                Snakk med hovedtreneren
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Paul Joachim Bloch Thorsen har det daglige ansvaret for
                treninger, trenerteamet og ukeplanen. Han formidler spørsmål
                om økonomi og andre saker videre til riktig person i klubben.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <a
                  href="mailto:hovedtrener@bergen-stupeklubb.no"
                  className="group rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-300 hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">
                    E-post
                  </p>
                  <p className="mt-2 break-words font-bold text-[#06162d] group-hover:text-cyan-800">
                    hovedtrener@bergen-stupeklubb.no
                  </p>
                </a>
                <a
                  href="tel:+4793299995"
                  className="group rounded-2xl border border-slate-200 p-5 transition hover:border-cyan-300 hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">
                    Telefon
                  </p>
                  <p className="mt-2 font-bold text-[#06162d] group-hover:text-cyan-800">
                    +47 932 99 995
                  </p>
                </a>
              </div>
            </article>

            <div className="rounded-[2rem] bg-[#06162d] p-8 text-white shadow-sm sm:p-10 lg:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Før du tar kontakt
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Vi svarer så godt vi kan
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Hovedtreneren er tilgjengelig utenom ordinær arbeidstid og kan
                også svare på spørsmål før eller under trening når det passer.
              </p>

              <div className="mt-8 border-t border-white/15 pt-7">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">
                  Lurer du på noe helt konkret?
                </p>
                <p className="mt-3 leading-7 text-slate-300">
                  Skriv gjerne hva du trenger hjelp med, hvilken gruppe det
                  gjelder og hvordan vi best kan nå deg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Hva gjelder det?
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Vi kan hjelpe deg med
            </h2>
          </header>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {helpTopics.map((topic) => (
              <article
                key={topic.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg sm:p-8"
              >
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

      <section className="bg-[#edf5fb] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
            <div className="grid lg:grid-cols-[1fr_0.72fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                  Besøk oss
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
                  Vi trener i Ado Arena
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Du finner Bergen Stupeklubb sentralt i Bergen. Vi er
                  tilgjengelige rett før og under treningstidene våre.
                </p>

                <address className="mt-8 not-italic">
                  <p className="text-xl font-bold text-[#06162d]">Ado Arena</p>
                  <p className="mt-2 text-lg leading-8 text-slate-600">
                    Lungegårdskaien 40
                    <br />
                    5015 Bergen
                  </p>
                </address>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ado+Arena%2C+Lungeg%C3%A5rdskaien+40%2C+5015+Bergen"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full bg-[#06162d] px-7 py-4 font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
                >
                  Åpne i Google Maps
                </a>
              </div>

              <div className="flex min-h-80 flex-col justify-between bg-cyan-400 p-8 text-[#06162d] sm:p-12 lg:p-14">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/65">
                    Praktisk
                  </p>
                  <p className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                    Kom innom
                  </p>
                  <p className="mt-4 max-w-xs text-lg font-bold leading-7">
                    Har du spørsmål, finner du oss ofte ved bassenget før
                    eller under trening.
                  </p>
                </div>

                <Link
                  href="/arrangementer"
                  className="mt-10 w-fit rounded-full bg-[#06162d] px-7 py-4 font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
                >
                  Se hva som skjer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cyan-400 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/70">
              Klar for å begynne?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
              Finn ditt neste stup
            </h2>
            <p className="mt-3 text-lg leading-8 text-cyan-950/80">
              Se treningstilbudet eller send oss en melding hvis du er usikker
              på hva som passer.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/bli-medlem"
              className="rounded-full bg-[#06162d] px-8 py-4 text-center font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
            >
              Se treningstilbudet
            </Link>
            <a
              href="mailto:hovedtrener@bergen-stupeklubb.no"
              className="rounded-full border border-[#06162d]/30 px-8 py-4 text-center font-bold text-[#06162d] transition hover:border-[#06162d] hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
            >
              Send e-post
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
