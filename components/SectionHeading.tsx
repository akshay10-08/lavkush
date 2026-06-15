import { Eyebrow } from "@/components/Eyebrow";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <RevealOnScroll className={`${alignment} mb-12`}>
      <Eyebrow className={dark ? "text-gold-soft" : ""}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3 font-serif text-3xl md:text-5xl ${
          dark ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-relaxed ${
            dark ? "text-ivory/70" : "text-muted"
          } ${align === "left" ? "mx-0" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </RevealOnScroll>
  );
}
