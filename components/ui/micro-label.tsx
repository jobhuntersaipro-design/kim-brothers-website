import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MicroLabelProps = {
  children: ReactNode;
  as?: "span" | "p" | "div";
  className?: string;
  accent?: boolean;
};

/**
 * Letter-spaced all-caps mono — the brand's signature type device.
 * Used for section eyebrows, category labels, and nav micro-copy.
 * Callers pass pre-spaced text ("S E R V I C E S") or regular text; the
 * tracking token does the rest.
 */
export function MicroLabel({
  children,
  as: Tag = "span",
  className,
  accent = false,
}: MicroLabelProps) {
  return (
    <Tag
      className={cn(
        "font-mono text-[var(--text-micro)] uppercase",
        "tracking-[var(--tracking-micro)]",
        accent ? "text-[var(--accent-ink)]" : "text-ink-mute",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
