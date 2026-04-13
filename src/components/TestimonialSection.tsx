import { useScrollReveal } from "@/hooks/useScrollReveal";

/*
 * Case Studies. Real engagements, OHSU / Piedmont / COPC.
 * Optional `quote` field accepts a real client quote with attribution.
 * Em dashes in quote attributions are intentional and allowed.
 *
 * Client logos are picked up dynamically from src/assets/clients/ via
 * Vite's import.meta.glob. Expected filenames: ohsu.png, piedmont.png, copc.png
 * (.svg also works). If a file is missing the card gracefully falls back to
 * the text wordmark so the build never breaks.
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
  context: string;
  situation: string;
  outcome: string;
  quote: string | null;
};

const caseStudies: CaseStudy[] = [
  {
    client: "OHSU",
    slug: "ohsu",
    context: "Academic Medical Center · Portland, OR",
    situation: "Needed five project managers for a new Epic implementation. Every hire had to have Epic experience.",
    outcome: "Placed all five.",
    quote: null,
  },
  {
    client: "Piedmont",
    slug: "piedmont",
    context: "Multi-Hospital Health System · Atlanta, GA",
    situation: "Needed a local FTE leader for their Community Connect team with both Epic implementation and Community Connect experience.",
    outcome: "Two qualified candidates in two weeks. One placed.",
    quote: null,
  },
  {
    client: "COPC",
    slug: "copc",
    context: "Primary Care Platform · Columbus, OH",
    situation: "Local FTE Project Director for a new ambulatory Epic implementation. Had to have strong ambulatory Epic experience.",
    outcome: "Placed in two weeks. Implementation delivered.",
    quote: null,
  },
];

export function TestimonialSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="case-studies" ref={ref} className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`mb-16 max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Case Studies
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            What it looks like
            <br />
            <em className="text-teal">when it works.</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((c, i) => {
            const logo = resolveLogo(c.slug);
            return (
            <div
              key={c.client}
              className={`flex flex-col rounded-xl border-l-4 border-teal bg-white p-8 shadow-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <div className="flex h-14 items-center">
                {logo ? (
                  <img
                    src={logo}
                    alt={`${c.client} logo`}
                    className="max-h-12 w-auto"
                    loading="lazy"
                  />
                ) : (
                  <p className="font-display text-3xl tracking-tight text-ink">{c.client}</p>
                )}
              </div>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/40">
                {c.context}
              </p>

              <div className="mt-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
                  Situation
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.situation}</p>
              </div>

              <div className="mt-6 rounded-lg bg-teal/10 px-5 py-4">
                <p className="font-mono text-[11px] uppercase tracking-widest text-teal/70">
                  Outcome
                </p>
                <p className="mt-1 text-base font-semibold leading-snug text-teal">{c.outcome}</p>
              </div>

              {c.quote && (
                <p className="mt-6 flex-1 text-sm italic leading-relaxed text-ink">
                  "{c.quote}"
                </p>
              )}
            </div>
            );
          })}
        </div>

        <p className={`mt-14 max-w-3xl text-base text-ink-muted transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Want the full story on any of these? Bring it up on the call.
        </p>
      </div>
    </section>
  );
}
