import { useScrollReveal } from "@/hooks/useScrollReveal";
import salaryReportCover from "@/assets/salary-report-cover.jpg";

/*
 * 2026 Workforce Report block.
 * Currently frames the survey as the path to the report (survey-in-progress state).
 * When the report actually publishes, swap the CTA to "Download the Report"
 * and update the href to the PDF.
 */
export function ReportBlock() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="report" ref={ref} className="bg-navy-dark py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Cover image */}
          <div
            className={`flex justify-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-teal/20 blur-3xl" />
              <img
                src={salaryReportCover}
                alt="2026 Healthcare IT Workforce Report"
                className="relative max-h-[480px] rounded-xl shadow-2xl shadow-ink/40"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="mb-6 font-mono text-sm uppercase tracking-[0.25em] text-teal">
              The 2026 Report
            </p>
            <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
              Comp, retention, and hiring data
              <br />
              <em className="text-teal">for healthcare IT.</em>
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-warm-gray">
              We're surveying FTEs, consultants, and leaders across the industry to build
              the most honest compensation benchmark out there. Five minutes gets you the
              full report in your inbox the day it ships.
            </p>

            <div className="mt-10">
              <a
                href="/survey"
                className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Take the Survey. Get the Report.
              </a>
            </div>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-warm-gray/60">
              5 min · Anonymous · Results to your inbox
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
