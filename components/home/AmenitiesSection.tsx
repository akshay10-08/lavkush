import { SectionHeading } from "@/components/SectionHeading";
import { AmenityGrid } from "@/components/AmenityGrid";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function AmenitiesSection() {
  return (
    <section className="section-padding bg-cream" aria-label="Amenities and services">
      <div className="content-container">
        <SectionHeading
          eyebrow="Experience & Services"
          title="Everything you need, already in place"
          subtitle="From décor to dining, parking to power backup — so you can focus on the celebration, not the logistics."
        />

        <RevealOnScroll>
          <div className="mt-16">
            <AmenityGrid />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
