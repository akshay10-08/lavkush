import type { Metadata } from "next";
import { Eyebrow } from "@/components/Eyebrow";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { MapEmbed } from "@/components/MapEmbed";
import { DistanceWidget } from "@/components/DistanceWidget";
import { CheckAvailability } from "@/components/CheckAvailability";
import { CONTACT, LOCATION, VENUE } from "@/lib/constants";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Luv Kush Vatika — enquire about availability, request a quote, or schedule a venue visit. Call, WhatsApp, or fill out our enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 section-dark">
        <div className="content-container text-center">
          <Eyebrow className="text-gold-soft mb-4 block">Get In Touch</Eyebrow>
          <h1 className="font-serif text-4xl md:text-6xl text-ivory mb-4">
            Let&apos;s start planning
          </h1>
          <p className="text-ivory/80 max-w-xl mx-auto text-lg">
            Fill out the form below, call us, or message us on WhatsApp — we
            respond within 24 hours.
          </p>
        </div>
      </section>

      <CheckAvailability />

      {/* Additional details */}
      <section className="section-padding pt-0">
        <div className="content-container">
          <RevealOnScroll>
            <div className="bg-cream rounded-2xl p-8 mt-4">
              <h3 className="font-serif text-2xl text-charcoal mb-6 text-center">More Information</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-lg text-charcoal mb-3">Email Us</h4>
                  <p className="text-muted text-sm">{CONTACT.email}</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-charcoal mb-3">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href={CONTACT.instagram} target="_blank" rel="noopener" className="text-muted hover:text-gold transition-colors" aria-label="Follow on Instagram">
                      Instagram
                    </a>
                    <a href={CONTACT.youtube} target="_blank" rel="noopener" className="text-muted hover:text-gold transition-colors" aria-label="Watch on YouTube">
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gold/10">
                <DistanceWidget />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] md:h-[500px]">
        <MapEmbed className="h-full" />
      </section>
    </>
  );
}
