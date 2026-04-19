import { useScrollReveal } from "@/hooks/useScrollReveal";

export function BookCallCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="book-a-call" ref={ref} className="bg-cream py-16 md:py-28 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            Next Step
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-7xl">
            Twenty minutes.
            <br />
            <em className="text-teal">Zero slides.</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-muted">
            Tell us the role, the timeline, and what you've already tried. We'll tell you
            whether we can help and who on our team would run it.
          </p>

          <div className="mt-12">
            {/* TODO: wire href to Calendly link when available */}
            <a
              href="#book-a-call-calendly"
              className="inline-flex items-center justify-center rounded-full bg-teal px-10 py-5 text-base font-semibold text-white transition-all hover:brightness-110"
            >
              Book a 20-Minute Call
            </a>
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-ink/40">
            No forms · No slide decks · No pitch meetings
          </p>
        </div>
      </div>
    </section>
  );
}
