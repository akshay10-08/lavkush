import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function TestimonialsSection() {
  return (
    <section className="section-padding section-dark" aria-label="Testimonials">
      <div className="content-container">
        <SectionHeading
          eyebrow="What Guests Say"
          title="Celebrations remembered, in their own words"
          dark
        />

        <RevealOnScroll>
          <div className="mt-16 max-w-3xl mx-auto">
            <TestimonialCarousel />
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mt-12 flex justify-center">
            <GoogleReviewsBadge />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
