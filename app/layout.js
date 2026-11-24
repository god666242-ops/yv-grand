import "./globals.css";
import Script from "next/script";
import { Bodoni_Moda, Hanken_Grotesk } from "next/font/google";
import { hotel, site } from "../site";
import Seo from "../components/Seo";

const display = Bodoni_Moda({ subsets: ["latin"], variable: "--fd", display: "swap" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--fb", display: "swap" });

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: "%s | YV Grand" },
  description: site.description,
  applicationName: hotel.full,
  category: "travel",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: "/", siteName: hotel.full, title: site.title, description: site.description, locale: "en_IN", images: [{ url: site.ogImg, width: 1600, height: 1200, alt: hotel.full }] },
  robots: { index: true, follow: true },
  other: { "geo.region": "IN-AP", "geo.placename": hotel.city },
};
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#2A1A3A" };

export default function Layout({ children }) {
  return (
    <html lang="en-IN" className="scroll-smooth scroll-pt-[84px]">
      <head>
        <link rel="preconnect" href="https://cdn.purebook.in" crossOrigin="" />
      </head>
      <body className={`${display.variable} ${body.variable} bg-paper font-fb text-[17px] leading-[1.65] text-ink antialiased`}>
        {children}
        <Seo hotel={hotel} site={site} />
        <Script src="https://cdn.purebook.in/engine.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
