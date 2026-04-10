import { useScrollReveal } from "@/hooks/useScrollReveal";

export function HeroSection() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-36 lg:py-44">
      {/* Background glow */}
      <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-teal/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-teal/3 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Healthcare IT Staffing
          </p>

          <h1 className="font-display text-5xl leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
            Healthcare IT talent.
            <br />
            <em className="text-primary">It's all we do.</em>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            From Epic and EHR to AI and analytics, we connect health systems with the
            specialized IT talent they need — on their terms.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Talk to Us
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View 2025 Workforce Report →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
