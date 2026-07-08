import type { LucideIcon } from "lucide-react";
import {
  Wrench,
  GraduationCap,
  Headset,
  HardHat,
  Calculator,
  ShieldCheck,
  TrendingUp,
  Users,
  Compass,
  Handshake,
  Award,
  Gauge,
  MapPin,
  CarFront,
  Search,
} from "lucide-react";

/* Firmendaten (oeffentlich recherchiert) */
export const company = {
  name: "Klüter Elektromontagen GmbH",
  shortName: "Klüter Elektromontagen",
  street: "Nordlichtstraße 63–65",
  zip: "13405",
  city: "Berlin",
  district: "Reinickendorf",
  phone: "(030) 462 37 83",
  phoneHref: "+4930462 3783".replace(/\s/g, ""),
  email: "mail@klueter-elektromontagen.de",
  website: "https://www.klueter-elektromontagen.de",
  employees: "116",
  years: "40+",
  founders: ["Hermann Klüter", "Stephan Klüter", "Ronny Löffler"],
};

/* Zielgruppen-Segmente (Auswahl am Seitenanfang) */
export type SegmentId =
  | "elektroniker"
  | "ausbildung"
  | "kundendienst"
  | "projekt"
  | "kaufmann";

export type FunnelTrack = "fachkraft" | "azubi" | "kaufmann";

export interface Segment {
  id: SegmentId;
  label: string;
  sub: string;
  icon: LucideIcon;
  track: FunnelTrack;
}

export const segments: Segment[] = [
  {
    id: "elektroniker",
    label: "Ich bin Elektroniker / Geselle",
    sub: "Ausgelernt und bereit für den nächsten Schritt.",
    icon: Wrench,
    track: "fachkraft",
  },
  {
    id: "kundendienst",
    label: "Ich will in den Kundendienst",
    sub: "Fehlersuche, Verantwortung, direkter Kundenkontakt.",
    icon: Headset,
    track: "fachkraft",
  },
  {
    id: "projekt",
    label: "Ich will auf die Baustelle / ins Projekt",
    sub: "Arbeit im Team, auch mit weniger Erfahrung möglich.",
    icon: HardHat,
    track: "fachkraft",
  },
  {
    id: "ausbildung",
    label: "Ich suche eine Ausbildung",
    sub: "Elektroniker Energie- und Gebäudetechnik.",
    icon: GraduationCap,
    track: "azubi",
  },
  {
    id: "kaufmann",
    label: "Ich suche eine kaufmännische Ausbildung",
    sub: "Organisation, Zahlen, Büro und Kundenkontakt.",
    icon: Calculator,
    track: "kaufmann",
  },
];

/* Rollen im Detail */
export interface Role {
  id: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  points: string[];
  meta: { icon: LucideIcon; label: string }[];
  segment: SegmentId;
}

export const roles: Role[] = [
  {
    id: "kundendienst",
    title: "Kundendiensttechniker",
    tagline: "Du fährst raus, findest den Fehler und löst ihn selbst.",
    icon: Headset,
    points: [
      "Selbstständiges Arbeiten beim Kunden vor Ort",
      "Fehlersuche an Anlagen und Installationen",
      "Direkter Kundenkontakt und eigene Verantwortung",
      "5 bis 10 Jahre Erfahrung sind ideal",
    ],
    meta: [
      { icon: CarFront, label: "Führerschein wichtig" },
      { icon: Search, label: "Diagnose & Reparatur" },
    ],
    segment: "kundendienst",
  },
  {
    id: "projekt",
    title: "Projekt- und Baustellenmitarbeiter",
    tagline: "Du wächst im Team und wirst von erfahrenen Monteuren angeleitet.",
    icon: HardHat,
    points: [
      "Arbeit im Team auf spannenden Projekten",
      "Anleitung durch bauleitende Monteure",
      "Auch mit weniger Erfahrung möglich",
      "Klarer Weg zur Weiterentwicklung",
    ],
    meta: [
      { icon: Users, label: "Teamarbeit" },
      { icon: TrendingUp, label: "Entwicklung möglich" },
    ],
    segment: "projekt",
  },
  {
    id: "azubi",
    title: "Auszubildende",
    tagline: "Elektroniker Energie- und Gebäudetechnik, mit echter Betreuung.",
    icon: GraduationCap,
    points: [
      "Ausbildung Elektroniker Energie- und Gebäudetechnik",
      "Feste Betreuung statt Kaffee kochen",
      "Feedback alle 4 Monate, damit du weißt wo du stehst",
      "Chance auch mit Hauptschulabschluss, wenn die Motivation stimmt",
    ],
    meta: [
      { icon: Award, label: "Übernahme möglich" },
      { icon: Compass, label: "Klare Perspektive" },
    ],
    segment: "ausbildung",
  },
];

/* Trust: Zahlen */
export const stats = [
  { value: "116", label: "Mitarbeiter im Betrieb" },
  { value: "40+", label: "Jahre am Markt" },
  { value: "3", label: "Kundengruppen: B2B, B2C, B2G" },
  { value: "1972", label: "familiengeführt seit Gründung" },
];

/* Trust: Referenz-Wortmarken.
 * PLATZHALTER: typografische Wortmarken, KEINE Original-Logos.
 * Sobald Logo-Freigaben vorliegen, hier die freigegebenen Asset-Dateien einsetzen. */
