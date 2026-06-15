import type { ReactNode } from "react";
import { Eyebrow } from "@/components/Eyebrow";
import { Button } from "@/components/Button";
import Image from "next/image";
import { RevealOnScroll } from "@/components/RevealOnScroll";

interface TeaserSplitProps {
  imageSide?: "left" | "right";
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  children?: ReactNode;
}

export function TeaserSplit({
  imageSide = "left",
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  ctaText,
  ctaHref,
  children,
}: TeaserSplitProps) {
  const imageBlock = (
    <RevealOnScroll direction={imageSide === "left" ? "left" : "right"}>
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    </RevealOnScroll>
  );

  const textBlock = (
    <RevealOnScroll
      direction={imageSide === "left" ? "right" : "left"}
      className="flex flex-col justify-center"
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 font-serif text-3xl text-charcoal md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-relaxed text-muted">{description}</p>
      {children && <div className="mt-4">{children}</div>}
      <div className="mt-6">
        <Button variant="gold" href={ctaHref}>
          {ctaText}
        </Button>
      </div>
    </RevealOnScroll>
  );

  return (
    <section className="content-container section-padding">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {imageSide === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}
