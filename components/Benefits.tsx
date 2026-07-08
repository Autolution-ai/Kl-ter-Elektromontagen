"use client";

import { motion } from "framer-motion";
import { benefits } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function Benefits() {
  return (
    <Section id="vorteile">
      <SectionHeading
        eyebrow="Was dich bei uns erwartet"
        title="Kein Versprechen, das wir nicht halten"
        intro="Wir schreiben hier nur, was du bei uns tatsächlich bekommst. Alles andere fällt spätestens in der Probezeit auf."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {benefits.map((b) => (
          <motion.div
            key={b.title}
            variants={fadeInUp}
            className="rounded-2xl border border-ink-600 bg-ink-900/60 p-6"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-800 text-signal">
              <b.icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-chalk">
              {b.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{b.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
