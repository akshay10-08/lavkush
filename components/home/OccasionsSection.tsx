import { SectionHeading } from "@/components/SectionHeading";
import { OccasionTile } from "@/components/OccasionTile";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { OCCASIONS } from "@/lib/constants";

export function OccasionsSection() {
  return (
    <section className="section-padding" aria-label="Celebrations we host">
      <div className="content-container">
        <SectionHeading
          eyebrow="Celebrations"
          title="Every occasion, beautifully hosted"
          subtitle="From sacred ceremonies to joyful gatherings — each event finds its perfect setting here."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OCCASIONS.map((occasion, i) => (
            <RevealOnScroll key={occasion.name} delay={i * 0.08}>
              <OccasionTile
                name={occasion.name}
                slug={occasion.slug}
                icon={occasion.icon}
                description={occasion.description}
                image={occasion.image}
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
