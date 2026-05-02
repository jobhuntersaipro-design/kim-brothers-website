export type Service = {
  slug: string;
  title: string;
  body: string;
  href: string;
};

export const SERVICES: readonly Service[] = [
  {
    slug: "automation",
    title: "Automation & AI agents",
    body: "WhatsApp sales bots, lead routing, CRM sync. We build the systems that talk to your customers when you can't.",
    href: "/services#automation",
  },
  {
    slug: "web",
    title: "Web development",
    body: "Production-grade websites in Next.js. Fast, server-rendered, and built to rank on Google.",
    href: "/services#web",
  },
  {
    slug: "scraping",
    title: "Data scraping & pipelines",
    body: "Custom crawlers, bulk data processing, automated reports. We ship the data wherever you need it.",
    href: "/services#scraping",
  },
  {
    slug: "saas",
    title: "SaaS products",
    body: "Internal tools, micro-SaaS, business apps. Small focused products that solve a single painful problem.",
    href: "/services#saas",
  },
] as const;

export const MARKETING: Service = {
  slug: "marketing",
  title: "Digital marketing",
  body: "Meta and Google Ads, creative production, lead attribution. A supporting line — handy when you need traffic to feed everything above.",
  href: "/services#marketing",
};
