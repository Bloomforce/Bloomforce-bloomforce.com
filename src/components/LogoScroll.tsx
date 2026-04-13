import epic from "@/assets/logos/epic.png";
import oracleHealth from "@/assets/logos/oracle-health.png";
import meditech from "@/assets/logos/meditech.png";
import workday from "@/assets/logos/workday.png";
import infor from "@/assets/logos/infor.png";
import servicenow from "@/assets/logos/servicenow.png";
import salesforce from "@/assets/logos/salesforce.png";
import aws from "@/assets/logos/aws.png";

/*
 * Auto-scrolling marquee of applications we specialize in.
 * Lives between ServicesSection and ProblemSection on the homepage.
 * Uses the existing `animate-marquee` keyframe in styles.css (30s linear loop).
 * We render the logo list twice so the translateX(-50%) loops seamlessly.
 */

const logos = [
  { src: epic, alt: "Epic" },
  { src: oracleHealth, alt: "Oracle Health" },
  { src: meditech, alt: "MEDITECH" },
  { src: workday, alt: "Workday" },
  { src: infor, alt: "Infor" },
  { src: servicenow, alt: "ServiceNow" },
  { src: salesforce, alt: "Salesforce" },
  { src: aws, alt: "AWS" },
];

export function LogoScroll() {
  return (
    <section className="overflow-hidden border-y border-ink/5 bg-cream py-16">
      <div className="mx-auto mb-10 max-w-7xl px-6 text-center">
        <p className="font-mono text-sm uppercase tracking-[0.25em] text-teal">
          Applications We Specialize In
        </p>
      </div>

      <div className="relative">
        {/* Fade masks on both edges so logos don't hard-cut */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-cream to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-cream to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-20 whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-auto shrink-0 md:h-12"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
