"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { NAV_LINKS, CONTACT } from "@/lib/constants";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";
import {
  menuOverlayVariants,
  menuStagger,
  menuLinkVariants,
} from "@/lib/motion";

interface MobileMenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export function MobileMenuOverlay({
  isOpen,
  onClose,
  onOpenEnquiry,
}: MobileMenuOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    // Focus the close button on open
    setTimeout(() => closeButtonRef.current?.focus(), 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const overlay = overlayRef.current;
      if (!overlay) return;

      const focusable = overlay.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-[60] flex flex-col"
          variants={reducedMotion ? undefined : menuOverlayVariants}
          initial="closed"
          animate="open"
          exit="closed"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          {/* Background image placeholder + colour overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/arched-pathway-day.png"
              alt="Menu Background"
              fill
              className="object-cover opacity-10 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-emerald/95" />
          </div>

          {/* Close button */}
          <div className="relative z-10 flex justify-end p-6">
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-gold hover:text-gold-soft transition-colors"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
          </div>

          {/* Navigation links with staggered reveal */}
          <motion.ul
            className="relative z-10 flex-1 flex flex-col items-center justify-center gap-6 px-6"
            variants={reducedMotion ? undefined : menuStagger}
            initial="closed"
            animate="open"
          >
            {NAV_LINKS.map((link) => (
              <motion.li
                key={link.href}
                variants={reducedMotion ? undefined : menuLinkVariants}
              >
                <Link
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-2xl font-serif text-ivory hover:text-gold-soft transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
            <motion.li variants={reducedMotion ? undefined : menuLinkVariants}>
              <button
                onClick={onOpenEnquiry}
                className="text-2xl font-serif text-gold hover:text-gold-soft transition-colors duration-300"
              >
                Plan Your Event
              </button>
            </motion.li>
          </motion.ul>

          {/* Bottom pinned: Call + WhatsApp */}
          <motion.div
            className="relative z-10 flex items-center justify-center gap-6 px-6 pb-10"
            variants={reducedMotion ? undefined : menuLinkVariants}
          >
            <a
              href={CONTACT.phoneTel}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gold-soft/40 text-ivory font-sans text-sm tracking-wide hover:bg-gold-soft/10 transition-colors"
              aria-label={`Call Luv Kush Vatika at ${CONTACT.phoneDisplay}`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call
            </a>
            <a
              href={WHATSAPP_DEFAULT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-sans text-sm tracking-wide hover:bg-[#22c55e] transition-colors"
              aria-label="Chat on WhatsApp"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
