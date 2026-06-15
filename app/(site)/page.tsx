import { HeroSection } from "@/components/home/HeroSection";
import { TrustRibbon } from "@/components/home/TrustRibbon";
import { IntroSection } from "@/components/home/IntroSection";
import { SpacesShowcase } from "@/components/home/SpacesShowcase";
import { OccasionsSection } from "@/components/home/OccasionsSection";
import { InfiniteGallery } from "@/components/InfiniteGallery";
import { AmenitiesSection } from "@/components/home/AmenitiesSection";
import { DiningTeaser } from "@/components/home/DiningTeaser";
import { AccommodationTeaser } from "@/components/home/AccommodationTeaser";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { LocationSection } from "@/components/home/LocationSection";
import { CheckAvailability } from "@/components/CheckAvailability";
import { CTABand } from "@/components/home/CTABand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luv Kush Vatika — Luxury Wedding Venue & Resort in Kanpur",
  description:
    "Luv Kush Vatika is a premier wedding venue and resort on Bithoor Road, Kanpur. Five lush lawns, a grand banquet hall seating 1000+, 60 guest rooms, in-house catering, and a dedicated décor team — everything for the celebration of a lifetime.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust ribbon */}
      <TrustRibbon />

      {/* 3. Introduction / sense of place */}
      <IntroSection />

      {/* 4. Spaces showcase */}
      <SpacesShowcase />

      {/* 5. Celebrate by occasion */}
      <OccasionsSection />

      {/* 6. Infinite Dual-Direction Gallery */}
      <InfiniteGallery />

      {/* 7. Amenities grid */}
      <AmenitiesSection />

      {/* 8. Dining teaser */}
      <DiningTeaser />

      {/* 9. Accommodation teaser */}
      <AccommodationTeaser />

      {/* 11. Testimonials */}
      <TestimonialsSection />

      {/* 12. Location & accessibility */}
      <LocationSection />

      {/* 13. Check Availability Form */}
      <CheckAvailability />

      {/* 14. Final CTA band */}
      <CTABand />
    </>
  );
}
