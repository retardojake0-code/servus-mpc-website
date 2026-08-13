"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Send } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { RobotCheck } from "@/components/robot-check";

export function ContactForm() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [robotError, setRobotError] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-[1.75rem] border border-[hsl(142,45%,32%)]/20 bg-[hsl(142,45%,32%)]/5 p-10 text-center">
        <CheckCircle className="h-11 w-11 text-[hsl(142,45%,32%)]" />
        <h3 className="mt-3 font-display text-xl font-semibold text-[hsl(213,62%,18%)] dark:text-white">
          {t("form.msgSentTitle")}
        </h3>
        <p className="mt-2 text-sm text-[hsl(220,20%,30%)]/80 dark:text-white/70">
          {t("form.msgSentDesc")}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!isHuman) {
          setRobotError(true);
          return;
        }
        setSent(true);
      }}
      className="rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-sm sm:p-10 dark:bg-[hsl(213,45%,15%)] dark:border-white/10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">{t("form.name")}</Label>
          <Input id="name" required placeholder="Juan Dela Cruz" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email">{t("form.emailShort")}</Label>
          <Input id="email" type="email" required placeholder="juan@example.com" className="mt-2" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="subject">{t("form.subject")}</Label>
          <Input id="subject" placeholder="How can we help?" className="mt-2" />
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">{t("form.message")}</Label>
          <textarea
            id="message"
            required
            rows={5}
            placeholder="Share the details of your question..."
            className="mt-2 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
      </div>

      <div className="mt-6">
        <RobotCheck
          checked={isHuman}
          onChange={(v) => {
            setIsHuman(v);
            if (v) setRobotError(false);
          }}
          label={t("form.notRobot")}
          error={robotError}
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[hsl(213,62%,22%)] px-7 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5"
      >
        {t("form.sendMessage")}
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
}