export const referenceBrands = [
  "Siemens",
  "Zalando",
  "Bayer",
  "Deutsche Bahn",
  "Charité",
];

export const trustNote =
  "Projekte unter anderem für namhafte Industrie-, Handels- und Pharmakunden. Als Kalibrierpartner prüfen wir messrelevante Punkte nach FDA, GMP und DIN ISO 9001.";

/* Was dich bei uns erwartet */
export interface Benefit {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const benefits: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Sichere Auftragslage",
    text: "Über vier Jahrzehnte Kundenstamm in Berlin. Deine Arbeit ist nicht vom nächsten Großauftrag abhängig.",
  },
  {
    icon: Users,
    title: "Keine Nummer im System",
    text: "116 Kollegen, flache Hierarchien. Man kennt sich, und deine Meinung zählt.",
  },
  {
    icon: TrendingUp,
    title: "Fachliche Weiterentwicklung",
    text: "Fortbildungen, die zu deiner Stärke passen. Kundendienst oder Projekt, je nachdem wo du gut bist.",
  },
  {
    icon: GraduationCap,
    title: "Unterstützung bei Meister & Studium",
    text: "Wenn du weiter willst, halten wir dich nicht auf. Wir unterstützen Meister, Techniker und Studium.",
  },
  {
    icon: Compass,
    title: "Klare Strukturen",
    text: "Du weißt, wer für was zuständig ist und woran du gemessen wirst. Kein Rätselraten.",
  },
  {
    icon: Handshake,
    title: "Ehrliches Feedback",
    text: "Wir sagen dir, wo du stehst. Auch dann, wenn es unbequem ist. So kommst du wirklich weiter.",
  },
];

/* Deine Entwicklung (Karrierepfad) */
export interface CareerStep {
  title: string;
  text: string;
  icon: LucideIcon;
}

export const careerSteps: CareerStep[] = [
  {
    title: "Ausbildung",
    text: "Elektroniker Energie- und Gebäudetechnik mit fester Betreuung.",
    icon: GraduationCap,
  },
  {
    title: "Geselle",
    text: "Du arbeitest sicher im Team und übernimmst erste eigene Aufgaben.",
    icon: Wrench,
  },
  {
    title: "Fachverantwortung",
    text: "Du führst Aufgabenbereiche und wirst zur festen Größe im Team.",
    icon: ShieldCheck,
  },
  {
    title: "Kundendienstspezialist",
    text: "Du fährst eigenständig raus, findest Fehler und entscheidest vor Ort.",
    icon: Headset,
  },
  {
    title: "Bauleitender Monteur",
    text: "Du leitest Baustellen an und gibst dein Wissen an jüngere Kollegen weiter.",
    icon: HardHat,
  },
  {
    title: "Meister / Studium",
    text: "Wir unterstützen dich bei Meister, Techniker oder Studium.",
    icon: Award,
  },
];

export const careerHonesty = {
  title: "Karriere muss bei uns nicht Führung heißen",
  text: "Nicht jeder wird Projektleiter, und das ist ehrlich gesagt auch gut so. Bei uns kannst du fachlich wachsen und Verantwortung übernehmen, ohne ein Team führen zu müssen. Der Weg richtet sich nach deiner Stärke.",
};

/* Werte / Filter (auch im Funnel genutzt) */
export const values = [
  "Zuverlässigkeit",
  "Team",
  "Geld",
  "Fortbildung",
  "Aufstieg",
  "Sicherheit",
  "Verantwortung",
  "Selbstständigkeit",
  "Klare Kommunikation",
];

/* FAQ */
export const faqs = [
  {
    q: "Brauche ich ein Anschreiben?",
    a: "Nein. Du startest ohne Anschreiben. Beantworte ein paar Fragen und wir melden uns bei dir.",
  },
  {
    q: "Ich habe wenig Erfahrung. Passt das trotzdem?",
    a: "Ja. Im Projekt- und Baustellenbereich arbeitest du im Team und wirst angeleitet. Erfahrung sammelst du bei uns.",
  },
  {
    q: "Kann ich mich auch ohne guten Schulabschluss ausbilden lassen?",
    a: "Ja. Auch mit Hauptschulabschluss hast du eine Chance, wenn die Motivation stimmt. Uns zählt der Mensch, nicht nur das Zeugnis.",
  },
  {
    q: "Werde ich nach der Ausbildung übernommen?",
    a: "Bei guter Leistung ist die Übernahme das Ziel. Du bekommst alle 4 Monate Feedback und weißt so früh, wo du stehst.",
  },
  {
    q: "Wie geht es nach der Bewerbung weiter?",
    a: "Wir schauen uns deine Antworten an und rufen dich an. Kein langes Warten, kein anonymer Prozess.",
  },
];

/* Hero-Inhalte */
export const hero = {
  eyebrow: "Karriere bei Klüter Elektromontagen · Berlin",
  h1: "Elektroniker für Energie- und Gebäudetechnik gesucht",
  h1accent: "werde Teil von Klüter Elektromontagen",
  sub: "Starke Projekte, klare Entwicklungsmöglichkeiten und ein Team, in dem du fachlich wächst.",
  bullets: [
    "In 2 Minuten bewerben",
    "Ohne Anschreiben starten",
    "Passenden Bereich auswählen",
  ],
};
