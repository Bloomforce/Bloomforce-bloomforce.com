import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  {
    title: "The résumé says Epic. The person doesn't.",
    body: "Generalist firms send résumés from people who've never touched a health system. You filter more noise than you interview.",
  },
  {
    title: "The search stalls. The seat stays empty.",
    body: "Director-through-CIO roles sit open for months. National firms don't know healthcare IT. Two failed placements later, the roadmap is stuck and the seat is still empty.",
  },
];

export function ProblemSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-navy-dark py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            The Problem
          </p>
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            The two failures
            <br />
            <em className="text-teal">we see on repeat.</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className={`rounded-xl border-l-4 border-teal bg-navy/80 p-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <h3 className="font-display text-2xl text-foreground md:text-3xl">{point.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-warm-gray">{point.body}</p>
            </div>
          ))}
        </div>

        <p className={`mt-14 max-w-3xl text-xl italic font-medium text-teal transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Here's how we make sure you don't live through either.
        </p>
      </div>
    </section>
  );
}
