import { useScrollReveal } from "@/hooks/useScrollReveal";
import headshot1 from "@/assets/headshot-1.jpg";
import headshot2 from "@/assets/headshot-2.jpg";
import headshot3 from "@/assets/headshot-3.jpg";

const testimonials = [
  {
    challenge: "Epic go-live at a 500-bed health system — 12 roles unfilled 4 weeks out.",
    result: "12 consultants placed in 3 weeks",
    quote: "Bloomforce delivered when our incumbent vendor couldn't. Every single consultant was certified and ready day one.",
    author: "VP of IT, Regional Health System",
    image: headshot1,
  },
  {
    challenge: "18-month CISO search with two failed placements from national firms.",
    result: "CISO placed in 45 days",
    quote: "They understood what we needed technically and culturally. The shortlist was three candidates — all exceptional.",
    author: "CIO, Academic Medical Center",
    image: headshot2,
  },
  {
    challenge: "Post-merger integration requiring a full EHR migration team in under two weeks.",
    result: "Full integration team deployed in 10 days",
    quote: "We went from zero to a full team faster than our internal HR could process the paperwork.",
    author: "Program Director, Multi-Hospital System",
    image: headshot3,
  },
];

export function TestimonialSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="results" ref={ref} className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            Results
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-6xl">
            Proof, <em className="text-teal">not promises.</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`flex flex-col rounded-xl border-l-4 border-teal bg-white p-8 shadow-sm transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${(i + 2) * 150}ms` }}
            >
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
                Challenge
              </p>
              <p className="mt-2 text-sm text-ink/60">{t.challenge}</p>

              <div className="my-6 rounded-lg bg-teal/10 px-4 py-3">
                <p className="text-lg font-semibold text-teal">{t.result}</p>
              </div>

              <p className="flex-1 text-base italic leading-relaxed text-ink">
                "{t.quote}"
              </p>

              <div className="mt-6 flex items-center gap-3">
                <img src={t.image} alt={t.author} className="h-10 w-10 rounded-full object-cover" />
                <span className="text-xs text-ink/50">{t.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
