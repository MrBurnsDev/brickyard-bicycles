import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brickyardbicycles.com"), // TODO: Replace with actual domain
  title: {
    default: "Brickyard Bicycles | Bike Shop on Martha's Vineyard",
    template: "%s | Brickyard Bicycles",
  },
  description:
    "Independent bike shop on Martha's Vineyard. Bicycle sales, service, and professional repairs for road, gravel, and performance bikes.",
  keywords: [
    "bike shop Martha's Vineyard",
    "bicycle repair Martha's Vineyard",
    "cycling Martha's Vineyard",
    "bike sales Martha's Vineyard",
    "road bikes",
    "gravel bikes",
    "performance bikes",
  ],
  authors: [{ name: "Brickyard Bicycles" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Brickyard Bicycles",
    title: "Brickyard Bicycles | Bike Shop on Martha's Vineyard",
    description:
      "Independent bike shop on Martha's Vineyard. Bicycle sales, service, and professional repairs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brickyard Bicycles | Bike Shop on Martha's Vineyard",
    description:
      "Independent bike shop on Martha's Vineyard. Bicycle sales, service, and professional repairs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
