import Link from "next/link";
import { ArrowGlyph } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/ui/section";
import { WorkCard } from "@/components/work-card";
import { getSelectedCases } from "@/lib/cases";

export function SelectedWork() {
  const cases = getSelectedCases();
  return (
    <Section id="work" className="border-line border-t">
      <Container>
        <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <div className="flex flex-col gap-4">
            <MicroLabel>Selected work</MicroLabel>
            <h2 className="font-display max-w-[20ch]">
              A few we&rsquo;re <span className="em-accent">proud</span> of.
            </h2>
            <p className="text-ink-2 max-w-[60ch]">
              Three case studies. Different lines of work, all live.
            </p>
          </div>
          <Link
            href="/work"
            className="text-ink inline-flex items-center gap-2 self-start font-mono text-[12px] tracking-(--tracking-mono) uppercase transition-colors duration-(--dur-base) ease-out hover:text-(--accent-stable) md:self-end"
          >
            <span>See all work</span>
            <ArrowGlyph />
          </Link>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 gap-(--grid-gap) md:grid-cols-3">
          {cases.map((c) => (
            <WorkCard key={c.slug} {...c} />
          ))}
        </Reveal>
      </Container>
    </Section>
  );
}
