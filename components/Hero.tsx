"use client";

import { motion } from "framer-motion";
import { Check, ArrowDown, Zap, ShieldCheck, Users } from "lucide-react";
import { hero, stats } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="grid-bg absolute inset-0 opacity-70" aria-hidden />
      <div
        className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-signal/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute right-0 top-40 h-96 w-96 rounded-full bg-volt/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-ink-600 bg-ink-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-signal">
            <Zap className="h-3.5 w-3.5" aria-hidden />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-chalk sm:text-5xl lg:text-6xl">
            {hero.h1}{" "}
            <span className="text-signal">{hero.h1accent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {hero.sub}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#bewerben"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-8 py-4 font-display text-base font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
            >
              In 2 Minuten bewerben
              <ArrowDown className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#bereich"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink-500 px-8 py-4 font-display text-base font-semibold text-chalk transition-colors hover:border-signal hover:text-signal"
            >
              Passenden Bereich auswählen
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {hero.bullets.map((b) => (
              <li key={b} className="inline-flex items-center gap-2 text-sm text-muted">
                <Check className="h-4 w-4 text-signal" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Visuelles Element: technische Leiterplatte + Stat-Chips */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-ink-600 bg-gradient-to-br from-ink-800 to-ink-950 p-1">
            <CircuitArt />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/70 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
              {stats.slice(0, 3).map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-ink-600/80 bg-ink-900/80 px-3 py-2.5 backdrop-blur"
                >
                  <div className="font-display text-xl font-bold text-signal">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] leading-tight text-muted">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="absolute -right-3 -top-3 flex items-center gap-2 rounded-full border border-ink-600 bg-ink-900 px-4 py-2 shadow-lg"
          >
            <ShieldCheck className="h-4 w-4 text-signal" aria-hidden />
            <span className="text-xs font-semibold text-chalk">GMP-Kalibrierpartner</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="absolute -left-3 top-1/3 flex items-center gap-2 rounded-full border border-ink-600 bg-ink-900 px-4 py-2 shadow-lg"
          >
            <Users className="h-4 w-4 text-volt-400" aria-hidden />
            <span className="text-xs font-semibold text-chalk">116 Kollegen</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* Stilisierte Leiterplatte als SVG, keine Fremdrechte */
function CircuitArt() {
  return (
    <svg
      viewBox="0 0 400 320"
      className="h-full w-full rounded-[22px]"
      role="img"
      aria-label="Stilisierte Leiterplatte mit leuchtenden Knotenpunkten"
    >
      <defs>
        <linearGradient id="trace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5B301" />
          <stop offset="1" stopColor="#2E7BE4" />
        </linearGradient>
      </defs>
      <g stroke="url(#trace)" strokeWidth="1.5" fill="none" opacity="0.85">
        <path d="M30 40 H150 V110 H240" />
        <path d="M30 120 H90 V200 H180 V260" />
        <path d="M370 60 H260 V150 H200" />
        <path d="M370 180 H300 V250 H210" />
        <path d="M150 40 V20 H320" />
        <path d="M90 200 H60 V290" />
      </g>
      {[
        [150, 110],
        [240, 110],
        [90, 120],
        [180, 200],
        [180, 260],
        [260, 60],
        [200, 150],
        [300, 180],
        [210, 250],
        [320, 20],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="4.5"
          fill="#F5B301"
          className="animate-pulse-node"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </svg>
  );
}
