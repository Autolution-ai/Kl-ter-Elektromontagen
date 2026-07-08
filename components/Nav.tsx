"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#bereiche", label: "Bereiche" },
  { href: "/#rollen", label: "Rollen" },
  { href: "/#team", label: "Team" },
  { href: "/#entwicklung", label: "Entwicklung" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-white/40 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center" aria-label="Klüter Elektromontagen Startseite">
          <Image
            src="/klueter-logo.png"
            alt="Klüter Elektromontagen"
            width={132}
            height={46}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-body transition-colors hover:text-blau-700"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/bewerben"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-display font-semibold text-white shadow-glowo transition-transform hover:-translate-y-0.5"
          >
            In 2 Minuten bewerben
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-body hover:bg-surface hover:text-blau-700"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/bewerben"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-orange-500 px-5 py-3 text-center font-display font-semibold text-white"
            >
              In 2 Minuten bewerben
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
