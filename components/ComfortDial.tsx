"use client";

import { useEffect, useRef } from "react";
import { animate, utils } from "animejs";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * The site's signature element: a gauge that reads "cool" on one end and
 * "heat" on the other, with a needle that responds to the pointer. It's a
 * literal expression of what an HVAC company actually does — hold the two
 * ends of the temperature spectrum in balance.
 */
export default function ComfortDial() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const needleRef = useRef<SVGGElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const needle = needleRef.current;
    if (!wrap || !needle) return;

    const reduced = prefersReducedMotion();

    if (reduced) {
      utils.set(needle, { rotate: 0 });
    } else {
      // Entrance: sweep from cool to hot and settle in balance.
      animate(needle, {
        rotate: [
          { to: -78, duration: 0 },
          { to: 78, duration: 900, ease: "inOutQuad", delay: 550 },
          { to: 0, duration: 700, ease: "outElastic(1, .6)" },
        ],
      });
    }

    if (reduced) return;

    const MIN = -78;
    const MAX = 78;

    const handleMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
      const angle = MIN + x * (MAX - MIN);
      animate(needle, { rotate: angle, duration: 500, ease: "out(3)" });
      if (readoutRef.current) {
        const label = x < 0.4 ? "COOLING" : x > 0.6 ? "HEATING" : "BALANCED";
        readoutRef.current.textContent = label;
      }
    };

    const handleLeave = () => {
      animate(needle, { rotate: 0, duration: 900, ease: "outElastic(1, .6)" });
      if (readoutRef.current) readoutRef.current.textContent = "BALANCED";
    };

    wrap.addEventListener("pointermove", handleMove);
    wrap.addEventListener("pointerleave", handleLeave);
    return () => {
      wrap.removeEventListener("pointermove", handleMove);
      wrap.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-full max-w-[420px] touch-none select-none"
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 250" className="w-full overflow-visible">
        <defs>
          <linearGradient id="dial-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-frost)" />
            <stop offset="50%" stopColor="var(--color-paper-dim)" />
            <stop offset="100%" stopColor="var(--color-ember)" />
          </linearGradient>
          <filter id="dial-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer arc track */}
        <path
          d="M 40 220 A 160 160 0 0 1 360 220"
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="2"
        />
        {/* Gradient value arc */}
        <path
          d="M 40 220 A 160 160 0 0 1 360 220"
          fill="none"
          stroke="url(#dial-gradient)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Tick marks */}
        {Array.from({ length: 17 }).map((_, i) => {
          const t = i / 16;
          const angle = Math.PI * (1 - t);
          const rOuter = 160;
          const rInner = t === 0 || t === 1 || i === 8 ? 142 : 150;
          const cx = 200;
          const cy = 220;
          const x1 = cx + Math.cos(angle) * rOuter;
          const y1 = cy - Math.sin(angle) * rOuter;
          const x2 = cx + Math.cos(angle) * rInner;
          const y2 = cy - Math.sin(angle) * rInner;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={i === 8 ? "var(--color-paper-dim)" : "var(--color-border-soft)"}
              strokeWidth={i === 8 ? 2 : 1}
            />
          );
        })}

        {/* Needle */}
        <g ref={needleRef} style={{ transformOrigin: "200px 220px" }}>
          <line
            x1="200"
            y1="220"
            x2="200"
            y2="76"
            stroke="var(--color-paper)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#dial-glow)"
          />
          <circle cx="200" cy="220" r="9" fill="var(--color-ink)" stroke="var(--color-paper)" strokeWidth="2" />
        </g>

        <text x="52" y="245" fontSize="12" letterSpacing="2" fill="var(--color-frost-soft)" fontFamily="var(--font-body)">
          COOL
        </text>
        <text x="316" y="245" fontSize="12" letterSpacing="2" fill="var(--color-ember-soft)" fontFamily="var(--font-body)">
          HEAT
        </text>
      </svg>

      <div className="absolute inset-x-0 bottom-1 flex flex-col items-center gap-1">
        <span
          ref={readoutRef}
          className="font-display text-xs tracking-[0.3em] text-paper-dim"
        >
          BALANCED
        </span>
      </div>
    </div>
  );
}
