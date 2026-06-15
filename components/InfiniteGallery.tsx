"use client";

import Image from "next/image";

const ROW_1_IMAGES = [
  { src: "/images/grand-lawn-night.webp", alt: "Grand Lawn Night" },
  { src: "/images/grand-ballroom-setup.webp", alt: "Grand Ballroom Setup" },
  { src: "/images/floral-canopy-pillar.webp", alt: "Floral Décor" },
  { src: "/images/arched-pathway.webp", alt: "Couple Portrait" },
  { src: "/images/poolside-haldi-setup.webp", alt: "Poolside Evening" },
];

const ROW_2_IMAGES = [
  { src: "/images/lawn-patterned-canopy.webp", alt: "Mandap Setup" },
  { src: "/images/outdoor-floral-mandap.png", alt: "Aerial Lawn View" },
  { src: "/images/golden-stage-night.webp", alt: "Reception Dinner" },
  { src: "/images/tree-lights-seating.webp", alt: "Garden Path" },
  { src: "/images/indoor-ceremony.webp", alt: "Indoor Ceremony" },
];

export function InfiniteGallery() {
  // Duplicate arrays for seamless infinite loop
  const topRow = [...ROW_1_IMAGES, ...ROW_1_IMAGES];
  const bottomRow = [...ROW_2_IMAGES, ...ROW_2_IMAGES];

  return (
    <section className="w-full bg-cream py-16 overflow-hidden" aria-label="Venue Gallery">
      <div className="flex flex-col gap-6">
        
        {/* Top Row (Moves Right to Left) */}
        <div className="flex w-max marquee-track">
          {topRow.map((img, i) => (
            <div
              key={`top-${i}`}
              className="relative w-[280px] h-[200px] md:w-[320px] md:h-[220px] lg:w-[400px] lg:h-[260px] flex-shrink-0 mx-3 rounded-2xl overflow-hidden shadow-sm group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-110"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 400px"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row (Moves Left to Right) */}
        <div className="flex w-max marquee-track-reverse">
          {bottomRow.map((img, i) => (
            <div
              key={`bottom-${i}`}
              className="relative w-[280px] h-[200px] md:w-[320px] md:h-[220px] lg:w-[400px] lg:h-[260px] flex-shrink-0 mx-3 rounded-2xl overflow-hidden shadow-sm group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-300 group-hover:scale-[1.03] group-hover:brightness-110"
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 400px"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
