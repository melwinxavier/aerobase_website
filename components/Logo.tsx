export function LogoMark({ className = "h-6 w-6" }: { className?: string }) {
  // Bequant mark: three ascending forward-slash strokes
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden>
      <path d="M11 25 L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M17 25 L26 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M5 25 L14 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-6 w-6 text-fg" />
      <span className="text-[19px] font-medium tracking-tight text-fg">Bequant</span>
    </span>
  );
}
