"use client";

import { cn } from "@/lib/utils";

const STORAGE_KEY = "kb-theme";

/**
 * Theme toggle. The inline `<ThemeScript>` sets `data-theme` on <html> before
 * React hydrates, so there's no FOUC and React doesn't need to own the theme
 * state — we read/write the DOM attribute directly on click. Icons are shown
 * or hidden via CSS selectors on `html[data-theme=...]`, so there's no
 * server/client mismatch on first paint.
 */
export function ThemeToggle() {
  function toggle() {
    const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked — keep the in-memory toggle, don't crash.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className={cn(
        "theme-toggle-btn grid h-9 w-9 place-items-center rounded-(--radius)",
        "border border-line-strong text-ink",
        "transition-colors duration-(--dur-base) ease-out",
        // Flip to filled ink on hover — obvious in both themes because
        // --ink is the high-contrast pole of the current surface.
        "hover:bg-ink hover:text-cream hover:border-ink",
      )}
    >
      <SunIcon className="theme-icon-light h-4 w-4" />
      <MoonIcon className="theme-icon-dark h-4 w-4" />
    </button>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="square">
        <line x1="8" y1="1" x2="8" y2="2.5" />
        <line x1="8" y1="13.5" x2="8" y2="15" />
        <line x1="1" y1="8" x2="2.5" y2="8" />
        <line x1="13.5" y1="8" x2="15" y2="8" />
        <line x1="2.9" y1="2.9" x2="4" y2="4" />
        <line x1="12" y1="12" x2="13.1" y2="13.1" />
        <line x1="2.9" y1="13.1" x2="4" y2="12" />
        <line x1="12" y1="4" x2="13.1" y2="2.9" />
      </g>
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
      <path d="M13 10.2A5.5 5.5 0 0 1 5.8 3a5.5 5.5 0 1 0 7.2 7.2Z" fill="currentColor" />
    </svg>
  );
}
