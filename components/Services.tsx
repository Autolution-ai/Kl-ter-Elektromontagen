"use client";

import { motion } from "framer-motion";
import { services, servicesIntro } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function Services() {
  return (
    <div className="bg-surface">
      <Section id="leistungen">
        <SectionHeading
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          intro={servicesIntro.intro}
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.article
              key={s.title}
              variants={fadeInUp}
              className="group rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardhover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blau-50 text-blau-600 transition-colors group-hover:bg-blau-600 group-hover:text-white">
                <s.icon className="h-6 w-6" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{s.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </Section>
    </div>
  );
}
