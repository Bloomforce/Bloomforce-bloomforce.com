import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoColor from "@/assets/logo-color.png";

const navLinks = [
  {
    label: "Solutions",
    href: "#services",
    items: [
      { label: "Epic / EHR", href: "#services" },
      { label: "Enterprise Applications", href: "#services" },
      { label: "AI & Data Analytics", href: "#services" },
      { label: "IT Infrastructure & Cloud", href: "#services" },
    ],
  },
  {
    label: "Why Us",
    href: "#why",
    items: [
      { label: "Our Approach", href: "#why" },
      { label: "Case Studies", href: "#results" },
      { label: "Client Results", href: "#results" },
    ],
  },
  {
    label: "Results",
    href: "#results",
    items: [
      { label: "By the Numbers", href: "#results" },
      { label: "Testimonials", href: "#results" },
      { label: "Success Stories", href: "#results" },
    ],
  },
  {
    label: "For Talent",
    href: "#talent",
    items: [
      { label: "Open Roles", href: "#talent" },
      { label: "Why Join Us", href: "#talent" },
      { label: "Application Process", href: "#talent" },
    ],
  },
];

function NavDropdown({ link }: { link: (typeof navLinks)[0] }) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <a
        href={link.href}
        className="flex items-center gap-1 text-[15px] font-medium tracking-wide text-ink/80 transition-colors hover:text-teal"
      >
        {link.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${hovering ? "rotate-180 text-teal" : ""}`}
        />
      </a>

      {/* Dropdown */}
      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
          hovering
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="min-w-[220px] overflow-hidden rounded-xl border border-ink/8 bg-cream shadow-xl shadow-ink/8">
          <div className="py-2">
            {link.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center px-5 py-3 text-sm text-ink/70 transition-all hover:bg-stone hover:text-ink"
              >
                <span className="mr-3 h-1 w-1 rounded-full bg-teal opacity-0 transition-opacity group-hover:opacity-100" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <img src={logoColor} alt="Bloomforce" className="h-8" />

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavDropdown key={link.label} link={link} />
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-teal px-6 py-2.5 text-[15px] font-semibold text-white transition-all hover:brightness-110 md:inline-block"
        >
          Talk to Us
        </a>

        <button className="text-ink md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <div key={link.label}>
              <button
                onClick={() =>
                  setExpandedMobile(expandedMobile === link.label ? null : link.label)
                }
                className="flex w-full items-center justify-between py-3 text-[15px] font-medium text-ink/80"
              >
                {link.label}
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${expandedMobile === link.label ? "rotate-180" : ""}`}
                />
              </button>
              {expandedMobile === link.label && (
                <div className="mb-2 ml-4 border-l-2 border-teal/30 pl-4">
                  {link.items.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm text-ink/60 transition-colors hover:text-teal"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#contact"
            className="mt-4 block rounded-full bg-teal px-6 py-2.5 text-center text-[15px] font-semibold text-white"
          >
            Talk to Us
          </a>
        </div>
      )}
    </nav>
  );
}
