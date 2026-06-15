"use client";

import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-40 hidden md:block group">
      {/* Tooltip removed, text is inside the pill now */}

      {/* Premium WhatsApp Pill */}
      <a
        href={WHATSAPP_DEFAULT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#14342B]/70 backdrop-blur-md border border-[#C29A4E]/40 text-ivory shadow-[0_8px_32px_rgba(20,52,43,0.18)] hover:bg-[#C29A4E] hover:text-[#14342B] hover:border-[#C29A4E] hover:scale-[1.03] transition-all duration-300 ease-out group/pill"
        aria-label="Plan your event via WhatsApp"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[#C29A4E] transition-colors duration-300 group-hover/pill:text-[#14342B]"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
        </svg>
        <span className="text-xs font-bold tracking-[0.1em] uppercase">Book Now</span>
      </a>
    </div>
  );
}
