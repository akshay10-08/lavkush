// =============================================================================
// Framer Motion — Animation Presets
// "Expensive feel" motion language: slow, elegant, considered.
// =============================================================================

import type { Variants, Transition } from "framer-motion";

// Custom ease — the signature feel
export const EASE_LUXURY: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Standard transition
export const TRANSITION_DEFAULT: Transition = {
  duration: 0.7,
  ease: EASE_LUXURY,
};

// ── Reveal on scroll ────────────────────────────────────────────────────────

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...TRANSITION_DEFAULT },
  },
};

export const revealFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...TRANSITION_DEFAULT },
  },
};

export const revealFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ...TRANSITION_DEFAULT },
  },
};

export const revealScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ...TRANSITION_DEFAULT },
  },
};

// ── Stagger container ───────────────────────────────────────────────────────

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// ── Hero ─────────────────────────────────────────────────────────────────────

export const heroWordmarkReveal: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: EASE_LUXURY,
    },
  },
};

export const heroSubtitleReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE_LUXURY,
      delay: 0.4,
    },
  },
};

export const heroCTAReveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_LUXURY,
      delay: 0.7,
    },
  },
};

// ── Card hover ──────────────────────────────────────────────────────────────

export const cardImageHover = {
  scale: 1.05,
  transition: { duration: 0.7, ease: EASE_LUXURY },
};

// ── Page transition ─────────────────────────────────────────────────────────

export const pageTransition: Variants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.4, ease: EASE_LUXURY },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3, ease: EASE_LUXURY },
  },
};

// ── Mobile menu stagger ─────────────────────────────────────────────────────

export const menuOverlayVariants: Variants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { duration: 0.4, ease: EASE_LUXURY },
  },
};

export const menuLinkVariants: Variants = {
  closed: { opacity: 0, x: -20 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE_LUXURY },
  },
};

export const menuStagger: Variants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
};

// ── Utility ─────────────────────────────────────────────────────────────────

/** Check prefers-reduced-motion (SSR-safe) */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
