import Reveal from "@/components/Reveal";
import { processSteps } from "@/data/content";

export default function ProcessSection() {
  return (
    <section className="relative border-t border-border-soft py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-16 max-w-lg sm:mb-20">
          <span data-reveal className="font-display text-xs uppercase tracking-[0.25em] text-frost-soft">
            The process
          </span>
          <h2 data-reveal className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl">
            From first call to a system that&rsquo;s actually fixed.
          </h2>
        </Reveal>

        <Reveal
          as="div"
          staggerMs={130}
          className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8"
        >
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step) => (
            <div key={step.index} data-reveal className="relative">
              <span className="font-display text-5xl font-semibold text-transparent [-webkit-text-stroke:1px_var(--color-border-soft)]">
                {step.index}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-paper">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-paper-dim">
                {step.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
