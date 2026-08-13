"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Share } from "lucide-react";
import { NAV_LINKS } from "@/lib/nav";
import { useLanguage } from "@/components/language-provider";

const FACEBOOK_URL = "https://www.facebook.com/servus.cooperative";

export function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(213,62%,22%)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Image
                src="https://galaxy-prod.tlcdn.com/view/user_305Y2IEu5EAOhVwSwVflk3JAWzy/51680fa62867485fb12ab1918cb93ba8.png"
                alt="Servus MPC Initao logo"
                width={44}
                height={44}
                className="h-12 w-12 rounded-full bg-white object-contain p-1"
              />
              <div className="leading-tight">
                <span className="font-display text-xl font-semibold">Servus MPC</span>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-[hsl(142,55%,60%)]">
                  Initao &middot; &ldquo;Together We Grow&rdquo;
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              <strong className="font-semibold text-white">SERVUS MPC</strong>{" "}
              {t("footer.desc")}
            </p>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[hsl(142,55%,65%)] underline-grow hover:text-white"
            >
              <Share className="h-5 w-5" />
              {t("footer.facebook")}
            </a>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-[hsl(142,55%,60%)]">
              {t("footer.explore")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="underline-grow hover:text-white">
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-[hsl(142,55%,60%)]">
              {t("footer.contact")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <span>Purok 13, Poblacion, Initao, Misamis Oriental</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <span>(0906) 861-9406 · (088) 882-1995</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 shrink-0" />
                <span>servuscoop@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} {t("footer.copyright")}</p>
          <p>{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
