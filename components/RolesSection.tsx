"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { roles } from "@/lib/content";
import { useFunnel } from "@/components/Funnel/FunnelContext";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function RolesSection() {
  const { selectSegment } = useFunnel();

  return (
    <Section id="rollen">
      <SectionHeading
        eyebrow="Rollen ehrlich unterschieden"
        title="Drei Wege, ein Betrieb"
        intro="Kundendienst, Baustelle oder Ausbildung stellen ganz unterschiedliche Anforderungen. Hier siehst du, was dich in jeder Rolle wirklich erwartet."
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
            className="flex flex-col rounded-2xl border border-ink-600 bg-ink-900/60 p-6"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-signal/15 text-signal">
              <role.icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-chalk">
              {role.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{role.tagline}</p>

            <ul className="mt-5 flex-1 space-y-2.5">
              {role.points.map((p) => (
                <li key={p} className="flex gap-2.5 text-sm text-chalk/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-700 pt-5">
              {role.meta.map((m) => (
                <span
                  key={m.label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-ink-800 px-3 py-1 text-xs font-medium text-muted"
                >
                  <m.icon className="h-3.5 w-3.5 text-volt-400" aria-hidden />
                  {m.label}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => selectSegment(role.segment)}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-signal transition-colors hover:text-signal-400"
            >
              Für diese Rolle bewerben
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
