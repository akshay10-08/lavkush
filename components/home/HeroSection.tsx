"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { heroWordmarkReveal, heroSubtitleReveal, heroCTAReveal } from "@/lib/motion";

const HERO_IMAGES = [
  "/images/hero-1.png",
  "/images/hero-2.png",
  "/images/hero-3.png",
  "/images/hero-4.png",
];

export function HeroSection() {
  const reducedMotion = useReducedMotion();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const scrollToSpaces = () => {
    const el = document.getElementById("spaces-showcase");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full h-screen min-h-[600px] max-h-[1200px] flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Background — image slider with Ken Burns ── */}
      <div className="absolute inset-0 z-0 bg-[#14342B]">
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

      {/* ── LEGIBILITY STACK ── */}
      {/* Layer A: Global darken */}
      <div className="absolute inset-0 z-[1] bg-black/15" />

      {/* Layer B: Bottom-up warm emerald scrim */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(to top, rgba(20,52,43,0.85) 0%, rgba(20,52,43,0.4) 40%, transparent 70%)",
        }}
      />

      {/* Layer C: Radial vignette behind text */}
      <div
        className="absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(20,52,43,0.45) 0%, transparent 60%)",
        }}
      />

      {/* Layer D: Hero overlay (warm tint) */}
      <div className="hero-overlay z-[4]" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">

        {/* 1. LOGO LOCKUP */}
        <motion.div
          variants={heroWordmarkReveal}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center mb-8"
        >
          {/* LKV Crest Logo */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4">
            <Image
              src="/images/logoo.png"
              alt="LKV Crest"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Serif Wordmark */}
          <h2 className="font-serif text-ivory text-5xl md:text-7xl lg:text-8xl tracking-wide drop-shadow-lg">
            Luv Kush Vatika
          </h2>

          {/* Champagne-gold flourish with sub-line */}
          <div className="flex items-center gap-4 mt-4">
            <div className="w-12 md:w-20 h-[1px] bg-[#C29A4E]/60" />
            <span className="text-[#C29A4E] text-xs md:text-sm font-sans uppercase tracking-[0.2em] font-medium">
              A Garden of Celebrations
            </span>
            <div className="w-12 md:w-20 h-[1px] bg-[#C29A4E]/60" />
          </div>
        </motion.div>

        {/* 2. CINEMATIC HEADLINE */}
        <motion.h1
          variants={heroSubtitleReveal}
          initial="hidden"
          animate="visible"
          className="font-serif text-ivory leading-relaxed tracking-wide mb-6 drop-shadow-xl"
          style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
        >
          Where{" "}
          <em className="text-[#C29A4E] italic">celebrations</em>
          {" "}and
          <br className="hidden sm:block" />
          {" "}Luxury Bloom as One
        </motion.h1>

        {/* 3. EYEBROW STAT LINE */}
        <motion.p
          variants={heroSubtitleReveal}
          initial="hidden"
          animate="visible"
          className="text-ivory/80 text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans mb-10 drop-shadow-md"
        >
          Bithoor Road · New Kanpur City · Five Lawns · One Grand Ballroom
        </motion.p>

        {/* 4. DUAL CTA */}
        <motion.div
          variants={heroCTAReveal}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary Gold CTA */}
          <button
            onClick={() => {
              const el = document.getElementById("enquire");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-[#C29A4E] text-[#14342B] rounded-full px-8 py-4 text-xs md:text-sm font-bold uppercase tracking-[0.12em] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(194,154,78,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C29A4E]"
          >
            Plan Your Wedding
          </button>

          {/* Secondary Ghost CTA */}
          <button
            onClick={scrollToSpaces}
            className="rounded-full px-8 py-4 text-xs md:text-sm font-bold uppercase tracking-[0.12em] border border-ivory/40 text-ivory bg-transparent transition-all duration-300 hover:bg-ivory/10 hover:border-ivory/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ivory"
          >
            Explore Venues
          </button>
        </motion.div>
      </div>

      {/* ── Scroll cue ── */}
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
