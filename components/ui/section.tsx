import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  as?: ElementType;
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ as: Tag = "section", id, className, children }: SectionProps) {
  return (
    <Tag id={id} className={cn("py-[var(--section-pad-y)]", className)}>
      {children}
    </Tag>
  );
}
