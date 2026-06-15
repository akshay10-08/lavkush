import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { OccasionTile } from "@/components/OccasionTile";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Eyebrow } from "@/components/Eyebrow";

import { Button } from "@/components/Button";
import { WEDDING_TYPES } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Weddings & Celebrations",
  description:
    "Host your dream wedding at Luv Kush Vatika — Hindu, Muslim, Sikh, Punjabi, or multi-faith ceremonies. Sangeet, Mehndi, Haldi, receptions, and corporate events on Bithoor Road, Kanpur.",
};

export default function WeddingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/outdoor-floral-mandap.png"
            alt="Wedding Celebrations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald/80" />
        </div>
        <div className="relative z-10 content-container text-center">
          <Eyebrow className="text-gold-soft mb-4 block">Celebrations</Eyebrow>
          <h1 className="font-serif text-4xl md:text-6xl text-ivory mb-6 leading-tight">
            Every tradition, every joy — beautifully hosted
          </h1>
          <p className="text-ivory/80 max-w-2xl mx-auto text-lg">
            Whether it&apos;s a sacred ceremony or a joyful party, our spaces and
            team adapt to the rituals and rhythms of your celebration.
          </p>
        </div>
      </section>

      {/* Wedding types */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WEDDING_TYPES.map((wt, i) => (
              <RevealOnScroll key={wt.slug} delay={i * 0.06}>
                <OccasionTile
                  name={wt.name}
                  slug={wt.slug}
                  icon="wedding"
                  description={wt.subtitle}
                  image={wt.image}
                />
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
              Discuss your wedding with us
            </h2>
            <p className="text-ivory/70 max-w-lg mx-auto mb-8">
              Share your traditions, your guest count, and your vision — we&apos;ll
              show you how our spaces bring it to life.
            </p>
            <Button variant="gold" size="lg" href="/contact" magnetic>
              Start Planning
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
