"use client";

import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/nav";
import { CoinDrop } from "@/components/coin-drop";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const logoRef = useRef<HTMLSpanElement>(null);
  const [coinOrigin, setCoinOrigin] = useState<{ x: number; y: number } | null>(null);

  const handleLogoClick = useCallback(() => {
    const rect = logoRef.current?.getBoundingClientRect();
    if (rect) {
      setCoinOrigin({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[hsl(42,38%,96%)]/90 backdrop-blur dark:bg-[hsl(213,55%,9%)]/90 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={handleLogoClick}>
          <span ref={logoRef} className="relative inline-flex">
            <Image
              src="https://galaxy-prod.tlcdn.com/view/user_305Y2IEu5EAOhVwSwVflk3JAWzy/51680fa62867485fb12ab1918cb93ba8.png"
              alt="Servus MPC Initao logo"
              width={48}
              height={48}
              className="h-14 w-14 object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-[hsl(213,62%,22%)] dark:text-[hsl(142,55%,70%)]">
              Servus <span className="text-[hsl(142,45%,32%)]">MPC</span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[hsl(220,20%,45%)] dark:text-white/50">
              Initao &middot; &ldquo;Together We Grow&rdquo;
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "underline-grow font-medium text-sm text-[hsl(220,20%,20%)]/80 transition-colors hover:text-[hsl(213,62%,22%)] dark:text-white/80 dark:hover:text-[hsl(142,55%,75%)]",
                pathname === link.href && "text-[hsl(213,62%,22%)] dark:text-[hsl(142,55%,70%)]"
              )}
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
            className="rounded-full bg-[hsl(142,45%,32%)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[hsl(142,55%,28%)]"
          >
            {t("nav.becomeMember")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/15"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6 dark:text-white" /> : <Menu className="h-6 w-6 dark:text-white" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-[hsl(42,38%,96%)] px-6 pb-6 lg:hidden dark:bg-[hsl(213,55%,9%)] dark:border-white/10">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-[hsl(220,20%,20%)] dark:text-white/80"
              >
                {t(link.key)}
              </Link>
            ))}
            <Link
              href="/membership"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[hsl(142,45%,32%)] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {t("nav.becomeMember")}
            </Link>
          </nav>
        </div>
      )}

      <CoinDrop origin={coinOrigin} onDone={() => setCoinOrigin(null)} />
    </header>
  );
}
