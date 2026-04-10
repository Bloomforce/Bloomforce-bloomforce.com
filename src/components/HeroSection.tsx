import { useEffect, useRef, useState } from "react";
import headshot1 from "@/assets/headshot-1.jpg";
import headshot2 from "@/assets/headshot-2.jpg";
import headshot3 from "@/assets/headshot-3.jpg";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const total = ref.current.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      setProgress(Math.max(0, Math.min(1, -rect.top / total)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anim = Math.min(1, progress / 0.6);
  const ease = anim < 0.5 ? 2 * anim * anim : -1 + (4 - 2 * anim) * anim;
  const p = ease;

  const glowOn = progress > 0.5;
  const glowIntensity = glowOn ? Math.min(1, (progress - 0.5) / 0.15) : 0;

  const labelFade = (start: number) =>
    Math.max(0, Math.min(1, (anim - start) / (1 - start)));

  const sq = 140;
  const gap = 8;

  return (
    <section ref={ref} className="relative" style={{ height: "105vh" }}>
      <div className="sticky top-0 flex min-h-0 items-center overflow-hidden bg-cream pt-4 pb-4" style={{ height: "85vh" }}>
        {/* Background glow */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-teal/5 to-transparent" />
        <div className="pointer-events-none absolute bottom-20 right-20 h-64 w-64 rounded-full bg-teal/5 blur-3xl" />

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

            {/* Right: Scroll-animated logomark blocks */}
            <div className="relative hidden items-center justify-center lg:flex">
              <div
                className="relative"
                style={{ width: sq * 2 + gap, height: sq * 2 + gap }}
              >
                {/* Square 1 — top-left (Technology) */}
                <div
                  className="absolute flex items-end justify-center overflow-hidden rounded-xl"
                  style={{
                    width: sq,
                    height: sq,
                    backgroundColor: "var(--color-teal)",
                    top: 0,
                    left: 0,
                    transform: `translate(${(1 - p) * -90}px, ${(1 - p) * -70}px) rotate(${(1 - p) * -25}deg)`,
                    opacity: 0.3 + p * 0.7,
                    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.15)",
                  }}
                >
                  <img
                    src={headshot1}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      opacity: 0.25 * (1 - p),
                      mixBlendMode: "luminosity",
                    }}
                  />
                  <span
                    className="relative z-10 pb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70"
                    style={{ opacity: labelFade(0.7) }}
                  >
                    Technology
                  </span>
                </div>

                {/* Square 2 — top-right (People — illuminates) */}
                <div
                  className="absolute flex items-end justify-center overflow-hidden rounded-xl"
                  style={{
                    width: sq,
                    height: sq,
                    backgroundColor: "var(--color-teal-light)",
                    top: 0,
                    left: sq + gap,
                    transform: `translate(${(1 - p) * 100}px, ${(1 - p) * -50}px) rotate(${(1 - p) * 20}deg)`,
                    opacity: 0.3 + p * 0.7,
                    boxShadow:
                      glowIntensity > 0
                        ? `0 0 ${60 * glowIntensity}px ${25 * glowIntensity}px oklch(0.8 0.1 175 / ${0.7 * glowIntensity}), 0 0 ${120 * glowIntensity}px ${40 * glowIntensity}px oklch(0.8 0.1 175 / ${0.3 * glowIntensity}), 0 20px 40px -12px rgba(0,0,0,0.15)`
                        : "0 20px 40px -12px rgba(0,0,0,0.15)",
                    transition: "box-shadow 0.4s ease-out",
                  }}
                >
                  <img
                    src={headshot2}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      opacity: 0.25 * (1 - p),
                      mixBlendMode: "luminosity",
                    }}
                  />
                  <span
                    className="relative z-10 pb-3 text-[9px] font-semibold uppercase tracking-[0.2em]"
                    style={{
                      opacity: labelFade(0.75),
                      color:
                        glowIntensity > 0
                          ? `rgba(255,255,255,${0.5 + glowIntensity * 0.5})`
                          : "rgba(255,255,255,0.7)",
                      transition: "color 0.4s ease-out",
                    }}
                  >
                    People
                  </span>
                </div>

                {/* Square 3 — bottom-right (Process) */}
                <div
                  className="absolute flex items-end justify-center overflow-hidden rounded-xl"
                  style={{
                    width: sq,
                    height: sq,
                    backgroundColor: "var(--color-teal)",
                    top: sq + gap,
                    left: sq + gap,
                    transform: `translate(${(1 - p) * 80}px, ${(1 - p) * 80}px) rotate(${(1 - p) * 15}deg)`,
                    opacity: 0.2 + p * 0.8,
                    boxShadow: "0 15px 30px -10px rgba(0,0,0,0.12)",
                  }}
                >
                  <img
                    src={headshot3}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      opacity: 0.25 * (1 - p),
                      mixBlendMode: "luminosity",
                    }}
                  />
                  <span
                    className="relative z-10 pb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/70"
                    style={{ opacity: labelFade(0.8) }}
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
