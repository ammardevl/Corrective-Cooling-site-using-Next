"use client";

import { useEffect, useRef } from "react";
import { animate, utils } from "animejs";
import { prefersReducedMotion } from "@/lib/motion";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || prefersReducedMotion()) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      utils.set(dot, { translateX: e.clientX, translateY: e.clientY });
      animate(ring, {
        translateX: e.clientX,
        translateY: e.clientY,
        duration: 550,
        ease: "out(3)",
      });
    };

    const grow = () => animate(ring, { scale: 1.9, duration: 300, ease: "out(3)" });
    const shrink = () => animate(ring, { scale: 1, duration: 300, ease: "out(3)" });

    window.addEventListener("mousemove", move);

    const interactive = () =>
      Array.from(document.querySelectorAll("a, button, [data-cursor-hover]"));

    let targets = interactive();
    targets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    // Re-scan periodically for elements mounted after initial paint
    const rescan = setInterval(() => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
      targets = interactive();
      targets.forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    }, 2500);

    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(rescan);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper opacity-0 [.has-custom-cursor_&]:opacity-100"
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-frost-soft/70 opacity-0 [.has-custom-cursor_&]:opacity-100"
      />
    </div>
  );
}
