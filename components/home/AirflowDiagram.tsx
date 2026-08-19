"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { HouseOutline } from "@/components/Illustrations";
import Reveal from "@/components/Reveal";
import { prefersReducedMotion } from "@/lib/motion";

const hotspots = [
  {
    x: 26,
    y: 79,
    title: "Living spaces",
    body: "Balanced airflow across every room — not just the one next to the thermostat.",
  },
  {
    x: 52,
    y: 58,
    title: "Ductwork",
    body: "Sealed, insulated runs so conditioned air actually reaches the room it's meant for.",
  },
  {
    x: 79,
    y: 32,
    title: "Attic & equipment",
    body: "Properly sized equipment, maintained to run at the efficiency it was built for.",
  },
] as const;

export default function AirflowDiagram() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = panelRef.current;
    if (!node || prefersReducedMotion()) return;
    animate(node, {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 450,
      ease: "outQuad",
    });
  }, [active]);

  return (
    <section className="relative border-t border-border-soft bg-surface/30 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-16 max-w-xl">
          <span data-reveal className="font-display text-xs uppercase tracking-[0.25em] text-ember-soft">
            How it connects
          </span>
          <h2 data-reveal className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl">
            Your home is one connected system.
          </h2>
          <p data-reveal className="mt-5 text-paper-dim">
            Comfort issues rarely come from one part alone. Explore the
            diagram to see how equipment, ductwork, and living space work
            together.
          </p>
        </Reveal>

        <Reveal className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
          <div data-reveal className="relative mx-auto w-full max-w-xl">
            <HouseOutline className="w-full" />
            {hotspots.map((h, i) => (
              <button
                key={h.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                style={{ left: `${h.x}%`, top: `${h.y}%` }}
                className="absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                aria-label={h.title}
                aria-pressed={active === i}
              >
                <span
                  className={`absolute h-6 w-6 rounded-full transition-all duration-500 ${
                    active === i ? "scale-100 bg-ember/20" : "scale-0 bg-transparent"
                  }`}
                />
                <span
                  className={`h-2.5 w-2.5 rounded-full border transition-colors duration-300 ${
                    active === i
                      ? "border-ember bg-ember-soft"
                      : "border-frost-soft bg-ink"
                  }`}
                />
                {active !== i && (
                  <span className="absolute h-2.5 w-2.5 animate-ping rounded-full bg-frost-soft/40" />
                )}
              </button>
            ))}
          </div>

          <div
            ref={panelRef}
            className="rounded-2xl border border-border-soft bg-surface/60 p-8"
          >
            <span className="font-display text-xs uppercase tracking-[0.2em] text-muted">
              0{active + 1} / 0{hotspots.length}
            </span>
            <h3 className="mt-3 font-display text-2xl font-medium text-paper">
              {hotspots[active].title}
            </h3>
            <p className="mt-3 text-paper-dim">{hotspots[active].body}</p>
            <div className="mt-6 flex gap-2">
              {hotspots.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Show ${hotspots[i].title}`}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    active === i ? "bg-gradient-to-r from-ember to-frost" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
