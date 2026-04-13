

# Bloomforce Homepage Redesign — Lazio-Inspired Storytelling

Rebuild the Bloomforce homepage keeping Bloomforce's own branding (teal accent, navy dark tones, DM Serif Display + Inter fonts) but with the bold, cinematic storytelling structure and visual flair of laziopartners.com.

---

## Design Language

- **Colors**: Bloomforce's existing palette — navy (#1a2744), teal (#1a9e8f), warm grays. NOT Lazio's orange.
- **Typography**: DM Serif Display for headlines (with *italic accent* words in teal gradient), Inter for body. Oversized hero text (5xl-7xl). Monospaced/uppercase micro-labels like Lazio uses.
- **Layout**: Full-bleed dark sections, generous whitespace, large numbered phase cards, scroll-driven reveals.

---

## Homepage Sections

### 1. Announcement Banner
Marquee bar (purple accent) — "2026 EHR Workforce Trends Survey is live!" Same as existing.

### 2. Navbar
Dark/transparent, Bloomforce logo left, minimal links center (Solutions, Why Us, Results, For Talent), teal "Talk to Us" CTA right. Sticky with backdrop blur.

### 3. Hero — Full-bleed dark
Oversized headline with italic teal accent:

> **Healthcare IT talent.**
> ***It's all we do.***

Subtext: "From Epic and EHR to AI and analytics, we connect health systems with the specialized IT talent they need — on their terms."

Two CTAs: "Talk to Us" (teal filled) + "View 2025 Workforce Report" (outlined). Right side: the animated three-square logomark from existing site.

### 4. Stats Strip
Dark navy bar with large teal numbers + short labels, like Lazio's:
- **500+** Professionals Placed
- **50+** Health Systems Served
- **98%** Retention Rate
- **24/7** Talent Pipeline Active

### 5. Problem Statement — "The system is broken"
Adapted from Lazio's "Your reps aren't the problem" pattern:

> **Finding talent isn't hard.**
> ***Keeping your pipeline full is.***

Three pain-point cards with bold sub-headers:
- **Timelines Compress.** "By the time you post the role, screen candidates, and schedule interviews, your go-live date is three weeks closer."
- **Generalists Waste Your Time.** "Big staffing firms send résumés from people who've never touched an EHR. You spend more time filtering than hiring."
- **Good People Disappear.** "The best healthcare IT professionals are off the market in days. If you're not moving fast, someone else is."

Closing line: *"Our fix: a specialist talent engine built exclusively for healthcare IT."*

### 6. Services Grid — "What we do *for you*"
Six cards in a 3x2 grid, dark card style with teal left-border on hover:
- Epic / EHR
- Enterprise Applications
- AI & Data Analytics
- IT Infrastructure & Cloud
- IT Leadership Search
- PMO & Project Management

Each with icon, tagline from existing data, and "Learn More →" link.

Below: "How We Engage" card (navy gradient) showing Staff Augmentation / Contract-to-Hire / Direct Placement.

### 7. Phased Storytelling — THE CENTERPIECE
Directly inspired by Lazio's scroll-through numbered phases. Large oversized numbers, phase titles, timeline tags:

> **We handle the search.** ***You build your team.***

- **01 — Discovery** (Weeks 1-2): "We learn your organization before we open a single req. Your tech stack, your culture, your gaps. Starting from scratch? We'll map the roles. Already have reqs open? Let's move."
  Tags: `Needs Assessment` · `Role Mapping` · `Alignment`

- **02 — Source** (Weeks 2-3): "We tap a specialist network built over years of healthcare IT recruiting. No job boards. No spray-and-pray. Just curated, pre-vetted professionals who've done this work before."
  Tags: `Specialist Network` · `Pre-Screening` · `Credential Verification`

- **03 — Place** (Weeks 3-4): "We present a shortlist of candidates who actually fit — technically and culturally. You interview the best. We handle logistics, negotiations, and onboarding support."
  Tags: `Candidate Presentation` · `Interview Coordination` · `Offer Management`

- **04 — Support** (Ongoing): "Placement is the beginning, not the end. We monitor retention, run performance check-ins, and keep your pipeline warm for the next hire."
  Tags: `Retention Monitoring` · `Performance Check-ins` · `Continuous Pipeline`

### 8. Results/Testimonials — Dark section
Three case study cards with challenge → result → quote. Existing content:
- "12 consultants placed in 3 weeks" for an Epic go-live
- "CISO placed in 45 days" after 18-month search
- "Full integration team deployed in 10 days" for a merger

Teal left borders, italic quotes, attribution.

### 9. Why Bloomforce
"The boutique alternative to big-firm staffing" with three differentiators (Specialist Focus, Flexible Engagement, Curated Network) + team photo.

### 10. Talent CTA
"Looking for your next healthcare IT opportunity?" with Join Network + View Positions buttons.

### 11. Newsletter + Footer
Newsletter signup in navy gradient, then full footer with links, contact info, social.

---

## Technical Implementation

1. **Copy assets** from the [Bloomforce Website](/projects/7e308534-7775-42db-8748-282df9c10d6a) project (logos, headshots, team photo, partner logos)
2. **Update `styles.css`** with Bloomforce's color tokens (navy, teal, teal-light, teal-glow, warm-gray, purple-accent) in oklch format, plus Google Fonts import for DM Serif Display + Inter
3. **Create components** in `src/components/`:
   - `Navbar.tsx`, `HeroSection.tsx`, `StatsStrip.tsx`, `ProblemSection.tsx`, `ServicesSection.tsx`, `PhaseStorytelling.tsx`, `TestimonialSection.tsx`, `WhyBloomforce.tsx`, `TalentCTA.tsx`, `SiteFooter.tsx`, `AnnouncementBanner.tsx`
4. **Update `src/routes/index.tsx`** to compose all sections
5. **Add dependencies**: `lucide-react` (likely already available)
6. Scroll-based fade-in animations using Intersection Observer for the phased storytelling section

