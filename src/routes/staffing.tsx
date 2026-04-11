import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Zap,
  Users,
  Repeat,
  Check,
  X,
  ArrowRight,
  Monitor,
  Server,
  Brain,
  Cloud,
  ClipboardList,
} from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/staffing")({
  component: StaffingPage,
  head: () => ({
    meta: [
      { title: "Staffing — Bloomforce" },
      {
        name: "description",
        content:
          "Healthcare IT staffing built for the projects that can't slow down. Specialist consultants on the ground in days — go-lives, migrations, backfill, and contract-to-hire.",
      },
    ],
  }),
});

/* ─────────────────────────────────────────────
   Hero
   ───────────────────────────────────────────── */
function StaffingHero() {
  return (
    <section className="bg-cream pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            Practice 01 — Staffing
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
            Specialist consultants for
            <br />
            <em className="text-teal">the projects that can't slow down.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            Go-lives, migrations, stabilizations, and backfill. When the timeline won't
            move and the work has to get done, we put vetted healthcare IT specialists on
            the ground — usually in days, always by people who've done this work before.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Talk to a Staffing Lead
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-cream-dark"
            >
              See How It Works →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Use Cases
   ───────────────────────────────────────────── */
const useCases = [
  {
    icon: Zap,
    title: "Project Surge",
    body:
      "You have a go-live in six weeks and three critical seats open. You need builders, analysts, or trainers who can ramp in days — not people who need a month of context before they're useful.",
    examples: "Epic go-lives · ERP cutovers · ServiceNow rollouts",
  },
  {
    icon: Users,
    title: "Backfill & Coverage",
    body:
      "A key person is out on leave, resigned unexpectedly, or got pulled onto another initiative. You need to hold the line until you can run a real hire — without dropping the ball in the meantime.",
    examples: "Parental leave · Unexpected resignation · Interim coverage",
  },
  {
    icon: Repeat,
    title: "Contract-to-Hire",
    body:
      "You're ready to add full-time headcount, but you want to see the person on the job before you commit. Start them as a contractor, convert when it clicks, part ways cleanly if it doesn't.",
    examples: "Try-before-you-buy · FTE conversion · Reduced hiring risk",
  },
];

function UseCases() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className="border-y border-ink/10 bg-cream-dark py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-14 max-w-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            Who It's For
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            Three kinds of problems. <em className="text-teal">One kind of fix.</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {useCases.map((uc, i) => (
            <div
              key={uc.title}
              className={`rounded-xl border border-ink/10 bg-white p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 120}ms` }}
            >
              <uc.icon className="mb-4 h-7 w-7 text-teal" />
              <h3 className="font-display text-2xl text-ink">{uc.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{uc.body}</p>
              <p className="mt-5 font-mono text-[10px] uppercase tracking-wider text-ink/40">
                {uc.examples}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Big Firm vs. Bloomforce Comparison
   ───────────────────────────────────────────── */
const comparisonRows = [
  {
    dimension: "The Pitch vs. the Delivery",
    bigFirm:
      "The senior on the sales call isn't the person who shows up. By week three, you're working with a junior you've never met.",
    bloomforce:
      "The consultant you meet is the consultant you get. No swap-outs, no handoffs to a delivery manager you don't know.",
  },
  {
    dimension: "The Bench",
    bigFirm:
      "They need to keep a bench utilized, so they pitch you the people they have — not the people you need. Your role gets shaped to fit their roster.",
    bloomforce:
      "We don't carry a bench. Every placement is sourced for the role. If we don't have the right person, we say so out loud.",
  },
  {
    dimension: "The Shortlist",
    bigFirm:
      "Twenty résumés on a Friday afternoon, most of them from people who've never touched a healthcare system. You become the filter.",
    bloomforce:
      "Three to five candidates you'd actually hire. Pre-vetted technically and for fit. We do the filtering before you see a single profile.",
  },
  {
    dimension: "Industry Focus",
    bigFirm:
      "Healthcare IT is one practice area among dozens — finance, manufacturing, retail, logistics. Your recruiter was working a SAP role last week.",
    bloomforce:
      "Healthcare IT is the whole shop. Every recruiter, every candidate, every process. We don't staff anything else, so we're actually good at this.",
  },
  {
    dimension: "Speed to Start",
    bigFirm:
      "Two to four weeks to produce a shortlist, then another two to three weeks of interview cycles before anyone is on the ground.",
    bloomforce:
      "Shortlists in days, not weeks. Most urgent placements are interviewing within 48 hours and on the ground inside a week.",
  },
  {
    dimension: "After the Placement",
    bigFirm:
      "You hear from them when it's time to renew. Problems surface during the next contract negotiation, not when they could still be fixed.",
    bloomforce:
      "We check in with you and the consultant through the whole engagement. If something's off, we want to know week one — not month three.",
  },
];

function ComparisonTable() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-14 max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            Why Not Just Call Your MSA Vendor?
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            Big firm vs. <em className="text-teal">Bloomforce.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            The honest version. Here's where a boutique specialist actually changes the
            outcome — and where a big staffing firm usually gets in its own way.
          </p>
        </div>

        {/* Desktop / tablet: real table */}
        <div
          className={`hidden overflow-hidden rounded-2xl border border-ink/10 bg-white md:block transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Table header */}
          <div className="grid grid-cols-[1.2fr_2fr_2fr] border-b border-ink/10 bg-stone/60">
            <div className="px-6 py-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                Dimension
              </span>
            </div>
            <div className="border-l border-ink/10 px-6 py-5">
              <div className="flex items-center gap-2">
                <X className="h-4 w-4 text-ink/40" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  Big Staffing Firm
                </span>
              </div>
            </div>
            <div className="border-l border-ink/10 bg-teal/8 px-6 py-5">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-teal" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal">
                  Bloomforce
                </span>
              </div>
            </div>
          </div>

          {/* Rows */}
          {comparisonRows.map((row, i) => (
            <div
              key={row.dimension}
              className={`grid grid-cols-[1.2fr_2fr_2fr] ${
                i !== comparisonRows.length - 1 ? "border-b border-ink/10" : ""
              }`}
            >
              <div className="px-6 py-6">
                <h3 className="font-display text-base text-ink md:text-lg">
                  {row.dimension}
                </h3>
              </div>
              <div className="border-l border-ink/10 px-6 py-6">
                <p className="text-sm leading-relaxed text-ink-muted">{row.bigFirm}</p>
              </div>
              <div className="border-l border-ink/10 bg-teal/[0.04] px-6 py-6">
                <p className="text-sm leading-relaxed text-ink">{row.bloomforce}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stacked cards */}
        <div className="space-y-6 md:hidden">
          {comparisonRows.map((row) => (
            <div
              key={row.dimension}
              className="rounded-xl border border-ink/10 bg-white p-6"
            >
              <h3 className="font-display text-lg text-ink">{row.dimension}</h3>
              <div className="mt-4">
                <div className="mb-1 flex items-center gap-2">
                  <X className="h-3.5 w-3.5 text-ink/40" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-ink/50">
                    Big Firm
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">{row.bigFirm}</p>
              </div>
              <div className="mt-4 rounded-lg bg-teal/5 p-4">
                <div className="mb-1 flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-teal" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-teal">
                    Bloomforce
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink">{row.bloomforce}</p>
              </div>
            </div>
          ))}
        </div>

        <p
          className={`mt-12 max-w-3xl text-xl italic font-medium text-ink transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          None of this is a trade secret. It's just what happens when a shop actually
          specializes — and what stops happening when it doesn't.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   How It Works
   ───────────────────────────────────────────── */
const phases = [
  {
    num: "01",
    title: "Intake",
    completion: "We understand what you actually need",
    body:
      "A real conversation about the role, the team, the tech stack, the culture, and the constraint that's driving the urgency. We'd rather lose a day on intake than send you the wrong person in a week.",
  },
  {
    num: "02",
    title: "Shortlist",
    completion: "You have three to five candidates you'd actually hire",
    body:
      "We tap a specialist network built over years of healthcare IT recruiting. We screen for skills, credentials, and fit — then send you a curated shortlist, not a résumé dump.",
  },
  {
    num: "03",
    title: "Place",
    completion: "Your consultant is on the ground and productive",
    body:
      "We coordinate interviews, handle negotiations, and run onboarding. You meet the person who's actually doing the work — no bait-and-switch, no delivery manager layer in between.",
  },
  {
    num: "04",
    title: "Support",
    completion: "You know what's working and what isn't — in real time",
    body:
      "Weekly check-ins with you and the consultant throughout the engagement. If something's off, we want to know week one. Renewals are a conversation, not a surprise.",
  },
];

function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how-it-works" ref={ref} className="bg-navy-dark py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-16 max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            How It Works
          </p>
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            Four phases. <em className="text-teal">Zero guesswork.</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-warm-gray">
            We measure each phase by completion, not calendar. Most engagements move from
            intake to on-the-ground in under two weeks — some faster, some slower, all
            scoped to the urgency of the work.
          </p>
        </div>

        <div className="ml-4 md:ml-12">
          {phases.map((phase, i) => (
            <div
              key={phase.num}
              className={`relative border-l-2 border-teal/20 pl-8 pb-16 last:pb-0 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-teal bg-navy-dark" />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="font-display text-6xl text-teal/20 md:text-8xl">
                  {phase.num}
                </span>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {phase.title}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-teal">
                    Done when: {phase.completion}
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-warm-gray">
                {phase.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Practice Areas (where we staff)
   ───────────────────────────────────────────── */
const areas = [
  { icon: Monitor, title: "Epic / EHR", href: "#practice-epic" },
  { icon: Server, title: "Enterprise Apps", href: "#practice-enterprise-apps" },
  { icon: Brain, title: "AI & Data", href: "#practice-ai-data" },
  { icon: Cloud, title: "Infrastructure", href: "#practice-infrastructure" },
  { icon: ClipboardList, title: "PMO", href: "#practice-pmo" },
];

function PracticeAreas() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-stone py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-10 max-w-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            Where We Staff
          </p>
          <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
            Five practice areas. <em className="text-teal">All healthcare IT.</em>
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {areas.map((a, i) => (
            <a
              key={a.title}
              href={a.href}
              className={`group flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-5 py-4 transition-all hover:border-teal/40 hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <a.icon className="h-5 w-5 text-teal" />
              <span className="text-sm font-semibold text-ink">{a.title}</span>
              <ArrowRight className="ml-auto h-4 w-4 text-ink/20 transition-all group-hover:translate-x-0.5 group-hover:text-teal" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */
function StaffingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />
      <StaffingHero />
      <UseCases />
      <ComparisonTable />
      <HowItWorks />
      <PracticeAreas />
      <SiteFooter />
    </div>
  );
}
