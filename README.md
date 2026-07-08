# Klüter Elektromontagen – Karriere-Landingpage (Demo)

Karriere-Landingpage mit mehrstufigem Bewerber-Funnel für Klüter Elektromontagen (Berlin).
Ziel: mehr passende Elektroniker und Azubis gewinnen, mit weniger Aufwand in der Vorauswahl.

## Tech-Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (Sektions-Animationen) + GSAP/ScrollTrigger (Leiterbahn-Animation)
- Lucide React (Icons)
- Fonts lokal via `next/font` (DSGVO-konform, kein externer Aufruf)

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Server
```

## Aufbau

- `app/` – Layout (SEO, JSON-LD), Startseite, Impressum, Datenschutz
- `components/` – Sektionen (Hero, SegmentSelect, Rollen, Trust, Benefits, CareerPath, FAQ, Footer)
- `components/Funnel/` – Bewerber-Funnel (Context/Reducer, deklarative Fragen, Zusammenfassung)
- `lib/content.ts` – zentrale Quelle für Texte und Firmendaten
- `lib/motion.ts` – Framer-Motion-Varianten

## Corporate Identity

Farben aus dem Firmenlogo (`public/klueter-logo.png`): Blau `#116DB1` als Struktur- und
Headline-Farbe, Orange `#E8503E` als CTA- und Energie-Akzent. Helles, professionelles Theme.
Das Logo ist in Navigation und Footer eingebunden.

## Bewerber-Funnel

Der Funnel liegt auf der eigenen Unterseite `/bewerben`. Die Startseite zeigt nur einen kurzen
Teaser mit Call-to-Action. Zielgruppen-Karten und Rollen-CTAs verlinken mit vorausgewähltem
Bereich (`/bewerben?bereich=<id>`), der Funnel überspringt dann die Bereichswahl.

Clientseitiger Zustandsautomat mit drei Tracks (Fachkraft, Ausbildung, kaufmännische Ausbildung).

**Demo-Modus:** Die Bewerbung wird nicht versendet oder gespeichert; am Ende erscheint eine
Zusammenfassung. Für den Echtbetrieb kann eine API-Route (z. B. E-Mail-Versand) ergänzt werden.
Honeypot-Feld und Datenschutz-Checkbox sind bereits vorbereitet.

## Offene Punkte vor Go-Live

- Impressum: HRB-Nummer und USt-IdNr ergänzen (aktuell als `[zu ergänzen]` markiert).
- Referenzen: Marken-Logos in `components/brandLogos.tsx` sind vereinfachte Nachbildungen. Vor Go-Live durch offiziell freigegebene Logo-Assets ersetzen.
- Team: Foto-Platzhalter in `components/Team.tsx` nach dem Fototermin durch echte Aufnahmen ersetzen.
- Datenschutzerklärung rechtlich prüfen lassen.
- Optional: echter Formular-Versand (API-Route) statt Demo-Zusammenfassung.
