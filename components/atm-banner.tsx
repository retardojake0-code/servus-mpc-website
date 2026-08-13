import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function AtmBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <Reveal>
        <div className="overflow-hidden rounded-[2rem] border border-black/5 shadow-lg dark:border-white/10">
          <Image
            src="https://galaxy-prod.tlcdn.com/view/user_305Y2IEu5EAOhVwSwVflk3JAWzy/4aed19a2dd184ea69673bbaa89107b73.jpg"
            alt="Servus MPC ATM banking powered by BancNet, in partnership with MASS-SPECC — Your Money. Your Time. Your Way."
            width={2000}
            height={1414}
            className="h-auto w-full object-cover"
          />
        </div>
      </Reveal>
    </section>
  );
}
