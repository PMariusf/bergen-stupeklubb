import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eventItems, getEventItem } from "@/lib/content";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return eventItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getEventItem(slug);

  if (!item) {
    return { title: "Arrangement ikke funnet" };
  }

  return {
    title: item.title,
    description: item.intro,
    alternates: {
      canonical: `/arrangementer/${item.slug}`,
    },
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const item = getEventItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="bg-white">
      <header className="bg-[#06162d] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-20">
          <div>
            <Link
              href="/arrangementer"
              className="inline-flex items-center gap-2 font-bold text-cyan-300 transition hover:text-cyan-200"
            >
              <span aria-hidden="true">←</span>
              Tilbake til arrangementer
            </Link>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-[#06162d]">
                {item.status}
              </span>
              <time dateTime={item.dateTime} className="font-semibold text-slate-300">
                {item.season}
              </time>
            </div>
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {item.intro}
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b315b] shadow-2xl">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              loading="eager"
              quality={88}
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/65 to-transparent" />
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_22rem] lg:px-8 lg:py-24">
        <div className="space-y-6 text-lg leading-8 text-slate-700">
          {item.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="h-fit rounded-3xl bg-[#edf5fb] p-7 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-800">
            Praktisk informasjon
          </p>
          <ul className="mt-6 space-y-4">
            {item.practical.map((detail) => (
              <li key={detail} className="flex gap-3 font-semibold leading-6 text-[#06162d]">
                <span className="text-cyan-600" aria-hidden="true">✓</span>
                {detail}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="bg-cyan-400 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-[#06162d]">
              Klar for å prøve?
            </h2>
            <p className="mt-2 text-lg text-cyan-950/80">
              Fyll ut skjemaet, så hjelper klubben deg videre.
            </p>
          </div>
          <Link
            href="/pamelding#pameldingsskjema"
            className="rounded-full bg-[#06162d] px-7 py-4 font-bold text-white transition hover:bg-[#0b315b]"
          >
            Gå til påmelding
          </Link>
        </div>
      </section>
    </article>
  );
}
