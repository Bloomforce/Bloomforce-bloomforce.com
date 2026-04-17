import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Monitor, Check } from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { BookCallCTA } from "@/components/BookCallCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/epic")({
  component: EpicPage,
  head: () => ({
    meta: [
      { title: "Epic / EHR Talent. Bloomforce." },
      {
        name: "description",
        content:
          "Certified Epic consultants, EHR analysts, trainers, and go-live support specialists. Bloomforce places healthcare IT talent across the full Epic lifecycle.",
      },
    ],
  }),
});

const roles = [
  "Epic Analysts (Ambulatory, Inpatient, Revenue Cycle, Ancillary)",
  "Epic Certified Project Managers",
  "Epic Trainers & Credentialed Trainers",
  "Clinical Informaticists",
  "EHR Integration Engineers (Bridges, Interconnect)",
  "Caboodle / Clarity Report Writers",
  "Go-Live Command Center Support",
  "Community Connect Specialists",
  "MyChart Analysts & Developers",
  "Epic Security & Access Analysts",
];

const engagements = [
  "New Epic implementations",
  "Epic upgrades and optimization waves",
  "Community Connect rollouts",
  "EHR-to-Epic migrations (Cerner, MEDITECH, Allscripts)",
  "Go-live stabilization and at-the-elbow support",
  "Backfill for Epic FTE vacancies",
  "Epic leadership search (Director of Epic, VP of Clinical Applications)",
];

function EpicPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />

      {/* Hero */}
      <section className="bg-cream pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
              <Monitor className="mr-2 inline h-4 w-4" />
              Epic / EHR
            </p>
            <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
              Epic talent that's
              <br />
              <em className="text-teal">actually certified.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              Go-lives, upgrades, optimizations, Community Connect. We place
              certified Epic consultants and EHR specialists across the full
              lifecycle. Every candidate has done this work in a live health
              system. Not a classroom. Not a sandbox.
            </p>
            <div className="mt-10">
              <a
                href="/#book-a-call"
                className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Need Epic Talent? Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Roles */}
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
              Across the full <em className="text-teal">Epic stack.</em>
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

      {/* Engagements */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
              Common Engagements
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              When teams call us <em className="text-teal">for Epic.</em>
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
