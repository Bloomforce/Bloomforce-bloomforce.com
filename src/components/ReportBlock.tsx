import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { ReportCover } from "@/components/ReportCover";
import { REPORT_URL, SURVEY_URL } from "@/lib/urls";

/*
 * Dual-purpose block: promotes the live 2025 EHR Workforce Trends Report
 * and invites visitors to participate in the 2026 survey.
 *
 * URLs live in src/lib/urls.ts — update there when the custom domain
 * (report.bloomforce.com) goes live.
 */

export function ReportBlock() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="report" ref={ref} className="relative overflow-hidden bg-navy-dark py-24 md:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[600px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-teal/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div
          className={`mb-16 max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
            The Workforce Report
          </p>
          <h2 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            The annual healthcare IT
            <br />
            workforce report.
          </h2>
          <p className="mt-5 font-display text-xl italic leading-snug text-warm-gray md:text-2xl">
            Published by Bloomforce.
          </p>
        </div>

        {/* Two-card layout: 2025 report (live) + 2026 survey */}
        <div className="grid gap-6 lg:grid-cols-5">
          {/* 2025 Report — larger, primary */}
          <a
            href={REPORT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 transition-all duration-700 hover:border-white/[0.15] hover:bg-white/[0.06] md:p-10 lg:col-span-3 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Status badge */}
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-teal/30 bg-teal/[0.08] px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">
                Now Live
              </span>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              {/* Report cover */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 rounded-xl bg-teal/20 blur-2xl" />
                <ReportCover className="relative h-48 rounded-lg shadow-2xl shadow-ink/40 md:h-56" />
              </div>

              {/* Report copy */}
              <div className="flex-1">
                <h3 className="font-display text-3xl leading-tight text-foreground md:text-4xl">
                  The 2025 EHR Workforce Trends Report
                </h3>
                <p className="mt-4 text-base leading-relaxed text-warm-gray">
                  Insights from 300+ healthcare IT professionals on AI adoption,
                  Epic application management, and compensation.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                  <span>Explore the Report</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </a>

          {/* 2026 Survey — smaller, secondary */}
          <a
            href={SURVEY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-8 transition-all duration-700 hover:border-white/[0.15] hover:bg-white/[0.06] md:p-10 lg:col-span-2 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            {/* Status badge */}
            <div>
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-purple-accent/30 bg-purple-accent/[0.08] px-3 py-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-accent" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-purple-accent">
                  Coming 2026
                </span>
              </div>

              <h3 className="font-display text-2xl leading-tight text-foreground md:text-3xl">
                Help shape next year's report.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-warm-gray">
                Take the 2026 survey. Anonymous, five to seven minutes, and your
                voice makes the data better for everyone.
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-teal">
                <span>Take the Survey</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-warm-gray/50">
                5–7 min · Anonymous
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
