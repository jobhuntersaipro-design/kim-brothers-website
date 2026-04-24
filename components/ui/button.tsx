import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "accent";

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
};

type ButtonAsButton = BaseProps &
  Omit<ComponentProps<"button">, keyof BaseProps | "href"> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<ComponentProps<typeof Link>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center gap-2 px-5 py-3 rounded-[var(--radius)] " +
  "font-mono text-[12px] uppercase tracking-[0.22em] " +
  "transition-transform duration-[var(--dur-base)] ease-[var(--ease-out)] " +
  "hover:-translate-y-[1px] focus-visible:outline-2 focus-visible:outline-accent " +
  "focus-visible:outline-offset-2";

// Primary and accent variants pin their fg/bg to the stable tokens so the
// button keeps the same dark-on-blue / cream-on-ink look across both themes.
// Ghost deliberately flips — it's a background-less button that should blend
// with the current surface. Hovers step to a clearly different colour so the
// affordance is obvious in both themes.
const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--ink-stable)] text-[var(--cream-stable)] " +
    "hover:bg-[var(--accent-stable)] hover:text-[#ffffff]",
  // Hover fills with the flipping ink/cream pair so the button inverts into
  // the opposite surface of the current theme — dark fill in light mode,
  // cream fill in dark mode. Either way the button stays high-contrast
  // against the page it sits on.
  ghost:
    "border border-[var(--line-strong)] text-ink " +
    "hover:bg-[var(--ink)] hover:text-[var(--cream)] hover:border-[var(--ink)]",
  accent:
    "bg-[var(--accent-stable)] text-[#ffffff] " +
    "hover:bg-[var(--accent-stable-hover)] hover:text-[#ffffff]",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", className, children, icon } = props;
  const classes = cn(base, variants[variant], "group", className);

  const content = (
    <>
      <span>{children}</span>
      {icon ? (
        <span className="inline-flex transition-transform duration-(--dur-base) ease-out group-hover:translate-x-0.75">
          {icon}
        </span>
      ) : null}
    </>
  );

  if (props.href !== undefined) {
    const { href, variant: _v, className: _c, children: _ch, icon: _i, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  const { variant: _v, className: _c, children: _ch, icon: _i, href: _h, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}

export function ArrowGlyph() {
  return (
    <svg
      viewBox="0 0 16 10"
      width="14"
      height="10"
      fill="none"
      aria-hidden="true"
      className="block"
    >
      <path
        d="M1 5h13m0 0L10 1m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
