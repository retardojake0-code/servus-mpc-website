"use client";

import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import { MapPin, Phone, Mail, Clock, Share } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/servus.cooperative";

const INFO = [
  {
    icon: MapPin,
    title: "Main Branch",
    text: "Purok 13, Poblacion, Initao, Misamis Oriental — located in the RTMI bus stop near Purple Yam building",
  },
  {
    icon: Clock,
    title: "POS/ATM Hours",
    text: "Monday–Friday, 8:30 AM–4:00 PM · Saturday, 8:30 AM–11:00 AM",
  },
  {
    icon: Phone,
    title: "Phone",
    text: "(0906) 861-9406 · (088) 882-1995",
  },
  {
    icon: Share,
    title: "Facebook",
    text: "Servus MPC",
    href: FACEBOOK_URL,
  },
  {
    icon: Mail,
    title: "Email",
    text: "servuscoop@yahoo.com · sercoop10@gmail.com",
  },
];

const BRANCH_LAT = 8.49495630677274;
const BRANCH_LNG = 124.30263507419888;
const MAP_QUERY = encodeURIComponent(`${BRANCH_LAT},${BRANCH_LNG}`);

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        description={t("contact.desc")}
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-[hsl(213,62%,18%)] dark:text-white">
              {t("contact.infoTitle")}
            </h2>
            <div className="mt-8 space-y-6">
              {INFO.map((item) => {
                const body = (
                  <div>
                    <p className="font-semibold text-[hsl(213,62%,18%)] dark:text-white">{item.title}</p>
                    <p
                      className={
                        item.href
                          ? "text-sm leading-relaxed text-[hsl(142,45%,32%)] underline-offset-2 hover:underline"
                          : "text-sm leading-relaxed text-[hsl(220,20%,30%)]/80 dark:text-white/70"
                      }
                    >
                      {item.text}
                    </p>
                  </div>
                );
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[hsl(142,45%,32%)]/10 text-[hsl(142,45%,32%)]">
                      <item.icon className="h-6 w-6" />
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Servus MPC on Facebook"
                      >
                        {body}
                      </a>
                    ) : (
                      body
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-black/5 shadow-sm dark:border-white/10">
              <div className="aspect-video w-full">
                <iframe
                  title="Servus MPC Initao branch location"
                  src={`https://www.google.com/maps?q=${MAP_QUERY}&z=17&output=embed`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
