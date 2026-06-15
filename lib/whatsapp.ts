// =============================================================================
// WhatsApp Deep Link Helper
// Pre-fills a qualifying message so the owner gets structured leads, not "hi"
// =============================================================================

import { CONTACT } from "./constants";

interface WhatsAppPrefill {
  eventType?: string;
  space?: string;
  date?: string;
  guestCount?: string;
}

/**
 * Generates a WhatsApp deep link with a pre-filled qualifying message.
 * Use on space/occasion pages to pre-fill the relevant context.
 */
export function whatsappLink(prefill?: WhatsAppPrefill): string {
  const lines = [
    "Hello Luv Kush Vatika, I'd like to enquire about an event.",
    `Event Type: ${prefill?.eventType || ""}`,
    `Date: ${prefill?.date || ""}`,
    `Guest Count: ${prefill?.guestCount || ""}`,
    `Space (Lawn/Ballroom): ${prefill?.space || ""}`,
  ];

  const message = encodeURIComponent(lines.join("\n"));
  return `${CONTACT.whatsappBase}?text=${message}`;
}

/**
 * Default WhatsApp link with empty fields for the visitor to fill in.
 */
export const WHATSAPP_DEFAULT_LINK = whatsappLink();
