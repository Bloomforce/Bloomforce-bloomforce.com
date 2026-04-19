import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

/*
 * Case Studies – accordion layout on cream background.
 * Each row shows client identity + one-line hook. Clicking expands to reveal
 * the full situation / outcome. Only one card open at a time.
 *
 * Client logos picked up dynamically from src/assets/clients/ via
 * Vite's import.meta.glob. Expected filenames: ohsu.png, piedmont.png, copc.png
 */

const clientLogoFiles = import.meta.glob<{ default: string }>(
  "@/assets/clients/*.{png,svg,jpg,jpeg,webp}",
  { eager: true }
);

function resolveLogo(slug: string): string | null {
  const match = Object.entries(clientLogoFiles).find(([path]) =>
    path.toLowerCase().includes(`/clients/${slug}.`)
  );
  return match ? match[1].default : null;
}

type CaseStudy = {
  client: string;
  slug: string;
  hook: string;
  context: string;
  situation: string;
  outcome: string;
  quote: string | null;
  /** Tailwind class override for logos with unusual aspect ratios */
  logoClass?: string;
  /** Force text fallback even if logo file exists */
  useFallback?: boolean;
};

const caseStudies: CaseStudy[] = [
  {
    client: "OHSU",
    slug: "ohsu",
    hook: "Full project team hired before the deadline.",
    context: "Academic Medical Center · Portland, OR",
    situation:
      "OHSU needed three Project Managers and two Senior PMs for a large Epic implementation, all with hands-on Epic implementation experience. That combination is a niche skillset, and filling five seats at once made it even harder.",
    outcome: "12 candidates interviewed in two weeks. Five successfully hired.",
    quote: null,
    useFallback: false,
  },
  {
    client: "Piedmont",
    slug: "piedmont",
    hook: "Filled a role no one else could. Two weeks.",
    context: "Multi-Hospital Health System · Atlanta, GA",
    situation:
      "Piedmont needed an on-site FTE leader for their Community Connect team with both Epic implementation and Community Connect experience, local to Atlanta. They had been searching for months with another firm and came up empty.",
    outcome: "Two highly qualified local candidates delivered in two weeks. Both interviewed, one successfully hired.",
    quote: null,
  },
  {
    client: "COPC",
    slug: "copc",
    hook: "Implementation delivered successfully and on time.",
    context: "Primary Care Platform · Columbus, OH",
    situation:
      "COPC needed a local, on-site Project Director to lead a new ambulatory Epic implementation. The role required deep Epic implementation leadership in a large outpatient setting, a very thin talent pool, with a hard start date already on the calendar.",
    outcome: "Hired in two weeks. Implementation delivered successfully and on time.",
    quote: null,
  },
];

export function TestimonialSection() {
  const { ref, isVisible } = useScrollReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <section
      id="case-studies"
      ref={ref}
      className="relative overflow-hidden bg-cream pt-16 pb-24 md:pt-20 md:pb-36"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div
          className={`mb-14 max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Case Studies
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            The proof is in
            <br />
            <em className="text-teal">the placement.</em>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {caseStudies.map((c, i) => {
            const logo = resolveLogo(c.slug);
            const isOpen = openIndex === i;

            return (
              <div
                key={c.slug}
                className={`rounded-2xl border transition-all duration-500 ${
                  isOpen
                    ? "border-ink/[0.08] bg-white shadow-lg shadow-ink/[0.04]"
                    : "border-ink/[0.06] bg-white hover:border-ink/[0.1] hover:shadow-md hover:shadow-ink/[0.04]"
                } ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${(i + 2) * 120}ms` }}
              >
                {/* Collapsed row — always visible */}
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center gap-4 px-4 py-5 text-left sm:gap-6 sm:px-8 sm:py-6 md:px-10 md:py-7"
                >
                  {/* Client identity */}
                  <div className="flex w-20 shrink-0 items-center sm:w-36 md:w-44">
                    {logo && !c.useFallback ? (
                      <img
                        src={logo}
                        alt={`${c.client} logo`}
                        className={`w-auto opacity-80 ${c.logoClass || "max-h-9"}`}
                        loading="lazy"
                      />
                    ) : (
                      <span className="font-display text-2xl tracking-tight text-ink">
                        {c.client}
                      </span>
                    )}
                  </div>

                  {/* Hook line */}
                  <span className={`flex-1 text-base md:text-lg transition-colors duration-300 ${isOpen ? "font-medium text-ink" : "text-ink-muted"}`}>
                    {c.hook}
                  </span>

                  {/* Chevron */}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink/30 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-teal" : ""
                    }`}
                  />
                </button>

                {/* Expanded content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-6 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
                      {/* Separator */}
                      <div className="mb-6 h-px w-full bg-ink/[0.06]" />

                      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
                        {c.context}
                      </p>

                      <div className="grid gap-8 md:grid-cols-2">
                        {/* Situation */}
                        <div>
                          <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-ink/40">
                            Situation
                          </p>
                          <p className="text-sm leading-relaxed text-ink-muted">
                            {c.situation}
                          </p>
                        </div>

                        {/* Outcome */}
                        <div className="rounded-xl bg-teal/[0.06] px-6 py-5 ring-1 ring-teal/[0.10]">
                          <p className="mb-1 font-mono text-[11px] uppercase tracking-widest text-teal/70">
                            Outcome
                          </p>
                          <p className="text-lg font-semibold leading-snug text-teal">
                            {c.outcome}
                          </p>
                        </div>
                      </div>

                      {c.quote && (
                        <p className="mt-6 text-sm italic leading-relaxed text-ink-muted">
                          "{c.quote}"
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA row — designed to feel like a natural continuation of the accordion */}
        <div
          className={`mt-6 rounded-2xl border border-ink/[0.08] bg-white shadow-sm transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col items-start gap-6 px-4 py-6 sm:px-8 sm:py-8 md:flex-row md:items-center md:gap-10 md:px-10 md:py-9">
            {/* Left: eyebrow + headline, mirroring the client+hook structure of the rows above */}
            <div className="flex-1">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                Your turn
              </p>
              <p className="font-display text-2xl leading-tight text-ink md:text-[28px]">
                Your next great hire is{" "}
                <em className="text-teal">two weeks away.</em>
              </p>
              <p className="mt-2 text-sm text-ink-muted">
                Tell us what you're looking for. We'll tell you straight if we can help.
              </p>
            </div>

            {/* Right: CTA (in the position the chevron occupies on the accordion rows) */}
            <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-teal px-7 py-3.5 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Book a 20-Minute Call
              </a>
              <a
                href="mailto:hello@bloomforce.com"
                className="text-xs font-medium text-ink/50 transition-colors hover:text-teal"
              >
                or email us directly →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
