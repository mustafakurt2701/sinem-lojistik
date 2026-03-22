import type { Metadata } from "next";

import "@/app/globals.css";

import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { StickyMobileCTA } from "@/components/layout/sticky-mobile-cta";
import { JsonLd } from "@/components/json-ld";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/seo";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  ...createMetadata({
    title: "Sinem Lojistik | Şehirler Arası Araç Taşıma",
    description:
      "Istanbul'dan Diyarbakir'a uzanan yoğun hatta sigortalı ve planlı şehirler arası araç taşıma hizmeti.",
    path: "/",
    image: "/og/home.svg",
    keywords: [
      "şehirler arası araç taşıma",
      "istanbul araç taşıma",
      "ankara araç taşıma",
      "gaziantep araç taşıma",
      "diyarbakır araç taşıma"
    ]
  }),
  icons: {
    icon: "/photo/site-mirror/www.ototasima.com/icon.jpg",
    apple: "/photo/site-mirror/www.ototasima.com/apple-icon.jpg"
  },
  manifest: "/manifest.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        {siteConfig.googleAnalyticsId ? (
          <GoogleAnalytics gaId={siteConfig.googleAnalyticsId} />
        ) : null}
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
