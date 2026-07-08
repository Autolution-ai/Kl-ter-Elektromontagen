import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/content";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://klueter-karriere.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Karriere als Elektroniker Berlin | Klüter Elektromontagen",
  description:
    "Elektroniker, Kundendienst und Ausbildung bei Klüter Elektromontagen in Berlin. In 2 Minuten ohne Anschreiben bewerben. 116 Kollegen, klare Perspektiven.",
  keywords: [
    "Elektroniker Berlin",
    "Elektroniker Energie- und Gebäudetechnik",
    "Kundendiensttechniker Berlin",
    "Ausbildung Elektroniker Berlin",
    "Klüter Elektromontagen Karriere",
  ],
  openGraph: {
    title: "Karriere als Elektroniker Berlin | Klüter Elektromontagen",
    description:
      "Starke Projekte, echte Entwicklung, ehrliches Feedback. In 2 Minuten ohne Anschreiben bewerben.",
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: company.name,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#116DB1",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#org`,
      name: company.name,
      url: company.website,
      email: company.email,
      telephone: company.phone,
      numberOfEmployees: company.employees,
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}#local`,
      name: company.name,
      telephone: company.phone,
      email: company.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.street,
        postalCode: company.zip,
        addressLocality: company.city,
        addressCountry: "DE",
      },
    },
    {
      "@type": "JobPosting",
      title: "Elektroniker Energie- und Gebäudetechnik (m/w/d)",
      description:
        "Elektroniker für Energie- und Gebäudetechnik in Berlin. Kundendienst oder Projekt, je nach deiner Stärke. Klare Entwicklungsmöglichkeiten.",
      employmentType: "FULL_TIME",
      datePosted: "2026-01-01",
      hiringOrganization: { "@id": `${siteUrl}#org` },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: company.street,
          postalCode: company.zip,
          addressLocality: company.city,
          addressCountry: "DE",
        },
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
