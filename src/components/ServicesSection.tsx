import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, UserCheck, Crown } from "lucide-react";

const practices = [
  {
    icon: Briefcase,
    title: "Staffing",
    tag: "Contract & Contract-to-Hire",
    desc: "Specialist consultants for projects that can't slow down. Go-lives, migrations, stabilizations, backfill. On-site in days, not months.",
    href: "/staffing",
  },
  {
    icon: UserCheck,
    title: "Direct Placement",
    tag: "Permanent Hires",
    desc: "Full-time hires for mission-critical IT roles. Analysts, engineers, architects, managers. Vetted for the seat and the culture, not just the résumé.",
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
    <section id="services" ref={ref} className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            What We Do
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            Three practices. <em className="text-teal">One focus.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Staffing, direct placement, and retained search. Healthcare IT only.
          </p>
        </div>

        {/* Highlight banner */}
        <div className={`mt-12 rounded-xl bg-ink px-8 py-10 md:px-12 md:py-14 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-display text-2xl leading-snug text-cream md:text-4xl">
            You run the roadmap.{" "}
            <em className="text-teal">We build the team.</em>
          </p>
        </div>

        {/* Three practice cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {practices.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              className={`group flex flex-col rounded-xl border border-ink/10 bg-white p-8 transition-all duration-500 hover:border-teal/40 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <p.icon className="mb-4 h-7 w-7 text-teal" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                {p.tag}
              </span>
              <h3 className="mt-1 font-display text-2xl text-ink">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
              <span className="mt-6 inline-block font-mono text-xs text-teal transition-all group-hover:translate-x-1">
                Learn More →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
