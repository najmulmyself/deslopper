// The mark is the AI sparkle, struck out with a red pencil.
// A paper-coloured halo under the slash keeps the two shapes legible at 16px.

export function LogoMark({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2.5c.55 5.05 4.45 8.95 9.5 9.5-5.05.55-8.95 4.45-9.5 9.5-.55-5.05-4.45-8.95-9.5-9.5 5.05-.55 8.95-4.45 9.5-9.5Z"
        fill="currentColor"
      />
      <path d="M4 20 20 4" stroke="var(--color-paper)" strokeWidth="4.5" strokeLinecap="round" />
      <path
        className="logo-slash"
        d="M4 20 20 4"
        stroke="var(--color-pencil)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#top" className="logo flex items-center gap-2 text-ink" aria-label="Deslopper, home">
      <LogoMark />
      <span className="text-[18px] leading-none font-medium tracking-[-0.01em]">deslopper</span>
    </a>
  );
}
