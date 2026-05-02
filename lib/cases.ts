export type CaseThumb = "chat" | "schedule" | "extract" | "pipeline" | "browser" | "dashboard";

export type Case = {
  slug: string;
  title: string;
  category: string;
  oneLiner: string;
  thumb: CaseThumb;
};

// Locked v1 order: Sofie → BizzFlow → EasyStaff → Thrive → Tisha's PO → Unifi → Ads.
export const CASES: readonly Case[] = [
  {
    slug: "sofie",
    title: "Sofie",
    category: "Automation",
    oneLiner: "WhatsApp AI sales agent for the Unifi reseller line.",
    thumb: "chat",
  },
  {
    slug: "bizzflow",
    title: "BizzFlow",
    category: "Automation",
    oneLiner: "Fibre ops automation — crawler plus PDF bills, every morning.",
    thumb: "pipeline",
  },
  {
    slug: "easystaff",
    title: "EasyStaff",
    category: "SaaS",
    oneLiner: "J&T Express dispatcher payroll, automated end-to-end.",
    thumb: "schedule",
  },
  {
    slug: "thrive",
    title: "Thrive Chiropractic",
    category: "Web",
    oneLiner: "Next.js client website with Google Search Console setup.",
    thumb: "browser",
  },
  {
    slug: "tisha-po-extractor",
    title: "Tisha's PO Extractor",
    category: "Data",
    oneLiner: "Pulls purchase order data straight out of supplier emails.",
    thumb: "extract",
  },
  {
    slug: "unifi-scraping",
    title: "Unifi web scraping",
    category: "Data",
    oneLiner: "Custom crawler for Unifi territory and reseller data.",
    thumb: "dashboard",
  },
  {
    slug: "ads",
    title: "Ads",
    category: "Marketing",
    oneLiner: "Meta and Google Ads for resellers and client campaigns.",
    thumb: "browser",
  },
] as const;

// Cards featured on the home page — strongest visual diversity (chat, schedule, extract).
const SELECTED_SLUGS = ["sofie", "easystaff", "tisha-po-extractor"] as const;

export function getSelectedCases(): readonly Case[] {
  return SELECTED_SLUGS.map((slug) => {
    const found = CASES.find((c) => c.slug === slug);
    if (!found) throw new Error(`Selected case not found: ${slug}`);
    return found;
  });
}
