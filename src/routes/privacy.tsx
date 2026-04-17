import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy. Bloomforce." },
      {
        name: "description",
        content: "Bloomforce privacy policy.",
      },
    ],
  }),
});

/*
 * PLACEHOLDER — Privacy policy page.
 * TODO: Replace with real privacy policy copy drafted by counsel.
 */
function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />

      <section className="bg-cream py-24 md:py-36">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Legal
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-ink md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-ink-muted">
            This page will contain the Bloomforce privacy policy once finalized
            by counsel. In the meantime, if you have questions about how we
            handle your data, reach out at{" "}
            <a
              href="mailto:hello@bloomforce.com"
              className="text-teal underline underline-offset-2"
            >
              hello@bloomforce.com
            </a>
            .
          </p>

          {/* TODO: Replace with full privacy policy content */}
          <div className="mt-12 rounded-2xl border-2 border-dashed border-ink/20 bg-stone/50 py-16 text-center">
            <p className="font-mono text-sm uppercase tracking-[0.25em] text-ink/40">
              Privacy Policy Content Coming Soon
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
