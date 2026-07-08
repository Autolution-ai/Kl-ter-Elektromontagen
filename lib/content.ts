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

/* Zielgruppen-Segmente */
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
  short: string;
  sub: string;
  icon: LucideIcon;
  track: FunnelTrack;
  featured?: boolean;
}

export const segments: Segment[] = [
  {
    id: "elektroniker",
    label: "Elektroniker oder Geselle",
    short: "Ausgelernt",
    sub: "Du hast deinen Gesellenbrief und willst endlich wieder anständige Projekte statt Stückwerk.",
    icon: Wrench,
    track: "fachkraft",
    featured: true,
  },
  {
    id: "kundendienst",
    label: "Kundendienst",
    short: "Auf eigene Faust",
    sub: "Rausfahren, Fehler finden, Kunden zufrieden zurücklassen. Und selbst entscheiden, wie.",
    icon: Headset,
    track: "fachkraft",
  },
  {
    id: "projekt",
    label: "Projekt und Baustelle",
    short: "Im Team",
    sub: "Große Projekte im Team, mit erfahrenen Monteuren an deiner Seite. Auch als Einsteiger.",
    icon: HardHat,
    track: "fachkraft",
  },
  {
    id: "ausbildung",
    label: "Ausbildung Elektroniker",
    short: "Energie- und Gebäudetechnik",
    sub: "Dein Start ins Handwerk, mit jemandem, der sich wirklich um dich kümmert.",
    icon: GraduationCap,
    track: "azubi",
  },
  {
    id: "kaufmann",
    label: "Kaufmännische Ausbildung",
    short: "Büro und Organisation",
    sub: "Du hältst den Laden zusammen: Aufträge, Termine, Kundenkontakt.",
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
    tagline:
      "Morgens weißt du selten, was der Tag bringt. Genau das ist der Reiz. Du fährst zum Kunden, suchst den Fehler und bringst die Anlage wieder zum Laufen.",
    icon: Headset,
    points: [
      "Du arbeitest eigenständig beim Kunden, ohne dass dir jemand über die Schulter schaut.",
      "Fehlersuche ist deine Stärke, egal ob Altbau oder moderne Gebäudetechnik.",
      "Du bist das Gesicht von Klüter vor Ort und entscheidest selbst, was zu tun ist.",
      "Fünf bis zehn Jahre Erfahrung helfen dir hier am meisten.",
    ],
    meta: [
      { icon: CarFront, label: "Führerschein brauchst du" },
      { icon: Search, label: "Diagnose statt Schema F" },
    ],
    segment: "kundendienst",
  },
  {
    id: "projekt",
    title: "Projekt und Baustelle",
    tagline:
      "Hier lernst du das Handwerk von Leuten, die es seit Jahren machen. Du packst mit an, übernimmst Schritt für Schritt mehr und wächst mit den Aufgaben.",
    icon: HardHat,
    points: [
      "Du arbeitest im festen Team an Projekten, auf die man am Feierabend stolz ist.",
      "Bauleitende Monteure zeigen dir, worauf es ankommt, statt dich ins kalte Wasser zu werfen.",
      "Auch mit wenig Erfahrung findest du hier deinen Platz.",
      "Wer bleiben und lernen will, kommt bei uns weit.",
    ],
    meta: [
      { icon: Users, label: "Echtes Team" },
      { icon: TrendingUp, label: "Du wächst mit" },
    ],
    segment: "projekt",
  },
  {
    id: "azubi",
    title: "Auszubildende",
    tagline:
      "Elektroniker für Energie- und Gebäudetechnik ist ein Beruf mit Zukunft. Bei uns lernst du ihn richtig, mit jemandem, der sich Zeit für dich nimmt.",
    icon: GraduationCap,
    points: [
      "Du lernst Elektroniker Energie- und Gebäudetechnik von Grund auf.",
      "Ein fester Ausbilder begleitet dich, statt dich zum Kaffeeholen zu schicken.",
      "Alle vier Monate reden wir offen darüber, wo du stehst und was als Nächstes kommt.",
      "Auch mit Hauptschulabschluss hast du bei uns eine echte Chance, wenn du willst.",
    ],
    meta: [
      { icon: Award, label: "Übernahme im Blick" },
      { icon: Compass, label: "Klarer Fahrplan" },
    ],
    segment: "ausbildung",
  },
];

