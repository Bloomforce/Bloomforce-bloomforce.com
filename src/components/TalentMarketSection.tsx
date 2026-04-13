import { useEffect, useRef, useState, useCallback } from "react";

/*
 * Talent market evolution — bold horizontal scroll-on-scroll.
 * Dark navy background, large year labels, teal accent glow,
 * cards slide left with a snap-pause on each card as the visitor scrolls.
 */

const eras = [
  {
    num: "01",
    label: "2010s",
    era: "Meaningful Use",
    body: "Talent was plentiful. Your biggest competitor for a good Epic analyst was the hospital down the road. Recruiting was a relationship game played on a small field.",
    accent: "var(--teal)",
  },
  {
    num: "02",
    label: "2020",
    era: "Covid",
    body: "Remote work cracked the field open. FTEs left for consulting firms and for health systems with mature remote programs. The talent pool stopped being local.",
    accent: "var(--teal-light)",
  },
  {
    num: "03",
    label: "2023\u201325",
    era: "Expansion",
    body: "The competition expanded. Health systems aren't just competing with each other for talent anymore. Managed service providers, payors, and startups with venture runway are all hiring from the same pool.",
    accent: "var(--teal)",
  },
  {
    num: "04",
    label: "Now",
    era: "The New Reality",
    body: "The talent market is tight and the field is crowded. Most staffing firms are still running a 2014 playbook: post a job, wait for applicants, forward resumes. The market moved on. The approach didn't.",
    accent: "var(--purple-accent)",
  },
];

/*
 * Stepped easing: divides the 0-1 range into N card slots.
 * Within each slot the card scrolls in quickly, then holds.
 * This creates a "snap and pause" feel per card.
 */
function steppedEase(t: number, steps: number): number {
  const raw = t * steps;
  const step = Math.floor(raw);
  const frac = raw - step;
  // Snap into position in first 10%, then lock for remaining 90%
  const movePhase = Math.min(1, frac / 0.10);
  const eased = 1 - Math.pow(1 - movePhase, 4); // sharp ease-out
  return Math.min(1, (step + eased) / steps);
}

