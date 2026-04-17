import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Monitor, Server, Brain, Cloud, Users, ClipboardList, ArrowRight, BookOpen, FileText, Newspaper, Briefcase, UserCheck, Crown } from "lucide-react";
import logoColor from "@/assets/logo-color.svg";
import blogCover from "@/assets/blog-cover.jpg";
import { ReportCover } from "@/components/ReportCover";
import { REPORT_URL, SURVEY_URL } from "@/lib/urls";

/* ─── Practices (how we engage) ─── */
const practices = [
  {
    icon: Briefcase,
    title: "Staffing",
    subtitle: "STAFF AUGMENTATION",
    description: "Healthcare IT specialists embedded with your team. Analysts, engineers, architects, PMs, and trainers — placed in days, not months.",
    features: [
      { label: "Team Augmentation", desc: "Scale capacity across any role" },
      { label: "Contract-to-Hire", desc: "Try the fit before you commit" },
      { label: "Interim Coverage", desc: "Hold the line while you search" },
    ],
    cta: "Need to scale your team?",
    href: "/staffing",
  },
  {
    icon: UserCheck,
    title: "Direct Placement",
    subtitle: "PERMANENT HIRES",
    description: "Full-time hires for mission-critical IT roles. Analysts, engineers, architects, managers. Vetted for the seat and the culture, not just the résumé.",
    features: [
      { label: "Individual Contributors", desc: "Analysts, engineers, architects" },
      { label: "People Managers", desc: "Team leads and managers" },
      { label: "Retention-First", desc: "Vetted for fit, not just skills" },
    ],
    cta: "Filling a full-time seat?",
    href: "/direct-placement",
  },
  {
    icon: Crown,
    title: "Leadership Search",
    subtitle: "DIRECTOR THROUGH CIO",
    description: "Retained search for the people who actually run healthcare IT. Quiet, rigorous, and built around fit.",
    features: [
      { label: "Director \u2192 VP", desc: "The operators who run the org" },
      { label: "AVP & Executive Director", desc: "The hardest-to-fill middle" },
      { label: "CIO Search", desc: "For the top of the org chart" },
    ],
    cta: "Hiring your next IT leader?",
    href: "/leadership-search",
  },
];

/* ─── Practice Areas (what we specialize in) ─── */
const practiceAreas = [
  {
    icon: Monitor,
    title: "Epic / EHR",
    subtitle: "CERTIFIED CONSULTANTS",
    description: "Certified Epic consultants, EHR analysts, trainers, and go-live support specialists ready to deploy within days.",
    features: [
      { label: "Go-Live Support", desc: "On-site and remote support teams" },
      { label: "EHR Optimization", desc: "Workflow analysis and system tuning" },
      { label: "Training & Adoption", desc: "End-user training programs" },
    ],
    cta: "Need Epic talent?",
    href: "/epic",
  },
  {
    icon: Server,
    title: "Enterprise Apps",
    subtitle: "IMPLEMENTATION & SUPPORT",
    description: "ServiceNow, Salesforce, Workday, and Oracle implementation and support talent for complex enterprise rollouts.",
    features: [
      { label: "ServiceNow", desc: "ITSM, ITOM, and CSM experts" },
      { label: "Salesforce", desc: "Admins, developers, and architects" },
      { label: "Workday & Oracle", desc: "HCM and ERP specialists" },
    ],
    cta: "Need enterprise app talent?",
    href: "/enterprise-apps",
  },
  {
    icon: Brain,
    title: "AI & Data",
    subtitle: "APPLIED AI, ANALYTICS & ML",
    description: "Specialists who put AI to work in healthcare — from Epic's built-in AI features to ambient scribes, clinical decision support, and the data foundations underneath.",
    features: [
      { label: "Epic AI Enablement", desc: "MyChart AI, chart summarization, in-basket triage" },
      { label: "Ambient & Clinical AI", desc: "Scribes, CDS, documentation copilots" },
      { label: "AI Governance", desc: "Model risk, bias review, policy build-out" },
      { label: "Data Engineering", desc: "Pipelines, warehousing, governance" },
      { label: "Machine Learning", desc: "Predictive models and NLP" },
      { label: "BI & Reporting", desc: "Dashboards and executive analytics" },
    ],
    cta: "Need AI & data talent?",
    href: "/ai-data",
  },
  {
    icon: Cloud,
    title: "Infrastructure",
    subtitle: "CLOUD, NETWORK & SECURITY",
    description: "Cloud architects, network engineers, and security professionals securing and scaling health system IT.",
    features: [
      { label: "Cloud", desc: "AWS, Azure, and GCP architects" },
      { label: "Network & DevOps", desc: "Infrastructure automation" },
      { label: "Security", desc: "Engineers, analysts, and architects" },
    ],
    cta: "Need infrastructure talent?",
    href: "/infrastructure",
  },
  {
    icon: ClipboardList,
    title: "PMO",
    subtitle: "PROJECT & PROGRAM MANAGEMENT",
    description: "Program managers, project leads, and transformation office talent keeping complex initiatives on track.",
    features: [
      { label: "Program Management", desc: "Multi-workstream coordination" },
      { label: "Agile & Scrum", desc: "Certified scrum masters and coaches" },
      { label: "Change Management", desc: "Adoption and training leads" },
    ],
    cta: "Need PMO talent?",
    href: "/pmo",
  },
];

