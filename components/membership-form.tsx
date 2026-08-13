"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { RobotCheck } from "@/components/robot-check";

export function MembershipForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [robotError, setRobotError] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-[1.75rem] border border-[hsl(142,45%,32%)]/20 bg-[hsl(142,45%,32%)]/5 p-12 text-center">
        <CheckCircle className="h-14 w-14 text-[hsl(142,45%,32%)]" />
        <h3 className="mt-4 font-display text-2xl font-semibold text-[hsl(213,62%,18%)] dark:text-white">
          {t("form.appReceivedTitle")}
        </h3>
        <p className="mt-2 max-w-sm text-sm text-[hsl(220,20%,30%)]/80 dark:text-white/70">
          {t("form.appReceivedDesc")}
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
        setSubmitted(true);
      }}
      className="rounded-[1.75rem] border border-black/5 bg-white p-8 shadow-sm sm:p-10 dark:bg-[hsl(213,45%,15%)] dark:border-white/10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label htmlFor="fullName">{t("form.fullName")}</Label>
          <Input id="fullName" required placeholder="Juan Dela Cruz" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="email">{t("form.email")}</Label>
          <Input id="email" type="email" required placeholder="juan@example.com" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="phone">{t("form.phone")}</Label>
          <Input id="phone" type="tel" required placeholder="+1 (555) 000-0000" className="mt-2" />
        </div>
        <div>
          <Label htmlFor="interest">{t("form.interest")}</Label>
          <Select defaultValue="savings">
            <SelectTrigger id="interest" className="mt-2">
              <SelectValue placeholder={t("form.selectService")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="savings">Savings & Credit</SelectItem>
              <SelectItem value="insurance">Insurance</SelectItem>
              <SelectItem value="both">Both Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">{t("form.goals")}</Label>
          <textarea
            id="message"
            rows={4}
            placeholder="e.g. I'd like to start a fixed savings plan and explore family health cover."
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
        className="mt-6 w-full rounded-full bg-[hsl(142,45%,32%)] px-7 py-4 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        {t("form.submitMembership")}
      </button>
    </form>
  );
}
