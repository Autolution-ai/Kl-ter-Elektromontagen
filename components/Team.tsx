"use client";

import { motion } from "framer-motion";
import { Quote, ImageIcon, Camera } from "lucide-react";
import { team } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { fadeInUp, stagger, viewportOnce } from "@/lib/motion";

export function Team() {
  return (
    <Section id="team">
      <SectionHeading
        eyebrow={team.eyebrow}
        title={team.title}
        intro={team.intro}
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        {/* Zitat */}
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-blau-700 to-blau-900 p-8 text-white sm:p-10"
        >
          <div>
            <Quote className="h-9 w-9 text-orange-400" aria-hidden />
            <blockquote className="mt-5 font-display text-xl font-medium leading-snug sm:text-2xl">
              „{team.quote}"
            </blockquote>
          </div>
          <figcaption className="mt-8 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 font-display text-lg font-bold">
              {team.quoteName.charAt(0)}
            </span>
            <span>
              <span className="block font-semibold">{team.quoteName}</span>
              <span className="block text-sm text-blau-100">{team.quoteRole}</span>
            </span>
          </figcaption>
        </motion.figure>

        {/* Team-Foto-Platzhalter */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-4"
        >
          {team.members.map((m, i) => (
            <motion.figure
              key={m.name}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface"
            >
              {/* Platzhalterflaeche fuer echtes Teamfoto */}
              <div className="relative flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-blau-100 to-blau-50">
                <ImageIcon
                  className="h-10 w-10 text-blau-300 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden
                />
                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-blau-600 backdrop-blur">
                  <Camera className="h-3 w-3" aria-hidden />
                  Foto folgt
                </span>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blau-950/80 to-transparent p-4">
                  <figcaption>
                    <span className="block font-display text-sm font-bold text-white">
                      {m.name}
                    </span>
                    <span className="mt-0.5 block text-xs leading-tight text-blau-100">
                      {m.role}
                    </span>
                  </figcaption>
                </div>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        Platzhalter für echte Teamfotos. Nach dem Fototermin hier die Aufnahmen der Kolleginnen und Kollegen einsetzen.
      </p>
    </Section>
  );
}
