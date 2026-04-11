import { useScrollReveal } from "@/hooks/useScrollReveal";

/*
 * Technology logo strip.
 * Swap these text nodes for real SVG/image logos as they become available.
 * Keeping text-only keeps us vendor-license-safe until assets are procured.
 */
const platforms = [
  "Epic",
  "Workday",
  "Oracle / Cerner",
  "ServiceNow",
  "MEDITECH",
  "Infor",
  "AWS",
  "Azure",
  "Salesforce",
  "Google Cloud",
];

export function StatsStrip() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="border-y border-ink/10 bg-cream-dark py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p
          className={`mb-10 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-ink/50 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          We specialize in the technology you already use
        </p>

        <div className="grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
          {platforms.map((name, i) => (
            <div
              key={name}
              className={`flex items-center justify-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className="font-display text-lg tracking-tight text-ink/60 md:text-xl">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
