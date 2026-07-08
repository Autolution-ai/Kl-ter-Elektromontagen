"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";
import { applyTeaser } from "@/lib/content";
import { viewportOnce } from "@/lib/motion";

export function ApplyTeaser() {
  return (
    <section id="bewerben-teaser" className="relative px-5 py-16 sm:px-8 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-blau-700 to-blau-950 px-6 py-12 text-center shadow-cardhover sm:px-12 sm:py-16"
      >
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
        <span
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-500/30 blur-3xl"
          aria-hidden
        />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-orange-400">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {applyTeaser.eyebrow}
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            {applyTeaser.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blau-100">
            {applyTeaser.text}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/bewerben"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-display text-base font-semibold text-white shadow-glowo transition-transform hover:-translate-y-0.5"
            >
              In 2 Minuten bewerben
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="#team"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-8 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Users className="h-4 w-4" aria-hidden />
              Erst mehr über das Team
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
