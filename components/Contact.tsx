"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { company, contact } from "@/lib/content";
import { viewportOnce } from "@/lib/motion";

export function Contact() {
  return (
    <section id="kontakt" className="px-5 py-16 sm:px-8 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-blau-700 to-blau-950 px-6 py-12 shadow-cardhover sm:px-12 sm:py-14"
      >
        <div className="grid-bg absolute inset-0 opacity-40" aria-hidden />
        <span
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-orange-500/30 blur-3xl"
          aria-hidden
        />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-orange-400">
              <span className="h-px w-6 bg-orange-500" aria-hidden />
              {contact.eyebrow}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              {contact.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-blau-100">
              {contact.text}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${company.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 font-display font-semibold text-white shadow-glowo transition-transform hover:-translate-y-0.5"
              >
                <Phone className="h-4 w-4" aria-hidden />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 font-display font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Mail className="h-4 w-4" aria-hidden />
                E-Mail schreiben
              </a>
            </div>
          </div>

          <dl className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-blau-200">Adresse</dt>
                <dd className="mt-0.5 text-sm text-white">
                  {company.street}, {company.zip} {company.city}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-blau-200">Telefon</dt>
                <dd className="mt-0.5 text-sm text-white">{company.phone}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-blau-200">E-Mail</dt>
                <dd className="mt-0.5 break-all text-sm text-white">{company.email}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-blau-200">Erreichbarkeit</dt>
                <dd className="mt-0.5 text-sm text-white">{contact.hours}</dd>
              </div>
            </div>
          </dl>
        </div>
      </motion.div>
    </section>
  );
}
