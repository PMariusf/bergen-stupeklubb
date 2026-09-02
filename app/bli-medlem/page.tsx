import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Bli medlem",
  description: "Finn et treningstilbud og bli medlem i Bergen Stupeklubb.",
};

const groups = [
  {
    title: "Stupskole",
    text: "For deg som vil prøve stuping og lære grunnleggende ferdigheter.",
  },
  {
    title: "Barn og ungdom",
    text: "Tilpasset trening med fokus på trygghet, utvikling og idrettsglede.",
  },
  {
    title: "Voksne",
    text: "Et utfordrende og sosialt treningstilbud for voksne på ulike nivåer.",
  },
];

export default function MembershipPage() {
  return (
    <PageIntro
      eyebrow="Treningstilbud"
      title="Finn gruppen som passer for deg"
      description="Du trenger ikke tidligere erfaring for å begynne. Trenerne våre hjelper deg inn i riktig gruppe."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {groups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <h2 className="text-xl font-bold text-[#06162d]">{group.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{group.text}</p>
          </article>
        ))}
      </div>

      <Link
        href="/pamelding"
        className="mt-9 inline-flex rounded-full bg-cyan-500 px-7 py-4 font-bold text-[#06162d] transition hover:bg-cyan-400"
      >
        Gå til påmelding
      </Link>
    </PageIntro>
  );
}
