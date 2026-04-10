import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "500+", label: "Professionals Placed" },
  { value: "50+", label: "Health Systems Served" },
  { value: "98%", label: "Retention Rate" },
  { value: "24/7", label: "Talent Pipeline Active" },
];

export function StatsStrip() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="border-y border-ink/10 bg-cream-dark py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="font-display text-4xl text-teal md:text-5xl">{stat.value}</div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink/50">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
