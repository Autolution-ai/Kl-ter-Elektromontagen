"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-4 py-3 backdrop-blur transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Link
        href="/bewerben"
        className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 font-display font-semibold text-white shadow-glowo"
      >
        In 2 Minuten bewerben
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </div>
  );
}
