"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <Reveal y={32}>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[hsl(45,85%,52%)] px-8 py-16 text-center sm:px-16">
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(213,72%,38%) 0%, transparent 70%)" }}
          />
          <h2 className="relative font-display text-4xl font-semibold tracking-tight text-[hsl(213,62%,16%)] sm:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-[hsl(213,40%,20%)]/85">
            {t("cta.subtitle")}
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/membership"
              className="group inline-flex items-center gap-2 rounded-full bg-[hsl(213,62%,22%)] px-7 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              {t("cta.start")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[hsl(213,62%,22%)]/40 px-7 py-4 text-sm font-semibold text-[hsl(213,62%,20%)] transition-colors hover:bg-white/30 dark:hover:bg-white/10"
            >
              {t("cta.talk")}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
