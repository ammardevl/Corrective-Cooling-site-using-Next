import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ServiceRow from "@/components/services/ServiceRow";
import CTASection from "@/components/shared/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential climate control, air conditioning maintenance, system repairs, and air duct services in Brandon, Mississippi.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Residential HVAC, handled properly."
        body="Four core services, each treated as part of one connected system — not a checklist."
      />
      {services.map((service, i) => (
        <ServiceRow key={service.slug} service={service} index={i} />
      ))}
      <CTASection
        heading="Not sure which service you need?"
        body="Describe what's going on and we'll point you the right direction — no pressure, just a straight answer."
      />
    </>
  );
}
