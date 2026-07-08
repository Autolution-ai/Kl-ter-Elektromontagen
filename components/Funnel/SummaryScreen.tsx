"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, RotateCcw } from "lucide-react";
import { useFunnel } from "./FunnelContext";
import { questionsByTrack, trackLabels } from "./funnelConfig";
import { company } from "@/lib/content";

export function SummaryScreen() {
  const { answers, track, dispatch } = useFunnel();
  if (!track) return null;

  const rows: { label: string; value: string }[] = [];
  rows.push({ label: "Bereich", value: String(answers.bereich ?? "-") });
  for (const q of questionsByTrack[track]) {
    const v = answers[q.id];
    if (v == null || (Array.isArray(v) && v.length === 0)) continue;
    rows.push({ label: q.label, value: Array.isArray(v) ? v.join(", ") : v });
  }
  const name = String(answers.name ?? "");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-10"
    >
      <div className="flex items-center gap-3">
        <CheckCircle2 className="h-8 w-8 text-blau-600" aria-hidden />
        <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
          {name ? `Danke, ${name.split(" ")[0]}!` : "Danke für deine Angaben!"}
        </h2>
      </div>

      <p className="mt-3 max-w-prose text-body">
        Das reicht uns für den ersten Kontakt. Wir sehen uns deine Antworten an und
        melden uns telefonisch, meist innerhalb weniger Tage.
      </p>

      <div
        role="note"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-blau-200 bg-blau-50 px-4 py-1.5 text-xs font-semibold text-blau-700"
      >
        Demo-Ansicht: Diese Bewerbung wird nicht versendet.
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-line">
        <div className="border-b border-line bg-surface px-5 py-3 text-sm font-semibold text-ink">
          Deine Zusammenfassung · {trackLabels[track]}
        </div>
        <dl className="divide-y divide-line">
          {rows.map((r) => (
            <div
              key={r.label}
              className="grid gap-1 px-5 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-4"
            >
              <dt className="text-sm text-muted">{r.label}</dt>
              <dd className="text-sm font-medium text-ink">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={`tel:${company.phoneHref}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-display font-semibold text-white shadow-glowo transition-transform hover:-translate-y-0.5"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Lieber direkt anrufen: {company.phone}
        </a>
        <button
          type="button"
          onClick={() => dispatch({ type: "RESET" })}
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-blau-600 px-7 py-3.5 font-display font-semibold text-blau-700 transition-colors hover:bg-blau-600 hover:text-white"
        >
          <RotateCcw className="h-4 w-4" aria-hidden />
          Neu starten
        </button>
      </div>
    </motion.div>
  );
}
