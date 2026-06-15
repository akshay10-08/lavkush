import { TeaserSplit } from "@/components/TeaserSplit";
import { ACCOMMODATION } from "@/lib/constants";

export function AccommodationTeaser() {
  return (
    <section className="section-padding bg-cream" aria-label="Accommodation">
      <div className="content-container">
        <TeaserSplit
          imageSide="right"
          image="/images/cottages-exterior.webp"
          imageAlt="Cottage exterior at Luv Kush Vatika"
          eyebrow="Stay With Us"
          title="Sixty rooms, so your guests stay the celebration"
          description={`${ACCOMMODATION.description}. With a choice of air-conditioned rooms and private cottages, your outstation guests rest comfortably — steps away from the celebration. No midnight drives, no missing the morning haldi.`}
          ctaText="View Accommodation"
          ctaHref="/accommodation"
        />
      </div>
    </section>
  );
}
