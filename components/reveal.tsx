"use client";

import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/components/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

type Props = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  delay?: number;
};

export function Reveal({ as: Tag = "div", className, children, delay = 0 }: Props) {
  const { ref, state } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      data-reveal={state === "idle" ? undefined : state}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
