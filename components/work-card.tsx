import Link from "next/link";
import { ArrowGlyph } from "@/components/ui/button";
import { MicroLabel } from "@/components/ui/micro-label";
import { WorkThumb } from "@/components/work-thumb";
import type { Case } from "@/lib/cases";
import { cn } from "@/lib/utils";

export function WorkCard({ slug, title, category, oneLiner, thumb }: Case) {
  return (
    <Link
      href={`/work/${slug}`}
      className={cn(
        "group flex flex-col gap-5",
        "border-line bg-cream-soft rounded-(--radius) border p-5 md:p-6",
        "transition-colors duration-(--dur-base) ease-out",
        "hover:border-ink",
      )}
    >
      <WorkThumb kind={thumb} />
      <div className="flex flex-col gap-2">
        <MicroLabel>{category}</MicroLabel>
        <h3 className="font-display text-ink text-[clamp(1.4rem,2vw,1.875rem)] leading-tight">
          {title}
        </h3>
        <p className="text-ink-2">{oneLiner}</p>
      </div>
      <span className="text-ink-mute mt-auto inline-flex items-center gap-2 font-mono text-[12px] tracking-(--tracking-mono) uppercase transition-colors duration-(--dur-base) ease-out group-hover:text-(--accent-stable)">
        <span>Read the case</span>
        <span className="inline-flex transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.5">
          <ArrowGlyph />
        </span>
      </span>
    </Link>
  );
}
