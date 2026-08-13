"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { useLanguage } from "@/components/language-provider";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { CoinDrop } from "@/components/coin-drop";

const LOGO_URL =
  "https://galaxy-prod.tlcdn.com/view/user_305Y2IEu5EAOhVwSwVflk3JAWzy/51680fa62867485fb12ab1918cb93ba8.png";

export function SiteHeader() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[hsl(42,38%,96%)]/90 backdrop-blur dark:bg-[hsl(213,55%,9%)]/90 dark:border-white/10">
      <CoinDrop origin={origin} onDone={() => setOrigin(null)} />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={(e) => setOrigin({ x: e.clientX, y: e.clientY })}
        >
          <Image src={LOGO_URL} alt="Servus MPC logo" width={44} height={44} className="h-11 w-11 object-contain" />
          <span className="font-berlin text-lg font-bold leading-tight text-[hsl(213,62%,18%)] dark:text-white">
            Servus MPC
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline-grow text-sm font-medium text-[hsl(213,40%,25%)] dark:text-white/85"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/membership"
            className="rounded-full bg-[hsl(213,62%,22%)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5"
          >
            {t("nav.joinNow")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[hsl(213,62%,22%)] dark:border-white/15 dark:text-white"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-[hsl(42,38%,96%)] px-6 py-4 dark:bg-[hsl(213,55%,9%)] dark:border-white/10 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[hsl(213,40%,25%)] dark:text-white/85"
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href="/membership"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[hsl(213,62%,22%)] px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              {t("nav.joinNow")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
