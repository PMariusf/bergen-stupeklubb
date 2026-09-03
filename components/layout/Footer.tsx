import Link from "next/link";

const footerLinks = [
  { href: "/om-oss", label: "Om oss" },
  { href: "/bli-medlem", label: "Bli medlem" },
  { href: "/trenere", label: "Våre trenere" },
  { href: "/nyheter", label: "Nyheter" },
  { href: "/arrangementer", label: "Hva skjer?" },
  { href: "/sponsing", label: "Sponsing" },
];

const focusClass =
  "rounded-sm transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300";

export default function Footer() {
  return (
    <footer className="bg-[#041124] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-bold">Bergen Stupeklubb</p>
          <p className="mt-3 max-w-sm leading-7 text-slate-300">
            Stuping for barn, ungdom og voksne i hjertet av Bergen.
          </p>
        </div>

        <div>
          <p className="font-bold text-cyan-300">Snarveier</p>
          <nav className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3" aria-label="Bunnmeny">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-slate-300 ${focusClass}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <address className="not-italic">
          <p className="font-bold text-cyan-300">Kontakt</p>
          <div className="mt-4 space-y-3 text-slate-300">
            <p>Ado Arena, Lungegårdskaien 40, 5015 Bergen</p>
            <p>
              <a
                href="mailto:hovedtrener@bergen-stupeklubb.no"
                className={`break-all ${focusClass}`}
              >
                hovedtrener@bergen-stupeklubb.no
              </a>
            </p>
            <p>
              <a href="tel:+4793299995" className={focusClass}>
                +47 932 99 995
              </a>
            </p>
          </div>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Bergen Stupeklubb</p>
          <Link href="/kontakt" className={focusClass}>
            Kontakt oss
          </Link>
        </div>
      </div>
    </footer>
  );
}
