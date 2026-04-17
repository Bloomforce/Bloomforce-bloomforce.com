import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, UserCheck, Crown, ArrowRight } from "lucide-react";

const practices = [
  {
    icon: Briefcase,
    title: "Staffing",
    tag: "Staff Augmentation",
    desc: "Healthcare IT specialists embedded with your team. Analysts, engineers, architects, PMs, and trainers — placed in days, not months.",
    href: "/staffing",
  },
  {
    icon: UserCheck,
    title: "Direct Placement",
    tag: "Permanent Hires",
    desc: "Full-time hires for mission-critical IT roles. Analysts, engineers, architects, managers. Vetted for the seat and the culture, not just the resume.",
    href: "/direct-placement",
  },
  {
    icon: Crown,
    title: "Leadership Search",
    tag: "Director Through CIO",
    desc: "Retained search for the people who actually run healthcare IT. Quiet, rigorous, and built around fit.",
    href: "/leadership-search",
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" ref={ref} className="bg-cream pt-24 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            What We Do
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            Three practices. <em className="text-teal">One focus.</em>
          </h2>
        </div>

        {/* Three practice cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {practices.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border border-ink/[0.06] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.12)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              {/* Top accent line */}
              <div className="h-[3px] w-full bg-ink/[0.04] transition-colors duration-300 group-hover:bg-teal" />

              <div className="flex flex-1 flex-col p-8 md:p-10">
                {/* Icon + tag row */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/[0.07] transition-colors duration-300 group-hover:bg-teal/[0.14]">
                    <p.icon className="h-5 w-5 text-teal" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
                    {p.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-3xl text-ink md:text-4xl">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                  {p.desc}
                </p>

                {/* CTA */}
                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-teal">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
