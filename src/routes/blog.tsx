import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { BookCallCTA } from "@/components/BookCallCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Field Notes. Bloomforce." },
      {
        name: "description",
        content:
          "Insights on healthcare IT hiring trends, talent strategy, and digital transformation from the Bloomforce team.",
      },
    ],
  }),
});

/*
 * PLACEHOLDER — Blog / Field Notes page.
 * TODO: Wire to a CMS (Ghost, Sanity, Notion, etc.) or build
 * a static MDX-based blog when Zach is ready to publish.
 */
function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />

      <section className="bg-cream py-24 md:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Field Notes
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
            What we're seeing
            <br />
            <em className="text-teal">in healthcare IT.</em>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            Hiring trends, talent market shifts, compensation data, and lessons
            from the field. Written by the people who spend every day inside
            healthcare IT recruiting.
          </p>

          {/* TODO: Replace with blog post grid from CMS */}
          <div className="mx-auto mt-12 max-w-xl rounded-2xl border-2 border-dashed border-ink/20 bg-stone/50 py-20">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-ink/40">
              Posts Coming Soon
            </p>
            <p className="mt-2 text-sm text-ink-muted">
              Blog content will be published here
            </p>
          </div>
        </div>
      </section>

      <BookCallCTA />
      <SiteFooter />
    </div>
  );
}
