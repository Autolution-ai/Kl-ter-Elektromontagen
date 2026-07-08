"use client";

import { motion } from "framer-motion";
import { stats, referenceBrands, trustHeadline, trustNote } from "@/lib/content";
import { brandLogoMap } from "@/components/brandLogos";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function TrustBar() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blau-800 to-blau-950">
      <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <motion.dl
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeInUp} className="text-center sm:text-left">
              <dt className="font-display text-2xl font-bold leading-tight text-white sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1.5 text-sm text-blau-100">{s.label}</dd>
            </motion.div>
          ))}
        </motion.dl>

        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-orange-400">
            {trustHeadline}
          </p>

          {/* Referenz-Logos (monochrom, farbig bei Hover) */}
          <div
            className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-7"
            style={{ ["--logo-knockout" as string]: "#08243D" }}
          >
            {referenceBrands.map((id) => {
              const entry = brandLogoMap[id];
              if (!entry) return null;
              const { Comp, h } = entry;
              return (
                <span
                  key={id}
                  className="text-white/55 transition-colors duration-300 hover:text-white"
                >
                  <Comp className={`${h} w-auto`} />
                </span>
              );
            })}
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-blau-100">
            {trustNote}
          </p>
          <p className="mt-3 text-xs text-blau-200/70">
            Logos zu Demonstrationszwecken dargestellt, vor Veröffentlichung durch freigegebene Marken-Assets ersetzen.
          </p>
        </div>
      </div>
    </section>
  );
}
