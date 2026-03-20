export function UsUkFlag({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 30"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* US side - left */}
      <rect x="0" y="0" width="30" height="30" fill="#b22234" />
      {/* US stripes */}
      <rect x="0" y="2" width="30" height="2" fill="#fff" />
      <rect x="0" y="6" width="30" height="2" fill="#fff" />
      <rect x="0" y="10" width="30" height="2" fill="#fff" />
      <rect x="0" y="14" width="30" height="2" fill="#fff" />
      <rect x="0" y="18" width="30" height="2" fill="#fff" />
      <rect x="0" y="22" width="30" height="2" fill="#fff" />
      <rect x="0" y="26" width="30" height="2" fill="#fff" />
      {/* US blue canton */}
      <rect x="0" y="0" width="12" height="16" fill="#3c3b6e" />

      {/* UK side - right */}
      <rect x="30" y="0" width="30" height="30" fill="#012169" />
      {/* UK Crosses */}
      <rect x="30" y="13" width="30" height="4" fill="#fff" />
      <rect x="43" y="0" width="4" height="30" fill="#fff" />
      <rect x="30" y="14" width="30" height="2" fill="#c8102e" />
      <rect x="44" y="0" width="2" height="30" fill="#c8102e" />
      {/* UK diagonals */}
      <path d="M 30,0 L 60,30 M 60,0 L 30,30" stroke="#fff" strokeWidth="6" />
      <path d="M 30,0 L 60,30 M 60,0 L 30,30" stroke="#c8102e" strokeWidth="4" />

      {/* Divider line */}
      <rect x="29" y="0" width="2" height="30" fill="#fff" />
    </svg>
  );
}