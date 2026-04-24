import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";
import { Section } from "@/components/ui/section";
import { ArrowGlyph, Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <Section>
      <Container>
        <MicroLabel>S T A R T &nbsp; H E R E</MicroLabel>
        <h1 className="mt-6 max-w-[18ch] font-display">
          Focus on <span className="em-accent">growing</span>, not doing.
        </h1>
        <p className="mt-6 max-w-[56ch] text-ink-2">
          Kim Brothers Ent. builds automation, websites, and data pipelines for Malaysian SMEs.
          The hero, services grid, and pipeline sections land in the next phases.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            href="https://wa.me/60164609428"
            variant="accent"
            icon={<ArrowGlyph />}
          >
            Talk to us
          </Button>
          <Button href="/work" variant="ghost" icon={<ArrowGlyph />}>
            See our work
          </Button>
        </div>
      </Container>
    </Section>
  );
}
