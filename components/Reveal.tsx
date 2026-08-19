"use client";

import { type ReactNode } from "react";
import { useReveal } from "@/lib/motion";

type Tag = "div" | "section" | "article" | "ul" | "header" | "footer";

type RevealProps = {
  children: ReactNode;
  as?: Tag;
  className?: string;
  staggerMs?: number;
  y?: number;
  delay?: number;
  selector?: string;
};

/**
 * Wraps a section and staggers the fade/rise-in of any descendant carrying
 * [data-reveal] when the wrapper scrolls into view.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  staggerMs,
  y,
  delay,
  selector,
}: RevealProps) {
  const ref = useReveal<HTMLDivElement>({ staggerMs, y, delay, selector });
  const Component = Tag as "div";
  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
