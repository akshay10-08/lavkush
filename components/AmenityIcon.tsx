interface AmenityIconProps {
  icon: string;
}

export function AmenityIcon({ icon }: AmenityIconProps) {
  const svgProps = {
    className: "h-8 w-8 text-gold",
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  switch (icon) {
    case "lawn":
      return (
        <svg {...svgProps}>
          <path d="M4 28h24" />
          <path d="M16 28V14" />
          <path d="M16 14c-4-6-10-4-10 0s6 6 10 0z" />
          <path d="M16 14c4-6 10-4 10 0s-6 6-10 0z" />
          <path d="M16 20c-3-4-7-3-7 0s4 4 7 0z" />
          <path d="M16 20c3-4 7-3 7 0s-4 4-7 0z" />
        </svg>
      );

    case "banquet":
      return (
        <svg {...svgProps}>
          <rect x="4" y="12" width="24" height="14" rx="2" />
          <path d="M4 18h24" />
          <path d="M12 6v6M20 6v6" />
          <path d="M8 12V8a4 4 0 018 0v4" />
          <path d="M16 12V8a4 4 0 018 0v4" />
        </svg>
      );

    case "pool":
      return (
        <svg {...svgProps}>
          <path d="M4 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
          <path d="M4 25c2-2 4-2 6 0s4 2 6 0 4-2 6 0 4 2 6 0" />
          <circle cx="16" cy="10" r="3" />
          <path d="M16 13v4" />
          <path d="M12 15h8" />
        </svg>
      );

    case "lounge":
      return (
        <svg {...svgProps}>
          <path d="M6 20h20" />
          <path d="M8 20V14a2 2 0 012-2h12a2 2 0 012 2v6" />
          <path d="M6 20c-2 0-2 2-2 3h24c0-1 0-3-2-3" />
          <path d="M10 23v3M22 23v3" />
        </svg>
      );

    case "bridal":
      return (
        <svg {...svgProps}>
          <path d="M16 4l2 4h-4l2-4z" />
          <path d="M10 8h12" />
          <path d="M8 12c0 8 4 14 8 16 4-2 8-8 8-16" />
          <path d="M12 16c1 2 2.5 3 4 3s3-1 4-3" />
        </svg>
      );

    case "catering":
      return (
        <svg {...svgProps}>
          <ellipse cx="16" cy="22" rx="10" ry="3" />
          <path d="M6 22v-2a10 6 0 0120 0v2" />
          <path d="M12 8v4M16 6v6M20 8v4" />
          <path d="M14 8a2 2 0 014 0" />
        </svg>
      );

    case "decor":
      return (
        <svg {...svgProps}>
          <circle cx="16" cy="14" r="6" />
          <path d="M16 8V4M16 20v4" />
          <path d="M10 14H6M22 14h4" />
          <path d="M11.8 9.8L8.5 6.5M20.2 9.8l3.3-3.3" />
          <path d="M11.8 18.2l-3.3 3.3M20.2 18.2l3.3 3.3" />
        </svg>
      );

    case "stage":
      return (
        <svg {...svgProps}>
          <rect x="4" y="18" width="24" height="4" rx="1" />
          <path d="M8 18v-6a2 2 0 012-2h12a2 2 0 012 2v6" />
          <path d="M14 14h4" />
          <path d="M10 22v4M22 22v4" />
          <path d="M13 6l3-2 3 2" />
        </svg>
      );

    case "sound":
      return (
        <svg {...svgProps}>
          <path d="M8 12v8l6-3v-2l-6-3z" />
          <path d="M14 13v6" />
          <path d="M18 10a6 6 0 010 12" />
          <path d="M21 7a10 10 0 010 18" />
        </svg>
      );

    case "power":
      return (
        <svg {...svgProps}>
          <path d="M18 4l-8 12h6l-2 12 8-12h-6l2-12z" />
        </svg>
      );

    case "valet":
      return (
        <svg {...svgProps}>
          <circle cx="16" cy="8" r="4" />
          <path d="M8 28c0-4 3.6-8 8-8s8 4 8 8" />
          <path d="M22 18l3 2M10 18l-3 2" />
        </svg>
      );

    case "rooms":
      return (
        <svg {...svgProps}>
          <rect x="4" y="6" width="24" height="18" rx="2" />
          <path d="M4 14h24" />
          <path d="M16 6v8" />
          <rect x="13" y="18" width="6" height="6" rx="1" />
        </svg>
      );

    case "accessible":
      return (
        <svg {...svgProps}>
          <circle cx="16" cy="7" r="3" />
          <path d="M16 10v6" />
          <path d="M12 14h8" />
          <circle cx="12" cy="24" r="4" />
          <path d="M16 16l4 8h4" />
        </svg>
      );

    case "payment":
      return (
        <svg {...svgProps}>
          <rect x="4" y="8" width="24" height="16" rx="2" />
          <path d="M4 14h24" />
          <path d="M8 20h4M18 20h6" />
        </svg>
      );

    default:
      return (
        <svg {...svgProps}>
          <circle cx="16" cy="16" r="10" />
          <path d="M16 12v4l3 3" />
        </svg>
      );
  }
}
