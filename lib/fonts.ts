import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";

/**
 * Self-hosted via `next/font` — no CDN, no CSS race, no layout shift.
 * Google source is used at build time; the actual font files are served
 * from the Next.js origin once deployed.
 */

export const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
});

export const geist = Geist({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

export const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-jetbrains",
});

export const fontVariables = [
  instrumentSerif.variable,
  geist.variable,
  jetbrainsMono.variable,
].join(" ");
