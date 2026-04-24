import type { Metadata, Viewport } from "next";
import { ThemeScript } from "@/components/theme-script";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kim-brothers.com"),
  title: {
    default: "Kim Brothers Ent. — Focus on growing, not doing.",
    template: "%s — Kim Brothers Ent.",
  },
  description:
    "Automation, web, and scraping built for Malaysian SMEs. We build the systems that let you stop doing operational busywork.",
  applicationName: "Kim Brothers Ent.",
  authors: [{ name: "Kim Brothers Ent." }],
  creator: "Kim Brothers Ent.",
  publisher: "Kim Brothers Ent.",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://kim-brothers.com",
    siteName: "Kim Brothers Ent.",
    title: "Kim Brothers Ent. — Focus on growing, not doing.",
    description:
      "Automation, web, and scraping built for Malaysian SMEs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kim Brothers Ent.",
    description:
      "Automation, web, and scraping built for Malaysian SMEs.",
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2EEE3" },
    { media: "(prefers-color-scheme: dark)", color: "#141210" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={fontVariables}>
      <head>
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
