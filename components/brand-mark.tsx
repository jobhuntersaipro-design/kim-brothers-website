import { cn } from "@/lib/utils";

/**
 * Kim Brothers ligature mark. Inlined from `public/Kim Brothers Logo.svg` so
 * it inherits `currentColor` (adapts to both themes) instead of the hardcoded
 * `#1a1a1a` in the asset file.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 74 64"
      width="32"
      height="28"
      aria-hidden="true"
      className={cn("block", className)}
      fill="currentColor"
    >
      <rect x="10" y="6" width="5" height="52" />
      <path d="M15 30 L32 6 L38 6 L20 30 Z" />
      <path d="M15 30 L32 58 L38 58 L20 30 Z" />
      <path d="M40 6 L40 30 L52 30 A11 12 0 0 0 52 6 Z" />
      <path d="M40 34 L40 58 L54 58 A11 12 0 0 0 54 34 Z" />
    </svg>
  );
}
