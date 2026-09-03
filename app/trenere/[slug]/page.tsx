import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLeadCoach, leadCoaches } from "@/lib/coaches";

type CoachPageProps = {
  params: Promise<{ slug: string }>;
};

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export function generateStaticParams() {
  return leadCoaches.map((coach) => ({ slug: coach.slug }));
}

export async function generateMetadata({
  params,
}: CoachPageProps): Promise<Metadata> {
  const { slug } = await params;
  const coach = getLeadCoach(slug);

  if (!coach) {
    return { title: "Trener ikke funnet" };
  }

  return {
    title: coach.name,
    description: coach.intro,
    alternates: {
      canonical: `/trenere/${coach.slug}`,
    },
  };
}

export default async function CoachProfilePage({ params }: CoachPageProps) {
  const { slug } = await params;
  const coach = getLeadCoach(slug);

  if (!coach) {
    notFound();
  }

  return (
    <article className="bg-white">
      <header className="relative isolate overflow-hidden bg-[#06162d] text-white">
        <div className="absolute -right-24 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1fr_22rem] lg:px-8 lg:py-24">
          <div>
            <Link
              href="/trenere"
              className="inline-flex items-center gap-2 font-bold text-cyan-300 transition hover:text-cyan-200"
            >
              <span aria-hidden="true">←</span>
              Tilbake til trenerteamet
            </Link>
            <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              {coach.role}
            </p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-tight sm:text-6xl">
              {coach.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {coach.intro}
            </p>
          </div>

          <div
            className="flex aspect-square max-w-xs items-center justify-center rounded-full border border-white/15 bg-white/5 text-7xl font-black text-cyan-300 shadow-2xl"
            aria-hidden="true"
          >
            {initials(coach.name)}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_22rem] lg:px-8 lg:py-24">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-[#06162d] sm:text-4xl">
            Erfaring og rolle
          </h2>
          <div className="mt-7 space-y-6 text-lg leading-8 text-slate-700">
            {coach.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-[2rem] bg-slate-100 shadow-lg">
            <Image
              src="/images/coach-feedback.webp"
              alt="Trener som gir veiledning til en utøver ved stupebassenget"
              fill
              quality={88}
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <aside className="h-fit rounded-3xl bg-[#edf5fb] p-7 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-800">
            Kompetanse
          </p>
          <ul className="mt-6 space-y-4">
            {coach.specialties.map((specialty) => (
              <li key={specialty} className="flex gap-3 font-bold text-[#06162d]">
                <span className="text-cyan-600" aria-hidden="true">✓</span>
                {specialty}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="bg-cyan-400 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-[#06162d]">
              Usikker på hvilken gruppe som passer?
            </h2>
            <p className="mt-2 text-lg text-cyan-950/80">
              Klubben hjelper deg å finne riktig tilbud.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="rounded-full bg-[#06162d] px-7 py-4 font-bold text-white transition hover:bg-[#0b315b]"
          >
            Kontakt klubben
          </Link>
        </div>
      </section>
    </article>
  );
}
