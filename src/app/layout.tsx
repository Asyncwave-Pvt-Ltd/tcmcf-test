import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Noto_Sans_Devanagari,
  Plus_Jakarta_Sans,
  Source_Sans_3,
} from "next/font/google";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getComplianceNav } from "@/lib/sanity";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

// Fallback family for Hindi/Marathi copy; the Latin faces have no Devanagari.
const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari", "latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TCMCF — Sustainable Farms. Stronger Communities.",
    template: "%s · TCMCF",
  },
  description:
    "The Change Makers Charitable Foundation (TCMCF) is an India-based nonprofit working with 27,000+ small and marginal farmers across Madhya Pradesh, Maharashtra, and Karnataka, building a sustainable, inclusive agricultural supply chain that connects rural tribal communities to global markets.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Sub-nav strips whose entries come from the CMS rather than lib/nav.ts.
  const cmsSubNavs = { "/compliance": await getComplianceNav() };

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${sourceSans.variable} ${notoDevanagari.variable} ${plexMono.variable} h-full antialiased`}
    >
      {/* `page-shell` is the container the canvas's `cqi` units resolve against. */}
      <body className="page-shell flex min-h-full flex-col">
        <SiteHeader cmsSubNavs={cmsSubNavs} />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
