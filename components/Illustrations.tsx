/**
 * Hand-built line-art illustrations used in place of stock photography.
 * Kept as plain SVG (no hooks) so they can render from server or client
 * components; motion is layered on separately via data-draw / data-reveal.
 */

export function ThermalDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wave-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--color-ember)" />
          <stop offset="45%" stopColor="var(--color-ember-soft)" />
          <stop offset="60%" stopColor="var(--color-paper-dim)" />
          <stop offset="100%" stopColor="var(--color-frost)" />
        </linearGradient>
      </defs>
      <path
        d="M0,60 C150,110 300,10 450,50 C600,90 750,20 900,55 C1000,78 1100,40 1200,60"
        fill="none"
        stroke="url(#wave-grad)"
        strokeWidth="1.5"
        opacity="0.55"
      />
    </svg>
  );
}

/** A stylized split-system condenser unit, front three-quarter view. */
export function CondenserIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 260" className={className} aria-hidden="true">
      <g fill="none" stroke="var(--color-paper-dim)" strokeWidth="1.4">
        <rect x="40" y="70" width="200" height="150" rx="10" />
        <rect x="40" y="70" width="200" height="150" rx="10" stroke="var(--color-frost)" strokeOpacity="0.4" />
        {/* fan grille */}
        <circle cx="140" cy="150" r="62" />
        <circle cx="140" cy="150" r="46" strokeOpacity="0.6" />
        <circle cx="140" cy="150" r="30" strokeOpacity="0.35" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const x1 = 140 + Math.cos(angle) * 30;
          const y1 = 150 + Math.sin(angle) * 30;
          const x2 = 140 + Math.cos(angle) * 62;
          const y2 = 150 + Math.sin(angle) * 62;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} strokeOpacity="0.3" />;
        })}
        {/* top vents */}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={i} x1={60 + i * 30} y1="82" x2={72 + i * 30} y2="82" strokeOpacity="0.5" />
        ))}
        {/* pipes */}
        <path d="M240 190 C 270 190 270 160 296 160" strokeOpacity="0.8" />
        <path d="M240 200 C 280 200 280 175 304 175" stroke="var(--color-ember)" strokeOpacity="0.55" />
        {/* legs */}
        <line x1="60" y1="220" x2="60" y2="234" />
        <line x1="220" y1="220" x2="220" y2="234" />
      </g>
    </svg>
  );
}

/** House cross-section used in the interactive airflow diagram. */
export function HouseOutline({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 360" className={className} aria-hidden="true">
      <g fill="none" stroke="var(--color-paper-dim)" strokeWidth="1.3" strokeOpacity="0.5">
        {/* roof */}
        <path d="M40 150 L280 40 L520 150" />
        {/* walls */}
        <rect x="70" y="150" width="420" height="180" />
        {/* floor divider */}
        <line x1="70" y1="240" x2="490" y2="240" strokeOpacity="0.3" />
        {/* interior walls */}
        <line x1="220" y1="150" x2="220" y2="240" strokeOpacity="0.3" />
        <line x1="360" y1="150" x2="360" y2="240" strokeOpacity="0.3" />
        <line x1="290" y1="240" x2="290" y2="330" strokeOpacity="0.3" />
        {/* chimney */}
        <line x1="420" y1="60" x2="420" y2="110" />
        <line x1="450" y1="60" x2="450" y2="95" />
        <line x1="420" y1="60" x2="450" y2="60" />
      </g>
    </svg>
  );
}

/** Small icon-style flame/snowflake duotone mark used as a brand glyph. */
export function DuotoneMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 4c4 6-2 8-2 14 0 4 3 6 3 6s7-3 7-11c4 4 6 10 6 15 0 8-6.5 15-14 15S10 36 10 28c0-9 7-13 7-20 0-2-1-3-1-3s5-2 8-1Z"
        fill="none"
        stroke="var(--color-ember)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
