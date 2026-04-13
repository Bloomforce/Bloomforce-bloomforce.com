import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { LogoScroll } from "@/components/LogoScroll";
import { TalentMarketSection } from "@/components/TalentMarketSection";
import { Manifesto } from "@/components/Manifesto";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ReportBlock } from "@/components/ReportBlock";
import { BookCallCTA } from "@/components/BookCallCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bloomforce. Healthcare IT Talent. It's All We Do." },
      {
        name: "description",
        content:
          "Bloomforce is a boutique healthcare IT staffing and search firm. Specialist consultants for the projects that can't slow down. Retained search for the leaders you can't afford to miss.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <LogoScroll />
      <TalentMarketSection />
      <Manifesto />
      <TestimonialSection />
      <ReportBlock />
      <BookCallCTA />
      <SiteFooter />
    </div>
  );
}
