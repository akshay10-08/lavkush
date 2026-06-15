"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { Button } from "@/components/Button";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

// ── Zod Schema ──────────────────────────────────────────────────────────────

const EVENT_TYPES = [
  "Wedding",
  "Reception",
  "Engagement",
  "Sangeet/Mehndi/Haldi",
  "Birthday",
  "Corporate Event",
  "Other",
] as const;

const GUEST_COUNTS = [
  "60-150 (Intimate)",
  "150-450 (Signature)",
  "450-1000+ (Grand)",
] as const;

const SPACES = [
  "Any",
  "Swimming Pool Lawn",
  "Lawn 1",
  "Lawn 2",
  "Lawn 3",
  "Lawn 4",
  "Grand Banquet Hall",
  "Pre-function Lounge",
] as const;

const enquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .regex(
      /^(\+91[\s-]?)?[6-9]\d{9}$/,
      "Please enter a valid 10-digit Indian mobile number"
    ),
  email: z.union([z.string().email("Please enter a valid email"), z.literal("")]).optional(),
  eventType: z.enum(EVENT_TYPES, {
    message: "Please select an event type",
  }),
  preferredDate: z.string().optional(),
  guestCount: z.enum(GUEST_COUNTS, {
    message: "Please select guest count",
  }),
  spaceOfInterest: z.enum(SPACES, {
    message: "Please select a space",
  }),
  message: z.string().optional(),
  honeypot: z.string().max(0),
  source: z.string(),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

// ── Component ───────────────────────────────────────────────────────────────

interface EnquiryFormProps {
  source?: string;
  defaultSpace?: string;
  defaultEventType?: string;
  onSuccess?: () => void;
}

