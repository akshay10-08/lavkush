import type { Metadata } from "next";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { ACCOMMODATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Accommodation",
  description:
    "Stay at Luv Kush Vatika — ~60 AC and Non-AC guest rooms and cottages on the venue grounds. Your outstation wedding guests rest comfortably, steps from the celebration.",
};

export default function AccommodationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cottages-exterior.webp"
            alt="Accommodation at Luv Kush Vatika"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald/80" />
        </div>
        <div className="relative z-10 content-container text-center">
          <Eyebrow className="text-gold-soft mb-4 block">Stay With Us</Eyebrow>
          <h1 className="font-serif text-4xl md:text-6xl text-ivory mb-6 leading-tight">
            {ACCOMMODATION.totalRooms} rooms, so your guests stay the celebration
          </h1>
          <p className="text-ivory/80 max-w-2xl mx-auto text-lg leading-relaxed">
            No midnight drives, no missing the morning haldi. Your family rests
            right where the celebration happens.
          </p>
        </div>
      </section>

      {/* Room types */}
      <section className="section-padding">
        <div className="content-container">
          <SectionHeading
            eyebrow="Room Types"
            title="Comfort for every guest"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACCOMMODATION.types.map((type, i) => (
              <RevealOnScroll key={type.name} delay={i * 0.08}>
                <div className="bg-cream rounded-2xl overflow-hidden">
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src="/images/cottages-exterior.webp"
                      alt={type.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-charcoal mb-2">{type.name}</h3>
                    <p className="text-muted text-sm leading-relaxed">{type.description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <OrnamentDivider />

      {/* What's included */}
      <section className="section-padding bg-cream">
        <div className="content-container max-w-3xl mx-auto">
          <SectionHeading eyebrow="Amenities" title="What's included" />
          <div className="mt-12 grid sm:grid-cols-2 gap-4">
            {[
              "Clean, well-maintained rooms",
              "Attached bathrooms",
              "Hot water (24/7)",
              "Fresh bed linen & towels",
              "Room service available",
              "On-site security",
              "Parking for guests",
              "Walking distance to event spaces",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-muted">
                <svg className="w-4 h-4 text-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding text-center">
        <div className="content-container">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-6">
              Book rooms for your wedding party
            </h2>
            <p className="text-ivory/70 max-w-lg mx-auto mb-8">
              Accommodation is included in many of our wedding packages. Ask us
              about availability for your dates.
            </p>
            <Button variant="gold" size="lg" href="/contact" magnetic>
              Check Room Availability
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
