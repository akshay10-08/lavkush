import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { SpaceCard } from "@/components/SpaceCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { EVENT_SPACES } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Venues & Spaces",
  description:
    "Explore Luv Kush Vatika's event spaces — five lush green lawns, a grand air-conditioned banquet hall for 1000+ guests, a swimming pool lawn, and a pre-function lounge. The perfect backdrop for weddings in Kanpur.",
};

export default function VenuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lawn-pink-canopy.webp"
            alt="Luv Kush Vatika Venue Aerial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald/80" />
        </div>
        <div className="relative z-10 content-container text-center">
          <Eyebrow className="text-gold-soft mb-4 block">Our Spaces</Eyebrow>
          <h1 className="font-serif text-4xl md:text-6xl text-ivory mb-6 leading-tight">
            Five Lawns. One Grand Ballroom. Infinite Celebrations.
          </h1>
          <p className="text-ivory/80 max-w-2xl mx-auto text-lg leading-relaxed">
            Separate them for an intimate ceremony, open them all for a wedding the whole city remembers.
          </p>
        </div>
      </section>

      {/* All spaces */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EVENT_SPACES.map((space, i) => (
              <RevealOnScroll key={space.slug} delay={i * 0.06}>
                <SpaceCard space={space} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding text-center">
        <div className="content-container">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-6">
              Not sure which space fits your event?
            </h2>
            <p className="text-ivory/70 max-w-lg mx-auto mb-8">
              Tell us about your celebration and we&apos;ll recommend the perfect setup.
            </p>
            <Button variant="gold" size="lg" href="/contact" magnetic>
              Get a Recommendation
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
