export function AnnouncementBanner() {
  return (
    <div className="hidden md:block bg-purple-accent overflow-hidden py-2">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-white tracking-wide">
            The 2026 Healthcare IT Workforce Report is taking shape. FTEs, leaders, consultants, and MSP workers. Your voice belongs in it.{" "}
            <a href="/survey" className="underline underline-offset-2 decoration-white/40 hover:decoration-white">
              Take the 5-min survey →
            </a>
          </span>
        ))}
      </div>
    </div>
  );
}
