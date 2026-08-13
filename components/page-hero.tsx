interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[hsl(213,62%,22%)] py-20">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(142,55%,42%) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[hsl(142,55%,60%)]">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/75">{description}</p>
      </div>
    </section>
  );
}
