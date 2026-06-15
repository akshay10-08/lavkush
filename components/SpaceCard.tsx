"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cardImageHover, EASE_LUXURY } from "@/lib/motion";
import type { EventSpace } from "@/lib/constants";
import Image from "next/image";

interface SpaceCardProps {
  space: EventSpace;
}

export function SpaceCard({ space }: SpaceCardProps) {
  return (
    <article className="group">
      <Link
        href={`/venues/${space.slug}`}
        className="block"
        aria-label={`View ${space.name}`}
      >
        {/* Image with hover scale */}
        <div className="overflow-hidden rounded-lg">
          <motion.div
            whileHover={cardImageHover}
            transition={{
              duration: 0.7,
              ease: EASE_LUXURY,
            }}
          >
            <div className="relative aspect-4/3 w-full">
              <Image
                src={space.image}
                alt={space.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Text content */}
        <div className="mt-4 space-y-1">
          <h3 className="font-serif text-xl text-charcoal">{space.name}</h3>
          <span className="eyebrow">{space.capacity}</span>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">
            {space.shortDescription}
          </p>
          <span className="gold-underline mt-2 inline-block text-sm font-medium text-gold">
            View Space&nbsp;→
          </span>
        </div>
      </Link>
    </article>
  );
}
