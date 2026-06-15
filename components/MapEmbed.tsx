"use client";

import { useEffect, useRef, useState } from "react";
import { LOCATION } from "@/lib/constants";

interface MapEmbedProps {
  className?: string;
}

export function MapEmbed({ className = "" }: MapEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Placeholder shown until iframe loads */}
      {!isLoaded && (
        <div className="w-full aspect-16/9 bg-charcoal/10 animate-pulse flex items-center justify-center text-muted">
          Map Loading…
        </div>
      )}

      {isVisible && (
        <iframe
          src={LOCATION.googleMapsEmbed}
          title="Luv Kush Vatika location on Google Maps"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ aspectRatio: "16/9" }}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}
