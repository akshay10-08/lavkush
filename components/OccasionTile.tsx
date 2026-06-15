"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cardImageHover, EASE_LUXURY } from "@/lib/motion";
import Image from "next/image";

interface OccasionTileProps {
  name: string;
  slug: string;
  icon: string;
  description: string;
  image: string;
}

export function OccasionTile({
  name,
  slug,
  description,
  image,
}: OccasionTileProps) {
  return (
    <Link
      href={`/weddings/${slug}`}
      className="group relative block overflow-hidden rounded-lg"
      aria-label={`Learn more about ${name}`}
    >
      {/* Image with hover scale */}
      <motion.div
        whileHover={cardImageHover}
        transition={{
          duration: 0.7,
          ease: EASE_LUXURY,
        }}
      >
        <div className="relative aspect-3/4 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </motion.div>

      {/* Gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

      {/* Text overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <h3 className="font-serif text-xl text-ivory">{name}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ivory/70">
          {description}
        </p>
      </div>
    </Link>
  );
}
