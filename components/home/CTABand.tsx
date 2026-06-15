import Image from "next/image";
import { Button } from "@/components/Button";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

export function CTABand() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" aria-label="Call to action">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/outdoor-floral-mandap.png"
          alt="Luv Kush Vatika Evening Glow"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-emerald/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 content-container text-center">
        <RevealOnScroll>
          <p className="eyebrow text-gold-soft mb-4">Your Celebration Awaits</p>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-ivory mb-6 leading-tight max-w-3xl mx-auto">
            Let&apos;s plan a celebration they&apos;ll never forget.
          </h2>
          <p className="text-ivory/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Tell us about your event and we&apos;ll craft a proposal tailored to your
            vision, guest count, and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="gold"
              size="lg"
              href={WHATSAPP_DEFAULT_LINK}
              magnetic
            >
              Enquire on WhatsApp
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="/contact"
              className="!border-ivory/50 !text-ivory hover:!bg-ivory/10"
            >
              Send an Enquiry
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
