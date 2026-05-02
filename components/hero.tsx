import { ArrowGlyph, Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HeroCanvas } from "@/components/hero-canvas";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[min(900px,90svh)] items-center overflow-hidden"
      aria-labelledby="hero-title"
    >
      <HeroCanvas />
      <Container className="relative z-10 py-(--section-pad-y)">
        <h1
          id="hero-title"
          className="font-display max-w-[18ch] text-(length:--text-hero) tracking-(--tracking-hero)"
        >
          Focus on <span className="em-accent">growing</span>, not doing.
        </h1>
        <p className="text-ink-2 mt-6 max-w-[56ch]">
          We build the tools that take the boring work off your plate, so you can focus on growing.
          Chatbots, websites, scrapers, custom apps — whatever your business needs.
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
