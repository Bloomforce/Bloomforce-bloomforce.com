import { useScrollReveal } from "@/hooks/useScrollReveal";

const principles = [
  {
    no: "No bench.",
    yes: "Every placement is sourced for the role. If we don't have the right person, we tell you.",
  },
  {
    no: "No bait-and-switch.",
    yes: "The consultant you meet is the consultant you get. Period.",
  },
  {
    no: "No resume dumps.",
    yes: "Three to five candidates you'd actually hire. Not twenty to sort through on a Friday.",
  },
  {
    no: "No generalists.",
    yes: "Healthcare IT is the entire practice. That's why we're good at it.",
  },
];

export function Manifesto() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-stone py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            How We Work
          </p>
          <h2 className="font-display text-3xl leading-tight text-ink md:text-5xl">
            Four rules we don't break.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <div
              key={p.no}
              className={`group rounded-2xl border border-ink/8 bg-white px-6 py-7 transition-all duration-700 hover:border-teal/30 hover:shadow-md ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <h3 className="font-display text-xl text-ink md:text-2xl">
                {p.no}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {p.yes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
