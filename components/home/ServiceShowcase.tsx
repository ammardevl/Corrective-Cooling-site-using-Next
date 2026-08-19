import Link from "next/link";
import { ArrowUpRight, Thermometer, Wind, Wrench, GitBranch } from "lucide-react";
import { services } from "@/data/services";
import Reveal from "@/components/Reveal";

const icons = { thermometer: Thermometer, wind: Wind, wrench: Wrench, duct: GitBranch };

export default function ServiceShowcase() {
  return (
    <section id="services" className="relative border-t border-border-soft py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-16 flex flex-col gap-4 sm:mb-20 sm:flex-row sm:items-end sm:justify-between">
          <div data-reveal>
            <span className="font-display text-xs uppercase tracking-[0.25em] text-frost-soft">
              What we do
            </span>
            <h2 className="mt-4 max-w-lg font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-5xl">
              Four services. One standard of work.
            </h2>
          </div>
          <p data-reveal className="max-w-xs text-sm leading-relaxed text-paper-dim">
            Every job — small tune-up or full repair — gets the same
            whole-system diagnosis before anything is touched.
          </p>
        </Reveal>

        <Reveal as="div" staggerMs={110} className="divide-y divide-border-soft border-t border-border-soft">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <div key={service.slug} data-reveal className="group relative">
                <Link
                  href={`/services#${service.slug}`}
                  className="grid grid-cols-1 gap-6 py-10 transition-colors sm:grid-cols-[auto_1fr_auto_auto] sm:items-center sm:gap-8 sm:py-12"
                >
                  <span className="font-display text-sm text-muted transition-colors group-hover:text-ember-soft">
                    0{i + 1}
                  </span>

                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border-soft text-frost-soft transition-all duration-500 group-hover:scale-110 group-hover:border-frost group-hover:bg-frost/10">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight text-paper transition-colors sm:text-3xl">
                        {service.name}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-paper-dim">
                        {service.short}
                      </p>
                    </div>
                  </div>

                  <div className="hidden max-w-[220px] text-xs leading-relaxed text-muted lg:block">
                    {service.points.slice(0, 2).join(" · ")}
                  </div>

                  <span className="flex h-11 w-11 items-center justify-center justify-self-start rounded-full border border-border-soft text-paper-dim transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-ember group-hover:text-ember-soft sm:justify-self-end">
                    <ArrowUpRight size={17} strokeWidth={1.75} />
                  </span>
                </Link>
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-ember via-ember-soft to-frost transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
