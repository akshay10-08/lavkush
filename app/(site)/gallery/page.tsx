"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { GalleryMasonry } from "@/components/GalleryMasonry";
import { Lightbox } from "@/components/Lightbox";
import Image from "next/image";
import { GALLERY_CATEGORIES } from "@/lib/constants";

const ALL_IMAGES = [
  { src: "/images/grand-lawn-night.webp", label: "Gallery — Grand Lawn at Sunset", category: "Lawns" },
  { src: "/images/grand-ballroom-setup.webp", label: "Gallery — Ballroom Stage Setup", category: "Ballroom" },
  { src: "/images/floral-canopy-pillar.webp", label: "Gallery — Floral Mandap Décor", category: "Décor" },
  { src: "/images/arched-pathway.webp", label: "Gallery — Couple at the Garden", category: "Couples" },
  { src: "/images/poolside-haldi-setup.webp", label: "Gallery — Pool Lawn Evening", category: "Pool" },
  { src: "/images/lawn-patterned-canopy.webp", label: "Gallery — Haldi Setup on Lawn", category: "Décor" },
  { src: "/images/outdoor-floral-mandap.png", label: "Gallery — Aerial View of Lawns", category: "Lawns" },
  { src: "/images/golden-stage-night.webp", label: "Gallery — Reception Dinner in Ballroom", category: "Ballroom" },
  { src: "/images/tree-lights-seating.webp", label: "Gallery — Garden Pathway Lights", category: "Lawns" },
  { src: "/images/indoor-ceremony.webp", label: "Gallery — Bride's Entry", category: "Couples" },
  { src: "/images/poolside-setup-1.png", label: "Gallery — Poolside Sangeet", category: "Pool" },
  { src: "/images/grand-stage-pastel.webp", label: "Gallery — Ballroom Chandelier", category: "Ballroom" },
  { src: "/images/lawn-pink-canopy.webp", label: "Gallery — Lawn 1 Baraat", category: "Lawns" },
  { src: "/images/mehndi-decor-ring.webp", label: "Gallery — Mehndi Décor", category: "Décor" },
  { src: "/images/dining-buffet-setup.webp", label: "Gallery — Pre-function Lounge", category: "Ballroom" },
  { src: "/images/pastel-mandap.webp", label: "Gallery — Couple under Mandap", category: "Couples" },
  { src: "/images/floral-canopy-ceiling.webp", label: "Gallery — Evening Lawn 2", category: "Lawns" },
  { src: "/images/arched-pathway-day.png", label: "Gallery — Buffet Spread", category: "Décor" },
  { src: "/images/poolside-setup-2.png", label: "Gallery — Swimming Pool Day", category: "Pool" },
  { src: "/images/cottages-exterior.webp", label: "Gallery — Cottage Exterior", category: "Lawns" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? ALL_IMAGES
      : ALL_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/floral-canopy-ceiling.webp"
            alt="Luv Kush Vatika Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-emerald/80" />
        </div>
        <div className="relative z-10 content-container text-center">
          <Eyebrow className="text-gold-soft mb-4 block">Gallery</Eyebrow>
          <h1 className="font-serif text-4xl md:text-6xl text-ivory mb-6">
            Every corner tells a story
          </h1>
        </div>
      </section>

      {/* Filters + Gallery */}
      <section className="section-padding">
        <div className="content-container">
          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Gallery categories">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === cat
                    ? "bg-emerald text-ivory"
                    : "bg-cream text-muted hover:bg-sage/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <GalleryMasonry
            images={filtered}
            columns={3}
            onImageClick={(index) => setLightboxIndex(index)}
          />
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev - 1 + filtered.length) % filtered.length : 0
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev !== null ? (prev + 1) % filtered.length : 0
            )
          }
        />
      )}
    </>
  );
}
