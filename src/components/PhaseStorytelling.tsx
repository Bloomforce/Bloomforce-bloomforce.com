import { useScrollReveal } from "@/hooks/useScrollReveal";

const phases = [
  {
    num: "01",
    title: "Discovery",
    timeline: "Weeks 1–2",
    body: "We learn your organization before we open a single req. Your tech stack, your culture, your gaps. Starting from scratch? We'll map the roles. Already have reqs open? Let's move.",
    tags: ["Needs Assessment", "Role Mapping", "Alignment"],
  },
  {
    num: "02",
    title: "Source",
    timeline: "Weeks 2–3",
    body: "We tap a specialist network built over years of healthcare IT recruiting. No job boards. No spray-and-pray. Just curated, pre-vetted professionals who've done this work before.",
    tags: ["Specialist Network", "Pre-Screening", "Credential Verification"],
  },
  {
    num: "03",
    title: "Place",
    timeline: "Weeks 3–4",
    body: "We present a shortlist of candidates who actually fit — technically and culturally. You interview the best. We handle logistics, negotiations, and onboarding support.",
    tags: ["Candidate Presentation", "Interview Coordination", "Offer Management"],
  },
  {
    num: "04",
    title: "Support",
    timeline: "Ongoing",
    body: "Placement is the beginning, not the end. We monitor retention, run performance check-ins, and keep your pipeline warm for the next hire.",
    tags: ["Retention Monitoring", "Performance Check-ins", "Continuous Pipeline"],
  },
];

function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div
      ref={ref}
      className={`relative border-l-2 border-primary/20 pl-8 pb-16 last:pb-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Dot on timeline */}
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background" />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
        <span className="font-display text-6xl text-primary/30 md:text-8xl">{phase.num}</span>
        <div>
          <h3 className="font-display text-2xl text-foreground md:text-3xl">{phase.title}</h3>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            {phase.timeline}
          </span>
        </div>
      </div>

      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
        {phase.body}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {phase.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-secondary px-3 py-1 font-mono text-[11px] text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PhaseStorytelling() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`mb-20 max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Our Process
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            We handle the search.
            <br />
            <em className="text-primary">You build your team.</em>
          </h2>
        </div>

        <div className="ml-4 md:ml-12">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.num} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
