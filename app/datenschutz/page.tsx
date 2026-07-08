import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Klüter Elektromontagen",
  robots: { index: false, follow: true },
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-lg font-semibold text-chalk">{children}</h2>
  );
}

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <div>
        <Heading>1. Verantwortlicher</Heading>
        <p className="mt-2">
          {company.name}, {company.street}, {company.zip} {company.city}.
          <br />
          Telefon: {company.phone} · E-Mail: {company.email}
        </p>
      </div>

      <div>
        <Heading>2. Hosting</Heading>
        <p className="mt-2">
          Diese Website wird bei einem Dienstleister gehostet. Beim Aufruf werden
          technisch notwendige Server-Logdaten (IP-Adresse, Zeitpunkt, abgerufene
          Seite) verarbeitet. Rechtsgrundlage ist unser berechtigtes Interesse an
          einem sicheren Betrieb (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
      </div>

      <div>
        <Heading>3. Schriftarten</Heading>
        <p className="mt-2">
          Wir binden Schriftarten lokal ein. Es findet kein Verbindungsaufbau zu
          externen Font-Servern statt, es werden keine Font-Daten an Dritte
          übermittelt.
        </p>
      </div>

      <div>
        <Heading>4. Bewerbungsformular</Heading>
        <p className="mt-2">
          Wenn du das Bewerbungsformular nutzt, verarbeiten wir deine Angaben
          ausschließlich zur Bearbeitung deiner Bewerbung (Art. 6 Abs. 1 lit. b
          DSGVO, § 26 BDSG). Die Angaben werden nach Abschluss des Verfahrens
          gelöscht, sofern keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
        </p>
        <p className="mt-2 text-xs text-ink-500">
          Hinweis Demo: In dieser Demo-Fassung werden keine Daten an einen Server
          übertragen oder gespeichert. Die Eingaben bleiben im Browser.
        </p>
      </div>

      <div>
        <Heading>5. Deine Rechte</Heading>
        <p className="mt-2">
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
          der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem kannst
          du dich bei einer Aufsichtsbehörde beschweren.
        </p>
      </div>

      <div>
        <Heading>6. Kontakt in Datenschutzfragen</Heading>
        <p className="mt-2">
          Wende dich bei Fragen zum Datenschutz an: {company.email}
        </p>
      </div>

      <p className="text-xs text-ink-500">
        Hinweis: Diese Datenschutzerklärung ist eine Vorlage für eine
        Demo-Karriereseite und vor Veröffentlichung rechtlich zu prüfen und zu
        ergänzen.
      </p>
    </LegalLayout>
  );
}
