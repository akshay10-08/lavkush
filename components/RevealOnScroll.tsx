"use client";

import { type ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  revealVariants,
  revealFromLeft,
  revealFromRight,
} from "@/lib/motion";

const directionMap = {
  up: revealVariants,
  left: revealFromLeft,
  right: revealFromRight,
} as const;

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealOnScrollProps) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants = directionMap[direction];

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
