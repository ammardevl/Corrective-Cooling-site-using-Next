import { Phone, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import Reveal from "@/components/Reveal";
import { business } from "@/data/business";

export default function CTASection({
  heading = "Ready when you are.",
  body = "Call, message on WhatsApp, or send the form — tell us what's going on and we'll take it from there.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border-soft py-28 sm:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          background:
            "radial-gradient(600px circle at 15% 30%, var(--color-ember), transparent 60%), radial-gradient(600px circle at 85% 70%, var(--color-frost), transparent 60%)",
        }}
        aria-hidden="true"
      />
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
        <h2 data-reveal className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl">
          {heading}
        </h2>
        <p data-reveal className="mt-6 max-w-lg text-paper-dim">
          {body}
        </p>
        <div data-reveal className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={business.phoneHref} variant="ember" icon={<Phone size={16} strokeWidth={2} />}>
            Call {business.phone}
          </MagneticButton>
          <MagneticButton href="/contact" variant="frost" icon={<ArrowRight size={16} strokeWidth={2} />}>
            Send a message
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
