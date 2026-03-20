export function BrPtFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 30"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brazil side - left */}
      <rect x="0" y="0" width="30" height="30" fill="#009c3b" />
      <polygon points="15,5 20,15 15,25 10,15" fill="#ffdf00" />
      <circle cx="15" cy="15" r="5" fill="#002776" />

      {/* Portugal side - right */}
      <rect x="30" y="0" width="30" height="30" fill="#006847" />
      <g transform="translate(45, 15)">
        <circle r="8" fill="#ffcc00" />
        <path
          d="M -2,-3 Q 0,-5 2,-3 L 2,3 Q 0,5 -2,3 Z"
          fill="#006847"
          transform="scale(1.5)"
        />
      </g>

      {/* Divider line */}
      <rect x="29" y="0" width="2" height="30" fill="#fff" />
    </svg>
  );
}