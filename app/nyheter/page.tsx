import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Nyheter",
  description: "Siste nytt fra Bergen Stupeklubb.",
};

export default function NewsPage() {
  return (
    <PageIntro
      eyebrow="Fra klubben"
      title="Nyheter"
      description="Her finner du oppdateringer fra treninger, konkurranser, leirer og klubbmiljøet."
    >
      <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h2 className="text-xl font-bold text-[#06162d]">Siste nytt</h2>
        <p className="mt-3 leading-7 text-slate-600">
          Nye saker blir publisert her fortløpende.
        </p>
      </div>
    </PageIntro>
  );
}
