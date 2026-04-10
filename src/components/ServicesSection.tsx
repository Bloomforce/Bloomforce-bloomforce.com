import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Monitor, Server, Brain, Cloud, Users, ClipboardList } from "lucide-react";

const services = [
  { icon: Monitor, title: "Epic / EHR", desc: "Certified Epic consultants, EHR analysts, trainers, and go-live support specialists." },
  { icon: Server, title: "Enterprise Applications", desc: "ServiceNow, Salesforce, Workday, and Oracle implementation and support talent." },
  { icon: Brain, title: "AI & Data Analytics", desc: "Data engineers, ML specialists, and analytics leaders driving clinical insights." },
  { icon: Cloud, title: "IT Infrastructure & Cloud", desc: "Cloud architects, network engineers, and cybersecurity professionals." },
  { icon: Users, title: "IT Leadership Search", desc: "CIOs, CTOs, CISOs, and VP-level technology leaders for health systems." },
  { icon: ClipboardList, title: "PMO & Project Management", desc: "Program managers, project leads, and transformation office talent." },
];

const engagements = ["Staff Augmentation", "Contract-to-Hire", "Direct Placement"];

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
            What we do <em className="text-teal">for you</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`group rounded-xl border border-ink/10 bg-white p-8 transition-all duration-500 hover:border-teal/40 hover:shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <svc.icon className="mb-4 h-6 w-6 text-teal" />
              <h3 className="text-lg font-semibold text-ink">{svc.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{svc.desc}</p>
              <span className="mt-4 inline-block font-mono text-xs text-teal opacity-0 transition-opacity group-hover:opacity-100">
                Learn More →
              </span>
            </div>
          ))}
        </div>

        <div className={`mt-12 rounded-xl border border-ink/10 bg-stone p-8 md:p-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-ink/50">
            How We Engage
          </h3>
          <div className="mt-6 flex flex-wrap gap-4">
            {engagements.map((e) => (
              <span key={e} className="rounded-full border border-teal/30 bg-teal/10 px-5 py-2 text-sm font-medium text-teal">
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
