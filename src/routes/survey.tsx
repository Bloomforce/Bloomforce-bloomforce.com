import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/survey")({
  component: SurveyPage,
  head: () => ({
    meta: [
      { title: "2026 Healthcare IT Workforce Survey. Bloomforce." },
      {
        name: "description",
        content:
          "Take the 2026 Healthcare IT Workforce Survey. Five minutes gets you the full compensation and hiring report in your inbox the day it ships.",
      },
    ],
  }),
});

/*
 * PLACEHOLDER — Survey page.
 * TODO: Embed the actual survey form (Typeform, Google Forms, etc.)
 * once Zach has the survey tool selected and the questions finalized.
 */
function SurveyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />

      <section className="bg-cream py-24 md:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            The 2026 Survey
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
            Five minutes.
            <br />
            <em className="text-teal">Full report in your inbox.</em>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            We're surveying FTEs, consultants, and leaders across healthcare IT
            to build the most honest compensation and hiring benchmark out there.
            Your responses are anonymous. The full report ships to your inbox the
            day it's published.
          </p>

          {/* TODO: Replace with embedded survey form */}
          <div className="mx-auto mt-12 max-w-xl rounded-2xl border-2 border-dashed border-ink/20 bg-stone/50 py-20">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-ink/40">
              Survey Embed Coming Soon
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Typeform / Google Forms embed will go here
            </p>
          </div>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-ink/40">
            5 min · Anonymous · Results to your inbox
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
