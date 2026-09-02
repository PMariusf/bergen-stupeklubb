import type { Metadata } from "next";
import PageIntro from "@/components/layout/PageIntro";

export const metadata: Metadata = {
  title: "Kontakt oss",
  description: "Kontakt Bergen Stupeklubb.",
};

export default function ContactPage() {
  return (
    <PageIntro
      eyebrow="Vi hjelper deg"
      title="Ta kontakt"
      description="Har du spørsmål om trening, medlemskap eller påmelding? Du er alltid velkommen til å kontakte oss."
    >
      <div className="grid max-w-4xl gap-5 md:grid-cols-3">
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="font-bold text-[#06162d]">Besøk oss</h2>
          <p className="mt-3 leading-7 text-slate-600">
            Ado Arena<br />
            Lungegårdskaien 40<br />
            5015 Bergen
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="font-bold text-[#06162d]">E-post</h2>
          <a
            href="mailto:hovedtrener@bergen-stupeklubb.no"
            className="mt-3 block break-words leading-7 text-cyan-700 hover:underline"
          >
            hovedtrener@bergen-stupeklubb.no
          </a>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="font-bold text-[#06162d]">Telefon</h2>
          <a
            href="tel:+4793299995"
            className="mt-3 block leading-7 text-cyan-700 hover:underline"
          >
            +47 932 99 995
          </a>
        </article>
      </div>
    </PageIntro>
  );
}
