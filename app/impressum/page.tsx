import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum | Klüter Elektromontagen",
  robots: { index: false, follow: true },
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-lg font-semibold text-chalk">{children}</h2>
  );
}

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <p>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).</p>

      <div>
        <Heading>Anbieter</Heading>
        <p className="mt-2">
          {company.name}
          <br />
          {company.street}
          <br />
          {company.zip} {company.city}
        </p>
      </div>

      <div>
        <Heading>Kontakt</Heading>
        <p className="mt-2">
          Telefon: {company.phone}
          <br />
          E-Mail: {company.email}
        </p>
      </div>

      <div>
        <Heading>Vertretungsberechtigte Geschäftsführer</Heading>
        <p className="mt-2">{company.founders.join(", ")}</p>
      </div>

      <div>
        <Heading>Registereintrag</Heading>
        <p className="mt-2">
          Handelsregister: Amtsgericht Berlin-Charlottenburg
          <br />
          Registernummer: HRB [zu ergänzen]
          <br />
          Umsatzsteuer-ID (§ 27a UStG): DE [zu ergänzen]
        </p>
      </div>

      <div>
        <Heading>Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)</Heading>
        <p className="mt-2">
          {company.founders[0]}, Anschrift wie oben.
        </p>
      </div>

      <div>
        <Heading>Streitschlichtung</Heading>
        <p className="mt-2">
          Wir sind nicht bereit und nicht verpflichtet, an
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen.
        </p>
      </div>

      <p className="text-xs text-ink-500">
        Hinweis: Diese Seite ist eine Demo-Karriereseite. Register- und
        Umsatzsteuerangaben sind als Platzhalter gekennzeichnet und vor
        Veröffentlichung zu ergänzen.
      </p>
    </LegalLayout>
  );
}
