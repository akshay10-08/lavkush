"use client";

import { useRef, useState, useCallback, useEffect, type ReactNode, type MouseEvent, type ButtonHTMLAttributes } from "react";
import Link from "next/link";

const variantClasses = {
  gold: "bg-gold text-ivory hover:bg-gold-hover",
  ghost: "border border-gold text-gold hover:bg-gold hover:text-ivory",
  emerald: "bg-emerald text-ivory hover:bg-emerald-700",
} as const;

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

interface ButtonProps {
  variant?: keyof typeof variantClasses;
  size?: "sm" | "md" | "lg";
  href?: string;
  magnetic?: boolean;
  children: ReactNode;
  className?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
}

export function Button({
  variant = "gold",
  size = "md",
  href,
  magnetic = false,
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!magnetic || reducedMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      setOffset({
        x: Math.max(-6, Math.min(6, dx * 6)),
        y: Math.max(-6, Math.min(6, dy * 6)),
      });
    },
    [magnetic, reducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  const sharedClasses = `inline-flex items-center justify-center rounded font-sans font-medium tracking-wide transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] disabled:opacity-50 disabled:pointer-events-none ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const magneticStyle =
    magnetic && !reducedMotion
      ? {
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }
      : undefined;

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={sharedClasses}
        style={magneticStyle}
        onMouseMove={handleMouseMove as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      className={sharedClasses}
      style={magneticStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
