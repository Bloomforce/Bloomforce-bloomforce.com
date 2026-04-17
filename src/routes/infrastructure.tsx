import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Cloud, Check } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { BookCallCTA } from "@/components/BookCallCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/infrastructure")({
  component: InfrastructurePage,
  head: () => ({
    meta: [
      { title: "Infrastructure Talent. Bloomforce." },
      {
        name: "description",
        content:
          "Cloud architects, network engineers, and security professionals securing and scaling health system IT infrastructure.",
      },
    ],
  }),
});

const roles = [
  "Cloud Architects (AWS, Azure, GCP)",
  "Cloud Engineers & DevOps Engineers",
  "Network Engineers & Architects",
  "Cybersecurity Engineers & Analysts",
  "Security Architects & CISO Advisory",
  "Infrastructure Project Managers",
  "Systems Administrators (Windows, Linux, VMware)",
  "Identity & Access Management Specialists",
  "Disaster Recovery & Business Continuity Leads",
  "Telecom & Unified Communications Engineers",
];

const engagements = [
  "Cloud migration programs (on-prem to AWS/Azure)",
  "Data center consolidation and modernization",
  "Cybersecurity program builds and maturity assessments",
  "Network redesign and SD-WAN rollouts",
  "Infrastructure backfill for critical vacancies",
  "HIPAA/HITRUST compliance engineering",
  "Infrastructure leadership search (Director, VP, CISO)",
];

function InfrastructurePage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />

      <section className="bg-cream pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
              <Cloud className="mr-2 inline h-4 w-4" />
              Infrastructure
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
              Cloud, network, and security
              <br />
              <em className="text-teal">for health systems.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Health system infrastructure is not generic enterprise infrastructure.
              HIPAA, HITRUST, clinical uptime requirements, and legacy system
              dependencies make every project harder. We find the people who've
              done this work in a healthcare environment, not just read about it
              in a certification guide.
            </p>
            <div className="mt-10">
              <a
                href="/#book-a-call"
                className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Need Infrastructure Talent? Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      <section ref={ref} className="border-y border-ink/10 bg-cream-dark py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={`mb-12 max-w-2xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
              Roles We Place
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              From the cloud <em className="text-teal">to the rack.</em>
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {roles.map((role, i) => (
              <div
                key={role}
                className={`flex items-start gap-3 rounded-xl border border-ink/10 bg-white px-5 py-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <span className="text-sm font-medium text-ink">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
              Common Engagements
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              When teams call us <em className="text-teal">for infrastructure.</em>
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {engagements.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white px-5 py-4"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                <span className="text-sm font-medium text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookCallCTA />
      <SiteFooter />
    </div>
  );
}
