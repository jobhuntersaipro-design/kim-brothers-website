import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/ui/section";
import { ServiceCard } from "@/components/service-card";
import { MARKETING, SERVICES } from "@/lib/services";

export function ServicesGrid() {
  return (
    <Section id="services" className="border-t border-line">
      <Container>
        <Reveal className="flex flex-col gap-4">
          <MicroLabel>Services</MicroLabel>
          <h2 className="max-w-[20ch] font-display">
            What we <span className="em-accent">build</span>.
          </h2>
          <p className="max-w-[60ch] text-ink-2">
            Four lines of work, plus marketing as a supporting line. Pick what
            you need, or stack them — most of our projects use two or three at
            once.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 gap-(--grid-gap) md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </Reveal>

        <Reveal className="mt-(--grid-gap)">
          <ServiceCard {...MARKETING} fullWidth />
        </Reveal>
      </Container>
    </Section>
  );
}
