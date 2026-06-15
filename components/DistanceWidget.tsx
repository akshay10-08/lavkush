import { LOCATION } from "@/lib/constants";

const icons: Record<string, React.ReactNode> = {
  train: (
    <svg className="h-6 w-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="4" y="3" width="16" height="14" rx="2" />
      <path d="M4 11h16" />
      <circle cx="8" cy="20" r="1" />
      <circle cx="16" cy="20" r="1" />
      <path d="M8 17l-2 4M16 17l2 4" />
    </svg>
  ),
  plane: (
    <svg className="h-6 w-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M2 14l7-2 2-8 2 0 1 8 7 2-7 2-1 8-2 0-2-8z" />
    </svg>
  ),
  car: (
    <svg className="h-6 w-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 17h14M5 17a2 2 0 01-2-2v-3l2-5h14l2 5v3a2 2 0 01-2 2M5 17v2m14-2v2" />
      <circle cx="7.5" cy="14.5" r="1.5" />
      <circle cx="16.5" cy="14.5" r="1.5" />
    </svg>
  ),
  location: (
    <svg className="h-6 w-6 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
};

function getIcon(label: string) {
  const lower = label.toLowerCase();
  if (lower.includes("railway") || lower.includes("station")) return icons.train;
  if (lower.includes("airport")) return icons.plane;
  if (lower.includes("bithoor")) return icons.location;
  return icons.car;
}

export function DistanceWidget() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {LOCATION.distances.map((item) => (
        <div
          key={item.label}
          className="flex items-start gap-3 rounded-lg bg-sage/10 p-4"
        >
          <div className="mt-0.5 flex-shrink-0">{getIcon(item.label)}</div>
          <div>
            <p className="text-sm font-medium text-charcoal">{item.label}</p>
            <p className="mt-0.5 text-sm text-muted">
              {item.distance} · {item.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
