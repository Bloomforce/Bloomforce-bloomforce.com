import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, UserCheck, Crown } from "lucide-react";

const practices = [
  {
    icon: Briefcase,
    title: "Staffing",
    tag: "Contract & Contract-to-Hire",
    desc: "Specialist consultants for the projects that can't slow down — go-lives, migrations, stabilizations, and backfill. Deployed in days, not months.",
    href: "#staffing",
  },
  {
    icon: UserCheck,
    title: "Direct Placement",
    tag: "Permanent Hires",
    desc: "Full-time hires for mission-critical IT roles — analysts, engineers, architects, and managers. We find the person you'll still be thanking us for two years from now.",
    href: "#direct-placement",
  },
  {
    icon: Crown,
    title: "Leadership Search",
    tag: "Director Through CIO",
    desc: "Retained search for the tier that actually runs healthcare IT — Director, Sr. Director, Executive Director, VP, AVP, and CIO. Quiet, rigorous, and built around fit.",
    href: "#leadership-search",
  },
];

const engagements = [
  { num: "01", title: "Staffing", subtitle: "Contract & contract-to-hire" },
  { num: "02", title: "Direct Placement", subtitle: "Permanent hires" },
  { num: "03", title: "Leadership Search", subtitle: "Director through CIO" },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" ref={ref} className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            What We Do
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            Three practices. <em className="text-teal">One focus.</em>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Bloomforce is a boutique healthcare IT staffing and search firm. We place
            specialist consultants on the projects that can't slow down, and run retained
            searches for the tier that actually runs healthcare IT — from Director through
            CIO. That's it. No generalist staffing, no clinical recruiting, no adjacent
            side-hustles. One industry. Three ways to hire.
          </p>
        </div>

        {/* Highlight banner */}
        <div className={`mt-12 rounded-xl bg-ink px-8 py-10 md:px-12 md:py-14 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-display text-2xl leading-snug text-cream md:text-4xl">
            Three practices, one specialty.{" "}
            <em className="text-teal">You run the roadmap. We build the team.</em>
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

        {/* Engagement tiles */}
        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-ink/50 mb-8">
            Three Ways to Hire
          </h3>
          <div className="grid gap-px bg-ink/10 sm:grid-cols-3 rounded-xl overflow-hidden">
            {engagements.map((e) => (
              <div key={e.title} className="bg-cream px-8 py-8 text-center transition-colors hover:bg-stone">
                <span className="block font-mono text-xs text-teal mb-2">{e.num}</span>
                <span className="block text-lg font-semibold text-ink">{e.title}</span>
                <span className="mt-1 block text-xs text-ink-muted">{e.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
