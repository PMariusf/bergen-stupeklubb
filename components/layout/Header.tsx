"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-70 border-b border-white/10 bg-[#06162d]/95 text-white backdrop-blur">
      <div className="mx-auto flex h-30 w-full items-center justify-between px-4 lg:px-5 xl:px-6">
        <Link
          href="/"
          aria-label="Bergen Stupeklubb – forsiden"
          className="group flex items-center gap-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          onClick={() => setMenuOpen(false)}
        >
          <span className="relative h-12 w-14 shrink-0" aria-hidden="true">
            <span className="absolute left-6 top-1 h-0.5 w-7 rounded-full bg-white transition-transform duration-500 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transform-none" />
            <span className="absolute left-0 top-3.5 h-0.5 w-[1.15rem] rounded-full bg-white transition-transform delay-75 duration-500 ease-out group-hover:-translate-x-1 group-focus-visible:-translate-x-1 motion-reduce:transform-none" />
            <span className="absolute left-8 top-6 h-0.5 w-[1.15rem] rounded-full bg-white transition-transform delay-100 duration-500 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transform-none" />
            <span className="absolute left-0 top-[2.125rem] h-0.5 w-[1.15rem] rounded-full bg-white transition-transform delay-150 duration-500 ease-out group-hover:-translate-x-1 group-focus-visible:-translate-x-1 motion-reduce:transform-none" />
            <span className="absolute left-6 top-[2.875rem] h-0.5 w-7 rounded-full bg-white transition-transform delay-200 duration-500 ease-out group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transform-none" />
          </span>

          <span className="text-[1.55rem] font-bold leading-[1.15] transition duration-500 group-hover:translate-x-1 group-hover:text-cyan-200 group-focus-visible:translate-x-1 group-focus-visible:text-cyan-200 motion-reduce:transform-none">
            <span className="block">Bergen</span>
            <span className="block translate-x-8">Stupeklubb</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-8" aria-label="Hovedmeny">
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-sm text-sm font-semibold transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${
                  active ? "text-cyan-300" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/pamelding"
            aria-current={isActive("/pamelding") ? "page" : undefined}
            className="rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Meld deg på
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-md border border-white/30 transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 lg:hidden"
          aria-label={menuOpen ? "Lukk meny" : "Åpne meny"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-haspopup="true"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`h-0.5 w-5 bg-white transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="max-h-[calc(100dvh-7.5rem)] overflow-y-auto border-t border-white/10 bg-[#06162d] px-5 py-5 lg:hidden"
          aria-label="Mobilmeny"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-4 py-3 font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                    active
                      ? "bg-white/10 text-cyan-300"
                      : "text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/pamelding"
              aria-current={isActive("/pamelding") ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-cyan-400 px-4 py-3 text-center font-bold text-[#06162d] transition hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Meld deg på
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
