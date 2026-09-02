import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Påmelding",
  description: "Meld deg på trening i Bergen Stupeklubb.",
};

export default function RegistrationPage() {
  return (
    <PageIntro
      eyebrow="Kom i gang"
      title="Meld deg på"
      description="Vi hjelper deg med å finne et tilbud som passer alder, erfaring og mål."
    >
      <div className="max-w-2xl rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h2 className="text-xl font-bold text-[#06162d]">
          Har du spørsmål før du melder deg på?
        </h2>
        <p className="mt-3 leading-7 text-slate-600">
          Kontakt hovedtreneren vår, så hjelper vi deg med å finne riktig gruppe.
        </p>
        <a
          href="mailto:hovedtrener@bergen-stupeklubb.no"
          className="mt-6 inline-flex rounded-full bg-cyan-500 px-6 py-3 font-bold text-[#06162d] transition hover:bg-cyan-400"
        >
          Kontakt hovedtrener
        </a>
      </div>
    </PageIntro>
  );
}
