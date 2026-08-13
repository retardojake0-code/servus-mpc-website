"use client";

import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { FacilityRatesTable } from "@/components/facility-rates-table";
import { Reveal, RevealItem } from "@/components/reveal";
import {
  Building,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const PRIORITY = [
  "Active members of Servus MPC",
  "Laboratory Cooperative members",
  "Cooperative-affiliated enterprises",
  "Non-members, subject to Management approval",
];

const HIGHLIGHTS = [
  {
    icon: Building,
    title: "Commercial Spaces & Cubicles",
    desc: "From small table spaces to large 60 sqm commercial units for member-run businesses.",
  },
  {
    icon: Sparkles,
    title: "Function Hall & Rooftop Events",
    desc: "Book our function hall or rooftop space for celebrations, seminars, and gatherings.",
  },
  {
    icon: Users,
    title: "Vending & Livelihood Spaces",
    desc: "Affordable daily, weekly, or monthly vending spots to support member microenterprises.",
  },
  {
    icon: ShieldCheck,
    title: "Safe, Clean, Smoke-Free Premises",
    desc: "The entire Servus MPC compound is a strict no smoking and no vaping zone, kept clean and orderly for everyone.",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services · Facilities"
        title="Space to grow your livelihood."
        description="Rent commercial spaces, cubicles, vending spots, or our function hall — supporting member microenterprises while generating sustainable income for the cooperative."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <Reveal stagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <RevealItem key={item.title}>
              <div className="flex h-full gap-5 rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:bg-[hsl(213,45%,15%)] dark:border-white/10">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[hsl(142,45%,32%)] text-white">
                  <item.icon className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
                    {item.desc}
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
              Rental rates
            </span>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[hsl(213,62%,18%)] dark:text-white">
              Standard rental rates
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
              Rates vary by floor area, location, business type, and utility
              usage, and are subject to periodic review and Board approval.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <FacilityRatesTable />
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
                Who gets priority
              </span>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[hsl(213,62%,18%)] dark:text-white">
                Members come first
              </h2>
              <ul className="mt-8 space-y-4">
                {PRIORITY.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[hsl(142,45%,32%)] text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-[hsl(220,20%,25%)]/85 dark:text-white/75">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[2rem] border border-black/5 bg-[hsl(42,38%,96%)] p-10 dark:bg-[hsl(213,55%,9%)] dark:border-white/10">
                <p className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
                  Lease terms
                </p>
                <ul className="mt-6 space-y-4 text-sm leading-relaxed text-[hsl(220,20%,30%)]/85 dark:text-white/75">
                  <li>• Commercial leases run for 1 year unless otherwise approved.</li>
                  <li>• Temporary rentals may be daily, weekly, or monthly.</li>
                  <li>• 1 month advance + 1 month security deposit for regular tenants.</li>
                  <li>• Rent is due on or before the 5th day of each month.</li>
                  <li>• Tenants shoulder their own utilities (electricity, water, internet).</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
