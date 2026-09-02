import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Sponsing",
  description: "Samarbeid med Bergen Stupeklubb.",
};

export default function SponsorshipPage() {
  return (
    <PageIntro
      eyebrow="Samarbeid"
      title="Bli en del av laget"
      description="Sponsorer og samarbeidspartnere bidrar til aktivitet, utvikling og gode opplevelser for utøverne våre."
    >
      <div className="max-w-2xl rounded-2xl bg-[#06162d] p-7 text-white">
        <h2 className="text-xl font-bold">Interessert i et samarbeid?</h2>
        <p className="mt-3 leading-7 text-slate-200">
          Ta kontakt, så finner vi en løsning som passer klubben og virksomheten din.
        </p>
        <a
          href="mailto:hovedtrener@bergen-stupeklubb.no"
          className="mt-6 inline-flex rounded-full bg-cyan-400 px-6 py-3 font-bold text-[#06162d]"
        >
          Send oss en e-post
        </a>
      </div>
    </PageIntro>
  );
}
