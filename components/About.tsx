"use client";

import { motion } from "framer-motion";
import { Check, Building2 } from "lucide-react";
import { about } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { viewportOnce } from "@/lib/motion";

export function About() {
  return (
    <Section id="ueber-uns">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-5 space-y-4">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-base leading-relaxed text-body">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-blau-50 to-white p-8 shadow-card sm:p-10"
        >
          <span
            className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-blau-100/70 blur-2xl"
            aria-hidden
          />
          <div className="relative">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blau-600 text-white">
              <Building2 className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-5 font-display text-lg font-semibold text-ink">
              Warum Kunden bei uns bleiben
            </p>
            <ul className="mt-5 space-y-3.5">
              {about.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm font-medium text-ink">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
