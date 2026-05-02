import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { Pipeline as P } from "@/lib/pipelines";

export function Pipeline({ pipeline, animate }: { pipeline: P; animate: boolean }) {
  return (
    <div
      className={cn(
        "pipeline-track relative grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-5 md:gap-x-8",
        animate && "is-animating",
      )}
    >
      <div aria-hidden="true" className="pipeline-connector hidden md:block" />
      <div aria-hidden="true" className="pipeline-pulse-track hidden md:block">
        <div className="pipeline-pulse" />
      </div>
      {pipeline.nodes.map((node, i) => (
        <div
          key={`${pipeline.id}-${i}`}
          className="pipeline-node relative flex flex-col items-center gap-4 text-center"
          style={{ ["--node-i" as string]: i } as CSSProperties}
        >
          <span aria-hidden="true" className="pipeline-node-dot" />
          <div className="flex flex-col gap-2">
            <span className="text-ink block font-display text-[clamp(1.05rem,1.4vw,1.25rem)] leading-tight">
              {node.label}
            </span>
            <p className="text-ink-2 max-w-[28ch] text-[14px] leading-snug md:text-[13px]">
              {node.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
