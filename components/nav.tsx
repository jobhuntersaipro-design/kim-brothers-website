"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/brand-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-line",
        // 82% theme bg with backdrop blur; falls back to the solid cream/charcoal
        // when blur isn't supported, so the nav never renders transparent over content.
        "bg-[color-mix(in_oklab,var(--cream)_92%,transparent)]",
        "supports-backdrop-filter:bg-[color-mix(in_oklab,var(--cream)_82%,transparent)]",
        "supports-backdrop-filter:backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "mx-auto grid w-full max-w-(--container-max) items-center",
          "px-(--container-pad) py-3",
          "grid-cols-[auto_1fr_auto]",
        )}
      >
        {/* Brand */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-ink"
          aria-label="Kim Brothers — home"
        >
          <BrandMark />
          <span className="font-mono text-[16px] leading-none">Kim Brothers Ent.</span>
        </Link>

        {/* Centered nav links — hidden on mobile */}
        <nav
          aria-label="Primary"
          className="hidden items-center justify-center gap-8 md:flex"
        >
          {LINKS.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-sans text-[14px] text-ink-2 transition-colors",
                  "hover:text-ink",
                  active && "text-ink",
                )}
              >
                {link.label}
                {active ? (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Right cluster: theme toggle + WhatsApp CTA */}
        <div className="flex items-center gap-3 justify-self-end">
          <ThemeToggle />
          <a
            href="https://wa.me/60164609428"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 rounded-(--radius) px-4 py-2",
              "border border-line-strong text-ink",
              "font-mono text-[12px] uppercase tracking-(--tracking-mono)",
              "transition-colors duration-(--dur-base) ease-out",
              // Hover fills with the brand accent — visible in both themes and
              // reinforces the WhatsApp CTA as the primary action.
              "hover:bg-(--accent-stable) hover:text-[#ffffff]",
              "hover:border-(--accent-stable)",
            )}
            aria-label="Open WhatsApp chat with Kim Brothers"
          >
            <span
              aria-hidden="true"
              className="dot-pulse inline-block h-1.5 w-1.5 rounded-full bg-green"
            />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
