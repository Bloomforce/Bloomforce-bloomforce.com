import logoWhite from "@/assets/logo-white.svg";

/**
 * Branded report cover. Uses the actual Bloomforce wordmark at the top
 * and mirrors the hero's three-block motif as the central visual.
 *
 * Sizing: consumer sets the outer height/width via className. The cover
 * locks a 3:4 portrait aspect ratio and uses container queries so text
 * and blocks stay perfectly proportional at any size.
 *
 * The outer container is NOT given a shadow or rounded border — those
 * are left to the consumer so it drops cleanly into different contexts
 * (ReportBlock hero card, Navbar mega-menu preview, etc.).
 */

type ReportCoverProps = {
  /** Outer sizing classes, e.g. "h-48 md:h-56" */
  className?: string;
  year?: string;
};

export function ReportCover({ className = "", year = "2025" }: ReportCoverProps) {
  return (
    <div
      className={`relative overflow-hidden bg-navy-dark ${className}`}
      style={{ aspectRatio: "3 / 4", containerType: "inline-size" }}
    >
      {/* Ambient teal glows for depth */}
      <div className="pointer-events-none absolute -bottom-[20%] -right-[20%] h-[75%] w-[75%] rounded-full bg-teal/[0.28] blur-3xl" />
      <div className="pointer-events-none absolute -top-[18%] -left-[18%] h-[55%] w-[55%] rounded-full bg-teal/[0.08] blur-2xl" />

      {/* Subtle vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.12) 100%)",
        }}
      />

      {/* Content layer */}
      <div className="relative flex h-full flex-col p-[8%]">
        {/* Top: Bloomforce wordmark */}
        <div>
          <img
            src={logoWhite}
            alt="Bloomforce"
            className="w-auto"
            style={{ height: "7cqi" }}
            loading="lazy"
          />
        </div>

        {/* Middle: three-block motif (mirrors the hero) */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative" style={{ width: "58%", aspectRatio: "1 / 1" }}>
            {/* Block 1 — top-left */}
            <div
              className="absolute left-0 top-0"
              style={{
                width: "46%",
                height: "46%",
                backgroundColor: "var(--color-teal)",
                borderRadius: "10%",
                opacity: 0.92,
              }}
            />
            {/* Block 2 — top-right (glowing, like the hero's "People" block) */}
            <div
              className="absolute right-0 top-0"
              style={{
                width: "46%",
                height: "46%",
                backgroundColor: "var(--color-teal-light)",
                borderRadius: "10%",
                boxShadow:
                  "0 0 6cqi 1.5cqi oklch(0.82 0.12 175 / 0.55), 0 0 16cqi 4cqi oklch(0.78 0.1 175 / 0.3)",
              }}
            />
            {/* Block 3 — bottom-right */}
            <div
              className="absolute bottom-0 right-0"
              style={{
                width: "46%",
                height: "46%",
                backgroundColor: "var(--color-teal)",
                borderRadius: "10%",
                opacity: 0.78,
              }}
            />
          </div>
        </div>

        {/* Bottom: title + year */}
        <div>
          <p
            className="font-mono uppercase text-white/55"
            style={{ fontSize: "5cqi", letterSpacing: "0.22em" }}
          >
            EHR Workforce
          </p>
          <p
            className="font-mono uppercase text-white/55"
            style={{ fontSize: "5cqi", letterSpacing: "0.22em", marginTop: "0.4cqi" }}
          >
            Trends Report
          </p>
          <p
            className="font-display leading-none text-white"
            style={{ fontSize: "22cqi", marginTop: "4cqi" }}
          >
            {year}
          </p>
        </div>
      </div>
    </div>
  );
}
