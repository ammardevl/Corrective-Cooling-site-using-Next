import Reveal from "@/components/Reveal";
import ServiceAreaRadar from "./ServiceAreaRadar";
import { values } from "@/data/content";

export default function ApproachSection() {
  return (
    <section className="relative border-b border-border-soft bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
        <div>
          <Reveal>
            <span data-reveal className="font-display text-xs uppercase tracking-[0.25em] text-frost-soft">
              How we work
            </span>
            <h2 data-reveal className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl">
              Our approach, in practice.
            </h2>
          </Reveal>

          <Reveal as="div" staggerMs={100} className="mt-10 space-y-6">
            {values.map((v, i) => (
              <div key={v.title} data-reveal className="flex gap-5 border-t border-border-soft pt-6 first:border-t-0 first:pt-0">
                <span className="font-display text-sm text-muted">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-base font-medium text-paper">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">{v.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal className="flex justify-center">
          <div data-reveal>
            <ServiceAreaRadar />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
