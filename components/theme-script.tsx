/**
 * Inline script that runs BEFORE paint, setting `data-theme` on <html> so
 * the user never sees a flash-of-wrong-theme. The source is small and
 * self-contained; `dangerouslySetInnerHTML` is required because Next.js
 * otherwise defers script execution until after hydration.
 */
const script = `(function(){try{var t=localStorage.getItem("kb-theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="light";}})();`;

export function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
