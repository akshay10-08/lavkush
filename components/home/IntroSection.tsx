import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Eyebrow } from "@/components/Eyebrow";
import { OrnamentDivider } from "@/components/OrnamentDivider";
import Link from "next/link";

export function IntroSection() {
  return (
    <section className="section-padding overflow-hidden" aria-label="Introduction">
      <div className="content-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <RevealOnScroll direction="left">
            <div className="relative">
              <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/tree-lights-seating.webp"
                  alt="Luv Kush Vatika Outdoor Venue"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative gold corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-2xl hidden lg:block" />
            </div>
          </RevealOnScroll>

          {/* Text */}
          <RevealOnScroll direction="right">
            <div className="lg:pl-4">
              <Eyebrow className="mb-4 block">Discover the Venue</Eyebrow>
              <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-6 leading-tight">
                A garden where celebrations
                <span className="text-emerald-700"> come alive</span>
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  On the green outskirts of Kanpur, near the sacred Ganga at Bithoor,
                  Luv Kush Vatika spreads across lawns where mornings are quiet enough
                  to hear peacocks and evenings turn gold under wedding lights.
                </p>
                <p>
                  This is not just a venue — it is a canvas for your most important
                  celebrations. Five open lawns, a grand air-conditioned ballroom, and
                  sixty guest rooms come together in a setting designed for weddings
                  that families talk about for generations.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="gold-underline text-gold font-medium inline-flex items-center gap-2 text-sm uppercase tracking-wider"
                >
                  Discover Luv Kush Vatika
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M3 8h10m0 0L9 4m4 4L9 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <OrnamentDivider className="mt-20" />
    </section>
  );
}
