"use client";

import { PageHero } from "@/components/page-hero";
import { MembershipForm } from "@/components/membership-form";
import { Reveal, RevealItem } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import { CheckCircle2, FileText, HeartPulse } from "lucide-react";

const QUALIFICATIONS = [
  "At least 18 years old",
  "Filipino Citizen",
  "Residing within Region X",
  "PMES Certificate (valid for 6 months)",
  "Minimum share capital contribution + membership fee",
];

const STEPS = [
  {
    step: "01",
    title: "Complete the PMES",
    text: "Attend the Pre-Membership Education Seminar conducted by the Education Committee.",
  },
  {
    step: "02",
    title: "Submit Your Application",
    text: "Fill up the Membership Application Form and submit required documents at any Servus MPC branch.",
  },
  {
    step: "03",
    title: "Pay Fees & Share Capital",
    text: "Pay the membership fee and initial share capital contribution through the Teller/Cashier.",
  },
  {
    step: "04",
    title: "Approval & Documents",
    text: "Once approved by the Manager, receive your Official Receipt and passbook — you're now a member-owner.",
  },
];

export default function MembershipPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("membership.eyebrow")}
        title={t("membership.title")}
        description={t("membership.desc")}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
            {t("membership.getStarted")}
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[hsl(213,62%,18%)] dark:text-white">
            {t("membership.howTitle")}
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
            {t("membership.howDesc")}
          </p>
        </Reveal>

        <Reveal stagger className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <RevealItem>
            <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[hsl(142,50%,38%)] via-[hsl(160,45%,34%)] to-[hsl(213,60%,30%)] p-8 shadow-lg">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, hsl(45,90%,60%) 0%, transparent 70%)" }}
              />
              <h3 className="relative font-display text-xl font-semibold text-white">
                {t("membership.qualTitle")}
              </h3>
              <ul className="relative mt-6 space-y-4">
                {QUALIFICATIONS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[hsl(45,90%,65%)]" />
                    <span className="text-sm leading-relaxed text-white/90">{item}</span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-6 w-6 shrink-0 text-[hsl(45,90%,65%)]" />
                  <div className="text-sm leading-relaxed text-white/90">
                    <p className="font-medium text-white">Photocopies of Documents</p>
                    <p className="mt-1 text-white/75">
                      PSA Marriage Certificate (if married), Birth certificate of
                      member and children, Tax Identification Number (TIN),
                      valid ID
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="relative h-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[hsl(213,60%,32%)] via-[hsl(200,50%,32%)] to-[hsl(142,50%,36%)] p-8 shadow-lg">
              <div
                className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
                style={{ background: "radial-gradient(circle, hsl(45,90%,60%) 0%, transparent 70%)" }}
              />
              <h3 className="relative font-display text-xl font-semibold text-white">
                {t("membership.stepsTitle")}
              </h3>
              <div className="relative mt-6 space-y-6">
                {STEPS.map((s) => (
                  <div key={s.step} className="flex gap-5">
                    <span className="font-display text-2xl font-semibold text-[hsl(45,90%,65%)]">
                      {s.step}
                    </span>
                    <div>
                      <p className="font-display text-base font-semibold text-white">
                        {s.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/75">
                        {s.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealItem>
        </Reveal>

        <Reveal delay={0.15} className="mt-8">
          <div className="flex items-start gap-4 rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm dark:bg-[hsl(213,45%,15%)] dark:border-white/10">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(213,62%,22%)] text-white">
              <HeartPulse className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-base font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                Member Mutual Aid Program
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
                As a full-pledged member, you&apos;re automatically part of our
                mutual aid program. When a fellow member passes away, a small
                ₱20.00 contribution is collected from participating members&apos;
                Regular Savings to support the bereaved family — a small way
                members look out for each other.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-white py-24 dark:bg-[hsl(213,45%,15%)]">
        <Reveal className="mx-auto max-w-3xl px-6 lg:px-10">
          <MembershipForm />
        </Reveal>
      </section>
    </>
  );
}
