"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { animate, stagger, utils } from "animejs";
import { Menu, X, Phone } from "lucide-react";
import { business, navLinks } from "@/data/business";
import { prefersReducedMotion } from "@/lib/motion";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close the mobile menu whenever the route changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const node = menuRef.current;
    if (!node) return;

    if (open) {
      node.style.display = "flex";
      if (prefersReducedMotion()) {
        utils.set(node, { opacity: 1 });
        return;
      }
      utils.set(node, { opacity: 0 });
      animate(node, { opacity: [0, 1], duration: 260, ease: "outQuad" });
      const items = linkRefs.current.filter(Boolean) as HTMLAnchorElement[];
      utils.set(items, { opacity: 0, translateY: 16 });
      animate(items, {
        opacity: [0, 1],
        translateY: [16, 0],
        delay: stagger(70, { start: 80 }),
        duration: 500,
        ease: "outExpo",
      });
    } else if (!prefersReducedMotion()) {
      animate(node, {
        opacity: [1, 0],
        duration: 200,
        ease: "inQuad",
        onComplete: () => {
          if (node) node.style.display = "none";
        },
      });
    } else {
      node.style.display = "none";
    }
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border-soft bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5" aria-label={`${business.name} — home`}>
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border-soft transition-colors group-hover:border-frost">
            <span className="absolute inset-0 rounded-full bg-[conic-gradient(from_200deg,var(--color-ember),transparent_35%,transparent_65%,var(--color-frost),var(--color-ember))] opacity-70" />
            <span className="relative h-4 w-4 rounded-full bg-ink" />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-paper">
            Corrective<span className="text-ember">Cooling</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-display text-sm tracking-wide transition-colors ${
                  active ? "text-paper" : "text-paper-dim hover:text-paper"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-ember to-frost transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 font-display text-sm text-paper-dim transition-colors hover:text-frost-soft"
          >
            <Phone size={15} strokeWidth={1.75} />
            {business.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-ember px-5 py-2.5 font-display text-sm font-medium text-ink transition-colors hover:bg-ember-soft"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border-soft text-paper md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        ref={menuRef}
        style={{ display: "none" }}
        className="flex-col gap-1 border-t border-border-soft bg-ink px-5 pb-8 pt-4 md:hidden"
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            ref={(el) => {
              linkRefs.current[i] = el;
            }}
            href={link.href}
            className="rounded-lg px-3 py-3.5 font-display text-lg text-paper transition-colors hover:bg-surface"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={business.phoneHref}
          className="mt-3 flex items-center gap-2 rounded-lg border border-border-soft px-3 py-3.5 font-display text-base text-paper-dim"
        >
          <Phone size={16} /> {business.phone}
        </a>
        <Link
          href="/contact"
          className="mt-2 rounded-full bg-ember px-5 py-3.5 text-center font-display text-base font-medium text-ink"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