export function EnquiryForm({
  source = "website",
  defaultSpace,
  defaultEventType,
  onSuccess,
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      eventType: (defaultEventType as EnquiryFormData["eventType"]) || undefined,
      preferredDate: "",
      guestCount: undefined,
      spaceOfInterest: (defaultSpace as EnquiryFormData["spaceOfInterest"]) || "Any",
      message: "",
      honeypot: "",
      source,
    },
  });

  const onSubmit = async (data: EnquiryFormData) => {
    // Honeypot check — if filled, silently succeed
    if (data.honeypot) {
      setSubmitted(true);
      return;
    }

    setSubmitError(null);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setSubmitted(true);
      onSuccess?.();
    } catch (err) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  };

  // ── Success State ───────────────────────────────────────────────────────

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 px-4">
        {/* Checkmark */}
        <div className="w-16 h-16 rounded-full bg-emerald/10 flex items-center justify-center mb-5">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-emerald"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl text-charcoal mb-2">Thank you!</h3>
        <p className="text-muted font-sans text-sm leading-relaxed max-w-sm">
          We&apos;ve received your enquiry and will respond within 24 hours.
        </p>
        <a
          href={WHATSAPP_DEFAULT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-gold hover:text-gold-hover font-sans text-sm font-medium transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg>
          Or chat now on WhatsApp
        </a>
      </div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────────

  const inputClasses =
    "w-full bg-ivory text-charcoal font-sans text-sm rounded-lg px-4 py-3 border border-sage/30 placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors duration-300";
  const selectClasses = `${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="%236B6A60" d="M2 4l4 4 4-4z"/></svg>')] bg-no-repeat bg-[right_1rem_center]`;
  const labelClasses = "block font-sans text-xs font-medium text-charcoal mb-1.5";
  const errorClasses = "mt-1 text-xs font-sans text-[#B5543E]";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      {/* Honeypot — hidden from users */}
      <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="honeypot">Leave empty</label>
        <input
          {...register("honeypot")}
          id="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Hidden source field */}
      <input {...register("source")} type="hidden" />

      {/* Name */}
      <div>
        <label htmlFor="enquiry-name" className={labelClasses}>
          Your Name <span className="text-[#B5543E]">*</span>
        </label>
        <input
          {...register("name")}
          id="enquiry-name"
          type="text"
          className={inputClasses}
          placeholder="e.g. Priya Sharma"
          aria-label="Your full name"
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className={errorClasses} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="enquiry-phone" className={labelClasses}>
          Phone Number <span className="text-[#B5543E]">*</span>
        </label>
        <input
          {...register("phone")}
          id="enquiry-phone"
          type="tel"
          className={inputClasses}
          placeholder="+91 98765 43210"
          aria-label="Phone number (10-digit Indian mobile)"
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className={errorClasses} role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Email (optional) */}
      <div>
        <label htmlFor="enquiry-email" className={labelClasses}>
          Email <span className="text-muted-light">(optional)</span>
        </label>
        <input
          {...register("email")}
          id="enquiry-email"
          type="email"
          className={inputClasses}
          placeholder="priya@example.com"
          aria-label="Email address (optional)"
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className={errorClasses} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Event Type + Guest Count — 2 columns on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Event Type */}
        <div>
          <label htmlFor="enquiry-event-type" className={labelClasses}>
            Event Type <span className="text-[#B5543E]">*</span>
          </label>
          <select
            {...register("eventType")}
            id="enquiry-event-type"
            className={selectClasses}
            aria-label="Type of event"
            aria-invalid={!!errors.eventType}
          >
            <option value="">Select event type</option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.eventType && (
            <p className={errorClasses} role="alert">
              {errors.eventType.message}
            </p>
          )}
        </div>

        {/* Guest Count */}
        <div>
          <label htmlFor="enquiry-guests" className={labelClasses}>
            Expected Guests <span className="text-[#B5543E]">*</span>
          </label>
          <select
            {...register("guestCount")}
            id="enquiry-guests"
            className={selectClasses}
            aria-label="Expected guest count"
            aria-invalid={!!errors.guestCount}
          >
            <option value="">Select guest count</option>
            {GUEST_COUNTS.map((count) => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
          {errors.guestCount && (
            <p className={errorClasses} role="alert">
              {errors.guestCount.message}
            </p>
          )}
        </div>
      </div>

      {/* Preferred Date + Space — 2 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Preferred Date */}
        <div>
          <label htmlFor="enquiry-date" className={labelClasses}>
            Preferred Date <span className="text-muted-light">(optional)</span>
          </label>
          <input
            {...register("preferredDate")}
            id="enquiry-date"
            type="date"
            className={inputClasses}
            aria-label="Preferred event date"
          />
        </div>

        {/* Space of Interest */}
        <div>
          <label htmlFor="enquiry-space" className={labelClasses}>
            Space of Interest
          </label>
          <select
            {...register("spaceOfInterest")}
            id="enquiry-space"
            className={selectClasses}
            aria-label="Preferred venue space"
            aria-invalid={!!errors.spaceOfInterest}
          >
            {SPACES.map((space) => (
              <option key={space} value={space}>
                {space}
              </option>
            ))}
          </select>
          {errors.spaceOfInterest && (
            <p className={errorClasses} role="alert">
              {errors.spaceOfInterest.message}
            </p>
          )}
        </div>
      </div>

      {/* Message (optional) */}
      <div>
        <label htmlFor="enquiry-message" className={labelClasses}>
          Message <span className="text-muted-light">(optional)</span>
        </label>
        <textarea
          {...register("message")}
          id="enquiry-message"
          rows={3}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your celebration — any special requests, themes, or questions…"
          aria-label="Additional message or special requests"
        />
      </div>

      {/* Submit error */}
      {submitError && (
        <p className="text-sm text-[#B5543E] font-sans text-center" role="alert">
          {submitError}
        </p>
      )}

      {/* Submit */}
      <Button
        variant="gold"
        type="submit"
        disabled={isSubmitting}
        className="w-full"
        aria-label="Send enquiry"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg
              className="animate-spin h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending…
          </span>
        ) : (
          "Send Enquiry"
        )}
      </Button>
    </form>
  );
}
