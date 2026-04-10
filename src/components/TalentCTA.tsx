import { useScrollReveal } from "@/hooks/useScrollReveal";
import talentFace1 from "@/assets/talent-face-1.jpg";
import talentFace2 from "@/assets/talent-face-2.jpg";
import talentFace3 from "@/assets/talent-face-3.jpg";

export function TalentCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="talent" ref={ref} className="border-t border-border/50 bg-navy-dark py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-primary">
            For Talent
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Looking for your next
            <br />
            <em className="text-primary">healthcare IT opportunity?</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Join a network of 500+ professionals working with top health systems
            across the country. We match your skills to roles that matter.
          </p>

          <div className="mt-8 flex justify-center -space-x-3">
            {[talentFace1, talentFace2, talentFace3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Talent"
                className="h-12 w-12 rounded-full border-2 border-background object-cover"
              />
            ))}
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-background bg-primary text-xs font-bold text-primary-foreground">
              500+
            </div>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Join Our Network
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View Open Positions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
