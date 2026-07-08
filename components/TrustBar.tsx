"use client";

import { motion } from "framer-motion";
import { stats, referenceBrands, trustNote } from "@/lib/content";
import { Section } from "@/components/ui/primitives";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function TrustBar() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="rounded-3xl border border-ink-600 bg-ink-900/50 p-8 sm:p-10">
        <motion.dl
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeInUp} className="text-center sm:text-left">
              <dt className="font-display text-4xl font-bold text-signal sm:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </motion.div>
          ))}
        </motion.dl>

        <p className="mt-9 max-w-3xl text-sm leading-relaxed text-muted">
          {trustNote}
        </p>

        {/* Referenz-Wortmarken. PLATZHALTER: typografische Namen statt Original-Logos.
            Nach Logo-Freigabe hier die freigegebenen Assets einsetzen. */}
        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
          {referenceBrands.map((brand) => (
            <span
              key={brand}
              className="font-display text-lg font-semibold tracking-tight text-muted/70 grayscale transition-colors hover:text-chalk"
            >
              {brand}
            </span>
          ))}
        </div>
        <p className="mt-3 text-xs text-ink-500">
          Kundennamen als Platzhalter dargestellt. Logos folgen nach Freigabe.
        </p>
      </div>
    </Section>
  );
}
