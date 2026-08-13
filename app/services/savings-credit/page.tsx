"use client";

import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { DepositRatesTable } from "@/components/deposit-rates-table";
import { SpecialSavingsPlanTable } from "@/components/special-savings-plan-table";
import { SavingsProducts } from "@/components/savings-products";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

export default function SavingsCreditPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("savingsCredit.eyebrow")}
        title={t("savingsCredit.title")}
        description={t("savingsCredit.desc")}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SavingsProducts />
      </section>

      <section id="deposit-rates" className="scroll-mt-24 bg-white py-24 dark:bg-[hsl(213,45%,15%)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
              {t("savingsCredit.ratesEyebrow")}
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[hsl(213,62%,18%)] dark:text-white">
              {t("savingsCredit.ratesTitle")}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
              {t("savingsCredit.ratesDesc")}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <DepositRatesTable />
          </Reveal>
        </div>
      </section>

      <section id="special-savings-plan" className="scroll-mt-24 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
              {t("savingsCredit.planEyebrow")}
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[hsl(213,62%,18%)] dark:text-white">
              {t("savingsCredit.planTitle")}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
              {t("savingsCredit.planDesc")}
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <SpecialSavingsPlanTable />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
