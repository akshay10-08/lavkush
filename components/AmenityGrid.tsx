import { AMENITIES } from "@/lib/constants";
import { AmenityIcon } from "@/components/AmenityIcon";

export function AmenityGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      {AMENITIES.map((amenity) => (
        <div
          key={amenity.icon}
          className="flex flex-col items-center gap-2 rounded-lg bg-cream p-5 text-center transition-shadow duration-300 hover:shadow-md"
        >
          <AmenityIcon icon={amenity.icon} />
          <span className="text-sm font-medium text-charcoal">
            {amenity.label}
          </span>
        </div>
      ))}
    </div>
  );
}
