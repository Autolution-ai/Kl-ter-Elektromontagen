import type { FunnelTrack } from "@/lib/content";
import { values } from "@/lib/content";

export type QuestionType = "single" | "multi" | "text";

export interface Question {
  id: string;
  type: QuestionType;
  label: string;
  help?: string;
  options?: string[];
  placeholder?: string;
  optional?: boolean;
}

const fachkraft: Question[] = [
  {
    id: "ausbildung",
    type: "single",
    label: "Hast du eine abgeschlossene Ausbildung als Elektroniker?",
    options: ["Ja", "Nein, aber Berufserfahrung", "Nein"],
  },
  {
    id: "erfahrung",
    type: "single",
    label: "Wie viele Jahre Berufserfahrung hast du?",
    options: ["Unter 2 Jahre", "2 bis 5 Jahre", "5 bis 10 Jahre", "Über 10 Jahre"],
  },
  {
    id: "kundendienst",
    type: "single",
    label: "Hast du Erfahrung im Kundendienst?",
    options: ["Ja, mehrere Jahre", "Etwas", "Noch nicht"],
  },
  {
    id: "fuehrerschein",
    type: "single",
    label: "Hast du einen Führerschein?",
    options: ["Ja", "Nein"],
  },
  {
    id: "wohnort",
    type: "single",
    label: "Wohnst du in Berlin oder Umgebung?",
    options: ["Ja", "Nein, aber Umzug möglich", "Nein"],
  },
  {
    id: "start",
    type: "single",
    label: "Wann könntest du starten?",
    options: ["Sofort", "In 1 Monat", "In 3 Monaten", "Flexibel"],
  },
  {
    id: "werte",
    type: "multi",
    label: "Was ist dir bei deinem Arbeitgeber wichtig?",
    help: "Wähle alles aus, was für dich zählt.",
    options: values,
  },
  {
    id: "entwicklung",
    type: "single",
    label: "Möchtest du dich fachlich weiterentwickeln?",
    options: ["Ja, klar", "Vielleicht", "Mir reicht solide Arbeit"],
  },
];

const azubi: Question[] = [
  {
    id: "abschluss",
    type: "single",
    label: "Welchen Schulabschluss hast du oder machst du gerade?",
    options: [
      "Hauptschulabschluss",
      "Mittlerer Schulabschluss (MSA)",
      "Abitur / Fachabitur",
      "Noch in der Schule",
    ],
  },
  {
    id: "noten",
    type: "single",
    label: "Wie sind deine Noten ungefähr?",
    options: ["Eher gut (1-2)", "Mittel (3)", "Durchwachsen (3-4)", "Ich lege in der Praxis zu"],
  },
  {
    id: "motivation",
    type: "text",
    label: "Warum interessiert dich Elektrotechnik?",
    placeholder: "Ein, zwei Sätze reichen völlig.",
  },
  {
    id: "praktikum",
    type: "single",
    label: "Hast du schon ein Praktikum gemacht?",
    options: ["Ja, im Elektrobereich", "Ja, woanders", "Noch nicht"],
  },
  {
    id: "fuehrerschein",
    type: "single",
    label: "Führerschein geplant?",
    options: ["Habe ich schon", "Ja, ist geplant", "Noch nicht"],
  },
  {
    id: "startjahr",
    type: "single",
    label: "Wann willst du starten?",
    options: ["2026", "2027", "So bald wie möglich"],
  },
];

const kaufmann: Question[] = [
  {
    id: "abschluss",
    type: "single",
    label: "Welchen Schulabschluss hast du oder machst du gerade?",
    options: [
      "Hauptschulabschluss",
      "Mittlerer Schulabschluss (MSA)",
      "Abitur / Fachabitur",
      "Noch in der Schule",
    ],
  },
  {
    id: "noten",
    type: "single",
    label: "Wie sind deine Noten ungefähr?",
    options: ["Eher gut (1-2)", "Mittel (3)", "Durchwachsen (3-4)", "Ich lege in der Praxis zu"],
  },
  {
    id: "motivation",
    type: "text",
    label: "Warum interessiert dich der kaufmännische Bereich?",
    placeholder: "Was reizt dich an Organisation, Zahlen oder Kundenkontakt?",
  },
  {
    id: "startjahr",
    type: "single",
    label: "Wann willst du starten?",
    options: ["2026", "2027", "So bald wie möglich"],
  },
];

export const questionsByTrack: Record<FunnelTrack, Question[]> = {
  fachkraft,
  azubi,
  kaufmann,
};

export const trackLabels: Record<FunnelTrack, string> = {
  fachkraft: "Elektroniker / Kundendienst / Projekt",
  azubi: "Ausbildung Elektroniker",
  kaufmann: "Kaufmännische Ausbildung",
};
