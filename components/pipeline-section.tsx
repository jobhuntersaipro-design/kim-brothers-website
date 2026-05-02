"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";
import { Pipeline } from "@/components/pipeline";
import { Reveal } from "@/components/reveal";
import { Section } from "@/components/ui/section";
import { PIPELINES } from "@/lib/pipelines";
import { cn } from "@/lib/utils";

const ROTATE_MS = 9000;

export function PipelineSection() {
  const [active, setActive] = useState(0);
  const [autoRotating, setAutoRotating] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion || !autoRotating) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % PIPELINES.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [autoRotating, reduceMotion]);

  const handleSelect = (i: number) => {
    setActive(i);
    setAutoRotating(false);
  };

  const current = PIPELINES[active];

  return (
    <Section id="how" className="border-line border-t">
      <Container>
        <Reveal className="flex flex-col gap-4">
          <MicroLabel>How it works</MicroLabel>
          <h2 className="font-display max-w-[20ch]">
            Every project follows a <span className="em-accent">flow</span>.
          </h2>
          <p className="text-ink-2 max-w-[60ch]">
            Chatbots, websites, scrapers — pick one to see it in action.
          </p>
        </Reveal>

        <Reveal className="mt-10 flex flex-wrap gap-3">
          {PIPELINES.map((p, i) => {
            const selected = active === i;
            return (
              <button
                key={p.id}
                type="button"
                aria-pressed={selected}
                onClick={() => handleSelect(i)}
                className={cn(
                  "flex flex-col items-start gap-1 rounded-(--radius) border px-4 py-3 text-left",
                  "transition-colors duration-(--dur-base) ease-out",
                  selected
                    ? "border-(--accent-stable) bg-(--accent-stable)"
                    : "border-line-strong hover:border-ink",
                )}
              >
                <span
                  className={cn(
                    "block font-mono text-[12px] font-medium tracking-(--tracking-mono) uppercase",
                    selected ? "text-[#ffffff]" : "text-ink",
                  )}
                >
                  {p.kind}
                </span>
                <span
                  className={cn(
                    "block font-mono text-[10px] tracking-(--tracking-micro) uppercase",
                    selected
                      ? "text-[color-mix(in_oklab,#ffffff_75%,transparent)]"
                      : "text-ink-mute",
                  )}
                >
                  {p.label}
                </span>
              </button>
            );
          })}
        </Reveal>

        <Reveal className="mt-14">
          <div key={current.id} className="pipeline-fade">
            <Pipeline pipeline={current} animate={!reduceMotion} />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
