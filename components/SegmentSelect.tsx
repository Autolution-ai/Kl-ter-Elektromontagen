"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { segments } from "@/lib/content";
import { useFunnel } from "@/components/Funnel/FunnelContext";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function SegmentSelect() {
  const { selectSegment } = useFunnel();

  return (
    <Section id="bereich">
      <SectionHeading
        eyebrow="Wähle deinen Weg"
        title="Wer bist du?"
        intro="Wir werfen nicht alle Bewerber in einen Topf. Sag uns, was zu dir passt, und wir stellen dir die richtigen Fragen."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {segments.map((s) => (
          <motion.button
            key={s.id}
            variants={fadeInUp}
            type="button"
            onClick={() => selectSegment(s.id)}
            className="group flex h-full flex-col items-start gap-4 rounded-2xl border border-ink-600 bg-ink-900/60 p-6 text-left transition-colors hover:border-signal"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink-800 text-signal transition-colors group-hover:bg-signal group-hover:text-ink-950">
              <s.icon className="h-6 w-6" aria-hidden />
            </span>
            <div className="flex-1">
              <h3 className="font-display text-lg font-semibold text-chalk">
                {s.label}
              </h3>
              <p className="mt-1.5 text-sm text-muted">{s.sub}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-signal">
              Hier starten
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </motion.button>
        ))}
      </motion.div>
    </Section>
  );
}
