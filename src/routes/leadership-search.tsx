import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Crown,
  Crosshair,
  Replace,
  Check,
  X,
} from "lucide-react";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { BookCallCTA } from "@/components/BookCallCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/leadership-search")({
  component: LeadershipSearchPage,
  head: () => ({
    meta: [
      { title: "Leadership Search. Bloomforce." },
      {
        name: "description",
        content:
          "Retained search for the people who actually run healthcare IT. Director through CIO. Quiet, rigorous, and built around fit.",
      },
    ],
  }),
});

/* ─────────────────────────────────────────────
   Hero
   ───────────────────────────────────────────── */
function LeadershipHero() {
  return (
    <section className="bg-cream pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Practice 03 · Leadership Search
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
            Retained search for
            <br />
            <em className="text-teal">the people who run healthcare IT.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            Director through CIO. The roles that shape your roadmap, set the
            culture, and determine whether IT is an asset or a bottleneck.
            These searches are quiet, rigorous, and built entirely around fit.
            There is no shortcut and no consolation prize.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#book-a-call"
              className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Talk to Our Search Practice
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
    icon: Crown,
    title: "New Leadership Seat",
    body:
      "You're creating a new VP, CISO, CMIO, or CIO role. The person you hire will define the function. You need someone who gets healthcare, has built teams before, and can earn trust across the C-suite and the clinical floor.",
    examples: "CIO · VP of IT · CISO · CMIO · VP of Digital",
  },
  {
    icon: Replace,
    title: "Succession or Replacement",
    body:
      "A senior leader retired, departed, or is transitioning to a new role. The organization can't afford a gap at the top of IT. You need a confidential, focused search that moves quickly without compromising quality.",
    examples: "Planned retirement · Departure · Board-driven change",
  },
  {
    icon: Crosshair,
    title: "Transformation Leader",
    body:
      "You're launching a major initiative: a new EHR, a cloud migration, a digital front door. You need a leader who has done exactly this before and can own it from strategy to execution.",
    examples: "EHR conversion · Digital transformation · IT M&A integration",
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
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Who It's For
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            Three kinds of searches. <em className="text-teal">One standard.</em>
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
   National Firm vs. Bloomforce Comparison
   ───────────────────────────────────────────── */
const comparisonRows = [
  {
    dimension: "Healthcare Depth",
    bigFirm:
      "National search firms cover every industry. Your search partner ran a fintech placement last month and a manufacturing CTO search the month before. Healthcare is one vertical among many.",
    bloomforce:
      "Healthcare IT is all we do. We know the landscape: who's where, who's ready to move, which organizations are growing and which are restructuring. That context changes who we target and how we approach them.",
  },
  {
    dimension: "The Candidate Slate",
    bigFirm:
      "You get a slate of technically qualified people. On paper they check the boxes. But half of them have never navigated a health system board, dealt with a medical staff, or led through a regulatory audit.",
    bloomforce:
      "Every candidate on the slate has led inside healthcare. We vet for operational experience, clinical partnership, and the ability to lead in an environment where the stakes are patient care.",
  },
  {
    dimension: "Confidentiality",
    bigFirm:
      "Retained search firms talk. Your opening becomes market knowledge before the first slate is delivered. Candidates hear about it through the wrong channels.",
    bloomforce:
      "We run a quiet process. Outreach is targeted and discreet. The market hears about your hire when you announce it, not before.",
  },
  {
    dimension: "Speed vs. Rigor",
    bigFirm:
      "Large firms optimize for closing quickly to move to the next engagement. The pressure to fill can outweigh the discipline to wait for the right person.",
    bloomforce:
      "We won't present a candidate we wouldn't want running our own IT organization. The timeline is honest: most searches close in 60 to 90 days. Some take longer. We'd rather get it right.",
  },
  {
    dimension: "After the Placement",
    bigFirm:
      "Invoice sent. If the hire doesn't work out inside the guarantee window, the replacement search is a watered-down version of the original.",
    bloomforce:
      "We stay connected to both the leader and the organization through the first year. If something isn't landing, we want to know while there's still time to help.",
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
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Why Not a National Search Firm?
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            National firm vs. <em className="text-teal">Bloomforce.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            At the leadership level, the wrong hire costs you a year. Here's where
            healthcare depth actually changes the outcome.
          </p>
        </div>

        {/* Desktop / tablet: real table */}
        <div
          className={`hidden overflow-hidden rounded-2xl border border-ink/10 bg-white md:block transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-[1.2fr_2fr_2fr] border-b-2 border-ink/15 bg-stone/80">
            <div className="px-6 py-5">
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
                Dimension
              </span>
            </div>
            <div className="border-l border-ink/10 px-6 py-5">
              <div className="flex items-center gap-2">
                <X className="h-5 w-5 text-red-400/70" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
                  National Search Firm
                </span>
              </div>
            </div>
            <div className="border-l border-ink/10 bg-teal/10 px-6 py-5">
              <div className="flex items-center gap-2">
                <Check className="h-5 w-5 text-teal" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                  Bloomforce
                </span>
              </div>
            </div>
          </div>

          {comparisonRows.map((row, i) => (
            <div
              key={row.dimension}
              className={`grid grid-cols-[1.2fr_2fr_2fr] ${
                i !== comparisonRows.length - 1 ? "border-b border-ink/10" : ""
              }`}
            >
              <div className="px-6 py-6">
                <h3 className="text-base font-semibold text-ink md:text-lg">
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

          {/* Closing statement banner */}
          <div className="border-t-2 border-teal/20 bg-teal/[0.06] px-8 py-6">
            <p className="text-center text-lg font-semibold leading-snug text-ink md:text-xl">
              At this level, you're not filling a seat. You're choosing the person
              who will shape the next five years of your IT organization.
            </p>
          </div>
        </div>

        {/* Mobile: stacked cards */}
        <div className="space-y-6 md:hidden">
          {comparisonRows.map((row) => (
            <div
              key={row.dimension}
              className="rounded-xl border border-ink/10 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-ink">{row.dimension}</h3>
              <div className="mt-4">
                <div className="mb-1 flex items-center gap-2">
                  <X className="h-4 w-4 text-red-400/70" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-ink/70">
                    National Firm
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">{row.bigFirm}</p>
              </div>
              <div className="mt-4 rounded-lg bg-teal/5 p-4">
                <div className="mb-1 flex items-center gap-2">
                  <Check className="h-4 w-4 text-teal" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-teal">
                    Bloomforce
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink">{row.bloomforce}</p>
              </div>
            </div>
          ))}
          {/* Mobile closing statement */}
          <div className="rounded-xl border-2 border-teal/20 bg-teal/[0.06] px-6 py-5">
            <p className="text-center text-base font-semibold leading-snug text-ink">
              At this level, you're not filling a seat. You're choosing the person
              who will shape the next five years of your IT organization.
            </p>
          </div>
        </div>
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
    title: "Alignment",
    completion: "We agree on the profile, the priorities, and the non-negotiables",
    body:
      "We meet with the hiring executive, HR, and anyone else who will shape the decision. We map the role against the organization's strategy, culture, and current leadership team. We define what great looks like before we go to market.",
  },
  {
    num: "02",
    title: "Market Mapping",
    completion: "We've identified the target universe of candidates",
    body:
      "We build a landscape of qualified leaders across healthcare IT. Some we already know. Others we identify through referrals, research, and targeted outreach. Every conversation is confidential.",
  },
  {
    num: "03",
    title: "Candidate Development",
    completion: "You have a shortlist of leaders worth meeting",
    body:
      "We assess each candidate against the profile: leadership approach, operating experience, cultural fit, and motivation. We present a slate of three to five candidates with detailed write-ups, not just resumes.",
  },
  {
    num: "04",
    title: "Selection & Close",
    completion: "Offer accepted, transition plan in place",
    body:
      "We manage the interview process, facilitate board or executive presentations when needed, and help close the offer. We stay involved through the first year to support onboarding and early wins.",
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
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            How It Works
          </p>
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            Four phases. <em className="text-teal">No compromises on fit.</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-warm-gray">
            Most searches close in 60 to 90 days. Some take longer. We'd rather
            present the right person late than the wrong person on time.
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
   Roles We Search
   ───────────────────────────────────────────── */
const roles = [
  "Chief Information Officer",
  "Chief Technology Officer",
  "Chief Information Security Officer",
  "Chief Medical Information Officer",
  "VP of IT / VP of Digital",
  "VP of Clinical Applications",
  "Director of IT",
  "Director of EHR / Epic",
  "Director of Infrastructure",
  "Director of Cybersecurity",
];

function RolesWeSearch() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="bg-stone py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`mb-10 max-w-2xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Roles We Search
          </p>
          <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
            Director through CIO. <em className="text-teal">Healthcare IT only.</em>
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {roles.map((role, i) => (
            <div
              key={role}
              className={`flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-5 py-4 transition-all ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Crown className="h-4 w-4 shrink-0 text-teal" />
              <span className="text-sm font-semibold text-ink">{role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Page
   ───────────────────────────────────────────── */
function LeadershipSearchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />
      <LeadershipHero />
      <UseCases />
      <ComparisonTable />
      <HowItWorks />
      <RolesWeSearch />
      <BookCallCTA />
      <SiteFooter />
    </div>
  );
}
