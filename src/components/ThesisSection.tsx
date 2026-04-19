import { useScrollReveal } from "@/hooks/useScrollReveal";

/*
 * Thesis. Founder-voice positioning against the managed-services cycle.
 * Sits between Manifesto (dark) and TestimonialSection (cream).
 */
export function ThesisSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="thesis" ref={ref} className="bg-cream py-16 md:py-24 lg:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Our Thesis
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            Every health system is a
            <br />
            <em className="text-teal">technology company.</em>
          </h2>
        </div>

        <div
          className={`mt-12 space-y-6 text-lg leading-relaxed text-ink-muted md:text-xl transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p>
            Every health system in America hires IT from some combination of the same dozen
            firms. Eleven of them want to pitch you managed services.
          </p>
          <p>
            We've watched the cycle on repeat. Labor costs climb. A big firm sells you a BPO
            deal. Clinicians get frustrated. End users get loud. A few years later the deal
            unwinds and the jobs come back in-house, more expensive than when they left.
          </p>
          <p>
            We built Bloomforce to skip the middle. Healthcare is a technology business now.
            Your IT team belongs on your payroll, on your org chart, and as close to the
            people delivering care as you can get them. We staff the projects and run the
            searches. We don't pitch you a rescue plan at the end.
          </p>
        </div>

        <p
          className={`mt-12 font-display text-2xl italic leading-snug text-ink md:text-3xl transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Build the team. <span className="text-teal">Keep the team.</span>
        </p>
      </div>
    </section>
  );
}
