import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoColor from "@/assets/logo-color.png";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { label: "Solutions", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Results", href: "#results" },
  { label: "For Talent", href: "#talent" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <img src={logoColor} alt="Bloomforce" className="h-8" />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-ink/70 transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-teal px-6 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 md:inline-block"
        >
          Talk to Us
        </a>

        <button className="text-ink md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium tracking-wide text-ink/70"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 block rounded-full bg-teal px-6 py-2.5 text-center text-sm font-semibold text-white"
          >
            Talk to Us
          </a>
        </div>
      )}
    </nav>
  );
}
