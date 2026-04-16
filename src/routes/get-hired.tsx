import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { TalentCTA } from "@/components/TalentCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/get-hired")({
  component: GetHired,
  head: () => ({
    meta: [
      { title: "Get Hired. Bloomforce." },
      {
        name: "description",
        content:
          "Healthcare IT consultants, full-time candidates, and leaders: Bloomforce works with specialists at every level. No generic job boards, no blind submissions.",
      },
    ],
  }),
});

function GetHired() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />
      <TalentCTA />
      <SiteFooter />
    </div>
  );
}
