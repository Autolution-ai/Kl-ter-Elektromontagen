"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const links = [
  { href: "#bereich", label: "Bereiche" },
  { href: "#rollen", label: "Rollen" },
  { href: "#entwicklung", label: "Entwicklung" },
  { href: "#vorteile", label: "Vorteile" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink-700/80 bg-ink-950/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2" aria-label="Klüter Elektromontagen Startseite">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-signal text-ink-950">
            <Zap className="h-5 w-5" strokeWidth={2.5} aria-hidden />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-chalk">
            KLÜTER
            <span className="ml-1.5 hidden text-sm font-medium text-muted sm:inline">
              Elektromontagen
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-chalk"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#bewerben"
            className="rounded-full bg-signal px-5 py-2.5 text-sm font-display font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            In 2 Min bewerben
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-chalk md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-700 bg-ink-950/95 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-muted hover:bg-ink-800 hover:text-chalk"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#bewerben"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-signal px-5 py-3 text-center font-display font-semibold text-ink-950"
            >
              In 2 Min bewerben
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