export function TalentMarketSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [viewportW, setViewportW] = useState(1200);

  useEffect(() => {
    setViewportW(window.innerWidth);
    const onResize = () => setViewportW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollable = sectionRef.current.offsetHeight - window.innerHeight;
    if (scrollable <= 0) return;
    setProgress(Math.max(0, Math.min(1, -rect.top / scrollable)));
  }, []);

  useEffect(() => {
    let ticking = false;
    const handler = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        onScroll();
        ticking = false;
      });
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [onScroll]);

  /* Layout */
  const cardW = 380;
  const cardGap = 32;
  const totalTrack = eras.length * (cardW + cardGap) - cardGap;
  const visibleW = Math.min(viewportW - 80, 1280);
  const maxShift = Math.max(0, totalTrack - visibleW);

  /*
   * Scroll phases:
   * 0–0.08: header is already visible, holds
   * 0.08–0.18: cards fade in
   * 0.18–0.80: cards scroll horizontally with snap-pause per card
   * 0.80–1: closing statement fades in
   */
  const headerP = 1;
  const cardReveal =
    progress < 0.08 ? 0 : Math.min(1, (progress - 0.08) / 0.1);
  const cardPhase =
    progress < 0.18 ? 0 : progress > 0.80 ? 1 : (progress - 0.18) / 0.62;
  const cardStepped = steppedEase(cardPhase, eras.length);
  const closingP = progress < 0.80 ? 0 : Math.min(1, (progress - 0.80) / 0.20);

  /* Active card index for glow effects */
  const activeIdx = Math.min(
    eras.length - 1,
    Math.floor(cardPhase * eras.length)
  );

  return (
    <section
      id="talent-market"
      ref={sectionRef}
      className="relative"
      style={{ height: "420vh" }}
    >
      <div
        className="sticky top-0 flex flex-col justify-center overflow-hidden bg-navy-dark"
        style={{ height: "100vh" }}
      >
        {/* Ambient glow — follows active card accent */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 60% 50% at ${20 + cardStepped * 60}% 60%, ${eras[activeIdx].accent}22, transparent 70%)`,
            transition: "background 0.6s ease-out",
          }}
        />
        {/* Top-right subtle gradient */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-bl from-teal/[0.04] to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
          {/* Header */}
          <div
            className="mb-8 max-w-3xl md:mb-12"
            style={{
              opacity: headerP,
              transform: `translateY(${(1 - headerP) * 40}px)`,
            }}
          >
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-teal md:mb-6">
              The Talent Market
            </p>
            <h2 className="font-display text-3xl leading-tight text-foreground md:text-6xl lg:text-7xl">
              The job got harder.
              <br />
              <em className="text-teal">Your firms didn't keep up.</em>
            </h2>
          </div>

          {/* ──── Desktop: horizontal scroll cards ──── */}
          <div
            className="relative hidden md:block"
            style={{
              opacity: cardReveal,
              transform: `translateY(${(1 - cardReveal) * 30}px)`,
              transition: "opacity 0.3s, transform 0.3s",
            }}
          >
            {/* Progress rail */}
            <div className="mb-8 flex items-center gap-3">
              <div className="h-[2px] flex-1 rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-teal"
                  style={{
                    width: `${cardStepped * 100}%`,
                    transition: "width 0.15s ease-out",
                    boxShadow: "0 0 12px 2px var(--teal-glow)",
                  }}
                />
              </div>
              <span
                className="font-mono text-xs tabular-nums text-teal/70"
                style={{ minWidth: 40 }}
              >
                {eras[activeIdx].label}
              </span>
            </div>

            {/* Card track */}
            <div
              className="flex"
              style={{
                gap: cardGap,
                transform: `translateX(-${cardStepped * maxShift}px)`,
                willChange: "transform",
              }}
            >
              {eras.map((e, i) => {
                const isActive = i === activeIdx;
                const dist = Math.abs(cardPhase - i / eras.length);
                const cardOpacity = Math.max(0.35, 1 - dist * 1.2);

                return (
                  <div
                    key={e.num}
                    className="relative flex shrink-0 flex-col overflow-hidden rounded-2xl"
                    style={{
                      width: cardW,
                      height: 280,
                      opacity: cardOpacity,
                      transform: isActive ? "scale(1.02)" : "scale(1)",
                      transition:
                        "opacity 0.3s, transform 0.4s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s",
                      boxShadow: isActive
                        ? `0 0 40px -10px ${e.accent}44, 0 12px 40px -12px rgba(0,0,0,0.3)`
                        : "0 4px 16px -4px rgba(0,0,0,0.2)",
                    }}
                  >
                    {/* Top accent bar */}
                    <div
                      className="h-1 shrink-0"
                      style={{
                        background: isActive
                          ? e.accent
                          : "rgba(255,255,255,0.06)",
                        transition: "background 0.4s",
                      }}
                    />
                    <div className="flex flex-1 flex-col bg-navy-light p-8">
                      {/* Big year label */}
                      <span
                        className="font-display text-5xl leading-none"
                        style={{
                          color: isActive ? e.accent : "rgba(255,255,255,0.08)",
                          transition: "color 0.4s",
                        }}
                      >
                        {e.label}
                      </span>
                      <h3 className="mt-3 font-display text-2xl text-foreground">
                        {e.era}
                      </h3>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-warm-gray">
                        {e.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ──── Mobile: vertical cards ──── */}
          <div
            className="space-y-4 md:hidden"
            style={{
              opacity: cardReveal,
              transform: `translateY(${(1 - cardReveal) * 24}px)`,
              transition: "opacity 0.4s, transform 0.4s",
            }}
          >
            {eras.map((e) => (
              <div
                key={e.num}
                className="overflow-hidden rounded-xl"
              >
                <div
                  className="h-1"
                  style={{ background: e.accent }}
                />
                <div className="bg-navy-light p-6">
                  <span
                    className="font-display text-3xl leading-none"
                    style={{ color: e.accent }}
                  >
                    {e.label}
                  </span>
                  <h3 className="mt-2 font-display text-xl text-foreground">
                    {e.era}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm-gray">
                    {e.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ──── Closing statement ──── */}
          <div
            className="mt-10 max-w-3xl md:mt-14"
            style={{
              opacity: closingP,
              transform: `translateY(${(1 - closingP) * 24}px)`,
            }}
          >
            <p className="font-display text-2xl leading-snug text-foreground md:text-4xl lg:text-5xl">
              Twenty years, through every era.{" "}
              <span className="text-teal">Still in your corner.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
