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
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-ivory shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
        animate={{
          paddingTop: scrolled ? 12 : 20,
          paddingBottom: scrolled ? 12 : 20,
        }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { type: "spring", stiffness: 300, damping: 30 }
        }
      >
        <nav
          className="content-container flex items-center justify-between"
          aria-label="Primary navigation"
        >
          {/* Wordmark / Logo */}
          <Link href="/" aria-label="Luv Kush Vatika — Home" className="relative h-32 w-48 md:h-48 md:w-72 transition-opacity duration-300">
            <Image
              src="/images/logoo.png"
              alt="Luv Kush Vatika Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`gold-underline text-sm font-sans font-medium tracking-wide transition-colors duration-500 ${
                    scrolled ? "text-charcoal" : "text-ivory"
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
              <Button
                variant="ghost"
                size="sm"
                onClick={onOpenEnquiry}
                className={`transition-colors duration-500 ${
                  scrolled
                    ? "!border-gold !text-gold hover:!bg-gold hover:!text-ivory"
                    : "!border-gold-soft !text-gold-soft hover:!bg-gold-soft hover:!text-emerald"
                }`}
                aria-label="Plan your event — open enquiry form"
              >
                Plan Your Event
              </Button>
            </div>

            {/* Mobile hamburger button */}
            <button
              className="lg:hidden relative flex flex-col items-center justify-center w-10 h-10 focus:outline-none"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                className={`block h-[2px] w-6 rounded-full transition-colors duration-500 ${
                  scrolled || mobileMenuOpen ? "bg-gold" : "bg-gold-soft"
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
                  scrolled || mobileMenuOpen ? "bg-gold" : "bg-gold-soft"
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
                  scrolled || mobileMenuOpen ? "bg-gold" : "bg-gold-soft"
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
