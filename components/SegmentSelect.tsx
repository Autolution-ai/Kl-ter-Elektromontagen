"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { segments, type Segment } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

// Bento-Spans: erste Karte gross/featured
const spanClass: Record<string, string> = {
  elektroniker: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  kundendienst: "",
  projekt: "",
  ausbildung: "",
  kaufmann: "sm:col-span-2 lg:col-span-1",
};

export function SegmentSelect() {
  return (
    <Section id="bereiche">
      <SectionHeading
        eyebrow="Wähle deinen Weg"
        title="Was passt zu dir?"
        intro="Wir werfen nicht alle in einen Topf. Sag uns, wo du hingehörst, und wir stellen dir genau die Fragen, die zu deinem Bereich passen."
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-10 grid auto-rows-[minmax(0,1fr)] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {segments.map((s) => (
          <SegmentCard key={s.id} s={s} className={spanClass[s.id] ?? ""} />
        ))}
      </motion.div>
    </Section>
  );
}

function SegmentCard({ s, className }: { s: Segment; className: string }) {
  const featured = s.featured;

  return (
    <motion.div variants={fadeInUp} className={className}>
      <Link
        href={`/bewerben?bereich=${s.id}`}
        className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
          featured
            ? "border-blau-700 bg-gradient-to-br from-blau-700 to-blau-900 text-white shadow-cardhover sm:p-8"
            : "border-line bg-white text-ink shadow-card hover:border-blau-300 hover:shadow-cardhover"
        }`}
      >
        {/* dekorativer Eckakzent */}
        <span
          className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity duration-300 ${
            featured ? "bg-orange-500/40" : "bg-blau-200/50 opacity-0 group-hover:opacity-100"
          }`}
          aria-hidden
        />

        <div className="relative">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${
                featured
                  ? "bg-white/15 text-white group-hover:bg-orange-500"
                  : "bg-blau-50 text-blau-700 group-hover:bg-orange-500 group-hover:text-white"
              }`}
            >
              <s.icon className="h-6 w-6" aria-hidden />
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                featured ? "bg-white/15 text-blau-100" : "bg-surface text-muted"
              }`}
            >
              {s.short}
            </span>
          </div>

          <h3
            className={`mt-5 font-display font-bold leading-tight ${
              featured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {s.label}
          </h3>
          <p
            className={`mt-2 leading-relaxed ${
              featured ? "max-w-md text-base text-blau-100" : "text-sm text-body"
            }`}
          >
            {s.sub}
          </p>
        </div>

        <span
          className={`relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${
            featured ? "text-white" : "text-orange-500"
          }`}
        >
          Das bin ich
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1.5"
            aria-hidden
          />
        </span>
      </Link>
    </motion.div>
  );
}
