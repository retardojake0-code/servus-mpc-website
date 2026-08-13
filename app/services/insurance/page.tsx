"use client";

import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { Reveal, RevealItem } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import {
  HeartPulse,
  Home,
  ShieldCheck,
  Users,
  CheckCircle,
  ArrowRight,
  Truck,
  AlertTriangle,
  FileText,
  Landmark,
} from "lucide-react";

const PLANS = [
  {
    icon: HeartPulse,
    title: "Health & Life Cover",
    desc: "Affordable life and health protection for members and their immediate families, with straightforward enrollment.",
  },
  {
    icon: Home,
    title: "Property & Asset Insurance",
    desc: "Protect your home, farm equipment, or business assets against fire, theft, and weather damage.",
  },
  {
    icon: Users,
    title: "Group & Family Plans",
    desc: "Bundle coverage across household members at reduced group rates, exclusive to cooperative members.",
  },
  {
    icon: ShieldCheck,
    title: "Loan Protection Cover",
    desc: "Optional add-on that settles an outstanding loan balance in the event of death or permanent disability.",
  },
];

const ADDITIONAL_COVERAGE = [
  {
    icon: Truck,
    badge: "CTPL",
    title: "Compulsory Third Party Liability",
    desc: "Protects the general public from dangers caused by motor vehicles.",
  },
  {
    icon: ShieldCheck,
    badge: "COOP AKSI",
    title: "Personal Accident Insurance",
    desc: "Gives you peace of mind.",
  },
  {
    icon: AlertTriangle,
    badge: "Advantage",
    title: "Micro Fire Insurance",
    desc: "Affordable annual premium to protect properties in case of physical damages.",
  },
];

const CLIMBS_PRODUCTS = [
  {
    icon: Users,
    title: "Family Insurance Plan",
    details: ["Entry age: 18–64 years old", "Renewable up to 99 years old"],
    image: "https://galaxy-prod.tlcdn.com/gen/user_305Y2IEu5EAOhVwSwVflk3JAWzy/ae311c2b-70e6-482f-ad30-a3abb0348aa4.png",
    imageAlt: "A happy multi-generational Filipino family together at home, representing the Family Insurance Plan",
  },
  {
    icon: FileText,
    title: "Student Personal Accident",
    details: ["Coverage: Pre-school to College", "₱35.00 / year"],
    image: "https://galaxy-prod.tlcdn.com/gen/user_305Y2IEu5EAOhVwSwVflk3JAWzy/1eda82ad-7553-4df5-bcdb-92c35522e967.png",
    imageAlt: "A young student on campus, representing Student Personal Accident coverage",
  },
  {
    icon: Landmark,
    title: "Coop Life Savings Plan (CLSP)",
    details: [
      "Entry age: 18–64 years old",
      "Renewable up to 99 years old",
      "Contestability: 1 year",
      "Premium: 1% of share capital",
    ],
    image: "https://galaxy-prod.tlcdn.com/gen/user_305Y2IEu5EAOhVwSwVflk3JAWzy/0876cd75-e649-4901-b9f0-186409b81f46.png",
    imageAlt: "A mature couple reviewing their savings passbook at home, representing the Coop Life Savings Plan",
  },
];

export default function InsurancePage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("insurance.eyebrow")}
        title={t("insurance.title")}
        description={t("insurance.desc")}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal stagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PLANS.map((plan) => (
            <RevealItem key={plan.title}>
              <div className="flex h-full gap-5 rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:bg-[hsl(213,45%,15%)] dark:border-white/10">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[hsl(213,62%,22%)] text-white">
                  <plan.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                    {plan.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
                    {plan.desc}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Reveal>
      </section>

      <section className="bg-white py-24 dark:bg-[hsl(213,45%,15%)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
              {t("insurance.additionalEyebrow")}
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[hsl(213,62%,18%)] dark:text-white">
              {t("insurance.additionalTitle")}
            </h2>
          </Reveal>

          <Reveal stagger className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {ADDITIONAL_COVERAGE.map((item) => (
              <RevealItem key={item.title}>
                <div className="h-full rounded-[1.75rem] border border-black/5 bg-[hsl(42,38%,96%)] p-8 shadow-sm transition-shadow hover:shadow-lg dark:bg-[hsl(213,55%,9%)] dark:border-white/10">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(142,45%,32%)] text-white">
                    <item.icon className="h-7 w-7" />
                  </span>
                  <span className="mt-6 inline-block rounded-full bg-[hsl(213,62%,22%)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[hsl(213,62%,22%)] dark:text-[hsl(142,55%,70%)]">
                    {item.badge}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
                    {item.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm dark:bg-[hsl(213,45%,15%)] dark:border-white/10">
              <Image
                src="https://galaxy-prod.tlcdn.com/view/user_305Y2IEu5EAOhVwSwVflk3JAWzy/55a5d17b55de426d8fc2536ef1a73bb7.jpg"
                alt="CLIMBS logo"
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
                {t("insurance.climbsEyebrow")}
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[hsl(213,62%,18%)] dark:text-white">
                {t("insurance.climbsTitle")}
              </h2>
            </div>
          </Reveal>

          <Reveal stagger className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {CLIMBS_PRODUCTS.map((product) => (
              <RevealItem key={product.title}>
                <div className="group h-full overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-[hsl(213,45%,15%)] dark:border-white/10">
                  {product.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent" />
                    </div>
                  )}
                  <div className="p-8">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(213,62%,22%)] text-white">
                      <product.icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                      {product.title}
                    </h3>
                    <ul className="mt-4 space-y-2 border-t border-black/5 pt-4 dark:border-white/10">
                      {product.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm leading-relaxed text-[hsl(220,20%,30%)]/85 dark:text-white/70"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(142,45%,32%)]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 dark:bg-[hsl(213,45%,15%)]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="rounded-[2rem] border border-black/5 bg-[hsl(42,38%,96%)] p-10 dark:bg-[hsl(213,55%,9%)] dark:border-white/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
                  Claims process
                </p>
                <ol className="mt-6 space-y-6">
                  {[
                    ["File your claim", "Submit online, by phone, or in person at any branch."],
                    ["Meet your claims officer", "A member of your own community reviews your case."],
                    ["Fast resolution", "Most claims are settled within 10 business days."],
                    ["Get paid directly", "Funds are deposited straight into your cooperative account."],
                  ].map(([title, text], i) => (
                    <li key={title} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[hsl(142,45%,32%)] text-xs font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-[hsl(213,62%,18%)] dark:text-white">{title}</p>
                        <p className="mt-1 text-sm text-[hsl(220,20%,30%)]/75 dark:text-white/70">{text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
                {t("insurance.whyEyebrow")}
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[hsl(213,62%,18%)] dark:text-white">
                {t("insurance.whyTitle")}
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "Premiums priced to cover claims, not to maximize profit margins",
                  "Bundled discounts for members who also hold savings accounts",
                  "No aggressive sales agents — plans explained plainly, in person",
                  "Surplus from the insurance pool returns to members as dividends",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-[hsl(142,45%,32%)]" />
                    <span className="text-sm leading-relaxed text-[hsl(220,20%,25%)]/85 dark:text-white/75">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/membership"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-[hsl(213,62%,22%)] px-7 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
              >
                {t("insurance.getCovered")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
