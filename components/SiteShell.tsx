"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { StickyMobileCTABar } from "@/components/StickyMobileCTABar";
import { EnquiryModal } from "@/components/EnquiryModal";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Header onOpenEnquiry={() => setEnquiryOpen(true)} />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFloat />
      <StickyMobileCTABar onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
}
