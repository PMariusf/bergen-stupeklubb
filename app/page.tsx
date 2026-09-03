import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const offers = [
  {
    title: "Barn",
    text: "Lek, trygghet og grunnleggende stupeteknikk i grupper tilpasset alder og nivå.",
  },
  {
    title: "Ungdom",
    text: "Utvikle teknikk, styrke og selvtillit sammen med andre som liker utfordringer.",
  },
  {
    title: "Voksne",
    text: "Lær å stupe eller bygg videre på ferdighetene dine i et sosialt treningsmiljø.",
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate min-h-[calc(100svh-7.5rem)] overflow-hidden bg-[#06162d] text-white">
        <Image
          src="/images/diving-practice.webp"
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          quality={75}
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#041124]/82 via-[#06162d]/58 to-[#06162d]/25" />

        <div className="mx-auto grid min-h-[calc(100svh-7.5rem)] max-w-[96rem] items-center gap-5 px-5 py-20 lg:grid-cols-[1.35fr_0.65fr] lg:gap-24 lg:px-8 xl:gap-70">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Bergen · Ado Arena
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Vil du lære deg 
              å stupe?
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
              Opplev mestring, utfordringer og et inkluderende treningsmiljø.
              Vi tilbyr stuping for barn, ungdom og voksne.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/pamelding"
                className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Meld deg på
              </Link>

              <Link
                href="/bli-medlem"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Se treningstilbudet
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/15 bg-[#06162d]/65 p-7 shadow-2xl backdrop-blur sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
              Ny i stuping?
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Stupskole for nybegynnere
            </h2>

            <p className="mt-4 leading-7 text-slate-200">
              På stupskolen lærer du grunnleggende teknikk i trygge omgivelser,
              sammen med erfarne trenere.
            </p>

            <ul className="mt-7 space-y-4 text-slate-100">
              <li className="flex gap-3">
                <span className="font-bold text-cyan-300" aria-hidden="true">✓</span>
                Trygt og inkluderende miljø
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-cyan-300" aria-hidden="true">✓</span>
                Tilpasset alder og nivå
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-cyan-300" aria-hidden="true">✓</span>
                Trening i Ado Arena
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-slate-200 shadow-xl">
            <Image
              src="/images/club-community.webp"
              alt="Utøvere og trenere samlet ved stupebassenget"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Mer enn en idrett
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Et miljø med plass til alle
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I Bergen Stupeklubb skal du kunne kjenne på mestring, enten du
              prøver stuping for første gang eller trener mot konkurranser.
              Trenerne våre følger deg opp og hjelper deg videre i ditt tempo.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="border-l-4 border-cyan-400 pl-5">
                <h3 className="font-bold text-[#06162d]">Trygg utvikling</h3>
                <p className="mt-1 leading-7 text-slate-600">
                  Trening tilpasset alder, nivå og mål.
                </p>
              </div>
              <div className="border-l-4 border-cyan-400 pl-5">
                <h3 className="font-bold text-[#06162d]">Godt fellesskap</h3>
                <p className="mt-1 leading-7 text-slate-600">
                  Et sosialt miljø både i og utenfor bassenget.
                </p>
              </div>
            </div>

            <Link
              href="/om-oss"
              className="mt-9 inline-flex items-center gap-2 font-bold text-cyan-800 underline decoration-cyan-300 decoration-2 underline-offset-4 transition hover:text-cyan-600"
            >
              Bli kjent med klubben
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#edf5fb] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Trening i Ado Arena
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Fra første hopp til nye mål
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Vi bygger ferdigheter steg for steg, med tydelig veiledning og
              øvelser som gir både utfordring og mestring.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/coach-feedback.webp"
                  alt="Trener som gir tilbakemelding ved stupebassenget"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 sm:p-9">
                <h3 className="text-2xl font-bold text-[#06162d]">
                  Erfarne og engasjerte trenere
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Du får konkrete tilbakemeldinger og støtte til å utvikle god
                  teknikk på en trygg måte.
                </p>
                <Link
                  href="/trenere"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-800 hover:text-cyan-600"
                >
                  Møt trenerne
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-[#06162d] text-white shadow-sm">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/hero-diver.webp"
                  alt="Stuptrening i Ado Arena"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7 sm:p-9">
                <h3 className="text-2xl font-bold">
                  Trening for flere ambisjonsnivåer
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  Fra stupskole til videregående grupper finner vi et tilbud som
                  passer erfaringen og målene dine.
                </p>
                <Link
                  href="/bli-medlem"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-cyan-300 hover:text-cyan-200"
                >
                  Se treningstilbudet
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Finn din gruppe
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Stuping for barn, ungdom og voksne
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {offers.map((offer) => (
              <article
                key={offer.title}
                className="rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg sm:p-8"
              >
                <div className="mb-6 h-1 w-12 rounded-full bg-cyan-400" />
                <h3 className="text-2xl font-bold text-[#06162d]">
                  {offer.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{offer.text}</p>
                <Link
                  href="/bli-medlem"
                  className="mt-7 inline-flex items-center gap-2 font-bold text-cyan-800 hover:text-cyan-600"
                >
                  Les om tilbudet
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-400 py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#06162d]">
              Sponsing og samarbeid
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
              Sammen skaper vi aktivitet og idrettsglede
            </h2>
            <p className="mt-3 text-lg leading-8 text-[#06162d]">
              Som samarbeidspartner bidrar du til et trygt og inkluderende
              stupemiljø i Bergen.
            </p>
          </div>

          <Link
            href="/sponsing"
            className="shrink-0 rounded-full bg-[#06162d] px-7 py-4 text-center font-bold text-white transition hover:bg-[#0b315b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#06162d]"
          >
            Bli samarbeidspartner
          </Link>
        </div>
      </section>

      <section className="bg-[#06162d] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
            Klar for å prøve?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Meld interesse, så hjelper vi deg med å finne gruppen som passer
            best for deg.
          </p>
          <Link
            href="/pamelding"
            className="mt-9 inline-block rounded-full bg-cyan-400 px-8 py-4 font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Gå til påmelding
          </Link>
        </div>
      </section>
    </div>
  );
}
