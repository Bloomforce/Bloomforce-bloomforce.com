import { useScrollReveal } from "@/hooks/useScrollReveal";

/*
 * PLACEHOLDER — Founder story section for /about.
 * Copy to be written from a founder interview with Zach.
 * Structure is in place: eyebrow, headline, portrait slot, three body beats,
 * pull quote. Replace the lorem / TODO strings when the interview is done.
 */
export function FounderStory() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="founder" ref={ref} className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Founder Story
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            Why Zach built
            <br />
            <em className="text-teal">Bloomforce.</em>
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          {/* Portrait placeholder */}
          <div
            className={`md:col-span-2 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="aspect-[4/5] w-full rounded-lg border border-ink/10 bg-stone">
              <div className="flex h-full items-center justify-center">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink-muted">
                  {/* TODO: replace with founder portrait */}
                  Portrait Coming Soon
                </p>
              </div>
            </div>
          </div>

          {/* Story body */}
          <div
            className={`md:col-span-3 space-y-6 text-lg leading-relaxed text-ink-muted transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* TODO: replace with real founder story from interview.
                Suggested beats:
                  1) Accenture healthcare practice — what he saw selling BPO
                  2) The pattern on repeat — why outsourced IT fails health systems
                  3) The decision — why a boutique healthcare-IT-only firm
                  4) The five years since — what he's learned and what's next
            */}
            <p>
              [Founder story placeholder. This section will tell the story of why Zach
              launched Bloomforce five years ago, drawn from his years leading BPO deals
              inside the Accenture healthcare practice and watching the same cycle play
              out at health system after health system.]
            </p>
            <p>
              [Beat two: the pattern. Labor costs climb, a big firm sells a rescue deal,
              clinicians get frustrated, the deal unwinds, the jobs come back in-house.
              Zach decided there had to be a better way to help health systems build and
              keep the teams they actually need.]
            </p>
            <p>
              [Beat three: the decision. Why a boutique, healthcare-IT-only firm. Why no
              bench, no bait-and-switch, no managed services. What he wanted to build that
              the dozen existing firms weren't building.]
            </p>

            <blockquote className="mt-10 border-l-2 border-teal pl-6 font-display text-2xl italic leading-snug text-ink md:text-3xl">
              {/* TODO: replace with a line pulled from the founder interview */}
              "[Pull quote from Zach. Something that captures the thesis in one breath.]"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
