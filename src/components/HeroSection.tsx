import { useEffect, useRef, useState } from "react";
import headshot1 from "@/assets/headshot-1.jpg";
import headshot2 from "@/assets/headshot-2.jpg";
import headshot3 from "@/assets/headshot-3.jpg";

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [glowPulse, setGlowPulse] = useState(0);

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

  /* Pulsing glow animation once blocks settle */
  useEffect(() => {
    if (progress < 0.5) { setGlowPulse(0); return; }
    let frame: number;
    const start = performance.now();
    const animate = (now: number) => {
      const t = (now - start) / 1000;
      const burst = Math.max(0, 1 - t * 0.8);
      const wave = 0.5 + 0.5 * Math.sin(t * 1.8 - Math.PI / 2);
      setGlowPulse(Math.min(1, burst * 0.6 + wave * 0.5));
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [progress > 0.5]);

  /*
   * Scroll phases with pause:
   * 0–0.3: blocks animate in
   * 0.3–0.55: pause — blocks hold, glow kicks in
   * 0.55–0.85: subtle secondary drift
   */
  let p: number;
  let phase2: number;
  if (progress < 0.3) {
    p = easeOutCubic(progress / 0.3);
    phase2 = 0;
  } else if (progress < 0.55) {
    p = 1;
    phase2 = 0;
  } else {
    p = 1;
    phase2 = easeOutCubic(Math.min(1, (progress - 0.55) / 0.3));
  }

  const glowBase = progress > 0.3 ? easeOutCubic(Math.min(1, (progress - 0.3) / 0.15)) : 0;
  const glowIntensity = Math.min(1, glowBase * 0.6 + glowPulse * 0.5);

  const labelOpacity = (start: number) =>
    Math.max(0, Math.min(1, (p - start) / (1 - start)));

  const sq = 148;
  const gap = 6;
  const float2 = phase2 * 4;

  return (
    <section ref={ref} className="relative" style={{ height: "220vh" }}>
      <div className="sticky top-0 flex min-h-0 items-center overflow-hidden bg-cream pt-4 pb-4" style={{ height: "85vh" }}>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-teal/4 to-transparent" />
        <div
          className="pointer-events-none absolute bottom-16 right-16 h-80 w-80 rounded-full blur-[120px]"
          style={{
            background: `oklch(0.75 0.12 175 / ${0.04 + glowIntensity * 0.15})`,
            transition: "background 0.15s ease-out",
          }}
        />

        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="max-w-xl">
              <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
                Healthcare IT Staffing & Search
              </p>
              <h1 className="font-display text-5xl leading-[1.1] tracking-tight text-ink md:text-7xl lg:text-8xl">
                Making healthcare IT
                <br />
                <em className="text-teal">work better.</em>
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-muted md:text-xl">
                Healthcare IT talent. It's all we do. Boutique by design, built for health systems that take IT hiring seriously.
              </p>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#book-a-call"
                  className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
                >
                  Book a 20-Minute Call
                </a>
                <a
                  href="#report"
                  className="inline-flex items-center justify-center rounded-full border border-ink/20 px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-cream-dark"
                >
                  Read the 2025 Workforce Report
                </a>
              </div>
            </div>

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
                    transform: `translate(${(1 - p) * -60}px, ${(1 - p) * -45 - float2}px) rotate(${(1 - p) * -12}deg) scale(${0.92 + p * 0.08})`,
                    opacity: 0.4 + p * 0.6,
                    boxShadow: `0 ${8 + p * 12}px ${20 + p * 20}px -8px rgba(0,0,0,${0.08 + p * 0.07})`,
                  }}
                >
                  <img src={headshot1} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.2 * (1 - p), mixBlendMode: "luminosity" }} />
                  <span className="absolute inset-x-0 bottom-3 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60" style={{ opacity: labelOpacity(0.7) }}>Technology</span>
                </div>

                {/* Block 2 — top-right (People — prominent glow) */}
                <div
                  className="absolute overflow-hidden rounded-2xl will-change-transform"
                  style={{
                    width: sq,
                    height: sq,
                    backgroundColor: "var(--color-teal-light)",
                    top: 0,
                    left: sq + gap,
                    transform: `translate(${(1 - p) * 65}px, ${(1 - p) * -35 - float2 * 0.7}px) rotate(${(1 - p) * 10}deg) scale(${0.92 + p * 0.08 + glowIntensity * 0.03})`,
                    opacity: 0.4 + p * 0.6,
                    boxShadow: [
                      `0 0 ${25 * glowIntensity}px ${8 * glowIntensity}px oklch(0.85 0.13 175 / ${0.7 * glowIntensity})`,
                      `0 0 ${60 * glowIntensity}px ${20 * glowIntensity}px oklch(0.8 0.12 175 / ${0.45 * glowIntensity})`,
                      `0 0 ${120 * glowIntensity}px ${50 * glowIntensity}px oklch(0.75 0.1 175 / ${0.2 * glowIntensity})`,
                      `0 ${8 + p * 12}px ${20 + p * 20}px -8px rgba(0,0,0,0.1)`,
                    ].join(", "),
                  }}
                >
                  <img src={headshot2} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.2 * (1 - p), mixBlendMode: "luminosity" }} />
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, oklch(0.9 0.1 175 / ${0.15 * glowIntensity}), transparent 70%)`,
                    }}
                  />
                  <span
                    className="absolute inset-x-0 bottom-3 z-10 text-center text-[9px] font-semibold uppercase tracking-[0.2em]"
                    style={{
                      opacity: labelOpacity(0.75),
                      color: `rgba(255,255,255,${0.5 + glowIntensity * 0.5})`,
                      textShadow: glowIntensity > 0.3 ? `0 0 ${12 * glowIntensity}px oklch(0.9 0.1 175 / ${0.6 * glowIntensity})` : "none",
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
                    transform: `translate(${(1 - p) * 50}px, ${(1 - p) * 50 - float2 * 0.5}px) rotate(${(1 - p) * 8}deg) scale(${0.92 + p * 0.08})`,
                    opacity: 0.35 + p * 0.65,
                    boxShadow: `0 ${6 + p * 10}px ${16 + p * 16}px -6px rgba(0,0,0,${0.06 + p * 0.06})`,
                  }}
                >
                  <img src={headshot3} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.2 * (1 - p), mixBlendMode: "luminosity" }} />
                  <span className="absolute inset-x-0 bottom-3 text-center text-[9px] font-semibold uppercase tracking-[0.2em] text-white/60" style={{ opacity: labelOpacity(0.8) }}>Process</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
