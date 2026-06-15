import type { Metadata } from "next";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import { CATERING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Dining & Catering",
  description:
    "In-house multi-cuisine catering at Luv Kush Vatika — vegetarian, vegan-friendly, customizable menus for weddings and events in Kanpur. Bring-your-own-bar permitted.",
};

const MENU_SECTIONS = [
  { name: "Starters & Chaats", items: ["Paneer Tikka", "Dahi Ke Kebab", "Pani Puri Station", "Corn Cheese Balls", "Hara Bhara Kebab"] },
  { name: "Main Course", items: ["Dal Makhani", "Paneer Butter Masala", "Mix Veg Kolhapuri", "Jeera Rice & Biryani", "Assorted Breads"] },
  { name: "Live Counters", items: ["Pasta Station", "Dosa Counter", "Chaat Counter", "Chinese Wok", "Custom options available"] },
  { name: "Desserts", items: ["Gulab Jamun", "Rasmalai", "Ice Cream Station", "Jalebi", "Seasonal Fruits"] },
];

export default function DiningPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dining-buffet-setup.webp"
            alt="Dining and Catering at Luv Kush Vatika"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald/80" />
        </div>
        <div className="relative z-10 content-container text-center">
          <Eyebrow className="text-gold-soft mb-4 block">Dining</Eyebrow>
          <h1 className="font-serif text-4xl md:text-6xl text-ivory mb-6 leading-tight">
            A feast crafted for your celebration
          </h1>
          <p className="text-ivory/80 max-w-2xl mx-auto text-lg leading-relaxed">
            {CATERING.type} — {CATERING.dietary.toLowerCase()}, fully customizable, prepared fresh on-site.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <RevealOnScroll direction="left">
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/pastel-mandap.webp"
                  alt="Buffet Spread at Luv Kush Vatika"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div>
                <Eyebrow className="mb-4 block">Our Kitchen</Eyebrow>
                <h2 className="font-serif text-3xl text-charcoal mb-4">
                  Fresh, flavourful, and flexible
                </h2>
                <div className="space-y-4 text-muted leading-relaxed">
                  <p>
                    Our in-house kitchen prepares multi-cuisine vegetarian and
                    vegan-friendly menus tailored to your event — from elaborate
                    wedding thalis to elegant plated dinners, live counters to
                    midnight chaats.
                  </p>
                  <p>
                    Every menu is customizable. Tell us your family&apos;s favourites,
                    any dietary needs, and the vibe you&apos;re going for — we&apos;ll
                    create a spread that makes your guests talk about the food as much
                    as the wedding.
                  </p>
                  <p className="text-sm bg-cream rounded-lg p-4">
                    <strong className="text-charcoal">BYOB permitted:</strong>{" "}
                    {CATERING.note}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <OrnamentDivider />

      {/* Sample menu */}
      <section className="section-padding bg-cream">
        <div className="content-container">
          <SectionHeading
            eyebrow="Sample Menu"
            title="A taste of what we offer"
            subtitle="This is a representative menu. Your celebration gets a fully custom spread."
          />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MENU_SECTIONS.map((section, i) => (
              <RevealOnScroll key={section.name} delay={i * 0.08}>
                <div className="bg-ivory rounded-xl p-6 h-full">
                  <h3 className="font-serif text-lg text-charcoal mb-4 pb-3 border-b border-gold/20">
                    {section.name}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="text-muted text-sm flex items-start gap-2">
                        <span className="text-gold mt-1.5 text-xs">◆</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <p className="text-center text-muted-light text-xs mt-8">
            Prices are quote-based. No prices are displayed — request a custom menu & quote.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark section-padding text-center">
        <div className="content-container">
          <RevealOnScroll>
            <h2 className="font-serif text-3xl md:text-5xl text-ivory mb-6">
              Request a custom menu & quote
            </h2>
            <p className="text-ivory/70 max-w-lg mx-auto mb-8">
              Share your guest count, preferences, and budget — our kitchen team
              will design a menu just for you.
            </p>
            <Button variant="gold" size="lg" href="/contact" magnetic>
              Get a Menu Quote
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
