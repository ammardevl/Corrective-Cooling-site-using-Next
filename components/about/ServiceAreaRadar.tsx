"use client";

import { useEffect, useRef } from "react";
import { animate, stagger, utils } from "animejs";
import { MapPin } from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";
import { business } from "@/data/business";

export default function ServiceAreaRadar() {
  const ringsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const node = ringsRef.current;
    if (!node || prefersReducedMotion()) return;
    const rings = Array.from(node.querySelectorAll("circle"));
    utils.set(rings, { opacity: 0.5, scale: 0.6 });
    animate(rings, {
      scale: [0.6, 1.35],
      opacity: [0.55, 0],
      duration: 2800,
      delay: stagger(700),
      loop: true,
      ease: "outSine",
    });
  }, []);

  return (
    <div className="relative flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-full border border-border-soft bg-ink-soft">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <g ref={ringsRef} style={{ transformOrigin: "100px 100px" }}>
          <circle cx="100" cy="100" r="60" fill="none" stroke="var(--color-frost)" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="var(--color-ember)" strokeWidth="1" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="var(--color-frost)" strokeWidth="1" />
        </g>
        <circle cx="100" cy="100" r="90" fill="none" stroke="var(--color-border-soft)" strokeWidth="1" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="var(--color-border-soft)" strokeWidth="1" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="var(--color-border-soft)" strokeWidth="1" />
      </svg>
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ember text-ink">
          <MapPin size={18} strokeWidth={2} />
        </span>
        <span className="font-display text-sm font-medium text-paper">Brandon, MS</span>
        <span className="max-w-[10rem] text-xs text-muted">{business.serviceArea}</span>
      </div>
    </div>
  );
}
