import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import Story from "@/components/about/Story";
import ApproachSection from "@/components/about/ApproachSection";
import CTASection from "@/components/shared/CTASection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Corrective Cooling is a residential HVAC company based in Brandon, Mississippi — focused on diagnosing comfort issues correctly and fixing them once.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="Comfort, treated like engineering."
        body="A Brandon, Mississippi HVAC company built around one idea: diagnose it properly, then fix it once."
      />
      <Story />
      <ApproachSection />
      <CTASection
        heading="Let's talk about your system."
        body="Whether it's a full install, a repair, or a system that's never felt quite right — start with a call."
      />
    </>
  );
}
