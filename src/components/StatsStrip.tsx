import { useScrollReveal } from "@/hooks/useScrollReveal";

/*
 * Client logo strip.
 * Text-only until we get permission-cleared logo files for each brand.
 * Names map 1:1 to the case studies below — OHSU, Piedmont, COPC.
 */
const clients = [
  { name: "OHSU", context: "Academic Medical Center" },
  { name: "Piedmont", context: "Health System" },
  { name: "COPC", context: "Primary Care Platform" },
];

export function StatsStrip() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="border-y border-ink/10 bg-cream-dark py-20">
      <div className="mx-auto max-w-6xl px-6">
        <p
          className={`mb-12 text-center font-mono text-sm uppercase tracking-[0.25em] text-teal transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Trusted By
        </p>

        <div className="grid items-center gap-10 sm:grid-cols-3">
          {clients.map((c, i) => (
            <div
              key={c.name}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="font-display text-3xl tracking-tight text-ink md:text-4xl">
                {c.name}
              </span>
              <span className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
                {c.context}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
