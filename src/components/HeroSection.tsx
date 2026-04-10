import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-24 md:py-36 lg:py-44">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,var(--color-teal)/0.04,transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            Healthcare IT Staffing
          </p>

          <h1 className="font-display text-5xl leading-[1.1] tracking-tight text-ink md:text-7xl lg:text-8xl">
            Healthcare IT talent.
            <br />
            <em className="text-teal">It's all we do.</em>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/60 md:text-xl">
            From Epic and EHR to AI and analytics, we connect health systems with the
            specialized IT talent they need — on their terms.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Talk to Us
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-cream-dark"
            >
              View 2025 Workforce Report →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
