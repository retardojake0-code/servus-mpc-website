import { HeroSection } from "@/components/hero-section";
import { ServicesOverview } from "@/components/services-overview";
import { AtmBanner } from "@/components/atm-banner";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AtmBanner />
      <CtaSection />
    </>
  );
}
