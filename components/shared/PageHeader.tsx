import Reveal from "@/components/Reveal";
import { ThermalDivider } from "@/components/Illustrations";

export default function PageHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border-soft pb-16 pt-40 sm:pb-20 sm:pt-48">
      <div className="grain pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <Reveal className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <span data-reveal className="font-display text-xs uppercase tracking-[0.25em] text-frost-soft">
          {eyebrow}
        </span>
        <h1 data-reveal className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-paper sm:text-7xl">
          {title}
        </h1>
        {body && (
          <p data-reveal className="mt-6 max-w-xl text-lg leading-relaxed text-paper-dim">
            {body}
          </p>
        )}
      </Reveal>
      <ThermalDivider className="absolute inset-x-0 bottom-0 h-10 w-full opacity-60" />
    </section>
  );
}
