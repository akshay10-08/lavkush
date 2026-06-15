"use client";

import Image from "next/image";

interface GalleryImage {
  label: string;
  category: string;
  src?: string;
}

interface GalleryMasonryProps {
  images: GalleryImage[];
  columns?: number;
  onImageClick?: (index: number) => void;
}

export function GalleryMasonry({
  images,
  onImageClick,
}: GalleryMasonryProps) {
  return (
    <div className="columns-2 gap-3 space-y-3 sm:columns-3 md:columns-4 lg:columns-5">
      {images.map((img, i) => (
        <button
          key={i}
          onClick={() => onImageClick?.(i)}
          className="group relative block w-full break-inside-avoid overflow-hidden rounded-lg"
          aria-label={`View ${img.label}`}
        >
          <div
            className={`relative w-full ${
              i % 5 === 0 ? "aspect-[3/4]" : i % 4 === 0 ? "aspect-[4/3]" : i % 3 === 0 ? "aspect-[4/5]" : "aspect-square"
            }`}
          >
            <Image
              src={img.src || "/images/grand-lawn-night.webp"}
              alt={img.label}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
            />
          </div>

          {/* Hover overlay with zoom icon */}
          <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 transition-all duration-500 group-hover:bg-charcoal/30">
            <svg
              className="h-8 w-8 text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" />
              <path d="M11 8v6M8 11h6" />
            </svg>
          </div>
        </button>
      ))}
    </div>
  );
}
