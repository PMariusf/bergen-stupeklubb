import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Våre trenere",
  description: "Møt trenerne i Bergen Stupeklubb.",
};

export default function CoachesPage() {
  return (
    <PageIntro
      eyebrow="Trenerteamet"
      title="Trygge trenere som ser hver utøver"
      description="Trenerne våre skaper et inkluderende miljø og tilpasser treningen til alder, nivå og mål."
    >
      <div className="max-w-2xl rounded-2xl border border-cyan-200 bg-cyan-50 p-7">
        <h2 className="text-xl font-bold text-[#06162d]">
          Møt trenerteamet
        </h2>
        <p className="mt-3 leading-7 text-slate-600">
          Trenerprofiler med bilder, erfaring og ansvarsområder publiseres her.
        </p>
      </div>
    </PageIntro>
  );
}