/* ─── Insights Data ─── */
const insights = [
  {
    icon: FileText,
    title: "2025 EHR Workforce Trends Report",
    subtitle: "NOW LIVE",
    description: "Insights from 300+ healthcare IT professionals on AI adoption, Epic application management, and compensation — published annually by Bloomforce.",
    image: null,
    useReportCover: true,
    ctaLabel: "Explore the Report",
    ctaHref: REPORT_URL,
    ctaSecondary: "Take the 2026 Survey",
    ctaSecondaryHref: SURVEY_URL,
  },
  {
    icon: Newspaper,
    title: "The Blog",
    subtitle: "FIELD NOTES",
    description: "Insights on healthcare IT hiring trends, talent strategy, and digital transformation from our team of industry specialists.",
    image: blogCover,
    ctaLabel: "Read Latest",
    ctaHref: "/blog",
    ctaSecondary: "Browse All Posts",
    ctaSecondaryHref: "/blog",
  },
  {
    icon: BookOpen,
    title: "Case Studies",
    subtitle: "CLIENT OUTCOMES",
    description: "Real results from real health systems. See how Bloomforce has helped organizations fill critical IT gaps and accelerate transformation.",
    image: null,
    ctaLabel: "View Studies",
    ctaHref: "/#case-studies",
    ctaSecondary: null,
    ctaSecondaryHref: null,
  },
];

/* ─── What We Do Mega Menu ─── */
type MenuItem = (typeof practices)[number] | (typeof practiceAreas)[number];

