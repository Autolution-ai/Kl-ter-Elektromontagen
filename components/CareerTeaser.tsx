"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Users } from "lucide-react";
import { careerTeaser } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/primitives";
import { viewportOnce } from "@/lib/motion";

export function CareerTeaser() {
  return (
    <Section id="karriere">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid gap-8 rounded-3xl border border-blau-100 bg-blau-50 p-8 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      >
        <div>
          <Eyebrow>{careerTeaser.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            {careerTeaser.title}
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-body">
            {careerTeaser.text}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              href={careerTeaser.ctaPrimary.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-display font-semibold text-white shadow-glowo transition-transform hover:-translate-y-0.5"
            >
              {careerTeaser.ctaPrimary.label}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={careerTeaser.ctaSecondary.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blau-600 px-7 py-3.5 font-display font-semibold text-blau-700 transition-colors hover:bg-blau-600 hover:text-white"
            >
              {careerTeaser.ctaSecondary.label}
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-blau-100 bg-white p-6 shadow-card">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
            <Users className="h-5 w-5" aria-hidden />
          </span>
          <p className="mt-4 font-display text-sm font-semibold text-ink">
            Das erwartet dich
          </p>
          <ul className="mt-3 space-y-2.5">
            {careerTeaser.points.map((p) => (
              <li key={p} className="flex gap-2.5 text-sm text-body">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blau-600" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  );
}
