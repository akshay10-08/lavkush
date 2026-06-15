import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { EVENT_SPACES } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return EVENT_SPACES.map((space) => ({ slug: space.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const space = EVENT_SPACES.find((s) => s.slug === slug);
  if (!space) return {};
  return {
    title: `${space.name} — Wedding Venue Space`,
    description: `${space.shortDescription} ${space.capacity} at Luv Kush Vatika, Kanpur's premier wedding venue on Bithoor Road.`,
  };
}

export default async function VenueDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const space = EVENT_SPACES.find((s) => s.slug === slug);
  if (!space) notFound();

  const waLink = whatsappLink({ space: space.name });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={space.image}
            alt={`${space.name} at Luv Kush Vatika`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald/75" />
        </div>
        <div className="relative z-10 content-container text-center">
          <Eyebrow className="text-gold-soft mb-4 block">{space.type === "lawn" ? "Outdoor Space" : space.type === "indoor" ? "Indoor Space" : "Amenity Space"}</Eyebrow>
          <h1 className="font-serif text-4xl md:text-6xl text-ivory mb-4">{space.name}</h1>
          <p className="text-ivory/80 text-lg">{space.capacity}</p>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <RevealOnScroll direction="left">
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
                <Image
                  src={space.image}
                  alt={space.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div>
                <h2 className="font-serif text-3xl text-charcoal mb-4">About This Space</h2>
                <p className="text-muted leading-relaxed mb-6">{space.shortDescription}</p>

                <div className="bg-cream rounded-xl p-6 mb-6">
                  <h3 className="font-serif text-lg text-charcoal mb-3">Capacity & Details</h3>
                  <ul className="space-y-2 text-muted text-sm">
                    <li className="flex justify-between"><span>Capacity</span><span className="text-charcoal font-medium">{space.capacity}</span></li>
                    <li className="flex justify-between"><span>Area</span><span className="text-charcoal font-medium">[Confirm with owner]</span></li>
                    <li className="flex justify-between"><span>Type</span><span className="text-charcoal font-medium capitalize">{space.type}</span></li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="font-serif text-lg text-charcoal mb-3">Suited For</h3>
                  <div className="flex flex-wrap gap-2">
                    {space.suited.map((s) => (
                      <span key={s} className="px-3 py-1 bg-cream rounded-full text-xs text-muted font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="gold" href="/contact" magnetic>
                    Check Availability
                  </Button>
                  <Button variant="ghost" href={waLink}>
                    Ask on WhatsApp
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <OrnamentDivider />

      {/* Mini gallery */}
      <section className="section-padding bg-cream">
        <div className="content-container">
          <h2 className="font-serif text-3xl text-charcoal text-center mb-12">More Views</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden">
                  <Image
                    src={space.image}
                    alt={`${space.name} view`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
