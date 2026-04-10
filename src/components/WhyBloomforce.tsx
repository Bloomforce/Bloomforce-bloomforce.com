import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Shuffle, Network } from "lucide-react";
import teamPhoto from "@/assets/why-bloomforce-team.jpg";

const differentiators = [
  {
    icon: Target,
    title: "Specialist Focus",
    body: "We don't do general staffing. Every recruiter, every candidate, every process is built for healthcare IT.",
  },
  {
    icon: Shuffle,
    title: "Flexible Engagement",
    body: "Staff augmentation, contract-to-hire, or direct placement. Your timeline, your terms.",
  },
  {
    icon: Network,
    title: "Curated Network",
    body: "Our talent pool is pre-vetted, credentialed, and ready. No job-board scrapers. No résumé floods.",
  },
];

export function WhyBloomforce() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="why" ref={ref} className="py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Why Bloomforce
            </p>
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              The boutique alternative to
              <br />
              <em className="text-primary">big-firm staffing.</em>
            </h2>

            <div className="mt-12 space-y-8">
              {differentiators.map((d, i) => (
                <div
                  key={d.title}
                  className={`flex gap-5 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}
                  style={{ transitionDelay: `${(i + 2) * 200}ms` }}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <d.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground">{d.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`overflow-hidden rounded-2xl transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <img
              src={teamPhoto}
              alt="Bloomforce team"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
