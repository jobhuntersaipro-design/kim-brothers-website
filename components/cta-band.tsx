import { ArrowGlyph, Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/ui/section";

export function CtaBand() {
  return (
    <Section id="cta" className="border-t border-line">
      <Container>
        <Reveal className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col gap-4">
            <MicroLabel>Start here</MicroLabel>
            <h2 className="max-w-[18ch] font-display">
              Ready to focus on <span className="em-accent">growing</span>?
            </h2>
            <p className="max-w-[56ch] text-ink-2">
              Tell us what you&rsquo;re working on. We&rsquo;ll figure out
              whether we can help — usually within a day.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              href="https://wa.me/60164609428"
              variant="accent"
              icon={<ArrowGlyph />}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk to us
            </Button>
            <Button href="/services" variant="ghost" icon={<ArrowGlyph />}>
              See services
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
