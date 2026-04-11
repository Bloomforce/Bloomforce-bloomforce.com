import { useScrollReveal } from "@/hooks/useScrollReveal";

const principles = [
  {
    title: "No bench.",
    body: "We don't carry a bench of underutilized consultants looking for a home. Every placement is sourced for the role — not the other way around. If we don't have the right person, we say so.",
  },
  {
    title: "No bait-and-switch.",
    body: "The consultant you meet is the consultant you get. No swapping in a junior at week three. No handing your project to a delivery manager you've never spoken to.",
  },
  {
    title: "No résumé dumps.",
    body: "We send you a shortlist, not an inbox. Three to five candidates you'd actually hire — not twenty you have to sort through on a Friday afternoon.",
  },
  {
    title: "No generalists.",
    body: "We don't staff finance, marketing, or sales. We don't recruit nurses. We don't fill warehouse shifts. Healthcare IT is the whole shop. That's why we're good at it.",
  },
];

export function Manifesto() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="bg-navy-dark py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <div
          ref={ref}
          className={`mb-16 max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-teal">
            What We Won't Do
          </p>
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            No bench. No bait-and-switch.
            <br />
            <em className="text-teal">No résumé dumps.</em>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
          {principles.map((p, i) => (
            <div
              key={p.title}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <h3 className="font-display text-2xl text-teal md:text-3xl">{p.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-warm-gray">{p.body}</p>
            </div>
          ))}
        </div>

        <p
          className={`mt-16 text-center font-display text-2xl italic text-foreground md:text-3xl transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          That's the shop. <span className="text-teal">That's the promise.</span>
        </p>
      </div>
    </section>
  );
}
