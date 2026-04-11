import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { StatsStrip } from "@/components/StatsStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { Manifesto } from "@/components/Manifesto";
import { TestimonialSection } from "@/components/TestimonialSection";
import { WhyBloomforce } from "@/components/WhyBloomforce";
import { TalentCTA } from "@/components/TalentCTA";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Bloomforce — Healthcare IT Talent. It's All We Do." },
      { name: "description", content: "Bloomforce is a boutique healthcare IT staffing and search firm. We place specialist consultants and run retained searches for the tier that actually runs healthcare IT — Director through CIO." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementBanner />
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <ProblemSection />
      <ServicesSection />
      <Manifesto />
      <TestimonialSection />
      <WhyBloomforce />
      <TalentCTA />
      <SiteFooter />
    </div>
  );
}
