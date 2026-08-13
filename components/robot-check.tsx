"use client";

import { Check, ShieldCheck } from "lucide-react";

interface RobotCheckProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  error?: boolean;
}

export function RobotCheck({ checked, onChange, label, error }: RobotCheckProps) {
  return (
    <div>
      <div
        className={`flex items-center justify-between gap-4 rounded-xl border bg-[hsl(42,38%,97%)] px-4 py-3.5 transition-colors dark:bg-[hsl(213,50%,12%)] ${
          error
            ? "border-red-400 dark:border-red-500/60"
            : "border-black/10 dark:border-white/10"
        }`}
      >
        <label className="flex cursor-pointer items-center gap-3 select-none">
          <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            onClick={() => onChange(!checked)}
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
              checked
                ? "border-[hsl(142,45%,32%)] bg-[hsl(142,45%,32%)]"
                : "border-[hsl(220,20%,60%)] bg-white dark:bg-transparent dark:border-white/30"
            }`}
          >
            {checked && <Check className="h-4 w-4 text-white" />}
          </button>
          <span className="text-sm font-medium text-[hsl(220,20%,25%)] dark:text-white/85">
            {label}
          </span>
        </label>
        <div className="flex flex-col items-center gap-1 opacity-60">
          <ShieldCheck className="h-6 w-6 text-[hsl(213,62%,22%)] dark:text-[hsl(142,55%,70%)]" />
          <span className="text-[9px] font-medium uppercase tracking-wide text-[hsl(220,20%,45%)] dark:text-white/50">
            Security Check
          </span>
        </div>
      </div>
      {error && (
        <p className="mt-2 text-xs font-medium text-red-500">
          Please confirm you&apos;re not a robot before submitting.
        </p>
      )}
    </div>
  );
}
