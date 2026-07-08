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

      // Knoten leuchten nacheinander auf
      gsap.fromTo(
        ".career-node",
        { backgroundColor: "#2A323D", borderColor: "#3A4552", scale: 1 },
        {
          backgroundColor: "#F5B301",
          borderColor: "#F5B301",
          scale: 1.12,
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
        title="Vom ersten Tag bis zum Meister"
        intro="Bei uns steht kein starrer Karriereplan. Du entwickelst dich in die Richtung, die zu deiner Stärke passt."
      />

      <div ref={containerRef} className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        {/* Leiterbahn-Timeline */}
        <ol className="relative pl-14">
          {/* Rail Hintergrund */}
          <div
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-0.5 bg-ink-700"
            aria-hidden
          />
          {/* Rail Fuellung (animiert) */}
          <div
            ref={railFillRef}
            className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-0.5 origin-top bg-signal"
            aria-hidden
          />

          {careerSteps.map((step, i) => (
            <li key={step.title} className="relative pb-8 last:pb-0">
              <span
                className="career-node absolute left-[-2.75rem] top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-ink-600 text-ink-950"
                aria-hidden
              >
                <step.icon className="h-5 w-5" strokeWidth={2.4} />
              </span>
              <div className="rounded-2xl border border-ink-700 bg-ink-900/50 p-5">
                <div className="flex items-center gap-2">
                  <span className="font-display text-xs font-bold text-signal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-chalk">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-1.5 text-sm text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* Ehrliche Botschaft */}
        <aside className="rounded-3xl border border-signal/30 bg-gradient-to-br from-signal/10 to-transparent p-7 lg:sticky lg:top-24">
          <Quote className="h-8 w-8 text-signal" aria-hidden />
          <h3 className="mt-4 font-display text-xl font-bold text-chalk">
            {careerHonesty.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-chalk/80">
            {careerHonesty.text}
          </p>
        </aside>
      </div>
    </Section>
  );
}
