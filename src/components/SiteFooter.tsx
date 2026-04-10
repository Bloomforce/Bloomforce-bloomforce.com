import { useScrollReveal } from "@/hooks/useScrollReveal";
import logoWhite from "@/assets/logo-white.png";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function SiteFooter() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      {/* Final CTA */}
      <section id="contact" ref={ref} className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight md:text-6xl">
              Ready to stop searching and
              <br />
              <em className="text-primary">start building?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
              Book a 30-minute discovery call. No pitch decks. No commitments.
              Just a conversation about what you need.
            </p>
            <a
              href="#"
              className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-10 py-4 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
            >
              Schedule a Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <div className="border-t border-border/50 bg-navy-dark py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h3 className="font-display text-xl text-foreground">Stay in the loop.</h3>
              <p className="mt-1 text-sm text-muted-foreground">Healthcare IT workforce insights, delivered monthly.</p>
            </div>
            <div className="flex w-full max-w-sm gap-2">
              <input
                type="email"
                placeholder="you@healthsystem.org"
                className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <img src={logoWhite} alt="Bloomforce" className="h-6 opacity-60" />

            <div className="flex gap-6">
              {["Solutions", "Why Us", "Results", "For Talent", "Privacy"].map((link) => (
                <a key={link} href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                  {link}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <Linkedin className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary" />
              <Twitter className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary" />
              <Mail className="h-4 w-4 text-muted-foreground transition-colors hover:text-primary" />
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground/60">
            © 2026 Bloomforce. All rights reserved. Healthcare IT talent — it's all we do.
          </p>
        </div>
      </footer>
    </>
  );
}
