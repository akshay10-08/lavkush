"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import { LOCATION, CONTACT } from "@/lib/constants";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

export function CheckAvailability() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "Wedding",
    guests: "",
    date: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `Hi Luv Kush Vatika team! I'd like to check availability:
Name: ${formData.name}
Phone: ${formData.phone}
Event: ${formData.eventType}
Guests: ${formData.guests}
Date: ${formData.date}
Message: ${formData.message}`;

    const url = `https://wa.me/${CONTACT.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="bg-cream section-padding border-t border-gold/10" id="enquire">
      <div className="content-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Contact Details */}
          <div>
            <h2 className="font-serif text-4xl text-gold-soft italic mb-2">Let's Plan Your Day</h2>
            <h3 className="font-serif text-4xl tracking-widest text-charcoal uppercase mb-8">
              Check Availability
            </h3>
            
            <div className="w-24 h-[1px] bg-gold mb-8" />
            
            <p className="text-muted leading-relaxed mb-12 max-w-md">
              Share your event details and our team will get back to you within 24 hours with availability and a customised quote.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-1">Call Us</h4>
                  <p className="text-charcoal">{CONTACT.phoneDisplay}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-1">Visit Us</h4>
                  <p className="text-charcoal leading-relaxed max-w-xs">{LOCATION.address}</p>
                  <p className="text-xs text-gold mt-1">Landmark: {LOCATION.nearbyLandmark}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-1">Hours</h4>
                  <p className="text-charcoal">Open 24×7 · By appointment for venue tours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full bg-[#EAF2FF]/50 border border-gold/20 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:bg-[#EAF2FF] transition-colors"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full bg-[#EAF2FF]/50 border border-gold/20 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:bg-[#EAF2FF] transition-colors"
              />
            </div>
            
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full bg-white border border-gold/20 rounded px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold/50 appearance-none"
            >
              <option value="Wedding">Wedding</option>
              <option value="Pre-Wedding">Pre-Wedding (Haldi, Mehndi)</option>
              <option value="Engagement">Engagement</option>
              <option value="Reception">Reception</option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Social Gathering">Social Gathering</option>
              <option value="Others">Others</option>
            </select>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                placeholder="Guest Count"
                className="w-full bg-[#EAF2FF]/50 border border-gold/20 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold/50 focus:bg-[#EAF2FF] transition-colors"
              />
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-white border border-gold/20 rounded px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold/50"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your event..."
              rows={4}
              className="w-full bg-white border border-gold/20 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold/50 resize-none"
            />

            <button
              type="submit"
              className="w-full bg-[#CBA461] hover:bg-[#B79150] text-charcoal font-bold tracking-wider uppercase text-sm py-4 rounded transition-colors mt-2"
            >
              Send Enquiry Via WhatsApp
            </button>
            <p className="text-center text-xs text-muted mt-2">
              We'll get back to you within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
