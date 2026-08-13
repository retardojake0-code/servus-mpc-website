"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { LOCALES } from "@/lib/translations";
import { useLanguage } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = LOCALES.find((l) => l.code === locale);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="flex h-10 items-center gap-1.5 rounded-full border border-black/10 px-3 text-sm font-semibold text-[hsl(213,62%,22%)] transition-colors hover:bg-black/5 dark:border-white/15 dark:text-[hsl(142,55%,70%)] dark:hover:bg-white/10"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden sm:inline">{current?.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 w-40 overflow-hidden rounded-2xl border border-black/5 bg-white py-1.5 shadow-xl dark:border-white/10 dark:bg-[hsl(213,45%,15%)]">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center px-4 py-2 text-left text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10",
                l.code === locale
                  ? "font-semibold text-[hsl(142,45%,32%)] dark:text-[hsl(142,55%,70%)]"
                  : "text-[hsl(220,20%,25%)] dark:text-white/80"
              )}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
