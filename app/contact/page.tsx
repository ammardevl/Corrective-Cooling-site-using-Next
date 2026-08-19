import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoGrid from "@/components/contact/ContactInfoGrid";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Corrective Cooling in Brandon, Mississippi — call, WhatsApp, email, or send a message.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Tell us what's going on."
        body="Call or message us directly, or send the details below — we'll get back to you."
      />

      <section className="border-b border-border-soft py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          <Reveal>
            <div data-reveal>
              <h2 className="font-display text-2xl font-medium text-paper">
                Reach out directly
              </h2>
              <p className="mt-2 text-sm text-paper-dim">
                Whichever is easiest for you.
              </p>
            </div>
            <div data-reveal className="mt-8">
              <ContactInfoGrid />
            </div>
          </Reveal>

          <Reveal>
            <div data-reveal className="rounded-2xl border border-border-soft bg-surface/40 p-8 sm:p-10">
              <h2 className="font-display text-2xl font-medium text-paper">
                Send a message
              </h2>
              <p className="mt-2 mb-8 text-sm text-paper-dim">
                Tell us about your system and we&rsquo;ll follow up.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div data-reveal className="mb-8 flex items-center justify-between">
              <h2 className="font-display text-2xl font-medium text-paper">
                Service area
              </h2>
              <span className="text-sm text-paper-dim">{business.address.full}</span>
            </div>
            <div data-reveal className="overflow-hidden rounded-2xl border border-border-soft">
              <iframe
                title={`Map showing ${business.legalName} location in Brandon, MS`}
                src={business.mapEmbedSrc}
                width="100%"
                height="420"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) contrast(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
