"use client";

import { useEffect, useRef, type RefObject } from "react";
import { animate, stagger, utils, onScroll, type Timer } from "animejs";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

type RevealOptions = {
  /** CSS selector, scoped to the container ref, targeting elements to reveal */
  selector?: string;
  delay?: number;
  staggerMs?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
};

/**
 * Reveals every [data-reveal] element (or a custom selector) inside the
 * returned ref with a staggered fade + rise, triggered the first time the
 * container enters the viewport. Falls back to an instant, fully-visible
 * state when the user prefers reduced motion.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const {
    selector = "[data-reveal]",
    delay = 0,
    staggerMs = 90,
    y = 28,
    duration = 900,
    once = true,
    threshold = 0.2,
  } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const targets = node.matches(selector)
      ? [node]
      : Array.from(node.querySelectorAll<HTMLElement>(selector));
    if (targets.length === 0) return;

    if (prefersReducedMotion()) {
      utils.set(targets, { opacity: 1, translateY: 0, translateX: 0, scale: 1 });
      return;
    }

    utils.set(targets, { opacity: 0, translateY: y });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(targets, {
              opacity: [0, 1],
              translateY: [y, 0],
              duration,
              delay: stagger(staggerMs, { start: delay }),
              ease: "outExpo",
            });
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

/** Magnetic pull effect for buttons / interactive targets. */
export function useMagnetic<T extends HTMLElement = HTMLButtonElement>(
  strength = 0.35
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    const handleMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const relX = e.clientX - rect.left - rect.width / 2;
      const relY = e.clientY - rect.top - rect.height / 2;
      animate(node, {
        translateX: relX * strength,
        translateY: relY * strength,
        duration: 600,
        ease: "out(3)",
      });
    };

    const handleLeave = () => {
      animate(node, {
        translateX: 0,
        translateY: 0,
        duration: 700,
        ease: "outElastic(1, .5)",
      });
    };

    node.addEventListener("mousemove", handleMove);
    node.addEventListener("mouseleave", handleLeave);
    return () => {
      node.removeEventListener("mousemove", handleMove);
      node.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength]);

  return ref;
}

/** Animates a numeric counter up to `target` once it enters the viewport. */
export function useCounter<T extends HTMLElement = HTMLSpanElement>(
  target: number,
  options: { duration?: number; decimals?: number; suffix?: string; prefix?: string } = {}
): RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const { duration = 1600, decimals = 0, suffix = "", prefix = "" } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      node.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      return;
    }

    const counter = { value: 0 };
    let played = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !played) {
            played = true;
            animate(counter, {
              value: target,
              duration,
              ease: "outExpo",
              onUpdate: () => {
                node.textContent = `${prefix}${counter.value.toFixed(decimals)}${suffix}`;
              },
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}

/** Simple scroll-linked parallax translate using anime's scroll observer. */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  distance = 60,
  axis: "Y" | "X" = "Y"
): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion()) return;

    let anim: Timer | undefined;
    try {
      anim = animate(node, {
        [`translate${axis}`]: [-distance / 2, distance / 2],
        ease: "linear",
        autoplay: onScroll({
          target: node,
          enter: "bottom top",
          leave: "top bottom",
          sync: 0.6,
        }),
      });
    } catch {
      // no-op if scroll observer setup fails (e.g. during fast HMR)
    }

    return () => {
      anim?.revert?.();
    };
  }, [distance, axis]);

  return ref;
}
