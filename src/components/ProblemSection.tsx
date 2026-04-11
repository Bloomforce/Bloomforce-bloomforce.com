import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  {
    title: "Your Best Hires Won't Apply.",
    body: "The strongest analysts, engineers, and leaders in healthcare IT aren't scrolling job boards. They're heads-down on a go-live, a migration, or a project that matters. You can't find them by posting the role.",
  },
  {
    title: "Leadership Searches Stall.",
    body: "Director-through-CIO searches drag on for months because national firms don't actually know healthcare IT. Two failed placements later, you're back at square one and the org is still uncovered.",
  },
  {
    title: "The Résumé Says Epic. The Person Doesn't.",
    body: "Big staffing firms send résumés from people who've never touched a healthcare system. You spend more time filtering noise than interviewing real candidates.",
  },
  {
    title: "The Firm Isn't the Consultant.",
    body: "You pick a firm based on one pitch meeting. Halfway through your project, you realize the consultant on the ground isn't the person who sold you. By then, it's too late to switch.",
  },
];

export function ProblemSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-navy-dark py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            The Problem
          </p>
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            Hiring in healthcare IT is broken.
            <br />
            <em className="text-teal">Here's how.</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {painPoints.map((point, i) => (
            <div
              key={point.title}
              className={`rounded-xl border-l-4 border-teal bg-navy/80 p-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <h3 className="text-xl font-semibold text-foreground">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray">{point.body}</p>
            </div>
          ))}
        </div>

        <p className={`mt-14 max-w-3xl text-xl italic font-medium text-teal transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Our answer: one firm, built for healthcare IT. Staffing for the project you can't slow down. Search for the hire you can't afford to get wrong.
        </p>
      </div>
    </section>
  );
}
