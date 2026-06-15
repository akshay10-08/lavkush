interface PlaceholderProps {
  label: string;
  ratio?: string;
  className?: string;
}

export function Placeholder({
  label,
  ratio = "16/9",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden bg-gradient-to-br from-emerald to-sage ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* Decorative leaf / flourish SVG overlay */}
      <svg
        className="absolute inset-0 m-auto h-2/3 w-2/3 opacity-[0.07]"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M100 20
             C100 20, 40 60, 40 120
             C40 155, 65 180, 100 180
             C135 180, 160 155, 160 120
             C160 60, 100 20, 100 20Z"
          stroke="currentColor"
          strokeWidth="1"
          className="text-ivory"
        />
        <path
          d="M100 40 L100 160"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-ivory"
        />
        <path
          d="M100 70 C85 55, 60 65, 55 85"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-ivory"
          fill="none"
        />
        <path
          d="M100 70 C115 55, 140 65, 145 85"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-ivory"
          fill="none"
        />
        <path
          d="M100 105 C80 90, 55 100, 50 120"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-ivory"
          fill="none"
        />
        <path
          d="M100 105 C120 90, 145 100, 150 120"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-ivory"
          fill="none"
        />
        <path
          d="M100 135 C88 125, 70 130, 65 145"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-ivory"
          fill="none"
        />
        <path
          d="M100 135 C112 125, 130 130, 135 145"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-ivory"
          fill="none"
        />
      </svg>

      {/* Centered bracket label */}
      <span className="absolute inset-0 flex items-center justify-center px-4 text-center font-serif text-sm tracking-wide text-ivory/60 sm:text-base">
        [{label}]
      </span>

      {/* Replace-me corner tag */}
      <span className="absolute bottom-2 right-2 rounded bg-ivory/10 px-2 py-0.5 font-sans text-[10px] uppercase tracking-widest text-ivory/40 backdrop-blur-sm">
        replace&nbsp;me
      </span>
    </div>
  );
}
