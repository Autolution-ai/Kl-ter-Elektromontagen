/* Erkennbare Marken-Logos als Inline-SVG (monochrom, currentColor).
 * Vereinfachte Nachbildungen fuer eine Referenz-Leiste. Vor echtem Go-Live
 * durch offiziell freigegebene Logo-Assets der jeweiligen Marke ersetzen. */

import type { ComponentType } from "react";

type LogoProps = { className?: string };

export function SiemensLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 200 34" className={className} role="img" aria-label="Siemens">
      <text
        x="0"
        y="26"
        fontFamily="var(--font-display), sans-serif"
        fontSize="30"
        fontWeight="500"
        letterSpacing="1.5"
        fill="currentColor"
      >
        SIEMENS
      </text>
    </svg>
  );
}

export function ZalandoLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 150 34" className={className} role="img" aria-label="Zalando">
      <text
        x="0"
        y="27"
        fontFamily="var(--font-body), sans-serif"
        fontSize="30"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="currentColor"
      >
        zalando
      </text>
    </svg>
  );
}

export function BayerLogo({ className }: LogoProps) {
  // Das Bayer-Kreuz: Kreis mit "BAYER" horizontal und vertikal
  return (
    <svg viewBox="0 0 90 90" className={className} role="img" aria-label="Bayer">
      <circle cx="45" cy="45" r="43" fill="none" stroke="currentColor" strokeWidth="3" />
      <g
        fill="currentColor"
        fontFamily="var(--font-display), sans-serif"
        fontWeight="700"
        fontSize="21"
        textAnchor="middle"
      >
        <text x="45" y="52">
          BAYER
        </text>
        <text
          x="45"
          y="52"
          transform="rotate(90 45 45)"
        >
          BAYER
        </text>
      </g>
    </svg>
  );
}

export function DBLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 84 56" className={className} role="img" aria-label="Deutsche Bahn">
      <rect x="2" y="2" width="80" height="52" rx="10" fill="currentColor" />
      <text
        x="42"
        y="42"
        textAnchor="middle"
        fontFamily="var(--font-display), sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="34"
        fill="var(--logo-knockout, #fff)"
      >
        DB
      </text>
    </svg>
  );
}

export function ChariteLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 170 34" className={className} role="img" aria-label="Charité">
      <text
        x="0"
        y="26"
        fontFamily="var(--font-display), serif"
        fontSize="28"
        fontWeight="600"
        letterSpacing="0.5"
        fill="currentColor"
      >
        Charité
      </text>
    </svg>
  );
}

export const brandLogoMap: Record<
  string,
  { Comp: ComponentType<LogoProps>; h: string }
> = {
  siemens: { Comp: SiemensLogo, h: "h-5 sm:h-6" },
  zalando: { Comp: ZalandoLogo, h: "h-5 sm:h-6" },
  bayer: { Comp: BayerLogo, h: "h-10 sm:h-12" },
  db: { Comp: DBLogo, h: "h-8 sm:h-9" },
  charite: { Comp: ChariteLogo, h: "h-6 sm:h-7" },
};
