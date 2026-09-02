import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Våre trenere",
  description:
    "Møt trenerteamet i Bergen Stupeklubb og se hvem som følger opp de ulike treningsgruppene.",
};

const competitionCoaches = [
  { name: "Claus Gundersen jr.", role: "Rekrutt" },
  { name: "Trygve Pedersen", role: "Rekrutt og elite" },
  { name: "Vårin Renate Andvik Holm", role: "Rekrutt" },
  { name: "Julie Synnøve Thorsen", role: "Rekrutt" },
  { name: "Oda Prestegård Finne", role: "Rekrutt" },
];

const divingSchoolCoaches = [
  { name: "Vera Valentina Hvidsten", role: "Nybegynnere" },
  { name: "Marko Borojevic", role: "Nybegynnere" },
  { name: "Anna Wæhle", role: "Nybegynnere" },
  { name: "Jone Antonsen Holmelid", role: "Nybegynnere" },
  { name: "Jonas Erik Thorsen", role: "Nybegynnere" },
  { name: "Amalie Kupka", role: "Nybegynnere" },
  { name: "Caroline Sofie Kupka", role: "Videregående" },
  { name: "Anne Sofie Holm", role: "Stupskolen" },
  { name: "Henrik Skomsvoll", role: "Stupskolen" },
  { name: "Synne Pedersen Drægri", role: "Stupskolen" },
  { name: "Sienna Pambo Sunnfør", role: "Stupskolen" },
  { name: "Isak Børslien", role: "Stupskolen" },
  { name: "Tuva Tveit-Sletten", role: "Stupskolen" },
  { name: "Pia Tveit-Sletten", role: "Stupskolen" },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => part.toLowerCase() !== "jr.")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

function CoachCard({
  name,
  role,
}: {
  name: string;
  role: string;
}) {
  return (
    <article className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#06162d] font-black text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-[#06162d]"
        aria-hidden="true"
      >
        {initials(name)}
      </div>
      <div>
        <h3 className="font-bold text-[#06162d]">{name}</h3>
        <p className="mt-1 text-sm font-medium text-cyan-800">{role}</p>
      </div>
    </article>
  );
}

export default function CoachesPage() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate bg-[#06162d] text-white">
        <div className="absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Trenerteamet
            </p>
            <h1 className="mt-4 max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl">
              Trenerne som hjelper deg videre
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Fra den første øvelsen på tørrsvikten til avanserte konkurransestup
              blir utøverne fulgt opp av et stort og erfarent trenerteam.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/bli-medlem"
                className="rounded-full bg-cyan-400 px-7 py-4 text-center font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Se treningstilbudet
              </Link>
              <Link
                href="/kontakt"
                className="rounded-full border border-white/30 px-7 py-4 text-center font-bold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Kontakt trenerteamet
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b315b] shadow-2xl">
            <Image
              src="/images/coach-feedback.webp"
              alt="Trener som gir veiledning ved stupebassenget"
              fill
              loading="eager"
              quality={88}
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/75 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-bold">
              Tydelig veiledning, trygg progresjon og idrettsglede
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fc] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Sportslig ledelse
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Lang erfaring på nasjonalt nivå
            </h2>
          </header>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            <article className="rounded-3xl bg-[#06162d] p-7 text-white shadow-sm sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Hovedtrener
              </p>
              <h3 className="mt-4 text-3xl font-bold">
                Paul Joachim Thorsen
              </h3>
              <p className="mt-5 leading-8 text-slate-300">
                Paul Joachim startet som stuper i Stavanger Stupeklubb i 1988
                og var på landslaget fra 1992 til 1999. Han har vært
                hovedtrener i Bergen, landslagssjef og internasjonal
                stupdommer, og har vært med på å utvikle Trener 1-kurset for
                stup.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Hovedtrener", "Internasjonal dommer", "Trenerutvikling"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                Elitetrener
              </p>
              <h3 className="mt-4 text-3xl font-bold text-[#06162d]">
                Espen Gilje Bergslien
              </h3>
              <p className="mt-5 leading-8 text-slate-600">
                Espen startet med stuping i 2001 og har medaljer fra både
                norske og nordiske mesterskap. I tillegg til arbeidet med
                klubbens eliteutøvere er han trener på toppidrettslinjen ved
                Amalie Skram videregående skole.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Elitetrener", "Tidligere konkurransestuper", "Toppidrett"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-900"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Rekrutt og konkurranse
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Trenere for videre utvikling
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Rekrutt- og konkurransegruppene følges opp av trenere med egen
              erfaring fra sporten og god kjennskap til klubbmiljøet.
            </p>
          </header>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {competitionCoaches.map((coach) => (
              <CoachCard key={coach.name} {...coach} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#edf5fb] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Stupskolen
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Et stort team for nye stupere
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Trenerne på Stupskolen følger nybegynnere og videregående grupper
              gjennom oppvarming, tørrtrening og trening i bassenget.
            </p>
          </header>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {divingSchoolCoaches.map((coach) => (
              <CoachCard key={coach.name} {...coach} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
              Egne tilbud
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl">
              Voksengruppe og e-sport
            </h2>
          </header>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 p-7 sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
                Voksengruppa
              </p>
              <h3 className="mt-4 text-2xl font-bold text-[#06162d]">
                Peter Henrik Kupka
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Peter tar imot voksne i alle aldre som vil prøve stuping eller
                hente frem igjen kunnskap fra tidligere. Han er selv aktiv
                konkurransestuper.
              </p>
            </article>

            <article className="rounded-3xl bg-[#06162d] p-7 text-white sm:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                E-sportlaget
              </p>
              <h3 className="mt-4 text-2xl font-bold">
                Alexander Alsaker
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Alexander trener klubbens e-sportlag. Han er utdannet
                ergoterapeut og har erfaring fra både fotball og boksing, i
                tillegg til interesse for dataspill.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-cyan-400 py-16 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-950/70">
              Har du spørsmål?
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
              Vi hjelper deg å finne riktig gruppe
            </h2>
            <p className="mt-3 text-lg leading-8 text-cyan-950/80">
              Ta kontakt dersom du lurer på nivå, tilrettelegging eller hvilket
              tilbud som passer best.
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
