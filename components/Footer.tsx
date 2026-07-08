import { MapPin, Phone, Mail, Zap } from "lucide-react";
import { company } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-ink-700 bg-ink-950">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-signal text-ink-950">
                <Zap className="h-5 w-5" strokeWidth={2.5} aria-hidden />
              </span>
              <span className="font-display text-lg font-bold text-chalk">
                KLÜTER Elektromontagen
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Familiengeführter Elektrobetrieb in Berlin. Seit über 40 Jahren für
              Industrie, Handel und öffentliche Auftraggeber im Einsatz.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-chalk">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal" aria-hidden />
                <span>
                  {company.street}
                  <br />
                  {company.zip} {company.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-signal" aria-hidden />
                <a href={`tel:${company.phoneHref}`} className="hover:text-chalk">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-signal" aria-hidden />
                <a href={`mailto:${company.email}`} className="hover:text-chalk">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-chalk">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a href="/impressum" className="hover:text-chalk">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-chalk">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#bewerben" className="hover:text-chalk">
                  Jetzt bewerben
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-800 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {company.city} · {company.name}. Karriereseite (Demo).
          </p>
          <p>Geschäftsführer: {company.founders.join(", ")}</p>
        </div>
      </div>
    </footer>
  );
}
