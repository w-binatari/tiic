import type { Metadata, Viewport } from "next";
import { Lato, Mulish } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/data/site";
import "./globals.css";

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-mulish",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NCDMB Tech Innovation Challenge (TIC)",
    template: "%s · NCDMB TIC",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: "NCDMB Tech Innovation Challenge",
    locale: "en_NG",
  },
  twitter: { card: "summary_large_image", site: "@ncdmb_tic" },
};

export const viewport: Viewport = {
  themeColor: "#0a3d24",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className={`${mulish.variable} ${lato.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-gold focus:px-4 focus:py-3 focus:font-bold focus:text-forest-deep"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
