"use client";

import { motion } from "framer-motion";
import { benefits } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function Benefits() {
  return (
    <div className="bg-surface">
      <Section id="vorteile">
        <SectionHeading
          eyebrow="Was dich bei uns erwartet"
          title="Nur das, was du wirklich bekommst"
          intro="Wir schreiben hier nichts hin, das in der Probezeit auffliegt. Alles andere hältst du uns zu Recht vor."
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
              className="rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-cardhover"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blau-50 text-blau-600">
                <b.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{b.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </div>
  );
}
