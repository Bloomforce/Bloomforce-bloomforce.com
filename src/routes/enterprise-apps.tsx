import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Server, Check } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { BookCallCTA } from "@/components/BookCallCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/enterprise-apps")({
  component: EnterpriseAppsPage,
  head: () => ({
    meta: [
      { title: "Enterprise Apps Talent. Bloomforce." },
      {
        name: "description",
        content:
          "ServiceNow, Salesforce, Workday, and Oracle implementation and support talent for complex enterprise rollouts inside health systems.",
      },
    ],
  }),
});

const roles = [
  "ServiceNow Administrators & Developers (ITSM, ITOM, CSM)",
  "Salesforce Admins, Developers & Architects (Health Cloud)",
  "Workday HCM & Finance Analysts",
  "Oracle ERP / Cloud Implementation Consultants",
  "Infor CloudSuite Implementation Leads",
  "Integration Engineers (MuleSoft, Boomi, HL7/FHIR)",
  "Enterprise Architects",
  "Business Systems Analysts",
];

const engagements = [
  "ServiceNow rollouts and ITSM transformations",
  "Salesforce Health Cloud implementations",
  "Workday HCM go-lives and optimization",
  "Oracle ERP migrations",
  "Cross-platform integration projects",
  "Enterprise app FTE backfill and contract-to-hire",
  "Enterprise architecture leadership search",
];

function EnterpriseAppsPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />

      <section className="bg-cream pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
              <Server className="mr-2 inline h-4 w-4" />
              Enterprise Apps
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
              The people who make
              <br />
              <em className="text-teal">enterprise systems work.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              ServiceNow, Salesforce, Workday, Oracle, Infor. Health systems
              run on these platforms but struggle to find people who've implemented
              them in a healthcare environment. We source from a network that
              lives at the intersection of enterprise technology and patient care.
            </p>
            <div className="mt-10">
              <a
                href="/#book-a-call"
                className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Need Enterprise App Talent? Let's Talk
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
              Across platforms. <em className="text-teal">Inside healthcare.</em>
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
              When teams call us <em className="text-teal">for enterprise apps.</em>
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
