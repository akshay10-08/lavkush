import { TeaserSplit } from "@/components/TeaserSplit";
import { CATERING } from "@/lib/constants";

export function DiningTeaser() {
  return (
    <section className="section-padding" aria-label="Dining and catering">
      <div className="content-container">
        <TeaserSplit
          imageSide="left"
          image="/images/dining-buffet-setup.webp"
          imageAlt="Dining and catering setup"
          eyebrow="In-House Catering"
          title="A feast crafted for your celebration"
          description={`Our ${CATERING.type.toLowerCase()} prepares ${CATERING.dietary.toLowerCase()} menus tailored to your event — from elaborate wedding thalis to elegant plated dinners. ${CATERING.note}`}
          ctaText="Explore Catering"
          ctaHref="/dining"
        />
      </div>
    </section>
  );
}
