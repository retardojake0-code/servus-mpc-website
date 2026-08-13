"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const BACKDROPS = [
  "https://galaxy-prod.tlcdn.com/gen/user_305Y2IEu5EAOhVwSwVflk3JAWzy/ba726fb1-b360-4e76-b718-8163b0738159.jpg",
  "https://galaxy-prod.tlcdn.com/gen/user_305Y2IEu5EAOhVwSwVflk3JAWzy/a80b7f51-c9c6-4ec7-95ff-b9737088de2e.jpg",
  "https://galaxy-prod.tlcdn.com/gen/user_305Y2IEu5EAOhVwSwVflk3JAWzy/90669b57-e1eb-4df8-ad88-7cfa6a2e0ffa.jpg",
  "https://galaxy-prod.tlcdn.com/gen/user_305Y2IEu5EAOhVwSwVflk3JAWzy/3ffd7896-cac2-4af6-a2e5-4dcee5af2ba8.jpg",
];

const SLIDE_MS = 5000;

export function HeroSection() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BACKDROPS.length);
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={BACKDROPS[index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={BACKDROPS[index]}
              alt="Servus MPC Initao members and staff at community events"
              fill
              priority={index === 0}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(213,62%,10%)]/85 via-[hsl(213,62%,14%)]/70 to-[hsl(213,62%,10%)]/92" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pb-20 pt-16 text-center lg:px-10 lg:pb-28 lg:pt-24">
        <div className="animate-fade-up">
          <span className="font-berlin inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-xl font-semibold tracking-tight text-[hsl(142,60%,72%)] backdrop-blur-sm sm:text-2xl">
            {t("hero.badge")}
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl">
            {t("hero.title1")}
            <br />
            <span className="text-[hsl(142,60%,68%)]">{t("hero.title2")}</span> {t("hero.title3")}
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/85">
            {t("hero.subtitle")}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/membership"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[hsl(142,45%,40%)] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-black/30 transition-transform hover:-translate-y-0.5"
            >
              {t("hero.ctaJoin")}
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {t("hero.ctaLearn")}
            </Link>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {BACKDROPS.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show background photo ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
