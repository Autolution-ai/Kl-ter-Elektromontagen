"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Send, Check } from "lucide-react";
import { useFunnel } from "./FunnelContext";
import { SummaryScreen } from "./SummaryScreen";
import { questionsByTrack, type Question } from "./funnelConfig";
import { segments } from "@/lib/content";

export function ApplicationFunnel() {
  const { track, segment, answers, stepIndex, status, totalSteps, dispatch } =
    useFunnel();

  const [datenschutz, setDatenschutz] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const questions = track ? questionsByTrack[track] : [];
  const isBereich = stepIndex === 0;
  const isContact = track ? stepIndex === questions.length + 1 : false;
  const currentQuestion: Question | null =
    !isBereich && !isContact && track ? questions[stepIndex - 1] : null;

  const currentStepNumber = Math.min(stepIndex + 1, totalSteps);
  const progress = status === "done" ? 100 : (currentStepNumber / totalSteps) * 100;

  function setAnswer(id: string, value: string | string[]) {
    dispatch({ type: "SET_ANSWER", id, value });
  }

  function toggleMulti(id: string, option: string) {
    const cur = (answers[id] as string[]) ?? [];
    setAnswer(
      id,
      cur.includes(option) ? cur.filter((o) => o !== option) : [...cur, option]
    );
  }

  const stepValid = (() => {
    if (isBereich) return Boolean(track);
    if (currentQuestion) {
      const v = answers[currentQuestion.id];
      if (currentQuestion.type === "multi")
        return Array.isArray(v) && v.length > 0;
      if (currentQuestion.type === "text")
        return typeof v === "string" && v.trim().length > 1;
      return typeof v === "string" && v.length > 0;
    }
    if (isContact) {
      const name = String(answers.name ?? "").trim();
      const kontakt = String(answers.kontakt ?? "").trim();
      return name.length > 1 && kontakt.length > 3 && datenschutz && honeypot === "";
    }
    return false;
  })();

  function handleNext() {
    if (!stepValid) return;
    if (isContact) {
      dispatch({ type: "SUBMIT" });
      return;
    }
    dispatch({ type: "NEXT" });
  }

  if (status === "done") {
    return <SummaryScreen />;
  }

  return (
    <div>
      {/* Fortschritt */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs font-medium text-muted">
          <span>
            Schritt {currentStepNumber} von {totalSteps}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full rounded-full bg-orange-500"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="rounded-3xl border border-line bg-white p-6 shadow-card sm:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${track ?? "start"}-${stepIndex}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {isBereich && (
              <fieldset>
                <legend className="font-display text-xl font-semibold text-ink">
                  Für welchen Bereich interessierst du dich?
                </legend>
                <div className="mt-5 grid gap-3">
                  {segments.map((s) => {
                    const active = segment === s.id;
                    return (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() =>
                          dispatch({ type: "SET_TRACK", track: s.track, segment: s.id })
                        }
                        className={`flex items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left transition-colors ${
                          active
                            ? "border-orange-500 bg-orange-50 text-ink"
                            : "border-line text-body hover:border-blau-300 hover:text-ink"
                        }`}
                      >
                        <s.icon className="h-5 w-5 shrink-0 text-blau-600" aria-hidden />
                        <span className="font-medium">{s.label}</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            )}

            {currentQuestion && (
              <QuestionField
                question={currentQuestion}
                answer={answers[currentQuestion.id]}
                onSingle={(v) => setAnswer(currentQuestion.id, v)}
                onMulti={(v) => toggleMulti(currentQuestion.id, v)}
                onText={(v) => setAnswer(currentQuestion.id, v)}
              />
            )}

            {isContact && (
              <fieldset>
                <legend className="font-display text-xl font-semibold text-ink">
                  Wie erreichen wir dich?
                </legend>
                <div className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm text-body">
                      Dein Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={String(answers.name ?? "")}
                      onChange={(e) => setAnswer("name", e.target.value)}
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-orange-500 focus:outline-none"
                      placeholder="Vor- und Nachname"
                    />
                  </div>
                  <div>
                    <label htmlFor="kontakt" className="mb-1.5 block text-sm text-body">
                      Telefon oder E-Mail
                    </label>
                    <input
                      id="kontakt"
                      type="text"
                      value={String(answers.kontakt ?? "")}
                      onChange={(e) => setAnswer("kontakt", e.target.value)}
                      className="w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-orange-500 focus:outline-none"
                      placeholder="z. B. 0170 1234567 oder name@mail.de"
                    />
                  </div>

                  {/* Honeypot gegen Bots */}
                  <div className="absolute left-[-9999px]" aria-hidden>
                    <label>
                      Website (bitte frei lassen)
                      <input
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </label>
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 text-sm text-body">
                    <input
                      type="checkbox"
                      checked={datenschutz}
                      onChange={(e) => setDatenschutz(e.target.checked)}
                      className="mt-0.5 h-5 w-5 shrink-0 accent-orange-500"
                    />
                    <span>
                      Ich bin einverstanden, dass meine Angaben zur Bearbeitung meiner
                      Bewerbung genutzt werden. Mehr dazu in der{" "}
                      <a href="/datenschutz" className="text-orange-500 underline underline-offset-2">
                        Datenschutzerklärung
                      </a>
                      .
                    </span>
                  </label>
                </div>
              </fieldset>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => dispatch({ type: "BACK" })}
            disabled={stepIndex === 0}
            className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:text-ink disabled:opacity-0"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Zurück
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!stepValid}
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 font-display font-semibold text-white shadow-glowo transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none disabled:hover:translate-y-0"
          >
            {isContact ? (
              <>
                Bewerbung abschicken
                <Send className="h-4 w-4" aria-hidden />
              </>
            ) : (
              <>
                Weiter
                <ArrowRight className="h-4 w-4" aria-hidden />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

function QuestionField({
  question,
  answer,
  onSingle,
  onMulti,
  onText,
}: {
  question: Question;
  answer: string | string[] | undefined;
  onSingle: (v: string) => void;
  onMulti: (v: string) => void;
  onText: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="font-display text-xl font-semibold text-ink">
        {question.label}
      </legend>
      {question.help && <p className="mt-2 text-sm text-muted">{question.help}</p>}

      {question.type === "single" && (
        <div className="mt-5 grid gap-3">
          {question.options?.map((opt) => {
            const active = answer === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => onSingle(opt)}
                className={`flex items-center justify-between rounded-2xl border-2 px-4 py-3.5 text-left font-medium transition-colors ${
                  active
                    ? "border-orange-500 bg-orange-50 text-ink"
                    : "border-line text-body hover:border-blau-300 hover:text-ink"
                }`}
              >
                {opt}
                {active && <Check className="h-5 w-5 text-orange-500" aria-hidden />}
              </button>
            );
          })}
        </div>
      )}

      {question.type === "multi" && (
        <div className="mt-5 flex flex-wrap gap-2.5">
          {question.options?.map((opt) => {
            const active = Array.isArray(answer) && answer.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => onMulti(opt)}
                className={`rounded-full border-2 px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "border-orange-500 bg-orange-500 text-white"
                    : "border-line text-body hover:border-blau-300 hover:text-ink"
                }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      )}

      {question.type === "text" && (
        <textarea
          rows={4}
          value={typeof answer === "string" ? answer : ""}
          onChange={(e) => onText(e.target.value)}
          placeholder={question.placeholder}
          className="mt-5 w-full resize-none rounded-2xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted focus:border-orange-500 focus:outline-none"
        />
      )}
    </fieldset>
  );
}
