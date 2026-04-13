import { createFileRoute } from "@tanstack/react-router";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Target,
  UserPlus,
  ShieldCheck,
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
import { BookCallCTA } from "@/components/BookCallCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/direct-placement")({
  component: DirectPlacementPage,
  head: () => ({
    meta: [
      { title: "Direct Placement. Bloomforce." },
      {
        name: "description",
        content:
          "Full-time healthcare IT hires for mission-critical roles. Analysts, engineers, architects, managers. Vetted for the seat and the culture, not just the resume.",
      },
    ],
  }),
});

/* ─────────────────────────────────────────────
   Hero
   ───────────────────────────────────────────── */
function DirectPlacementHero() {
  return (
    <section className="bg-cream pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Practice 02 · Direct Placement
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
            Full-time hires for
            <br />
            <em className="text-teal">the roles you can't afford to miss.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            Analysts, engineers, architects, and managers who stay. Vetted for the
            seat and the culture, not just the keywords on the resume. We source from
            a healthcare IT network that took a decade to build, so you stop sorting
            through a hundred unqualified applications.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#book-a-call"
              className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Talk to a Placement Lead
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
    icon: Target,
    title: "Hard-to-Fill FTE",
    body:
      "The role has been posted for three months. You've seen a hundred applicants but none with the right mix of clinical system experience, certification, and culture fit. You need a recruiter who actually knows the talent pool.",
    examples: "Epic analysts · Integration engineers · Security architects",
  },
  {
    icon: UserPlus,
    title: "Replacement Hire",
    body:
      "Someone gave notice and the clock is ticking. You need a strong permanent hire, not a panic placement. We run a focused search so you don't trade speed for quality or end up re-hiring in six months.",
    examples: "Unexpected resignation · Retirement · Internal transfer",
  },
  {
    icon: ShieldCheck,
    title: "New Capability",
    body:
      "You're building a new function or expanding the team. The people you need don't exist on job boards because they're already employed, doing the work, somewhere else. We go find them.",
    examples: "Cloud migration team · Data & analytics · AI/ML hires",
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
            Three hiring problems. <em className="text-teal">One approach.</em>
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
    dimension: "The Candidate Pool",
    bigFirm:
      "They post the job, wait for applicants, and forward whoever applies. You get volume, not quality. Most candidates have never touched the system you run.",
    bloomforce:
      "We recruit from a healthcare IT network built over ten years. Most of the people we place aren't on job boards. They're already employed, doing the work.",
  },
  {
    dimension: "Recruiter Expertise",
    bigFirm:
      "Your recruiter was staffing a logistics role last week and a finance role the week before. They match keywords, not competencies.",
    bloomforce:
      "Every recruiter on our team lives in healthcare IT. They know the difference between an Epic Caboodle analyst and a Clarity report writer, because they've placed both.",
  },
  {
    dimension: "The Shortlist",
    bigFirm:
      "Twenty resumes on a Friday. You become the filter. Half the candidates drop out before you even schedule the interview.",
    bloomforce:
      "Three to five candidates you'd actually hire. Pre-screened for skills, certifications, and culture fit. We present them with context, not just a resume.",
  },
  {
    dimension: "Time to Fill",
    bigFirm:
      "The average healthcare IT FTE takes three to six months to fill through traditional recruiting. Every month the seat sits empty, the team absorbs the load.",
    bloomforce:
      "We aim for a qualified shortlist inside two weeks. Some roles close faster. We don't rush the fit, but we don't let the process stall either.",
  },
  {
    dimension: "After the Hire",
    bigFirm:
      "Invoice sent. Relationship over. If the hire doesn't work out, you start the process from scratch with a new fee.",
    bloomforce:
      "We check in at 30, 60, and 90 days. If something isn't working, we want to know while there's still time to course-correct. Guarantee included.",
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
            Why Not Just Post the Job?
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            Job board vs. <em className="text-teal">Bloomforce.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted">
            Posting a role gets you applicants. Working with us gets you the right person.
            Here's the difference.
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
                  Post & Pray
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
              The best candidates aren't applying to your job posting. They're
              waiting for someone who knows them to make the right introduction.
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
                    Post & Pray
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
              The best candidates aren't applying to your job posting. They're
              waiting for someone who knows them to make the right introduction.
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
    title: "Discovery",
    completion: "We know the role, the team, and the real requirements",
    body:
      "We sit down with the hiring manager and understand what this person actually needs to do, not just the job description. Tech stack, team dynamics, reporting structure, deal-breakers. We'd rather over-invest in discovery than waste your time with the wrong candidates.",
  },
  {
    num: "02",
    title: "Sourcing",
    completion: "We've identified a qualified candidate pool",
    body:
      "We recruit from our healthcare IT network and go after passive candidates who aren't on job boards. We screen for technical depth, certifications, and culture fit before anyone's name reaches you.",
  },
  {
    num: "03",
    title: "Presentation",
    completion: "You have three to five candidates worth interviewing",
    body:
      "We send a curated shortlist with context on each candidate: why they fit, what they've done, and what to probe on. You spend your interview time evaluating, not filtering.",
  },
  {
    num: "04",
    title: "Close & Onboard",
    completion: "Offer accepted, start date confirmed, transition planned",
    body:
      "We help manage the offer, negotiate when needed, and coordinate a clean start. Then we check in at 30, 60, and 90 days to make sure the hire is landing the way everyone expected.",
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
            Four phases. <em className="text-teal">No wasted interviews.</em>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-warm-gray">
            We optimize for quality and speed. Most shortlists are delivered inside
            two weeks. Every step is designed to save you time and keep the
            best candidates engaged.
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
   Roles We Place
   ───────────────────────────────────────────── */
const areas = [
  { icon: Monitor, title: "Epic / EHR", href: "#" },
  { icon: Server, title: "Enterprise Apps", href: "#" },
  { icon: Brain, title: "AI & Data", href: "#" },
  { icon: Cloud, title: "Infrastructure", href: "#" },
  { icon: ClipboardList, title: "PMO", href: "#" },
];

function RolesWePlace() {
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
            Roles We Place
          </p>
          <h2 className="font-display text-3xl leading-tight text-ink md:text-4xl">
            Five practice areas. <em className="text-teal">All healthcare IT.</em>
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
          {areas.map((a, i) => (
            <div
              key={a.title}
              className={`flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-5 py-4 transition-all ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <a.icon className="h-5 w-5 text-teal" />
              <span className="text-sm font-semibold text-ink">{a.title}</span>
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
function DirectPlacementPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />
      <DirectPlacementHero />
      <UseCases />
      <ComparisonTable />
      <HowItWorks />
      <RolesWePlace />
      <BookCallCTA />
      <SiteFooter />
    </div>
  );
}
