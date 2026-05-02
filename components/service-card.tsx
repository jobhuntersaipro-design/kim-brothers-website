import Link from "next/link";
import { ArrowGlyph } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  body: string;
  href: string;
  fullWidth?: boolean;
};

/**
 * Card with the DESIGN.md §5 ink-wipe hover: a panel slides up from the bottom,
 * text inverts, the CTA arrow lights to accent. The wipe uses the theme-flipping
 * `--ink` / `--cream` tokens so the inverted state always contrasts the resting
 * card — dark panel + light text in light mode, light panel + dark text in dark
 * mode.
 */
export function ServiceCard({ title, body, href, fullWidth = false }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "service-card group relative isolate flex flex-col gap-5 overflow-hidden",
        "border-line bg-cream-soft rounded-(--radius) border",
        "p-6 md:p-8",
        "transition-[border-color,transform] duration-(--dur-base) ease-out",
        "hover:border-ink hover:-translate-y-0.5",
        fullWidth && "md:flex-row md:items-end md:gap-10 md:p-10",
      )}
    >
      {/* Wipe panel — slides up to cover the card on hover */}
      <span
        aria-hidden="true"
        className={cn(
          "bg-ink absolute inset-0 z-0 translate-y-full",
          "transition-transform duration-500 ease-out",
          "group-hover:translate-y-0",
        )}
      />

      <div className={cn("relative z-10 flex flex-col gap-3", fullWidth && "md:flex-1")}>
        <h3
          className={cn(
            "font-display text-ink text-[clamp(1.5rem,2.4vw,2.25rem)] leading-tight",
            "transition-colors duration-500 ease-out",
            "group-hover:text-cream",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-ink-2 max-w-[44ch]",
            "transition-colors duration-500 ease-out",
            "group-hover:text-[color-mix(in_oklab,var(--cream)_85%,transparent)]",
          )}
        >
          {body}
        </p>
      </div>

      <span
        className={cn(
          "relative z-10 mt-auto inline-flex items-center gap-2",
          "font-mono text-[12px] tracking-(--tracking-mono) uppercase",
          "text-ink-mute transition-colors duration-500 ease-out",
          "group-hover:text-(--accent-stable)",
          fullWidth && "md:mt-0 md:self-end",
        )}
      >
        <span>Learn more</span>
        <span className="inline-flex transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.5">
          <ArrowGlyph />
        </span>
      </span>
    </Link>
  );
}
