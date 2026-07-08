import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-signal"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Zurück zur Karriereseite
      </Link>
      <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-chalk sm:text-4xl">
        {title}
      </h1>
      <div className="prose-legal mt-8 space-y-6 text-sm leading-relaxed text-muted">
        {children}
      </div>
    </main>
  );
}