function SolutionsMegaMenu({ onClose }: { onClose: () => void }) {
  // Combined list: practices first, then practice areas
  const allItems: MenuItem[] = [...practices, ...practiceAreas];
  const [activeIndex, setActiveIndex] = useState(0);
  const active = allItems[activeIndex];

  return (
    <div className="absolute left-0 right-0 top-full z-50 bg-cream shadow-2xl shadow-ink/10">
      <div className="mx-auto flex max-w-7xl">
        {/* Left column — compact two-section nav */}
        <div className="w-[280px] shrink-0 border-r border-ink/8 bg-stone/40 py-4">
          {/* Section 1: Practices */}
          <p className="mb-2 px-6 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
            How We Engage
          </p>
          {practices.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={onClose}
              className={`flex w-full items-center gap-3 px-6 py-2 text-left transition-all duration-150 ${
                i === activeIndex
                  ? "bg-cream border-r-2 border-teal"
                  : "hover:bg-cream/60"
              }`}
            >
              <p.icon className={`h-4 w-4 shrink-0 transition-colors ${i === activeIndex ? "text-teal" : "text-ink/30"}`} />
              <span className={`text-sm font-semibold transition-colors ${i === activeIndex ? "text-ink" : "text-ink/70"}`}>
                {p.title}
              </span>
            </a>
          ))}

          {/* Section 2: Practice Areas */}
          <p className="mt-5 mb-2 px-6 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
            Where We Specialize
          </p>
          {practiceAreas.map((s, i) => {
            const index = practices.length + i;
            return (
              <a
                key={s.title}
                href={s.href}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={onClose}
                className={`flex w-full items-center gap-3 px-6 py-2 text-left transition-all duration-150 ${
                  index === activeIndex
                    ? "bg-cream border-r-2 border-teal"
                    : "hover:bg-cream/60"
                }`}
              >
                <s.icon className={`h-4 w-4 shrink-0 transition-colors ${index === activeIndex ? "text-teal" : "text-ink/30"}`} />
                <span className={`text-sm font-semibold transition-colors ${index === activeIndex ? "text-ink" : "text-ink/70"}`}>
                  {s.title}
                </span>
              </a>
            );
          })}

          {/* Bottom: subtle text link instead of boxed button */}
          <div className="mt-5 px-6">
            <a
              href="/#services"
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-ink/50 transition-colors hover:text-teal"
            >
              View all services <ArrowRight size={12} />
            </a>
          </div>
        </div>

        {/* Right column — streamlined content */}
        <div className="flex-1 px-10 py-8">
          <div className="flex items-center gap-2">
            <active.icon className="h-4 w-4 text-teal" />
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-teal">
              {active.subtitle}
            </p>
          </div>
          <h3 className="mt-2 font-display text-2xl text-ink">{active.title}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-muted">
            {active.description}
          </p>

          <div className="mt-5 grid max-w-2xl gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {active.features.map((f) => (
              <div key={f.label} className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                <div>
                  <h4 className="text-xs font-semibold text-ink">{f.label}</h4>
                  <p className="text-xs leading-snug text-ink-muted/80">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Single CTA — drives to a conversation */}
          <a
            href="/#book-a-call"
            onClick={onClose}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
          >
            Talk to us about {active.title} <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Insights Mega Menu ─── */
