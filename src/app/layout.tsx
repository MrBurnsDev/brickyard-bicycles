import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brickyardbicycles.com"),
  title: {
    default: "Brickyard Bicycles",
    template: "%s | Brickyard Bicycles",
  },
  description:
    "Service-driven bike shop on Martha's Vineyard specializing in repairs, custom builds, and long-term care.",
  keywords: [
    "bike shop Martha's Vineyard",
    "bicycle repair Martha's Vineyard",
    "cycling Martha's Vineyard",
    "bike service Martha's Vineyard",
    "road bikes",
    "gravel bikes",
    "mountain bikes",
  ],
  authors: [{ name: "Brickyard Bicycles" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Brickyard Bicycles",
    title: "Brickyard Bicycles",
    description:
      "Service-driven bike shop on Martha's Vineyard specializing in repairs, custom builds, and long-term care.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brickyard Bicycles - Martha's Vineyard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brickyard Bicycles",
    description:
      "Service-driven bike shop on Martha's Vineyard specializing in repairs, custom builds, and long-term care.",
    images: ["/images/og-image.jpg"],
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
