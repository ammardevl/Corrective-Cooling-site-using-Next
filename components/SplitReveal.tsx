"use client";

import { useEffect, useRef } from "react";
import { animate, stagger, utils } from "animejs";
import { prefersReducedMotion } from "@/lib/motion";

type Props = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "p";
  delay?: number;
  triggerOnView?: boolean;
};

/** Splits text into words, each masked in an overflow-hidden span, and
 * animates them up into place — a premium editorial headline reveal. */
export default function SplitReveal({
  text,
  className = "",
  as = "h1",
  delay = 0,
  triggerOnView = false,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const inner = Array.from(node.querySelectorAll<HTMLElement>("[data-word]"));
    if (inner.length === 0) return;

    if (prefersReducedMotion()) {
      utils.set(inner, { translateY: 0, opacity: 1 });
      return;
    }

    utils.set(inner, { translateY: "105%", opacity: 0 });

    const run = () => {
      animate(inner, {
        translateY: ["105%", "0%"],
        opacity: [0, 1],
        duration: 1000,
        delay: stagger(55, { start: delay }),
        ease: "outExpo",
      });
    };

    if (!triggerOnView) {
      const t = setTimeout(run, 30);
      return () => clearTimeout(t);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Tag = as;

  return (
    <Tag ref={ref as never} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.15em] align-bottom">
          <span data-word className="inline-block will-change-transform">
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
