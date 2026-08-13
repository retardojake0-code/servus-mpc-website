"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal, RevealItem } from "@/components/reveal";
import {
  Wallet,
  TrendingUp,
  Landmark,
  CreditCard,
  Briefcase,
  Building,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Product {
  icon: LucideIcon;
  badge?: string;
  title: string;
  desc: string;
  highlights: string[];
  requirements: string[];
  scrollTargetId?: string;
  scrollLabel?: string;
}

const PRODUCTS: Product[] = [
  {
    icon: Wallet,
    title: "Regular Savings",
    desc: "An everyday account earning member dividends, with no maintenance fees and instant deposits.",
    highlights: [
      "Minimum initial deposit of ₱100.00",
      "No monthly maintenance fees",
      "Withdraw or deposit anytime at any branch",
      "Earns annual dividends based on cooperative net surplus",
      "Passbook or digital account access",
    ],
    requirements: [
      "Active Servus MPC membership",
      "One valid government-issued ID",
      "Minimum initial deposit of ₱100.00",
    ],
    scrollTargetId: "deposit-rates",
    scrollLabel: "View deposit rates",
  },
  {
    icon: TrendingUp,
    title: "Fixed-Term Savings",
    desc: "Lock in funds for 6–36 months for a higher guaranteed dividend rate.",
    highlights: [
      "Choose a 6, 12, 24, or 36-month term",
      "Higher guaranteed dividend rate than regular savings",
      "Rate is locked in for the full term",
      "Optional auto-renewal at maturity",
      "See the Deposit Rates table below for current tiers",
    ],
    requirements: [
      "Active Servus MPC membership",
      "One valid government-issued ID",
      "Minimum placement amount as shown in the Deposit Rates table",
    ],
    scrollTargetId: "special-savings-plan",
    scrollLabel: "View the Special Savings Fund Plan",
  },
  {
    icon: Landmark,
    badge: "MPL-D",
    title: "Multipurpose Loan – Diminishing",
    desc: "Flexible financing for any member need, secured by share capital and savings retention.",
    highlights: [
      "Interest rate: 18% per annum",
      "Maximum loan amount: up to ₱3,000,000",
      "Maximum term: up to 120 months",
      "Minimum retention: 5% share capital + 5% compulsory savings",
      "Loan decisions follow credit investigation and committee review",
    ],
    requirements: [
      "Regular Member in good standing",
      "Minimum 3 months cooperative membership residency",
      "At least 2 qualified co-makers",
      "Compliance with membership and credit policies",
    ],
  },
  {
    icon: CreditCard,
    badge: "LAD-D",
    title: "Loan Against Deposit – Diminishing",
    desc: "Borrow against your own savings and deposits at a lower rate, with minimal retention.",
    highlights: [
      "Interest rate: 16% per annum",
      "Maximum loan: up to 90% of qualifying deposit balance",
      "Maximum term: up to 120 months",
      "Minimum retention: 0.5% share capital + 0.5% compulsory savings",
    ],
    requirements: [
      "Regular Member in good standing",
      "Sufficient qualifying deposit balance",
      "Compliance with applicable cooperative policies",
    ],
  },
  {
    icon: Briefcase,
    badge: "PL-D",
    title: "Privilege Loan – Diminishing",
    desc: "For members with a steady salary or pension, based on verified income excess.",
    highlights: [
      "Interest rate: 30% per annum",
      "Maximum term: up to 36 months",
      "Loan amount based on verified salary or pension excess",
      "May require ATM assignment or custody arrangement",
    ],
    requirements: [
      "Regular Member",
      "Proof of salary or pension",
      "Minimum 3 months proof of income history",
    ],
  },
  {
    icon: Building,
    badge: "MEL",
    title: "Micro Enterprise Loan",
    desc: "Loans for qualified rank-and-file employees of accredited partner establishments.",
    highlights: [
      "Interest rate: 30% per annum",
      "For employees of accredited establishments and partner organizations",
      "Ceilings and terms set per employer arrangement",
    ],
    requirements: [
      "Employment with an accredited establishment or partner organization",
      "Compliance with cooperative credit policies",
    ],
  },
];

export function SavingsProducts() {
  const [open, setOpen] = useState<Product | null>(null);

  const handleClick = (product: Product) => {
    if (product.scrollTargetId) {
      document.getElementById(product.scrollTargetId)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setOpen(product);
  };

  return (
    <>
      <Reveal stagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {PRODUCTS.map((product) => (
          <RevealItem key={product.title}>
            <button
              type="button"
              onClick={() => handleClick(product)}
              className="group flex h-full w-full gap-5 rounded-[1.75rem] border border-black/5 bg-white p-8 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-[hsl(213,45%,15%)] dark:border-white/10"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[hsl(142,45%,32%)] text-white">
                <product.icon className="h-7 w-7" />
              </span>
              <div className="flex-1">
                {product.badge && (
                  <span className="mb-1.5 inline-block rounded-full bg-[hsl(213,62%,22%)]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[hsl(213,62%,22%)] dark:text-[hsl(142,55%,70%)]">
                    {product.badge}
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                  {product.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
                  {product.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(142,45%,32%)] dark:text-[hsl(142,55%,70%)]">
                  {product.scrollLabel ?? "View details"}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </button>
          </RevealItem>
        ))}
      </Reveal>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-black/5 bg-white text-inherit shadow-2xl sm:max-w-lg dark:border-white/10 dark:bg-[hsl(213,50%,12%)]">
          {open && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[hsl(142,45%,32%)] text-white">
                    <open.icon className="h-6 w-6" />
                  </span>
                  <div>
                    {open.badge && (
                      <span className="inline-block rounded-full bg-[hsl(213,62%,22%)]/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[hsl(213,62%,22%)] dark:text-[hsl(142,55%,70%)]">
                        {open.badge}
                      </span>
                    )}
                    <DialogTitle className="font-display text-xl text-[hsl(213,62%,18%)] dark:text-white">
                      {open.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              <p className="text-sm leading-relaxed text-[hsl(220,20%,30%)]/85 dark:text-white/75">
                {open.desc}
              </p>

              <div className="mt-2">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
                  Highlights
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {open.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[hsl(142,45%,32%)]" />
                      <span className="text-sm leading-relaxed text-[hsl(220,20%,25%)]/90 dark:text-white/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 rounded-2xl bg-[hsl(42,38%,96%)] p-5 dark:bg-[hsl(213,55%,9%)]">
                <h4 className="text-xs font-semibold uppercase tracking-widest text-[hsl(213,62%,22%)] dark:text-[hsl(142,55%,70%)]">
                  What you&apos;ll need
                </h4>
                <ul className="mt-3 space-y-2">
                  {open.requirements.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-relaxed text-[hsl(220,20%,30%)]/85 dark:text-white/75"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(213,62%,22%)] dark:bg-[hsl(142,55%,70%)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
