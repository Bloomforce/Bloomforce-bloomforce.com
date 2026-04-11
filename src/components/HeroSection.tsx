import { useEffect, useRef, useState } from "react";
import headshot1 from "@/assets/headshot-1.jpg";
import headshot2 from "@/assets/headshot-2.jpg";
import headshot3 from "@/assets/headshot-3.jpg";

/* Cubic bezier-style easing for buttery smooth motion */
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!ref.current) { ticking = false; return; }
        const rect = ref.current.getBoundingClientRect();
        const total = ref.current.offsetHeight - window.innerHeight;
        if (total <= 0) { ticking = false; return; }
        setProgress(Math.max(0, Math.min(1, -rect.top / total)));
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Normalise animation to complete at 60% scroll, with smooth cubic easing */
  const p = easeOutCubic(Math.min(1, progress / 0.6));

  /* Glow appears gently after blocks settle */
  const glowOn = progress > 0.55;
  const glowIntensity = glowOn ? easeOutCubic(Math.min(1, (progress - 0.55) / 0.2)) : 0;

  /* Label fade staggered per block */
  const labelOpacity = (start: number) =>
    Math.max(0, Math.min(1, (p - start) / (1 - start)));

  const sq = 148;
  const gap = 6;

  return (
    <section ref={ref} className="relative" style={{ height: "105vh" }}>
      <div className="sticky top-0 flex min-h-0 items-center overflow-hidden bg-cream pt-4 pb-4" style={{ height: "85vh" }}>
        {/* Subtle background accents */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-teal/4 to-transparent" />
        <div
          className="pointer-events-none absolute bottom-16 right-16 h-72 w-72 rounded-full blur-[100px]"
          style={{
            background: `oklch(0.75 0.1 175 / ${0.06 + glowIntensity * 0.08})`,
            transition: "background 0.6s ease-out",
          }}
        />

        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Copy */}
            <div className="max-w-xl">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-teal">
                Healthcare IT Staffing
              </p>

              <h1 className="font-display text-5xl leading-[1.1] tracking-tight text-ink md:text-7xl lg:text-8xl">
                Healthcare IT talent.
                <br />
                <em className="text-teal">It's all we do.</em>
              </h1>

              <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-muted md:text-xl">
                From Epic and EHR to AI and analytics, we connect health systems with the
                specialized IT talent they need — on their terms.
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
                >
                  Talk to Us
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full border border-ink/20 px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-cream-dark"
                >
                  View 2025 Workforce Report →
                </a>
              </div>
            </div>

            {/* Right: Scroll-animated logomark */}
            <div className="relative hidden items-center justify-center lg:flex">
              <div
                className="relative"
                style={{ width: sq * 2 + gap, height: sq * 2 + gap }}
              >
                {/* Block 1 — top-left (Technology) */}
                <div
                  className="absolute overflow-hidden rounded-2xl will-change-transform"
                  style={{
                    width: sq,
                    height: sq,
                    backgroundColor: "var(--color-teal)",
                    top: 0,
                    left: 0,
                    transform: `translate(${(1 - p) * -60}px, ${(1 - p) * -45}px) rotate(${(1 - p) * -12}deg) scale(${0.92 + p * 0.08})`,
                    opacity: 0.4 + p * 0.6,
                    boxShadow: `0 ${8 + p * 12}px ${20 + p * 20}px -8px rgba(0,0,0,${0.08 + p * 0.07})`,
                    transition: "box-shadow 0.3s ease-out",
                  }}
                >
                  <img
                    src={headshot1}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      opacity: 0.2 * (1 - p),
                      mixBlendMode: "luminosity",
                    }}
                  />
                  <span
                    className="absolute inset-x-0 bottom-3 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60"
                    style={{ opacity: labelOpacity(0.7) }}
                  >
                    Technology
                  </span>
                </div>

                {/* Block 2 — top-right (People — glows) */}
                <div
                  className="absolute overflow-hidden rounded-2xl will-change-transform"
                  style={{
                    width: sq,
                    height: sq,
                    backgroundColor: "var(--color-teal-light)",
                    top: 0,
                    left: sq + gap,
                    transform: `translate(${(1 - p) * 65}px, ${(1 - p) * -35}px) rotate(${(1 - p) * 10}deg) scale(${0.92 + p * 0.08})`,
                    opacity: 0.4 + p * 0.6,
                    boxShadow: glowIntensity > 0
                      ? `0 0 ${40 * glowIntensity}px ${15 * glowIntensity}px oklch(0.8 0.1 175 / ${0.5 * glowIntensity}), 0 ${8 + p * 12}px ${20 + p * 20}px -8px rgba(0,0,0,0.1)`
                      : `0 ${8 + p * 12}px ${20 + p * 20}px -8px rgba(0,0,0,0.1)`,
                    transition: "box-shadow 0.5s ease-out",
                  }}
                >
                  <img
                    src={headshot2}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      opacity: 0.2 * (1 - p),
                      mixBlendMode: "luminosity",
                    }}
                  />
                  <span
                    className="absolute inset-x-0 bottom-3 text-center text-[9px] font-semibold uppercase tracking-[0.2em]"
                    style={{
                      opacity: labelOpacity(0.75),
                      color: `rgba(255,255,255,${0.5 + glowIntensity * 0.4})`,
                      transition: "color 0.5s ease-out",
                    }}
                  >
                    People
                  </span>
                </div>

                {/* Block 3 — bottom-right (Process) */}
                <div
                  className="absolute overflow-hidden rounded-2xl will-change-transform"
                  style={{
                    width: sq,
                    height: sq,
                    backgroundColor: "var(--color-teal)",
                    top: sq + gap,
                    left: sq + gap,
                    transform: `translate(${(1 - p) * 50}px, ${(1 - p) * 50}px) rotate(${(1 - p) * 8}deg) scale(${0.92 + p * 0.08})`,
                    opacity: 0.35 + p * 0.65,
                    boxShadow: `0 ${6 + p * 10}px ${16 + p * 16}px -6px rgba(0,0,0,${0.06 + p * 0.06})`,
                    transition: "box-shadow 0.3s ease-out",
                  }}
                >
                  <img
                    src={headshot3}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      opacity: 0.2 * (1 - p),
                      mixBlendMode: "luminosity",
                    }}
                  />
                  <span
                    className="absolute inset-x-0 bottom-3 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60"
                    style={{ opacity: labelOpacity(0.8) }}
                  >
                    Process
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}