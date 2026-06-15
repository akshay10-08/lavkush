"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Wordmark } from "@/components/Wordmark";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { VENUE } from "@/lib/constants";
import { heroWordmarkReveal, heroSubtitleReveal, heroCTAReveal } from "@/lib/motion";

const HERO_IMAGES = [
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
  "/images/hero-4.png",
];

export function HeroSection() {
  const reducedMotion = useReducedMotion();
  const galleryRef = useRef<HTMLElement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const scrollToGallery = () => {
    const el = document.getElementById("gallery-preview");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full h-screen min-h-[600px] max-h-[1200px] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background — image slider */}
      <div className="absolute inset-0 z-0 bg-charcoal">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_IMAGES[currentImageIndex]}
              alt={`Luv Kush Vatika Venue View ${currentImageIndex + 1}`}
              fill
              className="object-cover hero-bg"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark gradient scrim & overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      <div className="hero-overlay z-[2]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          variants={heroWordmarkReveal}
          initial="hidden"
          animate="visible"
        >
          <Eyebrow className="text-gold-soft mb-6 block text-[20vw] sm:text-[15rem] md:text-[25rem] leading-none font-bold tracking-normal drop-shadow-md whitespace-nowrap">
            KANPUR · BITHOOR ROAD
          </Eyebrow>
        </motion.div>

        <motion.div
          variants={heroWordmarkReveal}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-serif text-ivory mb-8">
            <Wordmark
              size="xl"
              className="text-ivory drop-shadow-xl"
            />
          </h1>
        </motion.div>

        <motion.p
          variants={heroSubtitleReveal}
          initial="hidden"
          animate="visible"
          className="text-ivory/95 text-xl md:text-2xl lg:text-3xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {VENUE.heroSubtitle}
        </motion.p>

        <motion.div
          variants={heroCTAReveal}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="gold" size="lg" href="/contact" magnetic>
            Enquire Now
          </Button>
          <Button
            variant="ghost"
            size="lg"
            onClick={scrollToGallery}
            className="!border-ivory/60 !text-ivory hover:!bg-ivory/10"
          >
            Take a Tour
          </Button>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-ivory/40 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-ivory/60" />
        </div>
      </motion.div>
    </section>
  );
}
