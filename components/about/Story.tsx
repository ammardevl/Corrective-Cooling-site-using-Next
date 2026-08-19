import Reveal from "@/components/Reveal";
import { DuotoneMark } from "@/components/Illustrations";

export default function Story() {
  return (
    <section className="relative border-b border-border-soft py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <span data-reveal className="font-display text-xs uppercase tracking-[0.25em] text-ember-soft">
            Our story
          </span>
          <h2 data-reveal className="mt-4 max-w-md font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl">
            HVAC done the way we&rsquo;d want it done in our own home.
          </h2>
          <div data-reveal className="mt-8 flex items-center gap-3">
            <DuotoneMark className="h-10 w-10" />
            <span className="font-display text-sm text-paper-dim">
              Corrective Cooling LLC — Brandon, Mississippi
            </span>
          </div>
        </Reveal>

        <Reveal as="div" staggerMs={90} className="space-y-6 text-lg leading-relaxed text-paper-dim">
          <p data-reveal>
            Corrective Cooling is a residential HVAC company based in
            Brandon, Mississippi. We work on the systems that keep local
            homes comfortable through Mississippi&rsquo;s heat and its cold
            snaps — heating and cooling equipment, ductwork, and everything
            that moves air between them.
          </p>
          <p data-reveal>
            The name is the approach: when something&rsquo;s off, we find out
            why before we touch anything. A system that&rsquo;s short-cycling,
            a room that never quite cools, a duct run losing air along
            the way — the fix only holds if the diagnosis is right.
          </p>
          <p data-reveal>
            That means treating a home as one connected system rather
            than a single unit to service. Equipment, insulation,
            ductwork, and airflow all affect each other, so that&rsquo;s how we
            look at every job — residential climate control, maintenance,
            repairs, or duct work.
          </p>
          <p data-reveal className="border-l-2 border-ember pl-5 text-paper">
            Straightforward answers, work explained before it starts, and
            a system that&rsquo;s actually corrected when we leave.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
