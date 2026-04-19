import logoWhite from "@/assets/logo-white.svg";
import { Linkedin, Twitter, Mail } from "lucide-react";

const footerNav = [
  {
    heading: "What We Do",
    links: [
      { label: "Staffing", href: "/staffing" },
      { label: "Direct Placement", href: "/direct-placement" },
      { label: "Leadership Search", href: "/leadership-search" },
      { label: "All Practices", href: "/#services" },
    ],
  },
  {
    heading: "Where We Specialize",
    links: [
      { label: "Epic / EHR", href: "/epic" },
      { label: "Enterprise Apps", href: "/enterprise-apps" },
      { label: "AI & Data", href: "/ai-data" },
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "PMO", href: "/pmo" },
    ],
  },
  {
    heading: "Get Hired",
    links: [
      { label: "Join the Network", href: "/get-hired" },
      { label: "Open Roles", href: "/get-hired" },
      { label: "Salary Data", href: "/#report" },
    ],
  },
  {
    heading: "Insights",
    links: [
      { label: "2025 Workforce Report", href: "/#report" },
      { label: "2026 Survey", href: "/#report" },
      { label: "Field Notes", href: "/blog" },
      { label: "Case Studies", href: "/#case-studies" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Book a Call", href: "/#book-a-call" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
];

export function SiteFooter() {
  return (
    <>
      {/* Newsletter */}
      <section className="relative overflow-hidden bg-cream-dark py-14 md:py-16">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/4 rounded-full bg-teal/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-12">
            {/* Left: copy */}
            <div className="max-w-md">
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-teal">
                The Brief
              </p>
              <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">
                Healthcare IT workforce intel,{" "}
                <em className="text-teal">in your inbox.</em>
              </h3>
              <p className="mt-2 text-sm text-ink-muted">
                Monthly. Data-backed. Zero filler.
              </p>
            </div>

            {/* Right: form */}
            <div className="w-full max-w-md shrink-0">
              <form className="flex items-center gap-2 rounded-full border border-ink/10 bg-white p-1.5 shadow-lg shadow-ink/[0.04] transition-all focus-within:border-teal/40 focus-within:shadow-teal/10">
                <input
                  type="email"
                  placeholder="you@healthsystem.org"
                  className="flex-1 bg-transparent px-5 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-teal px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 pl-2 text-xs text-ink/40">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/10 bg-navy-dark py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-6">
            {/* Logo + tagline column */}
            <div className="col-span-2 md:col-span-1">
              <img src={logoWhite} alt="Bloomforce" className="h-7 opacity-90" />
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground/80">
                Healthcare IT talent.
                <br />
                It's all we do.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4 text-muted-foreground transition-colors hover:text-teal" />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4 text-muted-foreground transition-colors hover:text-teal" />
                </a>
                <a href="mailto:hello@bloomforce.com" aria-label="Email">
                  <Mail className="h-4 w-4 text-muted-foreground transition-colors hover:text-teal" />
                </a>
              </div>
            </div>

            {/* Five nav columns */}
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-teal">
                  {col.heading}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-white/5 pt-6">
            <p className="text-center text-xs text-muted-foreground/60">
              © 2026 Bloomforce. All rights reserved. Healthcare IT talent. It's all we do.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
