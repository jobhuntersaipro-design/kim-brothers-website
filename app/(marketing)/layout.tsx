import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";

/**
 * View transitions: handled at the framework level by `experimental.viewTransition: true`
 * in next.config.ts — Next wraps Link navigation in `document.startViewTransition()`,
 * so route changes get a free cross-fade. The timing is shaped by the
 * `::view-transition-old(root)` / `::view-transition-new(root)` rules in globals.css.
 */
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