/* Trust: Zahlen */
export const stats = [
  { value: "116", label: "Kolleginnen und Kollegen" },
  { value: "40+", label: "Jahre in Berlin" },
  { value: "B2B · B2C · B2G", label: "vom Privatkunden bis zur Behörde" },
  { value: "1972", label: "familiengeführt seit Gründung" },
];

/* Referenzkunden (echte Logos, siehe components/brandLogos.tsx) */
export const referenceBrands = [
  "siemens",
  "zalando",
  "bayer",
  "db",
  "charite",
] as const;

export const trustHeadline = "Für diese Namen sind wir im Einsatz";
export const trustNote =
  "Ob Industrieanlage, Handelsstandort oder Klinik: Unsere Kunden verlassen sich seit Jahren auf saubere, sichere Elektrik. Als Kalibrierpartner prüfen wir außerdem messrelevante Punkte nach FDA, GMP und DIN ISO 9001, dort zählt jedes Hundertstel.";

/* Was dich bei uns erwartet */
export interface Benefit {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const benefits: Benefit[] = [
  {
    icon: ShieldCheck,
    title: "Auftragslage, die trägt",
    text: "Über vier Jahrzehnte gewachsener Kundenstamm in Berlin. Hier hängt dein Job nicht am nächsten Großauftrag, sondern an gewachsenem Vertrauen.",
  },
  {
    icon: Users,
    title: "Du bist keine Nummer",
    text: "116 Leute, kurze Wege, offene Türen. Der Chef kennt deinen Namen, und wenn dich etwas stört, sagst du es einfach.",
  },
  {
    icon: TrendingUp,
    title: "Weiterkommen, wo du gut bist",
    text: "Wir schauen, wo deine Stärke liegt, im Kundendienst oder auf dem Bau, und geben dir die Fortbildungen, die dich dort wirklich weiterbringen.",
  },
  {
    icon: GraduationCap,
    title: "Meister? Studium? Zeigen wir dir",
    text: "Wer mehr will, den halten wir nicht auf. Meister, Techniker oder ein Studium nebenbei, wir unterstützen dich dabei, statt Steine in den Weg zu legen.",
  },
  {
    icon: Compass,
    title: "Klare Ansagen",
    text: "Du weißt, wer wofür zuständig ist und woran deine Arbeit gemessen wird. Kein Rätselraten, kein Politikspiel.",
  },
  {
    icon: Handshake,
    title: "Feedback, das ehrlich ist",
    text: "Wir sagen dir, wo du stehst, auch wenn es mal unbequem wird. Anders wirst du nicht besser, und darum geht es uns.",
  },
];

/* Deine Entwicklung */
export interface CareerStep {
  title: string;
  text: string;
  icon: LucideIcon;
}

export const careerSteps: CareerStep[] = [
  {
    title: "Ausbildung",
    text: "Du lernst das Handwerk von Grund auf, begleitet von einem festen Ausbilder.",
    icon: GraduationCap,
  },
  {
    title: "Geselle",
    text: "Du arbeitest sicher im Team und übernimmst deine ersten eigenen Aufgaben.",
    icon: Wrench,
  },
  {
    title: "Fachverantwortung",
    text: "Du führst deinen Bereich und wirst zu jemandem, auf den sich das Team verlässt.",
    icon: ShieldCheck,
  },
  {
    title: "Kundendienstspezialist",
    text: "Du fährst eigenständig raus, findest die kniffligen Fehler und entscheidest vor Ort.",
    icon: Headset,
  },
  {
    title: "Bauleitender Monteur",
    text: "Du leitest Baustellen und gibst dein Wissen an die weiter, die gerade anfangen.",
    icon: HardHat,
  },
  {
    title: "Meister oder Studium",
    text: "Wenn du willst, gehst du weiter. Wir unterstützen dich bei Meister, Techniker oder Studium.",
    icon: Award,
  },
];

export const careerHonesty = {
  title: "Karriere heißt bei uns nicht automatisch Chef werden",
  text: "Ehrlich gesagt wird nicht jeder Projektleiter, und das muss auch gar nicht sein. Manche unserer besten Leute führen kein Team, sondern sind einfach die, die es können, wenn es drauf ankommt. Du kannst bei uns fachlich wachsen und Verantwortung tragen, ohne dich um Personalplanung kümmern zu müssen. Welchen Weg du gehst, richtet sich nach dem, was dir liegt.",
};

/* Team */
export interface TeamMember {
  name: string;
  role: string;
}

export const team = {
  eyebrow: "Menschen statt Nummern",
  title: "Die, mit denen du arbeitest",
  intro:
    "Bei uns steht kein anonymer Konzern hinter dir, sondern ein familiengeführter Betrieb, in dem man sich kennt. Vom Azubi bis zum Geschäftsführer redet hier jeder mit jedem.",
  quote:
    "Wir suchen keine Lebensläufe, wir suchen Leute. Wer sauber arbeitet und dazulernen will, findet bei uns einen Platz, an dem er lange bleiben kann.",
  quoteName: "Daniel",
  quoteRole: "Aus dem Klüter-Team",
  members: [
    { name: "Kundendienst", role: "Fehlersuche und Reparatur vor Ort" },
    { name: "Projektteam", role: "Installation auf Baustellen in ganz Berlin" },
    { name: "Ausbildung", role: "Die nächste Generation Elektroniker" },
    { name: "Büro", role: "Aufträge, Termine, Organisation" },
  ] as TeamMember[],
};

/* Werte / Filter (auch im Funnel) */
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
    q: "Brauche ich ein Anschreiben oder einen Lebenslauf?",
    a: "Nein, zum Einstieg reicht uns dein Ausfüllen der paar Fragen. Alles Weitere klären wir am Telefon oder bei einem Kaffee im Betrieb.",
  },
  {
    q: "Ich habe wenig Erfahrung. Habe ich trotzdem eine Chance?",
    a: "Auf jeden Fall. Im Projekt- und Baustellenbereich arbeitest du im Team und wirst von erfahrenen Kollegen angelernt. Die Erfahrung sammelst du bei uns, dafür sind wir da.",
  },
  {
    q: "Reicht ein Hauptschulabschluss für die Ausbildung?",
    a: "Ja. Uns ist wichtiger, dass du zuverlässig bist und Lust auf Technik hast, als welche Note im Zeugnis steht. Motivation schlägt bei uns das Papier.",
  },
  {
    q: "Werde ich nach der Ausbildung übernommen?",
    a: "Wenn deine Leistung stimmt, ist die Übernahme das klare Ziel. Weil wir alle vier Monate offen mit dir sprechen, weißt du früh, wo du stehst und was noch fehlt.",
  },
  {
    q: "Wie geht es nach der Bewerbung weiter?",
    a: "Wir sehen uns deine Antworten an und melden uns telefonisch, meist innerhalb weniger Tage. Kein anonymer Prozess, kein wochenlanges Warten.",
  },
];

/* Hero */
export const hero = {
  eyebrow: "Klüter Elektromontagen · Berlin-Reinickendorf",
  h1a: "Handwerk, bei dem du",
  h1accent: "wieder gern zur Arbeit gehst",
  sub: "Wir suchen Elektroniker, Kundendienst-Leute und Azubis für die Energie- und Gebäudetechnik. Ordentliche Projekte, ehrliche Leute und ein Betrieb, in dem du wächst statt verheizt zu werden.",
  bullets: [
    "In 2 Minuten beworben, ganz ohne Anschreiben",
    "Du wählst selbst, welcher Bereich zu dir passt",
    "Antwort vom echten Team, nicht von einer Personalsoftware",
  ],
};

/* Bewerbungs-Teaser auf der Startseite */
export const applyTeaser = {
  eyebrow: "Wenn es sich richtig anhört",
  title: "Dann lass uns reden",
  text: "Kein langes Bewerbungsverfahren. Beantworte ein paar kurze Fragen zu dir und deinem Bereich, und wir melden uns. Das dauert wirklich nur zwei Minuten.",
};
