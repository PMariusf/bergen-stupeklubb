import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Hva skjer?",
  description: "Arrangementer og aktiviteter i Bergen Stupeklubb.",
};

export default function EventsPage() {
  return (
    <PageIntro
      eyebrow="Kalender"
      title="Hva skjer i klubben?"
      description="Hold oversikt over konkurranser, treningsleirer, samlinger og andre aktiviteter."
    >
      <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h2 className="text-xl font-bold text-[#06162d]">
          Kommende arrangementer
        </h2>
        <p className="mt-3 leading-7 text-slate-600">
          Nye arrangementer blir lagt ut her når datoene er klare.
        </p>
      </div>
    </PageIntro>
  );
}
