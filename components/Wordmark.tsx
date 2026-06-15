import { VENUE } from "@/lib/constants";

const sizeClasses = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-5xl",
  xl: "text-6xl md:text-[5.5rem] lg:text-[7rem] font-bold leading-tight",
} as const;

interface WordmarkProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Wordmark({ className = "", size = "md" }: WordmarkProps) {
  return (
    <span
      className={`font-serif tracking-wide ${sizeClasses[size]} ${className}`}
    >
      {/* [Logo / Wordmark Image] — swap this with next/image when brand logo is provided */}
      {/* [लव कुश वाटिका — optional Devanagari wordmark] */}
      {VENUE.name}
    </span>
  );
}
