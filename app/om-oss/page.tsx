import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Bli kjent med Bergen Stupeklubb, fellesskapet vårt og treningsmiljøet i Ado Arena.",
};

const values = [
  {
    number: "01",
    title: "Mestring",
    text: "Vi bygger ferdigheter steg for steg, slik at hver utøver får oppleve fremgang og tør å prøve noe nytt.",
  },
  {
    number: "02",
    title: "Trygg utvikling",
    text: "God veiledning og tilpasset progresjon gjør det mulig å utfordre seg selv i trygge omgivelser.",
  },
  {
    number: "03",
    title: "Fellesskap",
    text: "Vi vil at utøvere, trenere og familier skal trives og føle at de hører til i klubben.",
  },
];

const groups = [
  {
    title: "Helt ny",
    text: "Stupskolen gir en trygg og morsom introduksjon til grunnleggende stupteknikk.",
  },
  {
    title: "Hobbystuper",
    text: "For deg som vil utvikle deg, holde deg aktiv og ha det gøy sammen med andre.",
  },
  {
    title: "Konkurranse og elite",
    text: "Målrettet trening for utøvere som ønsker å konkurrere og utvikle seg på høyt nivå.",
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate bg-[#06162d] text-white">
        <div className="absolute -left-32 top-16 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Bergen Stupeklubb
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Et klubbmiljø med plass til alle
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Vi samler barn, ungdom og voksne som vil oppleve mestring,
              utfordringer og idrettsglede — fra det aller første stupet til
              konkurranser på høyt nivå.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/bli-medlem"
                className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Bli en del av klubben
              </Link>
              <Link
                href="/trenere"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Møt trenerne
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b315b] shadow-2xl">
            <Image
              src="/images/club-community.webp"
              alt="Utøvere og trenere samlet i klubbmiljøet"
              fill
              loading="eager"
              quality={88}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/75 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-bold">
              Sammen skaper vi trygghet, utvikling og idrettsglede
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fc] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Derfor stuper vi
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Stuping er mer enn en sport
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Stuping utfordrer både kroppen og hodet. Med riktig progresjon
              lærer utøverne å møte spenning, stole på egne ferdigheter og
              oppleve ekte mestring.
            </p>
          </header>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg sm:p-8"
              >
                <p className="text-sm font-black tracking-[0.18em] text-cyan-600">
                  {value.number}
                </p>
                <h3 className="mt-6 text-2xl font-bold text-[#06162d]">
                  {value.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">{value.text}</p>
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
                Om teamet
              </p>
              <p className="mt-2 text-xl font-bold">
                Engasjerte mennesker med et felles mål
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Om klubben
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Vi utvikler mennesker — ikke bare stupere
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Det norske stupemiljøet er lite og sammensveiset. I Bergen
              Stupeklubb møtes mennesker med ulike mål: noen vil prøve stuping
              for første gang, andre trener som hobby, og noen satser mot
              konkurranser.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Felles for oss er ønsket om at alle skal trives. Trenerne,
              utøverne og familiene rundt laget bidrar til et miljø der vi
              heier på hverandre og deler både små og store øyeblikk.
            </p>

            <Link
              href="/trenere"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#06162d] underline decoration-cyan-400 decoration-2 underline-offset-8 transition hover:text-cyan-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600"
            >
              Bli kjent med trenerteamet
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#06162d] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <header>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
                For alle nivåer
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                En plass i klubben, uansett ambisjon
              </h2>
            </header>
            <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
              Det skal være rom for både lek, læring og målrettet satsing.
              Tilbudene våre gjør det mulig å finne en gruppe som passer
              erfaringen og målene dine.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-white/15 md:grid-cols-3">
            {groups.map((group, index) => (
              <article key={group.title} className="bg-[#0a213d] p-7 sm:p-9">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 font-black text-[#06162d]">
                  {index + 1}
                </span>
                <h3 className="mt-7 text-2xl font-bold">{group.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{group.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf5fb] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                  Her trener vi
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
                  Hjemme i Ado Arena
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Ado Arena åpnet i 2014, og Bergen Stupeklubb har trent her
                  siden starten. Det moderne anlegget gir oss gode fasiliteter,
                  god plass og høyden vi trenger for å utvikle stupere på alle
                  nivåer.
                </p>
                <address className="mt-7 not-italic">
                  <p className="font-bold text-[#06162d]">Ado Arena</p>
                  <p className="mt-1 text-slate-600">
                    Lungegårdskaien 40, 5015 Bergen
                  </p>
                </address>
              </div>

              <div className="flex min-h-80 flex-col justify-between bg-cyan-400 p-8 text-[#06162d] sm:p-12 lg:p-14">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/65">
                    Midt i Bergen
                  </p>
                  <p className="mt-5 text-7xl font-black tracking-tight sm:text-8xl">
                    2014
                  </p>
                  <p className="mt-3 max-w-xs text-lg font-bold leading-7">
                    Året Ado Arena åpnet og ble klubbens treningsbase.
                  </p>
                </div>
                <Link
                  href="/kontakt"
                  className="mt-12 w-fit rounded-full bg-[#06162d] px-7 py-4 font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
                >
                  Finn frem til oss
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
              Klar for å prøve?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
              Det første stupet starter her
            </h2>
            <p className="mt-3 text-lg leading-8 text-cyan-950/80">
              Se treningstilbudet og finn gruppen som passer for deg eller
              barnet ditt.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/bli-medlem"
              className="rounded-full bg-[#06162d] px-8 py-4 text-center font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
            >
              Bli medlem
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border border-[#06162d]/30 px-8 py-4 text-center font-bold text-[#06162d] transition hover:border-[#06162d] hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
