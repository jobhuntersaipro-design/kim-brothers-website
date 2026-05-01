import { ArrowGlyph, Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroCanvas } from "@/components/hero-canvas";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden min-h-[min(900px,90svh)] flex items-center"
      aria-labelledby="hero-title"
    >
      <HeroCanvas />
      <Container className="relative z-10 py-(--section-pad-y)">
        <h1
          id="hero-title"
          className="max-w-[18ch] font-display text-(length:--text-hero) tracking-(--tracking-hero)"
        >
          Focus on <span className="em-accent">growing</span>, not doing.
        </h1>
        <p className="mt-6 max-w-[56ch] text-ink-2">
          Kim Brothers builds the chatbots, websites, scrapers, and small apps
          that take operational busywork off your plate. Built for Malaysian
          SMEs.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button
            href="https://wa.me/60164609428"
            variant="accent"
            icon={<ArrowGlyph />}
            target="_blank"
            rel="noopener noreferrer"
          >
            Talk to us
          </Button>
          <Button href="/work" variant="ghost" icon={<ArrowGlyph />}>
            See our work
          </Button>
        </div>
      </Container>
    </section>
  );
}
