"use client";

import Link from "next/link";
import { type ReactNode } from "react";
import { useMagnetic } from "@/lib/motion";

type Variant = "ember" | "frost" | "ghost";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
};

const variants: Record<Variant, string> = {
  ember:
    "bg-ember text-ink hover:bg-ember-soft shadow-[0_0_0_1px_rgba(255,90,43,0.4)]",
  frost:
    "bg-transparent text-paper border border-border hover:border-frost hover:text-frost-soft",
  ghost:
    "bg-transparent text-paper-dim hover:text-paper",
};

export default function MagneticButton({
  href,
  children,
  variant = "ember",
  className = "",
  external = false,
  icon,
}: Props) {
  const ref = useMagnetic<HTMLAnchorElement>(0.3);

  const content = (
    <span className="relative z-10 inline-flex items-center gap-2">
      {children}
      {icon}
    </span>
  );

  const classes = `group relative inline-flex items-center justify-center rounded-full px-7 py-3.5 font-display text-sm font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <Link ref={ref} href={href} className={classes}>
      {content}
    </Link>
  );
}
