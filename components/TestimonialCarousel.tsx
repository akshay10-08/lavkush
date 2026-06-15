"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface Testimonial {
  quote: string;
  guest: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "From the moment we arrived, every detail was taken care of. The lawns were stunning, the food was exquisite, and our guests still talk about how beautiful the décor was. Luv Kush Vatika made our wedding truly unforgettable.",
    guest: "Guest Testimonial 1 — name, event",
  },
  {
    quote:
      "We hosted our daughter's reception here, and the team went above and beyond. The banquet hall looked like a dream, and the coordination was seamless. It felt less like a venue and more like a family looking after us.",
    guest: "Guest Testimonial 2 — name, event",
  },
  {
    quote:
      "What sets Luv Kush Vatika apart is the space — the multiple lawns gave each ceremony its own personality. The poolside sangeet was magical, and our pre-wedding shoot photos turned out extraordinary.",
    guest: "Guest Testimonial 3 — name, event",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const startTimer = useCallback(() => {
    if (reducedMotion) return;
    clearTimer();
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
  }, [reducedMotion, total, clearTimer]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer, clearTimer]);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(index);
      startTimer();
    },
    [startTimer]
  );

  const goPrev = useCallback(() => {
    goTo((current - 1 + total) % total);
  }, [current, total, goTo]);

  const goNext = useCallback(() => {
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    },
    [goPrev, goNext]
  );

  return (
    <div
      className="relative mx-auto max-w-3xl px-4 text-center"
      role="region"
      aria-label="Guest testimonials"
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
    >
      {/* Decorative quote mark */}
      <span
        className="block font-serif text-6xl leading-none text-gold/30"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Testimonial slides */}
      <div className="relative min-h-[160px]">
        {testimonials.map((t, i) => (
          <blockquote
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== current}
            role="group"
            aria-roledescription="slide"
            aria-label={`Testimonial ${i + 1} of ${total}`}
          >
            <p className="font-serif text-lg italic leading-relaxed text-ivory md:text-xl">
              {t.quote}
            </p>
            <cite className="mt-4 block text-sm not-italic text-ivory/70">
              [{t.guest}]
            </cite>
          </blockquote>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="rounded-full p-2 text-ivory/70 transition-colors hover:text-gold focus-visible:ring-2 focus-visible:ring-gold"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-6 bg-gold"
                  : "bg-sage hover:bg-gold/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          aria-label="Next testimonial"
          className="rounded-full p-2 text-ivory/70 transition-colors hover:text-gold focus-visible:ring-2 focus-visible:ring-gold"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
