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
        // Anthrazit-Basis
        ink: {
          950: "#0B0D10",
          900: "#0E1116",
          800: "#151A21",
          700: "#1E252E",
          600: "#2A323D",
          500: "#3A4552",
        },
        // Signal-Akzent (Strom/Energie)
        signal: {
          DEFAULT: "#F5B301",
          400: "#FFC72C",
          500: "#F5B301",
          600: "#D69700",
        },
        // Sekundär kühles Struktur-Blau
        volt: {
          DEFAULT: "#2E7BE4",
          400: "#4C93F0",
          500: "#2E7BE4",
          600: "#1E5FBF",
        },
        chalk: "#F5F6F8",
        muted: "#98A2B1",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "pulse-node": {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.15)" },
        },
      },
      animation: {
        "pulse-node": "pulse-node 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
