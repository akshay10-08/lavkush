import { SectionHeading } from "@/components/SectionHeading";
import { SpaceCard } from "@/components/SpaceCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { EVENT_SPACES } from "@/lib/constants";

export function SpacesShowcase() {
  return (
    <section className="section-padding bg-cream" aria-label="Our spaces">
      <div className="content-container">
        <SectionHeading
          eyebrow="Our Spaces"
          title="Five Lawns. One Grand Ballroom. Infinite Celebrations."
          subtitle="Separate them for an intimate ceremony, open them all for a wedding the whole city remembers."
        />

        {/* Editorial grid — alternating large/small */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {EVENT_SPACES.filter(s => s.slug !== "pre-function-lounge").map((space, i) => (
            <RevealOnScroll key={space.slug} delay={i * 0.08}>
              <div
                className={
                  i === 0 || i === 5
                    ? "md:col-span-2 lg:col-span-2"
                    : ""
                }
              >
                <SpaceCard space={space} />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
