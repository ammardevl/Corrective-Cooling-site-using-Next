import { Check, Thermometer, Wind, Wrench, GitBranch } from "lucide-react";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";
import { CondenserIllustration, HouseOutline } from "@/components/Illustrations";
import type { Service } from "@/data/services";

const icons = { thermometer: Thermometer, wind: Wind, wrench: Wrench, duct: GitBranch };
const art = { thermometer: HouseOutline, wind: CondenserIllustration, wrench: CondenserIllustration, duct: HouseOutline };

export default function ServiceRow({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.icon];
  const Art = art[service.icon];
  const reversed = index % 2 === 1;

  return (
    <section
      id={service.slug}
      className="scroll-mt-28 border-b border-border-soft py-20 sm:py-28"
    >
      <Reveal
        className={`mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div data-reveal>
          <span className="font-display text-sm text-muted">0{index + 1}</span>
          <div className="mt-4 flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft text-frost-soft">
              <Icon size={19} strokeWidth={1.6} />
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
              {service.name}
            </h2>
          </div>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-paper-dim">
            {service.description}
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {service.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-paper-dim">
                <Check size={15} strokeWidth={2} className="mt-0.5 shrink-0 text-ember-soft" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <MagneticButton href="/contact" variant="ember">
              Ask about {service.name.toLowerCase()}
            </MagneticButton>
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-md rounded-[28px] border border-border-soft bg-surface/40 p-10">
          <Art className="w-full" />
        </div>
      </Reveal>
    </section>
  );
}
