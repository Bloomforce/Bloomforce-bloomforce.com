import { useScrollReveal } from "@/hooks/useScrollReveal";
import logoWhite from "@/assets/logo-white.png";
import { Linkedin, Twitter, Mail } from "lucide-react";

const footerNav = [
  {
    heading: "What We Do",
    links: [
      { label: "Staffing", href: "#staffing" },
      { label: "Direct Placement", href: "#direct-placement" },
      { label: "Leadership Search", href: "#leadership-search" },
      { label: "All Practices", href: "#services" },
    ],
  },
  {
    heading: "Who We Serve",
    links: [
      { label: "Epic / EHR", href: "#practice-epic" },
      { label: "Enterprise Apps", href: "#practice-enterprise-apps" },
      { label: "AI & Data", href: "#practice-ai-data" },
      { label: "Infrastructure", href: "#practice-infrastructure" },
      { label: "PMO", href: "#practice-pmo" },
    ],
  },
  {
    heading: "For Talent",
    links: [
      { label: "Join the Network", href: "#for-talent" },
      { label: "Open Roles", href: "#for-talent-jobs" },
      { label: "Salary Data", href: "#insights" },
    ],
  },
  {
    heading: "Insights",
    links: [
      { label: "2026 Workforce Report", href: "#insights" },
      { label: "The Survey", href: "#survey" },
      { label: "Field Notes", href: "#blog" },
      { label: "Case Studies", href: "#case-studies" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy", href: "#privacy" },
    ],
  },
];

export function SiteFooter() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      {/* Final CTA */}
      <section id="contact" ref={ref} className="bg-cream py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight text-ink md:text-6xl">
              Ready to fill the role —
              <br />
              <em className="text-teal">or run the search?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-ink/60">
              Book a 30-minute discovery call. No pitch deck. No commitment.
              Just a conversation about what you need and whether we're the right shop to help.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-teal px-10 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Schedule a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div className="border-t border-ink/10 bg-stone py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="text-xl font-semibold text-ink">Stay in the loop.</h3>
              <p className="mt-1 text-sm text-ink/50">Healthcare IT workforce insights, delivered monthly.</p>
            </div>
            <div className="flex w-full max-w-sm gap-2">
              <input
                type="email"
                placeholder="you@healthsystem.org"
                className="flex-1 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-teal focus:outline-none"
              />
              <button className="rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white hover:brightness-110">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-ink/10 bg-navy-dark py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-6">
            {/* Logo + tagline column */}
            <div className="md:col-span-1">
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
              © 2026 Bloomforce. All rights reserved. Healthcare IT talent — it's all we do.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
