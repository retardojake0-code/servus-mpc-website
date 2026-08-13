"use client";

import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { Reveal, RevealItem } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import { Target, Eye, Users, Shield } from "lucide-react";

const PRINCIPLES = [
  "Accountability",
  "Transparency",
  "Responsibility",
  "Participation",
  "Integrity",
  "Fairness",
  "Compliance",
];

const STATUTORY_COMMITTEES = ["Audit Committee", "Election Committee", "Mediation and Conciliation Committee"];
const APPOINTIVE_COMMITTEES = ["Credit Committee", "Ethics Committee", "Education and Training Committee"];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("about.eyebrow")}
        title={t("about.title")}
        description={t("about.desc")}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal stagger className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <RevealItem>
            <div className="h-full rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-sm dark:bg-[hsl(213,45%,15%)] dark:border-white/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(142,45%,32%)] text-white">
                <Target className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                {t("about.mission.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
                {t("about.mission.desc")}
              </p>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="h-full rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-sm dark:bg-[hsl(213,45%,15%)] dark:border-white/10">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(213,62%,22%)] text-white">
                <Eye className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                {t("about.vision.title")}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
                {t("about.vision.desc")}
              </p>
            </div>
          </RevealItem>
        </Reveal>
      </section>

      <section className="bg-white py-24 dark:bg-[hsl(213,45%,15%)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
              How we're governed
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[hsl(213,62%,18%)] dark:text-white">
              Governance built on trust
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
              Servus MPC is directed by a 5-member, member-elected Board of
              Directors, with the General Assembly as our highest
              policy-making body — supported by statutory and appointive
              committees that keep decision-making accountable and fair.
            </p>
          </Reveal>

          <Reveal stagger className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <RevealItem>
              <div className="h-full rounded-[1.75rem] border border-black/5 bg-[hsl(42,38%,96%)] p-8 dark:bg-[hsl(213,55%,9%)] dark:border-white/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(142,45%,32%)] text-white">
                  <Shield className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                  Statutory Committees
                </h3>
                <p className="mt-2 text-sm text-[hsl(220,20%,30%)]/75 dark:text-white/60">
                  Elected directly by the General Assembly
                </p>
                <ul className="mt-4 space-y-2">
                  {STATUTORY_COMMITTEES.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[hsl(220,20%,25%)]/90 dark:text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(142,45%,32%)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="h-full rounded-[1.75rem] border border-black/5 bg-[hsl(42,38%,96%)] p-8 dark:bg-[hsl(213,55%,9%)] dark:border-white/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(213,62%,22%)] text-white">
                  <Users className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                  Appointive Committees
                </h3>
                <p className="mt-2 text-sm text-[hsl(220,20%,30%)]/75 dark:text-white/60">
                  Constituted by the Board of Directors
                </p>
                <ul className="mt-4 space-y-2">
                  {APPOINTIVE_COMMITTEES.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[hsl(220,20%,25%)]/90 dark:text-white/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(213,62%,22%)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
              Our governance principles
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {PRINCIPLES.map((principle) => (
                <span
                  key={principle}
                  className="rounded-full border border-[hsl(142,45%,32%)]/20 bg-white px-4 py-2 text-sm font-medium text-[hsl(213,62%,18%)] dark:border-white/10 dark:bg-[hsl(213,45%,15%)] dark:text-white/85"
                >
                  {principle}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
