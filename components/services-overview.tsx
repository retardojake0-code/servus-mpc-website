"use client";

import Link from "next/link";
import Image from "next/image";
import { PiggyBank, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Reveal, RevealItem } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";

const SERVICES = [
  {
    icon: PiggyBank,
    titleKey: "services.savings.title",
    descKey: "services.savings.desc",
    href: "/services/savings-credit",
    accent: "green" as const,
    pointKeys: [] as string[],
    image: "https://galaxy-prod.tlcdn.com/gen/user_305Y2IEu5EAOhVwSwVflk3JAWzy/fc982b18-ee26-4388-9420-19df6cac015f.png",
    imageAlt: "A Servus MPC staff member warmly assisting a member at the branch counter",
  },
  {
    icon: ShieldCheck,
    titleKey: "services.insurance.title",
    descKey: "services.insurance.desc",
    href: "/services/insurance",
    accent: "blue" as const,
    pointKeys: ["services.insurance.point1", "services.insurance.point2", "services.insurance.point3"],
    image: "https://galaxy-prod.tlcdn.com/gen/user_305Y2IEu5EAOhVwSwVflk3JAWzy/377e425f-262a-4547-bb3d-38cdbe31a198.png",
    imageAlt: "A Servus MPC staff member presenting insurance coverage options to members",
  },
];

export function ServicesOverview() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <Reveal className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,45%,32%)]">
          {t("services.eyebrow")}
        </span>
        <p className="mt-4 text-lg text-[hsl(220,20%,25%)]/75 dark:text-white/75">
          {t("services.subtitle")}
        </p>
      </Reveal>

      <Reveal stagger className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
        {SERVICES.map((service) => {
          const isGreen = service.accent === "green";
          return (
            <RevealItem key={service.titleKey}>
              <Link
                href={service.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-black/5 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-[hsl(213,45%,15%)] dark:border-white/10"
              >
                {service.image && (
                  <div className="relative h-96 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/25 to-transparent" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-9">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                    style={{
                      background: isGreen ? "hsl(142,45%,32%)" : "hsl(213,62%,22%)",
                    }}
                  >
                    <service.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-semibold text-[hsl(213,62%,18%)] dark:text-white">
                    {t(service.titleKey)}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70">
                    {t(service.descKey)}
                  </p>
                  {service.pointKeys.length > 0 && (
                    <ul className="mt-6 space-y-2 text-sm text-[hsl(220,20%,30%)]/90 dark:text-white/70">
                      {service.pointKeys.map((key) => (
                        <li key={key} className="flex items-center gap-2">
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: isGreen ? "hsl(142,45%,32%)" : "hsl(213,62%,22%)" }}
                          />
                          {t(key)}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[hsl(213,62%,22%)] dark:text-[hsl(142,55%,70%)]">
                    {t("services.explore")} {t(service.titleKey)}
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </RevealItem>
          );
        })}
      </Reveal>
    </section>
  );
}
