import Hero from "@/components/home/Hero";
import ServiceMarquee from "@/components/home/ServiceMarquee";
import ServiceShowcase from "@/components/home/ServiceShowcase";
import AirflowDiagram from "@/components/home/AirflowDiagram";
import ProcessSection from "@/components/home/ProcessSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/shared/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceMarquee />
      <ServiceShowcase />
      <AirflowDiagram />
      <ProcessSection />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
