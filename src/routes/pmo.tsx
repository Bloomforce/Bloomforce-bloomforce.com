import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ClipboardList, Check } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { BookCallCTA } from "@/components/BookCallCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/pmo")({
  component: PmoPage,
  head: () => ({
    meta: [
      { title: "PMO Talent. Bloomforce." },
      {
        name: "description",
        content:
          "Program managers, project leads, and transformation office talent keeping complex healthcare IT initiatives on track.",
      },
    ],
  }),
});

const roles = [
  "Program Managers (EHR, ERP, Infrastructure)",
  "Project Managers (PMP, Epic Certified)",
  "Scrum Masters & Agile Coaches",
  "Change Management Leads",
  "Business Analysts",
  "PMO Directors & VP of IT Operations",
  "Transformation Office Leads",
  "Vendor Management & Procurement Analysts",
];

const engagements = [
  "EHR implementation program management",
  "Multi-workstream IT transformation programs",
  "PMO standup for new IT initiatives",
  "Agile transformation coaching",
  "Change management for major system rollouts",
  "Interim PMO leadership (backfill and contract-to-hire)",
  "PMO leadership search (Director, VP)",
];

function PmoPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />

      <section className="bg-cream pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
              <ClipboardList className="mr-2 inline h-4 w-4" />
              PMO
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
              Project leaders who've
              <br />
              <em className="text-teal">shipped in healthcare.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Healthcare IT projects fail when the PM doesn't understand the
              environment. Governance structures, clinical stakeholders, change
              management in a 24/7 care delivery setting. We place project and
              program managers who've run this work inside live health systems,
              not just managed a Gantt chart from a conference room.
            </p>
            <div className="mt-10">
              <a
                href="/#book-a-call"
                className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Need PMO Talent? Let's Talk
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
              From scrum master <em className="text-teal">to VP.</em>
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
              When teams call us <em className="text-teal">for PMO.</em>
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
