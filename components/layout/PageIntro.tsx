import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageIntro({
  eyebrow,
  title,
  description,
  children,
}: PageIntroProps) {
  return (
    <section className="min-h-[60vh] bg-[#f5f8fc]">
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <header className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#06162d] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{description}</p>
        </header>

        {children && <div className="mt-12">{children}</div>}
      </div>
    </section>
  );
}
