import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Markenblau (aus Logo: Blitz + "Elektromontagen")
        blau: {
          50: "#EEF5FB",
          100: "#DCEBF6",
          200: "#B6D4EC",
          300: "#84B6DD",
          400: "#4E9BD1",
          500: "#2C82C0",
          600: "#116DB1", // Primär
          700: "#0A5390",
          800: "#0A426F",
          900: "#0B3252",
          950: "#08243D",
        },
        // Markenorange (aus Logo: Schriftzug "KLÜTER")
        orange: {
          50: "#FEF1EE",
          100: "#FBE3DE",
          200: "#F7C6BB",
          300: "#F2A192",
          400: "#F0755E",
          500: "#E8503E", // CTA-Akzent
          600: "#CE3B2A",
          700: "#AB2E20",
        },
        // Helle Neutrals
        paper: "#FFFFFF",
        surface: "#F4F7FB",
        line: "#E1E8F0",
        ink: "#0E2233", // Headlines (tiefes Blauschwarz)
        body: "#41546A", // Fliesstext
        muted: "#6C7E92",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,34,51,0.04), 0 8px 24px -12px rgba(14,34,51,0.12)",
        cardhover: "0 2px 4px rgba(14,34,51,0.06), 0 24px 48px -20px rgba(17,109,177,0.30)",
        glowo: "0 12px 30px -10px rgba(232,80,62,0.45)",
      },
      keyframes: {
        "pulse-node": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.18)" },
        },
        "flow": {
          "0%": { strokeDashoffset: "24" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 2.4s ease-in-out infinite",
        "flow": "flow 1.2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
