import { CtaBand } from "@/components/cta-band";
import { Hero } from "@/components/hero";
import { PipelineSection } from "@/components/pipeline-section";
import { SelectedWork } from "@/components/selected-work";
import { ServicesGrid } from "@/components/services-grid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <PipelineSection />
      <SelectedWork />
      <CtaBand />
    </>
  );
}
