import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Eyebrow } from "@/components/Eyebrow";
import { MapEmbed } from "@/components/MapEmbed";
import { DistanceWidget } from "@/components/DistanceWidget";
import { LOCATION, CONTACT } from "@/lib/constants";
import Link from "next/link";

export function LocationSection() {
  return (
    <section className="section-padding bg-cream" aria-label="Location">
      <div className="content-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — info */}
          <RevealOnScroll direction="left">
            <div>
              <Eyebrow className="mb-4 block">Find Us</Eyebrow>
              <h2 className="font-serif text-3xl md:text-5xl text-charcoal mb-6 leading-tight">
                Where to find us
              </h2>

              <div className="space-y-4 text-muted leading-relaxed mb-8">
                <p>
                  Located on Resort Road in New Kanpur City, Luv Kush Vatika is
                  just {LOCATION.travelContext} — close to the
                  heritage town of Bithoor and the banks of the Ganga.
                </p>
                <p className="text-sm">
                  Nearby landmarks: {LOCATION.nearby.join(" · ")}
                </p>
              </div>

              {/* Address */}
              <div className="bg-ivory rounded-xl p-6 mb-6">
                <address className="not-italic space-y-2 text-charcoal">
                  <p className="font-serif text-lg font-medium">Luv Kush Vatika</p>
                  <p className="text-muted text-sm">{LOCATION.address}</p>
                  <p className="text-sm">
                    <a
                      href={CONTACT.phoneTel}
                      className="gold-underline text-gold"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </p>
                </address>
              </div>

              {/* Get directions */}
              <Link
                href={LOCATION.googleMapsUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-gold gold-underline text-sm uppercase tracking-wider font-medium"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                Get Directions
              </Link>

              {/* Distance widget */}
              <div className="mt-8">
                <DistanceWidget />
              </div>

              {/* Accessibility note */}
              <p className="mt-6 text-xs text-muted-light flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="4.5" r="2" />
                  <path d="M12 7v5.5M8 21l2.5-6.5h3L16 21M7.5 12h9" />
                </svg>
                Wheelchair-accessible parking, entrance, and restrooms
              </p>
            </div>
          </RevealOnScroll>

          {/* Right — Map */}
          <RevealOnScroll direction="right">
            <div className="rounded-2xl overflow-hidden h-full min-h-[400px]">
              <MapEmbed className="h-full" />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
