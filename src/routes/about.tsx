import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { ThesisSection } from "@/components/ThesisSection";
import { ProblemSection } from "@/components/ProblemSection";
import { FounderStory } from "@/components/FounderStory";
import { BookCallCTA } from "@/components/BookCallCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Bloomforce. Healthcare IT Talent. It's All We Do." },
      {
        name: "description",
        content:
          "Bloomforce is a boutique healthcare IT staffing and search firm built on a simple thesis: every health system is a technology company, and IT belongs in-house.",
      },
    ],
  }),
});

function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />
      <ThesisSection />
      <ProblemSection />
      <FounderStory />
      <BookCallCTA />
      <SiteFooter />
    </div>
  );
}
