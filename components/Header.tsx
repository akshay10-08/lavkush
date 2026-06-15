"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/Button";
import { NAV_LINKS } from "@/lib/constants";
import { MobileMenuOverlay } from "@/components/MobileMenuOverlay";

interface HeaderProps {
  onOpenEnquiry: () => void;
}

export function Header({ onOpenEnquiry }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      <motion.header
        className={`fixed inset-x-4 top-4 md:top-6 mx-auto max-w-[1240px] z-50 rounded-full border border-white/20 backdrop-blur-xl backdrop-saturate-150 ring-1 ring-inset ring-white/15 glass-capsule-fallback transition-colors duration-500 px-6 ${
          scrolled
            ? "bg-[#F7F2E9]/85 shadow-[0_12px_40px_rgba(20,52,43,0.25)]"
            : "bg-white/15 shadow-[0_8px_32px_rgba(20,52,43,0.18)]"
        }`}
        animate={{
          paddingTop: scrolled ? 8 : 12,
          paddingBottom: scrolled ? 8 : 12,
        }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 300, damping: 30 }
        }
      >
        <nav
          className="flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* Wordmark / Logo */}
          <Link href="/" aria-label="Luv Kush Vatika — Home" className="relative h-20 w-48 md:h-32 md:w-72 -my-5 md:-my-10 z-10 transition-opacity duration-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
            <Image
              src="/images/logoo.png"
              alt="Luv Kush Vatika Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`gold-underline text-xs font-sans font-medium uppercase tracking-[0.12em] transition-colors duration-500 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                    scrolled ? "text-[#1A1D1A] hover:text-[#C29A4E]" : "text-ivory hover:text-[#C29A4E]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right side — CTA + Hamburger */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={onOpenEnquiry}
                className="bg-[#C29A4E] text-[#14342b] rounded-full px-6 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(194,154,78,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Enquire Now — open enquiry form"
              >
                Enquire Now
              </button>
            </div>

            {/* Mobile hamburger button */}
            <button
              className="lg:hidden relative flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                className={`block h-[2px] w-6 rounded-full transition-colors duration-500 ${
                  scrolled || mobileMenuOpen ? "bg-[#1A1D1A]" : "bg-ivory"
                }`}
                animate={
                  mobileMenuOpen
                    ? { rotate: 45, y: 0 }
                    : { rotate: 0, y: -4 }
                }
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }
              />
              <motion.span
                className={`block h-[2px] w-6 rounded-full transition-colors duration-500 ${
                  scrolled || mobileMenuOpen ? "bg-[#1A1D1A]" : "bg-ivory"
                }`}
                animate={
                  mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }
                }
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 0.2 }
                }
              />
              <motion.span
                className={`block h-[2px] w-6 rounded-full transition-colors duration-500 ${
                  scrolled || mobileMenuOpen ? "bg-[#1A1D1A]" : "bg-ivory"
                }`}
                animate={
                  mobileMenuOpen
                    ? { rotate: -45, y: 0 }
                    : { rotate: 0, y: 4 }
                }
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <MobileMenuOverlay
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        onOpenEnquiry={() => {
          closeMobileMenu();
          onOpenEnquiry();
        }}
      />
    </>
  );
}
