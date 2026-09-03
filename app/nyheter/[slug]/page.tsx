import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem, newsItems } from "@/lib/content";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsItem(slug);

  if (!item) {
    return { title: "Nyhet ikke funnet" };
  }

  return {
    title: item.title,
    description: item.intro,
    alternates: {
      canonical: `/nyheter/${item.slug}`,
    },
  };
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const item = getNewsItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="bg-white">
      <header className="bg-[#06162d] text-white">
        <div className="mx-auto max-w-5xl px-5 py-14 lg:px-8 lg:py-20">
          <Link
            href="/nyheter"
            className="inline-flex items-center gap-2 font-bold text-cyan-300 transition hover:text-cyan-200"
          >
            <span aria-hidden="true">←</span>
            Tilbake til nyheter
          </Link>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-[#06162d]">
              {item.category}
            </span>
            <time dateTime={item.dateTime} className="text-sm font-semibold text-slate-300">
              {item.date}
            </time>
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            {item.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {item.intro}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
        <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl">
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            loading="eager"
            quality={88}
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06162d]/35 to-transparent" />
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_17rem]">
          <div className="space-y-6 text-lg leading-8 text-slate-700">
            {item.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <aside className="h-fit rounded-3xl bg-[#edf5fb] p-7">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-800">
              Høydepunkter
            </p>
            <ul className="mt-5 space-y-3">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3 font-bold text-[#06162d]">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      <section className="bg-cyan-400 py-14">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-black text-[#06162d]">
              Se hva som skjer videre
            </h2>
            <p className="mt-2 text-lg text-cyan-950/80">
              Finn kommende konkurranser, leirer og klubbaktiviteter.
            </p>
          </div>
          <Link
            href="/arrangementer"
            className="rounded-full bg-[#06162d] px-7 py-4 font-bold text-white transition hover:bg-[#0b315b]"
          >
            Se arrangementer
          </Link>
        </div>
      </section>
    </article>
  );
}
