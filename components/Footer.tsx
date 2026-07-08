import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { company } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-blau-950">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="logo-chip inline-flex">
              <Image
                src="/klueter-logo.png"
                alt="Klüter Elektromontagen"
                width={150}
                height={52}
                className="h-10 w-auto"
              />
            </span>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-blau-100">
              Familiengeführter Elektrobetrieb in Berlin-Reinickendorf. Seit über
              40 Jahren für Privatkunden, Industrie und öffentliche Auftraggeber im
              Einsatz.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-blau-100">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                <span>
                  {company.street}
                  <br />
                  {company.zip} {company.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                <a href={`tel:${company.phoneHref}`} className="hover:text-white">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
              Rechtliches
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-blau-100">
              <li>
                <Link href="/impressum" className="hover:text-white">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-white">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/bewerben" className="hover:text-white">
                  Jetzt bewerben
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-blau-200/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {company.city} · {company.name}. Karriereseite (Demo).</p>
          <p>Geschäftsführer: {company.founders.join(", ")}</p>
        </div>
      </div>
    </footer>
  );
}
