import Link from "next/link";
import { Container } from "@/components/ui/container";
import { MicroLabel } from "@/components/ui/micro-label";
import { BrandMark } from "@/components/brand-mark";

const SITEMAP = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const SERVICES = [
  { href: "/services#automation", label: "Automation & AI agents" },
  { href: "/services#web", label: "Web development" },
  { href: "/services#scraping", label: "Data scraping & pipelines" },
  { href: "/services#saas", label: "SaaS products" },
  { href: "/services#marketing", label: "Digital marketing" },
];

/**
 * Footer is pinned to the stable ink/cream tokens so it stays a dark ink
 * surface in both themes — per DESIGN.md §5 "Ink surface". Without this the
 * footer would invert in dark mode and the cream-on-cream links would be
 * unreadable.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{ backgroundColor: "var(--ink-stable)", color: "var(--cream-stable)" }}
      className="mt-(--section-pad-y) border-t border-line"
    >
      <Container className="py-[clamp(3rem,8vh,6rem)]">
        <div className="grid gap-12 md:grid-cols-4 md:gap-8">
          {/* Brand block — tagline repeats as quiet confirmation */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <BrandMark />
              <span className="font-mono text-[14px] leading-none">Kim Brothers Ent.</span>
            </div>
            <p
              className="mt-6 text-[14px]"
              style={{ color: "color-mix(in oklab, var(--cream-stable) 70%, transparent)" }}
            >
              Putra Heights, Selangor, Malaysia
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <MicroLabel
              className="text-[color-mix(in_oklab,var(--cream-stable)_55%,transparent)]!"
            >
              Sitemap
            </MicroLabel>
            <ul className="mt-5 space-y-3 text-[14px]">
              {SITEMAP.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-(--cream-stable)"
                    style={{
                      color:
                        "color-mix(in oklab, var(--cream-stable) 85%, transparent)",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <MicroLabel
              className="text-[color-mix(in_oklab,var(--cream-stable)_55%,transparent)]!"
            >
              Services
            </MicroLabel>
            <ul className="mt-5 space-y-3 text-[14px]">
              {SERVICES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-(--cream-stable)"
                    style={{
                      color:
                        "color-mix(in oklab, var(--cream-stable) 85%, transparent)",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <MicroLabel
              className="text-[color-mix(in_oklab,var(--cream-stable)_55%,transparent)]!"
            >
              Contact
            </MicroLabel>
            <ul className="mt-5 space-y-3 text-[14px]">
              <li>
                <a
                  href="https://wa.me/60164609428"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-(--cream-stable)"
                  style={{
                    color:
                      "color-mix(in oklab, var(--cream-stable) 85%, transparent)",
                  }}
                >
                  +6016 460 9428
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@kim-brothers.com"
                  className="transition-colors hover:text-(--cream-stable)"
                  style={{
                    color:
                      "color-mix(in oklab, var(--cream-stable) 85%, transparent)",
                  }}
                >
                  contact@kim-brothers.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="mt-12 flex flex-col gap-3 pt-6 text-[12px] md:flex-row md:items-center md:justify-between"
          style={{
            borderTop:
              "1px solid color-mix(in oklab, var(--cream-stable) 18%, transparent)",
          }}
        >
          <p
            style={{
              color: "color-mix(in oklab, var(--cream-stable) 55%, transparent)",
            }}
          >
            &copy; {year} Kim Brothers Ent. All rights reserved.
          </p>
          <p
            className="font-mono uppercase tracking-(--tracking-mono)"
            style={{
              color: "color-mix(in oklab, var(--cream-stable) 55%, transparent)",
            }}
          >
            MADE IN MALAYSIA
          </p>
        </div>
      </Container>
    </footer>
  );
}
