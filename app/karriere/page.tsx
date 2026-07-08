import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { Nav } from "@/components/Nav";
import { SegmentSelect } from "@/components/SegmentSelect";
import { RolesSection } from "@/components/RolesSection";
import { Team } from "@/components/Team";
import { Benefits } from "@/components/Benefits";
import { CareerPath } from "@/components/CareerPath";
import { ApplyTeaser } from "@/components/ApplyTeaser";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyApplyBar } from "@/components/StickyApplyBar";
import { careerHero } from "@/lib/content";

export const metadata: Metadata = {
  title: "Karriere als Elektroniker Berlin | Klüter Elektromontagen",
  description:
    "Elektroniker, Kundendienst und Ausbildung bei Klüter Elektromontagen in Berlin. In 2 Minuten ohne Anschreiben bewerben. 116 Kollegen, klare Perspektiven.",
  robots: { index: true, follow: true },
};

function CareerHeader() {
  return (
    <section className="relative overflow-hidden bg-surface pt-16">
      <div className="grid-bg-light absolute inset-0" aria-hidden />
      <div
        className="absolute right-0 top-24 h-80 w-80 rounded-full bg-orange-100/60 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-5 py-14 text-center sm:px-8 sm:py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-body transition-colors hover:text-orange-500"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden />
          Zurück zur Startseite
        </Link>

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-blau-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blau-700">
          {careerHero.eyebrow}
        </span>

        <h1 className="mt-5 font-display text-4xl font-bold leading-[1.06] tracking-tight text-ink sm:text-5xl">
          {careerHero.h1a} <span className="text-orange-500">{careerHero.h1accent}</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-body">
          {careerHero.sub}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

        <ul className="mt-8 flex flex-col items-center gap-2.5 sm:flex-row sm:justify-center sm:gap-6">
          {careerHero.bullets.map((b) => (
            <li key={b} className="inline-flex items-center gap-2 text-sm text-body">
              <Check className="h-4 w-4 text-blau-600" aria-hidden />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function KarrierePage() {
  return (
    <>
      <Nav />
      <main>
        <CareerHeader />
        <SegmentSelect />
        <RolesSection />
        <Benefits />
        <Team />
        <CareerPath />
        <ApplyTeaser />
        <FAQ />
      </main>
      <Footer />
      <StickyApplyBar />
    </>
  );
}
