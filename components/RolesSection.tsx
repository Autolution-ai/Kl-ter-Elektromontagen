"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { roles } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function RolesSection() {
  return (
    <Section id="rollen">
      <SectionHeading
        eyebrow="Drei Wege, ein Betrieb"
        title="Was dich in deiner Rolle wirklich erwartet"
        intro="Kundendienst, Baustelle und Ausbildung sind drei komplett verschiedene Jobs. Damit du weißt, worauf du dich einlässt, hier die ehrliche Version."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid gap-5 lg:grid-cols-3"
      >
        {roles.map((role) => (
          <motion.article
            key={role.id}
            variants={fadeInUp}
            className="flex flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-shadow hover:shadow-cardhover"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <role.icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-ink">
              {role.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{role.tagline}</p>

            <ul className="mt-5 flex-1 space-y-3">
              {role.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm text-ink/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blau-600" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
              {role.meta.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 text-xs font-medium text-body"
                >
                  <m.icon className="h-3.5 w-3.5 text-blau-600" aria-hidden />
                  {m.label}
                </span>
              ))}
            </div>

            <Link
              href={`/bewerben?bereich=${role.segment}`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
            >
              Für diese Rolle bewerben
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
