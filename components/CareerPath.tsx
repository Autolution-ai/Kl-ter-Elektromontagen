"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";
import { careerSteps, careerHonesty } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/primitives";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function CareerPath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const railFillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const trigger = {
        trigger: containerRef.current,
        start: "top 72%",
        end: "bottom 80%",
        scrub: 1,
      };

      // Leiterbahn zeichnet sich beim Scrollen
      gsap.fromTo(
        railFillRef.current,
        { scaleY: 0 },
        { scaleY: 1, ease: "none", scrollTrigger: trigger }
      );

      // Knoten leuchten nacheinander auf (blau -> orange)
      gsap.fromTo(
        ".career-node",
        { backgroundColor: "#DCEBF6", borderColor: "#B6D4EC", color: "#116DB1" },
        {
          backgroundColor: "#E8503E",
          borderColor: "#E8503E",
          color: "#ffffff",
          stagger: 0.6,
          ease: "none",
          scrollTrigger: trigger,
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    },
    { scope: containerRef }
  );

  return (
    <Section id="entwicklung">
      <SectionHeading
        eyebrow="Deine Entwicklung"
        title="Vom ersten Tag bis zum Meisterbrief"
        intro="Bei uns läufst du keinen starren Karriereplan ab. Du entwickelst dich in die Richtung, die zu dir passt, Schritt für Schritt."
      />

      <div ref={containerRef} className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <ol className="relative pl-14">
          <div
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-0.5 bg-line"
            aria-hidden
          />
          <div
            ref={railFillRef}
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-0.5 origin-top bg-orange-500"
            aria-hidden
          />

          {careerSteps.map((step, i) => (
            <li key={step.title} className="relative pb-8 last:pb-0">
              <span
                className="career-node absolute left-[-2.75rem] top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-blau-100 text-blau-700"
                aria-hidden
              >
                <step.icon className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <div className="rounded-2xl border border-line bg-white p-5 shadow-card">
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs font-bold text-orange-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-sm text-body">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <aside className="rounded-3xl border border-orange-200 bg-orange-50 p-7 lg:sticky lg:top-24">
          <Quote className="h-8 w-8 text-orange-500" aria-hidden />
          <h3 className="mt-4 font-display text-xl font-bold text-ink">
            {careerHonesty.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-body">
            {careerHonesty.text}
          </p>
        </aside>
      </div>
    </Section>
  );
}
