import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  {
    title: "Timelines Compress.",
    body: "By the time you post the role, screen candidates, and schedule interviews, your go-live date is three weeks closer.",
  },
  {
    title: "Generalists Waste Your Time.",
    body: "Big staffing firms send résumés from people who've never touched an EHR. You spend more time filtering than hiring.",
  },
  {
    title: "Good People Disappear.",
    body: "The best healthcare IT professionals are off the market in days. If you're not moving fast, someone else is.",
  },
];

export function ProblemSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            The Problem
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Finding talent isn't hard.
            <br />
            <em className="text-primary">Keeping your pipeline full is.</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className={`rounded-xl border-l-4 border-primary bg-card p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <h3 className="font-display text-xl text-foreground">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{point.body}</p>
            </div>
          ))}
        </div>

        <p className={`mt-12 max-w-2xl font-display text-xl italic text-primary transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          "Our fix: a specialist talent engine built exclusively for healthcare IT."
        </p>
      </div>
    </section>
  );
}
