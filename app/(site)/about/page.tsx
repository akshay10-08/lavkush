import type { Metadata } from "next";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { AmenityGrid } from "@/components/AmenityGrid";
import { VENUE, ACCOMMODATION, LOCATION } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the story of Luv Kush Vatika — a premier wedding venue and resort on Bithoor Road, Kanpur. Learn about our heritage, philosophy, and commitment to hosting celebrations that families remember for generations.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/floral-canopy-pillar.webp"
            alt="Luv Kush Vatika Venue Aerial"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald/80" />
        </div>
        <div className="relative z-10 content-container text-center">
          <Eyebrow className="text-gold-soft mb-4 block">Our Story</Eyebrow>
          <h1 className="font-serif text-4xl md:text-6xl text-ivory mb-6 leading-tight">
            A venue born from a love of celebration
          </h1>
          <p className="text-ivory/80 max-w-2xl mx-auto text-lg leading-relaxed">
            {VENUE.tagline}
          </p>
        </div>
      </section>

      {/* Heritage story */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <RevealOnScroll direction="left">
              <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/arched-pathway.webp"
                  alt="Venue Heritage / Garden Image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div>
                <Eyebrow className="mb-4 block">Heritage & Philosophy</Eyebrow>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-tight">
                  Where the garden meets the Ganga
                </h2>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    On the green outskirts of Kanpur, near the sacred Ganga at Bithoor,
                    Luv Kush Vatika spreads across lawns where mornings are quiet enough
                    to hear peacocks and evenings turn gold under wedding lights.
                  </p>
                  <p>
                    What began as a vision to create a truly grand celebration space in
                    Kanpur has grown into one of the city&apos;s most sought-after
                    venues — a place where families entrust their most important days to
                    a team that treats every event as their own.
                  </p>
                  <p>
                    Our philosophy is simple: give families the space, the beauty, and
                    the support to celebrate without compromise. Five lawns, a grand
                    ballroom, sixty guest rooms, an in-house kitchen, and a team that
                    genuinely cares — that&apos;s the Luv Kush Vatika promise.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <OrnamentDivider />

      {/* Why choose us */}
      <section className="section-padding bg-cream">
        <div className="content-container">
          <SectionHeading
            eyebrow="Why Families Choose Us"
            title="More than a venue — a partner in your celebration"
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Space for Every Scale", desc: "From an intimate 60-guest gathering to a 1000+ grand wedding — our spaces flex to fit your vision, not the other way around." },
              { title: "Genuinely Green Grounds", desc: "Five lush lawns surrounded by trees and gardens. The kind of beauty that shows up in every photo and every guest's memory." },
              { title: "In-House Everything", desc: "Catering, décor, lighting, sound, power backup, and parking — we handle the logistics so your family enjoys the celebration." },
              { title: `${ACCOMMODATION.totalRooms} Guest Rooms`, desc: "AC rooms and cottages on the property. No midnight drives for your baraat — everyone stays, everyone celebrates." },
              { title: "Near Bithoor & the Ganga", desc: "A location that adds heritage and serenity to your wedding — with the convenience of being just 30 minutes from Kanpur city." },
              { title: "Warm, Personal Service", desc: "We're not a hotel chain running on templates. Every event gets hands-on attention from a team that knows your guest count, your schedule, and your priorities." },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.06}>
                <div className="bg-ivory rounded-xl p-6 h-full">
                  <h3 className="font-serif text-xl text-charcoal mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section-dark py-16 md:py-20">
        <div className="content-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "5+1", label: "Lawns + Ballroom" },
              { stat: "1000+", label: "Guest Capacity" },
              { stat: ACCOMMODATION.totalRooms, label: "Guest Rooms" },
              { stat: "[X]+", label: "Weddings Hosted" },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div>
                  <p className="font-serif text-4xl md:text-5xl text-gold-soft mb-2">{item.stat}</p>
                  <p className="text-ivory/70 text-sm uppercase tracking-wider">{item.label}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding">
        <div className="content-container">
          <SectionHeading
            eyebrow="Facilities"
            title="Everything in place for your event"
          />
          <div className="mt-12">
            <AmenityGrid />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding text-center">
        <div className="content-container">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-6">
              Ready to see the venue in person?
            </h2>
            <p className="text-ivory/70 max-w-lg mx-auto mb-8">
              Schedule a private visit and walk the lawns, see the ballroom, and
              meet the team that will host your celebration.
            </p>
            <Button variant="gold" size="lg" href="/contact" magnetic>
              Plan a Visit
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
