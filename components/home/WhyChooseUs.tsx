import { ShieldCheck, MapPin, Layers, Home } from "lucide-react";
import Reveal from "@/components/Reveal";
import { values } from "@/data/content";
import { CondenserIllustration } from "@/components/Illustrations";

const icons = [ShieldCheck, MapPin, Layers, Home];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden border-t border-border-soft bg-surface/30 py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        <Reveal className="relative order-2 lg:order-1">
          <div data-reveal className="relative mx-auto max-w-sm rounded-[28px] border border-border-soft bg-ink-soft p-6">
            <CondenserIllustration className="w-full" />
            <div className="absolute -right-4 -top-4 flex h-16 w-16 items-center justify-center rounded-full border border-border-soft bg-ink shadow-[0_0_40px_-10px_var(--color-frost)]">
              <span className="font-display text-[10px] uppercase tracking-widest text-frost-soft">
                Whole
                <br />
                System
              </span>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span data-reveal className="font-display text-xs uppercase tracking-[0.25em] text-ember-soft">
              Why homeowners call us
            </span>
            <h2 data-reveal className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl">
              We treat comfort as engineering, not guesswork.
            </h2>
          </Reveal>

          <Reveal as="div" staggerMs={100} className="mt-12 grid gap-8 sm:grid-cols-2">
            {values.map((value, i) => {
              const Icon = icons[i];
              return (
                <div key={value.title} data-reveal className="flex gap-4">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border-soft text-frost-soft">
                    <Icon size={17} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-medium text-paper">
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-paper-dim">
                      {value.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