function InsightsMegaMenu({ onClose }: { onClose: () => void }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = insights[activeIndex];

  return (
    <div className="absolute left-0 right-0 top-full z-50 border-b border-ink/10 bg-cream shadow-2xl shadow-ink/10">
      <div className="mx-auto flex max-w-7xl">
        {/* Left column */}
        <div className="w-[340px] shrink-0 border-r border-ink/8 bg-stone/40 py-4">
          <p className="mb-3 px-6 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/40">
            Key Resources
          </p>
          {insights.map((item, i) => (
            <button
              key={item.title}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={onClose}
              className={`flex w-full items-center gap-4 px-6 py-3.5 text-left transition-all duration-200 ${
                i === activeIndex
                  ? "bg-cream border-r-2 border-teal"
                  : "hover:bg-cream/60"
              }`}
            >
              <item.icon className={`h-5 w-5 shrink-0 transition-colors ${i === activeIndex ? "text-teal" : "text-ink/30"}`} />
              <div>
                <span className={`block text-[15px] font-semibold transition-colors ${i === activeIndex ? "text-ink" : "text-ink/70"}`}>
                  {item.title}
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink/40">
                  {item.subtitle}
                </span>
              </div>
            </button>
          ))}
          <div className="mx-6 mt-4">
            <a
              href="/blog"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-lg border border-ink/15 py-3 text-sm font-medium text-ink/70 transition-all hover:border-teal hover:text-teal"
            >
              Overview <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Right column — preview */}
        <div className="flex flex-1 gap-8 p-8">
          {/* Image preview */}
          {active.useReportCover ? (
            <div className="w-[200px] shrink-0 overflow-hidden rounded-lg shadow-lg">
              <ReportCover className="w-full" />
            </div>
          ) : active.image ? (
            <div className="w-[200px] shrink-0 overflow-hidden rounded-lg shadow-lg">
              <img
                src={active.image}
                alt={active.title}
                className="h-full w-full object-cover"
                loading="lazy"
                width={200}
                height={267}
              />
            </div>
          ) : null}

          {/* Text content */}
          <div className="flex-1">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.3em] text-teal">
              {active.subtitle}
            </p>
            <h3 className="font-display text-2xl text-ink">{active.title}</h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
              {active.description}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={active.ctaHref || "#"}
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                {active.ctaLabel}
              </a>
              {active.ctaSecondary && (
                <a
                  href={active.ctaSecondaryHref || "#"}
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-lg border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink/70 transition-all hover:border-teal hover:text-teal"
                >
                  {active.ctaSecondary}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Navbar ─── */
type ActiveMenu = "solutions" | "insights" | null;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const openMenu = (menu: ActiveMenu) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const startClose = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };

  const cancelClose = () => {
    clearTimeout(closeTimer.current);
  };

  // Close on click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const trailingLinks = [
    { label: "About", href: "/about" },
    { label: "Get Hired", href: "/get-hired" },
  ];

  return (
    <div ref={navRef} className="sticky top-0 z-50">
      <nav className="bg-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" aria-label="Bloomforce home" className="inline-flex shrink-0">
            <img src={logoColor} alt="Bloomforce" className="h-8" />
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {/* What We Do trigger */}
            <button
              onMouseEnter={() => openMenu("solutions")}
              onMouseLeave={startClose}
              className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
                activeMenu === "solutions" ? "text-teal" : "text-ink/80 hover:text-teal"
              }`}
            >
              What We Do
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeMenu === "solutions" ? "rotate-180" : ""}`}
              />
            </button>

            {/* Insights trigger */}
            <button
              onMouseEnter={() => openMenu("insights")}
              onMouseLeave={startClose}
              className={`flex items-center gap-1 text-[15px] font-medium transition-colors ${
                activeMenu === "insights" ? "text-teal" : "text-ink/80 hover:text-teal"
              }`}
            >
              Insights
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${activeMenu === "insights" ? "rotate-180" : ""}`}
              />
            </button>

            {trailingLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[15px] font-medium text-ink/80 transition-colors hover:text-teal"
                onMouseEnter={() => { clearTimeout(closeTimer.current); setActiveMenu(null); }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="/#book-a-call"
            className="hidden rounded-full bg-teal px-6 py-2.5 text-[15px] font-semibold text-white transition-all hover:brightness-110 md:inline-block"
          >
            Book a Call
          </a>

          <button className="text-ink md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop mega menus */}
        {activeMenu === "solutions" && (
          <div onMouseEnter={cancelClose} onMouseLeave={startClose}>
            <SolutionsMegaMenu onClose={() => setActiveMenu(null)} />
          </div>
        )}
        {activeMenu === "insights" && (
          <div onMouseEnter={cancelClose} onMouseLeave={startClose}>
            <InsightsMegaMenu onClose={() => setActiveMenu(null)} />
          </div>
        )}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[65px] z-40 overflow-y-auto bg-cream md:hidden">
          <div className="px-6 py-6">
            <MobileAccordion
              title="What We Do"
              items={[
                ...practices.map(p => ({ label: p.title, href: p.href })),
                ...practiceAreas.map(s => ({ label: s.title, href: s.href })),
              ]}
              onClose={() => setMobileOpen(false)}
            />
            <MobileAccordion title="Insights" items={insights.map(s => ({ label: s.title, href: "#" }))} onClose={() => setMobileOpen(false)} />

            {trailingLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block border-t border-ink/8 py-3 text-[15px] font-medium text-ink/80"
              >
                {link.label}
              </a>
            ))}

            <a
              href="/#book-a-call"
              onClick={() => setMobileOpen(false)}
              className="mt-6 block rounded-full bg-teal px-6 py-3 text-center text-[15px] font-semibold text-white"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Mobile Accordion ─── */
function MobileAccordion({ title, items, onClose }: { title: string; items: { label: string; href: string }[]; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-ink/8">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3 text-[15px] font-medium text-ink/80"
      >
        {title}
        <ChevronDown size={16} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mb-2 ml-4 border-l-2 border-teal/30 pl-4">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="block py-2 text-sm text-ink/60 transition-colors hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
