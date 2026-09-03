import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sponsing",
  description:
    "Bli samarbeidspartner med Bergen Stupeklubb og bidra til aktivitet, utvikling og idrettsglede.",
  alternates: {
    canonical: "/sponsing",
  },
};

const supportAreas = [
  {
    number: "01",
    title: "Klubbaktivitet",
    text: "Bidra til at flere barn, ungdommer og voksne får et godt treningstilbud og et trygt fellesskap.",
  },
  {
    number: "02",
    title: "Arrangementer",
    text: "Støtt konkurranser og arrangementer som samler stupere, trenere og publikum i Bergen.",
  },
  {
    number: "03",
    title: "Elite",
    text: "Hjelp utøvere på høyt nivå med kostnadene knyttet til reise, samlinger og konkurranser.",
  },
];

const partnershipSteps = [
  {
    number: "1",
    title: "Ta kontakt",
    text: "Fortell litt om virksomheten din og hva dere ønsker å støtte.",
  },
  {
    number: "2",
    title: "Vi finner mulighetene",
    text: "Sammen ser vi på synlighet, aktiviteter og en løsning som passer begge.",
  },
  {
    number: "3",
    title: "Bli en del av laget",
    text: "Som samarbeidspartner blir dere en viktig del av klubbens videre utvikling.",
  },
];

export default function SponsorshipPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate bg-[#06162d] text-white">
        <div className="absolute -left-24 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Samarbeid og støtte
            </p>
            <h1 className="mt-4 max-w-xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Hjelp oss å ta Bergen Stupeklubb til nye høyder
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Med støtte fra gode samarbeidspartnere kan vi skape mer aktivitet,
              utvikle flere utøvere og gi enda flere opplevelsen av å høre til.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="mailto:hovedtrener@bergen-stupeklubb.no?subject=Samarbeid%20med%20Bergen%20Stupeklubb"
                className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Ta kontakt om samarbeid
              </a>
              <Link
                href="/kontakt"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Kontakt klubben
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b315b] shadow-2xl">
            <Image
              src="/images/club-community.webp"
              alt="Utøvere og trenere samlet i Bergen Stupeklubb"
              fill
              loading="eager"
              quality={88}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Et lag rundt laget
              </p>
              <p className="mt-2 text-xl font-bold">
                En sponsor er en del av familien
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fc] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Hvor støtten gjør en forskjell
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Sammen skaper vi flere muligheter
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Uansett om dere ønsker å støtte bredden, arrangementene eller
              elitesatsingen, går bidraget direkte til aktivitet i klubben.
            </p>
          </header>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {supportAreas.map((area) => (
              <article
                key={area.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg sm:p-8"
              >
                <p className="text-sm font-black tracking-[0.18em] text-cyan-600">
                  {area.number}
                </p>
                <h3 className="mt-6 text-2xl font-bold text-[#06162d]">
                  {area.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{area.text}</p>
                <div className="mt-7 h-1 w-12 rounded-full bg-cyan-400 transition-all group-hover:w-20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl">
            <Image
              src="/images/coach-feedback.webp"
              alt="Trener som følger opp en utøver ved stupebassenget"
              fill
              quality={88}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06162d]/80 to-transparent px-7 pb-7 pt-20 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Langsiktig samarbeid
              </p>
              <p className="mt-2 text-xl font-bold">
                Synlighet med mening
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              En avtale som passer
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Vi tilpasser samarbeidet sammen med deg
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Vi tilbyr pakker og avtaler som kan tilpasses virksomhetens
              ønsker. Det kan handle om synlighet rundt arrangementer, støtte
              til felleskassen eller et målrettet bidrag til eliteutøverne.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Synlighet som passer virksomheten deres",
                "Et tydelig bidrag til aktivitet i Bergen",
                "Et samarbeid med mennesker og historier å heie på",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-lg text-slate-700">
                  <span className="font-bold text-cyan-600" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="mailto:hovedtrener@bergen-stupeklubb.no?subject=Samarbeid%20med%20Bergen%20Stupeklubb"
              className="mt-9 inline-flex rounded-full bg-[#06162d] px-7 py-4 font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
            >
              Be om mer informasjon
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#06162d] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <header>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                Slik starter vi
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Tre enkle steg til et godt samarbeid
              </h2>
            </header>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
              Vi ønsker en god dialog fra første melding, slik at samarbeidet
              blir tydelig, relevant og nyttig for begge parter.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-3">
            {partnershipSteps.map((step) => (
              <article key={step.number} className="bg-[#0a213d] p-7 sm:p-9">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-black text-[#06162d]">
                  {step.number}
                </span>
                <h3 className="mt-7 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-400 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/70">
              Vil dere bli med?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
              Bli en av våre støttespillere
            </h2>
            <p className="mt-3 text-lg leading-8 text-cyan-950/80">
              Send oss en melding, så forteller vi mer om mulighetene.
            </p>
          </div>

          <a
            href="mailto:hovedtrener@bergen-stupeklubb.no?subject=Samarbeid%20med%20Bergen%20Stupeklubb"
            className="shrink-0 rounded-full bg-[#06162d] px-8 py-4 text-center font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
          >
            Ta kontakt
          </a>
        </div>
      </section>
    </div>
  );
}
