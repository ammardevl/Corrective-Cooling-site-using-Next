import type { Metadata } from "next";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { business } from "@/data/business";

const siteUrl = "https://correctivecooling.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Corrective Cooling | Residential HVAC in Brandon, MS",
    template: "%s | Corrective Cooling",
  },
  description:
    "Residential climate control, air conditioning maintenance, system repairs, and air duct services in Brandon, Mississippi. Straightforward HVAC, done right.",
  keywords: [
    "HVAC Brandon MS",
    "air conditioning repair Brandon Mississippi",
    "AC maintenance Brandon",
    "air duct services Mississippi",
    "residential HVAC contractor",
  ],
  authors: [{ name: business.legalName }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: business.name,
    title: "Corrective Cooling | Residential HVAC in Brandon, MS",
    description:
      "Residential climate control, AC maintenance, system repairs, and air duct services in Brandon, Mississippi.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corrective Cooling | Residential HVAC in Brandon, MS",
    description:
      "Residential climate control, AC maintenance, system repairs, and air duct services in Brandon, Mississippi.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#08090b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: business.legalName,
  image: `${siteUrl}/images/thermal-wash.webp`,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: "Brandon",
    addressRegion: "MS",
    postalCode: "39047",
    addressCountry: "US",
  },
  areaServed: "Brandon, Mississippi",
  sameAs: [business.facebook],
  url: siteUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-ink text-paper antialiased">
        <a
          href="#main-content"
          className="fixed left-3 top-3 z-[200] -translate-y-20 rounded-full bg-frost px-4 py-2 font-display text-sm font-medium text-ink transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <CustomCursor />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
