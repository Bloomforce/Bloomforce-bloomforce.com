import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, Check } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { BookCallCTA } from "@/components/BookCallCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/ai-data")({
  component: AiDataPage,
  head: () => ({
    meta: [
      { title: "AI & Data Talent. Bloomforce." },
      {
        name: "description",
        content:
          "Data engineers, ML specialists, and analytics leaders driving clinical insights and operational intelligence inside health systems.",
      },
    ],
  }),
});

const roles = [
  "Data Engineers (Snowflake, Databricks, Azure Data Factory)",
  "Machine Learning Engineers",
  "Clinical Data Scientists",
  "BI & Reporting Analysts (Tableau, Power BI, Qlik)",
  "Data Governance & Quality Leads",
  "NLP / Clinical NLP Specialists",
  "Analytics Managers & Directors",
  "Chief Data Officers / VP of Data & Analytics",
];

const engagements = [
  "Enterprise data warehouse builds and migrations",
  "Predictive analytics and clinical decision support",
  "Population health analytics platforms",
  "AI/ML model development for clinical operations",
  "Data governance and master data management programs",
  "Analytics team builds (FTE and contract)",
  "Data leadership search (Director through CDO)",
];

function AiDataPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />

      <section className="bg-cream pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
              <Brain className="mr-2 inline h-4 w-4" />
              AI & Data
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
              Your AI strategy is only as good as
              <br />
              <em className="text-teal">the team behind it.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Every health system wants to operationalize AI. The bottleneck is
              never the technology. It's finding people who can build the
              pipelines, train the models, and deliver insights without
              needing six months of healthcare context before they're useful.
            </p>
            <div className="mt-10">
              <a
                href="/#book-a-call"
                className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Need Data & AI Talent? Let's Talk
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
              From pipelines <em className="text-teal">to the C-suite.</em>
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
              When teams call us <em className="text-teal">for data & AI.</em>
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
