interface OrnamentDividerProps {
  className?: string;
}

export function OrnamentDivider({ className = "" }: OrnamentDividerProps) {
  return (
    <div className={`ornament-divider ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Botanical leaf / diamond motif */}
        <path
          d="M12 2 C12 2, 6 8, 6 13 C6 17, 9 20, 12 20 C15 20, 18 17, 18 13 C18 8, 12 2, 12 2Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M12 6 L12 18"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <path
          d="M12 10 C10 8, 8 9.5, 7.5 11.5"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
        />
        <path
          d="M12 10 C14 8, 16 9.5, 16.5 11.5"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
        />
        <path
          d="M12 14 C10.5 12.5, 8.5 13.5, 8 15"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
        />
        <path
          d="M12 14 C13.5 12.5, 15.5 13.5, 16 15"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
        />
      </svg>
    </div>
  );
}
