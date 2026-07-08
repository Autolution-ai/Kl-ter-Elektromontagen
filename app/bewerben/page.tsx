import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, ShieldCheck } from "lucide-react";
import { FunnelProvider } from "@/components/Funnel/FunnelContext";
import { ApplicationFunnel } from "@/components/Funnel/ApplicationFunnel";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { segments, type SegmentId } from "@/lib/content";

export const metadata: Metadata = {
  title: "In 2 Minuten bewerben | Klüter Elektromontagen",
  description:
    "Bewirb dich in zwei Minuten bei Klüter Elektromontagen. Ohne Anschreiben, ohne Lebenslauf-Pflicht. Wähle deinen Bereich und beantworte ein paar kurze Fragen.",
  robots: { index: true, follow: true },
};

const validIds = new Set(segments.map((s) => s.id));

export default async function BewerbenPage({
  searchParams,
}: {
  searchParams: Promise<{ bereich?: string }>;
}) {
  const params = await searchParams;
  const bereich =
    params.bereich && validIds.has(params.bereich as SegmentId)
      ? (params.bereich as SegmentId)
      : null;

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-surface pt-16">
        <div className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-body transition-colors hover:text-orange-500"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Zurück zur Startseite
          </Link>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-blau-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-blau-700">
              <Clock className="h-3.5 w-3.5 text-orange-500" aria-hidden />
              Dauert nur 2 Minuten
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Bewirb dich bei Klüter
            </h1>
            <p className="mt-3 text-base leading-relaxed text-body">
              Ohne Anschreiben, ohne Lebenslauf-Pflicht. Beantworte ein paar kurze
              Fragen, den Rest klären wir persönlich.
            </p>
          </div>

          <div className="mt-10">
            <FunnelProvider initialSegment={bereich}>
              <ApplicationFunnel />
            </FunnelProvider>
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted">
            <ShieldCheck className="h-4 w-4 text-blau-600" aria-hidden />
            Deine Angaben nutzen wir nur für deine Bewerbung.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
