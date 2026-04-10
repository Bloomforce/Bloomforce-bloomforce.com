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
            Our Offering
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            What we do <em className="text-teal">for you.</em>
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Bloomforce connects health systems with the specialized IT talent they need — from Epic go-lives to enterprise-wide digital transformation. We combine deep healthcare expertise, a curated talent network, and a relentless sense of urgency.
          </p>
        </div>

        {/* Lazio-style highlight banner */}
        <div className={`mt-12 rounded-xl bg-ink px-8 py-10 md:px-12 md:py-14 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="font-display text-2xl leading-snug text-cream md:text-4xl">
            We source, vet, and place healthcare IT professionals — Epic, EHR, AI, security, and leadership.{" "}
            <em className="text-teal">You focus on patient care.</em>
          </p>
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
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{svc.desc}</p>
              <span className="mt-4 inline-block font-mono text-xs text-teal opacity-0 transition-opacity group-hover:opacity-100">
                Learn More →
              </span>
            </div>
          ))}
        </div>

        <div className={`mt-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-ink/50 mb-8">
            How We Engage
          </h3>
          <div className="grid gap-px bg-ink/10 sm:grid-cols-3 rounded-xl overflow-hidden">
            {engagements.map((e, i) => (
              <div key={e} className="bg-cream px-8 py-8 text-center transition-colors hover:bg-stone">
                <span className="block font-mono text-xs text-teal mb-2">0{i + 1}</span>
                <span className="text-lg font-semibold text-ink">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
