"use client";

import Image from "next/image";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import ComfortDial from "@/components/ComfortDial";
import SplitReveal from "@/components/SplitReveal";
import { business } from "@/data/business";
import { useParallax, useReveal } from "@/lib/motion";

export default function Hero() {
  const bgRef = useParallax<HTMLDivElement>(70, "Y");
  const revealRef = useReveal<HTMLDivElement>({ selector: "[data-reveal]", staggerMs: 120, delay: 650 });

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28">
      {/* Ambient thermal background */}
      <div ref={bgRef} className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/thermal-wash.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.38] mix-blend-screen"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
        <div className="absolute inset-0 grain" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center gap-16 px-5 pb-16 sm:px-8 lg:flex-row lg:items-center lg:gap-12 lg:pb-24">
        <div className="w-full max-w-2xl lg:w-[56%]">
          <span
            data-reveal
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-soft px-3.5 py-1.5 font-display text-[11px] font-medium uppercase tracking-[0.2em] text-paper-dim"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-frost" />
            Residential HVAC &middot; Brandon, MS
          </span>

          <SplitReveal
            as="h1"
            text="Precision comfort, corrected."
            className="font-display text-[13vw] font-semibold leading-[0.98] tracking-[-0.02em] text-paper sm:text-6xl lg:text-[4.6rem]"
          />

          <p
            data-reveal
            className="mt-7 max-w-lg text-balance text-lg leading-relaxed text-paper-dim"
          >
            Corrective Cooling handles residential climate control, AC
            maintenance, repairs, and duct work for Brandon-area homes —
            diagnosed properly, fixed once.
          </p>

          <div data-reveal className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton href={business.phoneHref} variant="ember" icon={<Phone size={16} strokeWidth={2} />}>
              Call {business.phone}
            </MagneticButton>
            <MagneticButton href="/contact" variant="frost" icon={<ArrowRight size={16} strokeWidth={2} />}>
              Get a Free Quote
            </MagneticButton>
          </div>

          <div ref={revealRef} className="mt-14 hidden gap-8 sm:flex" aria-hidden="true">
            <div data-reveal className="flex items-center gap-2 text-xs text-muted">
              <span className="h-px w-8 bg-border" />
              Residential focus
            </div>
            <div data-reveal className="flex items-center gap-2 text-xs text-muted">
              <span className="h-px w-8 bg-border" />
              Local to Brandon, MS
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[44%]">
          <div className="relative rounded-[28px] border border-border-soft bg-surface/60 p-8 backdrop-blur-sm sm:p-10">
            <p className="mb-1 text-center font-display text-[11px] uppercase tracking-[0.25em] text-muted">
              Move your cursor across
            </p>
            <p className="mb-6 text-center font-display text-sm text-paper-dim">
              One system. Full control.
            </p>
            <ComfortDial />
          </div>
        </div>
      </div>

      <div className="hidden justify-center pb-8 sm:flex">
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-paper-dim"
          aria-label="Scroll to services"
        >
          <span className="font-display text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
