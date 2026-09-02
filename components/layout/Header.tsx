"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/om-oss", label: "Om oss" },
  { href: "/bli-medlem", label: "Bli medlem" },
  { href: "/trenere", label: "Trenere" },
  { href: "/nyheter", label: "Nyheter" },
  { href: "/arrangementer", label: "Hva skjer?" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06162d]/95 text-white backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[96rem] items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          aria-label="Bergen Stupeklubb – forsiden"
          className="group flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          onClick={() => setMenuOpen(false)}
        >
          <span
            className="relative h-12 w-14 shrink-0"
            aria-hidden="true"
          >
            <span className="absolute left-6 top-1 h-0.5 w-7 rounded-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transform-none" />
            <span className="absolute left-0 top-3.5 h-0.5 w-[1.15rem] rounded-full bg-white transition-transform delay-75 duration-500 ease-out group-hover:-translate-x-1 group-focus-visible:-translate-x-1 motion-reduce:transform-none" />
            <span className="absolute left-8 top-6 h-0.5 w-[1.15rem] rounded-full bg-white transition-transform delay-100 duration-500 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transform-none" />
            <span className="absolute left-0 top-[2.125rem] h-0.5 w-[1.15rem] rounded-full bg-white transition-transform delay-150 duration-500 ease-out group-hover:-translate-x-1 group-focus-visible:-translate-x-1 motion-reduce:transform-none" />
            <span className="absolute left-6 top-[2.875rem] h-0.5 w-7 rounded-full bg-white transition-transform delay-200 duration-500 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transform-none" />
          </span>

          <span className="text-lg font-medium leading-[1.15] transition duration-500 group-hover:translate-x-1 group-hover:text-cyan-200 group-focus-visible:translate-x-1 group-focus-visible:text-cyan-200 motion-reduce:transform-none">
            <span className="block">Bergen</span>
            <span className="block">Stupeklubb</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-8" aria-label="Hovedmeny">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition hover:text-cyan-300 ${
                isActive(item.href) ? "text-cyan-300" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/pamelding"
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-[#06162d] transition hover:bg-cyan-300"
          >
            Meld deg på
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-white/20 lg:hidden"
          aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
          <span className="h-0.5 w-5 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-white/10 bg-[#06162d] px-5 py-5 lg:hidden"
          aria-label="Mobilmeny"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 font-semibold ${
                  isActive(item.href)
                    ? "bg-white/10 text-cyan-300"
                    : "text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/pamelding"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-cyan-400 px-4 py-3 text-center font-bold text-[#06162d]"
            >
              Meld deg på
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
