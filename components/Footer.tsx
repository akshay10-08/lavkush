import Link from "next/link";
import Image from "next/image";
import { VENUE, CONTACT, LOCATION, NAV_LINKS, WEDDING_TYPES } from "@/lib/constants";

export function Footer() {
  const quickLinks = NAV_LINKS.filter((l) =>
    ["About", "Venues", "Weddings", "Gallery"].includes(l.label)
  );

  const celebrationLinks = WEDDING_TYPES.map((wt) => ({
    label: wt.name,
    href: `/weddings/${wt.slug}`,
  }));

  return (
    <footer className="bg-emerald text-ivory" role="contentinfo">
      {/* Top — Wordmark + Tagline */}
      <div className="content-container pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="text-center mb-12 md:mb-16">
          <Link href="/" aria-label="Luv Kush Vatika — Home" className="inline-block relative h-20 w-48 mx-auto">
            <Image
              src="/images/logo-light.png"
              alt="Luv Kush Vatika Logo"
              fill
              className="object-contain"
            />
          </Link>
          <p className="mt-4 text-ivory/70 font-sans text-sm max-w-md mx-auto leading-relaxed">
            {VENUE.tagline}
          </p>
        </div>

        {/* Middle — 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="eyebrow text-gold-soft mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/80 hover:text-gold-soft transition-colors duration-300 font-sans text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-ivory/80 hover:text-gold-soft transition-colors duration-300 font-sans text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/accommodation"
                  className="text-ivory/80 hover:text-gold-soft transition-colors duration-300 font-sans text-sm"
                >
                  Accommodation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Celebrations */}
          <div>
            <h3 className="eyebrow text-gold-soft mb-5">Celebrations</h3>
            <ul className="space-y-3">
              {celebrationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ivory/80 hover:text-gold-soft transition-colors duration-300 font-sans text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="eyebrow text-gold-soft mb-5">Contact</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li>
                <a
                  href={CONTACT.phoneTel}
                  className="text-ivory/80 hover:text-gold-soft transition-colors duration-300"
                  aria-label={`Call us at ${CONTACT.phoneDisplay}`}
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-ivory/80 hover:text-gold-soft transition-colors duration-300"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="text-ivory/60 leading-relaxed">
                {LOCATION.shortAddress}
              </li>
            </ul>
          </div>

          {/* Column 4: Visit Us */}
          <div>
            <h3 className="eyebrow text-gold-soft mb-5">Visit Us</h3>
            <address className="not-italic font-sans text-sm text-ivory/80 leading-relaxed mb-4">
              {LOCATION.address}
            </address>
            <a
              href={LOCATION.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold-soft hover:text-gold transition-colors duration-300 font-sans text-sm font-medium"
              aria-label="Get directions to Luv Kush Vatika on Google Maps"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Get Directions
            </a>
            <p className="mt-4 text-ivory/50 font-sans text-xs">
              {LOCATION.travelContext}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="content-container">
        {/* Gold rule */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/50 hover:text-gold-soft transition-colors duration-300"
              aria-label="Follow Luv Kush Vatika on Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href={CONTACT.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/50 hover:text-gold-soft transition-colors duration-300"
              aria-label="Watch Luv Kush Vatika on YouTube"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-ivory/40 font-sans text-xs text-center">
            © {new Date().getFullYear()} {VENUE.name}. All rights reserved.
          </p>

          {/* Design credit */}
          <p className="text-ivory/30 font-sans text-[11px]">
            +91 9580840813 (WhatsApp/Call)
          </p>
        </div>
      </div>
    </footer>
  );
}
