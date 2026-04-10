export function AnnouncementBanner() {
  return (
    <div className="bg-purple-accent overflow-hidden py-2">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-white tracking-wide">
            🔬 2026 EHR Workforce Trends Survey is live — Download the report →
          </span>
        ))}
      </div>
    </div>
  );
}
