"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export function StickyApplyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-ink-700 bg-ink-950/95 px-4 py-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#bewerben"
        className="flex items-center justify-center gap-2 rounded-full bg-signal px-6 py-3.5 font-display font-semibold text-ink-950"
      >
        In 2 Minuten bewerben
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </div>
  );
}
