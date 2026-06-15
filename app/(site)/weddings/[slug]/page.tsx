import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { WEDDING_TYPES } from "@/lib/constants";
import { whatsappLink } from "@/lib/whatsapp";

export function generateStaticParams() {
  return WEDDING_TYPES.map((wt) => ({ slug: wt.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const wt = WEDDING_TYPES.find((w) => w.slug === slug);
  if (!wt) return {};
  return {
    title: `${wt.name} at Luv Kush Vatika`,
    description: `${wt.description.slice(0, 155)}… Host your ${wt.name.toLowerCase()} at Luv Kush Vatika, Kanpur's premier wedding venue.`,
  };
}

export default async function WeddingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const wt = WEDDING_TYPES.find((w) => w.slug === slug);
  if (!wt) notFound();

  const waLink = whatsappLink({ eventType: wt.name });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={wt.image}
            alt={wt.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald/75" />
        </div>
        <div className="relative z-10 content-container text-center">
          <Eyebrow className="text-gold-soft mb-4 block">{wt.name}</Eyebrow>
          <h1 className="font-serif text-4xl md:text-6xl text-ivory mb-4">{wt.subtitle}</h1>
        </div>
      </section>

      {/* Description + ritual notes */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <RevealOnScroll direction="left">
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
                <Image
                  src={wt.image}
                  alt={wt.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div>
                <h2 className="font-serif text-3xl text-charcoal mb-4">
                  How we host {wt.name === "Corporate & Social Events" ? "your event" : "your ceremony"}
                </h2>
                <p className="text-muted leading-relaxed mb-8">{wt.description}</p>

                <div className="bg-cream rounded-xl p-6 mb-8">
                  <h3 className="font-serif text-lg text-charcoal mb-4">What we arrange</h3>
                  <ul className="space-y-3">
                    {wt.ritualNotes.map((note, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted">
                        <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-serif text-lg text-charcoal mb-3">Recommended Spaces</h3>
                  <div className="flex flex-wrap gap-2">
                    {wt.spaces.map((s) => (
                      <span key={s} className="px-3 py-1 bg-cream rounded-full text-xs text-muted font-medium">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="gold" href="/contact" magnetic>
                    Plan This Celebration
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

      {/* Gallery */}
      <section className="section-padding bg-cream">
        <div className="content-container">
          <h2 className="font-serif text-3xl text-charcoal text-center mb-12">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden">
                  <Image
                    src={wt.image}
                    alt={`${wt.name} detail view`}
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
