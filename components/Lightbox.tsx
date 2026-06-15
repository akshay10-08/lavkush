"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Image from "next/image";

interface LightboxProps {
  images: { src?: string; label: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef(0);
  const [touchDelta, setTouchDelta] = useState(0);

  // Focus trap — capture focus on mount
  useEffect(() => {
    closeRef.current?.focus();

    const previouslyFocused = document.activeElement as HTMLElement;
    return () => {
      previouslyFocused?.focus?.();
    };
  }, []);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();

      // Focus trap
      if (e.key === "Tab" && overlayRef.current) {
        const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  // Touch swipe support
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setTouchDelta(0);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchDelta(e.touches[0].clientX - touchStartX.current);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchDelta > 60) onPrev();
    else if (touchDelta < -60) onNext();
    setTouchDelta(0);
  }, [touchDelta, onPrev, onNext]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${currentIndex + 1} of ${images.length}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close lightbox"
        className="absolute right-4 top-4 z-10 rounded-full bg-ivory/10 p-2 text-ivory transition-colors hover:bg-ivory/20 focus-visible:ring-2 focus-visible:ring-gold"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      <span className="absolute left-4 top-4 font-sans text-sm text-ivory/60">
        {currentIndex + 1} / {images.length}
      </span>

      {/* Previous button */}
      <button
        onClick={onPrev}
        aria-label="Previous image"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-ivory/10 p-3 text-ivory transition-colors hover:bg-ivory/20 focus-visible:ring-2 focus-visible:ring-gold"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <div className="relative mx-16 w-full max-w-4xl aspect-16/9 rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex]?.src || "/images/grand-lawn-night.webp"}
          alt={images[currentIndex]?.label || "Gallery image"}
          fill
          className="object-contain bg-black/20"
        />
      </div>

      {/* Next button */}
      <button
        onClick={onNext}
        aria-label="Next image"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-ivory/10 p-3 text-ivory transition-colors hover:bg-ivory/20 focus-visible:ring-2 focus-visible:ring-gold"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
