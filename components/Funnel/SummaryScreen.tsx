"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, RotateCcw } from "lucide-react";
import { useFunnel } from "./FunnelContext";
import { questionsByTrack, trackLabels } from "./funnelConfig";
import { Button } from "@/components/ui/primitives";
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
      className="rounded-3xl border border-ink-600 bg-ink-900/80 p-6 sm:p-10"
    >
      <div className="flex items-center gap-3">
        <CheckCircle2 className="h-8 w-8 text-signal" aria-hidden />
        <h3 className="font-display text-2xl font-bold text-chalk sm:text-3xl">
          {name ? `Danke, ${name.split(" ")[0]}!` : "Danke für deine Angaben!"}
        </h3>
      </div>

      <p className="mt-3 max-w-prose text-muted">
        Das reicht uns für den ersten Kontakt. Wir schauen uns deine Antworten an
        und melden uns telefonisch. Kein langes Warten.
      </p>

      <div
        role="note"
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-volt/40 bg-volt/10 px-4 py-1.5 text-xs font-semibold text-volt-400"
      >
        Demo-Ansicht: Diese Bewerbung wird nicht versendet.
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-ink-700">
        <div className="border-b border-ink-700 bg-ink-800 px-5 py-3 text-sm font-semibold text-chalk">
          Deine Zusammenfassung · {trackLabels[track]}
        </div>
        <dl className="divide-y divide-ink-700">
          {rows.map((r) => (
            <div key={r.label} className="grid gap-1 px-5 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] sm:gap-4">
              <dt className="text-sm text-muted">{r.label}</dt>
              <dd className="text-sm font-medium text-chalk">{r.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={`tel:${company.phoneHref}`}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-signal px-7 py-3.5 font-display font-semibold text-ink-950 transition-transform hover:-translate-y-0.5"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Lieber direkt anrufen: {company.phone}
        </a>
        <Button variant="outline" size="lg" onClick={() => dispatch({ type: "RESET" })}>
          <RotateCcw className="h-4 w-4" aria-hidden />
          Neu starten
        </Button>
      </div>
    </motion.div>
  );
}
