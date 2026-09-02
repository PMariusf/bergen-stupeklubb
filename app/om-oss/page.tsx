import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Om oss",
  description: "Bli kjent med Bergen Stupeklubb og miljøet vårt i Ado Arena.",
};

const values = [
  {
    title: "Trygghet",
    text: "Treningene tilpasses alder, erfaring og nivå i trygge omgivelser.",
  },
  {
    title: "Mestring",
    text: "Vi bygger ferdigheter steg for steg og feirer utvikling underveis.",
  },
  {
    title: "Fellesskap",
    text: "Hos oss skal barn, ungdom og voksne føle seg velkomne.",
  },
];

export default function AboutPage() {
  return (
    <PageIntro
      eyebrow="Klubben"
      title="Et inkluderende stupemiljø i Bergen"
      description="Bergen Stupeklubb samler stupere, trenere og engasjerte familier i Ado Arena. Vi legger til rette for både nybegynnere og erfarne utøvere."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {values.map((value) => (
          <article
            key={value.title}
            className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
          >
            <h2 className="text-xl font-bold text-[#06162d]">{value.title}</h2>
            <p className="mt-3 leading-7 text-slate-600">{value.text}</p>
          </article>
        ))}
      </div>
    </PageIntro>
  );
}
