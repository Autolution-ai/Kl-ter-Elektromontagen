"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Users, Zap } from "lucide-react";
import { hero, stats } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface pt-16">
      <div className="grid-bg-light absolute inset-0" aria-hidden />
      <div
        className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blau-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute right-0 top-40 h-96 w-96 rounded-full bg-orange-100/60 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blau-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blau-700">
            <Zap className="h-3.5 w-3.5 text-orange-500" aria-hidden />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {hero.h1a}{" "}
            <span className="text-orange-500">{hero.h1accent}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">
            {hero.sub}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/bewerben"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-display text-base font-semibold text-white shadow-glowo transition-transform hover:-translate-y-0.5"
            >
              In 2 Minuten bewerben
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href="#bereiche"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blau-600 px-8 py-4 font-display text-base font-semibold text-blau-700 transition-colors hover:bg-blau-600 hover:text-white"
            >
              Bereich auswählen
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-2.5">
            {hero.bullets.map((b) => (
              <li key={b} className="inline-flex items-center gap-2.5 text-sm text-body">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blau-100">
                  <Check className="h-3 w-3 text-blau-700" aria-hidden />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-blau-900/20 bg-gradient-to-br from-blau-800 to-blau-950 p-1 shadow-cardhover">
            <CircuitArt />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blau-950/80 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
              {stats.slice(0, 3).map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/10 px-3 py-2.5 backdrop-blur"
                >
                  <div className="font-display text-lg font-bold leading-tight text-white">
                    {s.value}
                  </div>
                  <div className="mt-0.5 text-[11px] leading-tight text-blau-100">
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
            className="absolute -right-3 -top-3 flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 shadow-card"
          >
            <ShieldCheck className="h-4 w-4 text-orange-500" aria-hidden />
            <span className="text-xs font-semibold text-ink">GMP-Kalibrierpartner</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            className="absolute -left-3 top-1/3 flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 shadow-card"
          >
            <Users className="h-4 w-4 text-blau-600" aria-hidden />
            <span className="text-xs font-semibold text-ink">116 Kollegen</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* Stilisierte Leiterplatte, Farben aus dem Logo */
function CircuitArt() {
  const nodes: [number, number][] = [
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
  ];
  return (
    <svg
      viewBox="0 0 400 320"
      className="h-full w-full rounded-[22px]"
      role="img"
      aria-label="Stilisierte Leiterplatte mit leuchtenden Knotenpunkten"
    >
      <defs>
        <linearGradient id="trace" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4E9BD1" />
          <stop offset="1" stopColor="#F0755E" />
        </linearGradient>
      </defs>
      <g stroke="url(#trace)" strokeWidth="1.5" fill="none" opacity="0.9">
        <path d="M30 40 H150 V110 H240" />
        <path d="M30 120 H90 V200 H180 V260" />
        <path d="M370 60 H260 V150 H200" />
        <path d="M370 180 H300 V250 H210" />
        <path d="M150 40 V20 H320" />
        <path d="M90 200 H60 V290" />
      </g>
      {nodes.map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="4.5"
          fill={i % 3 === 0 ? "#F0755E" : "#7FBCE8"}
          className="animate-pulse-node"
          style={{ animationDelay: `${i * 0.3}s` }}
        />
      ))}
    </svg>
  );
}
