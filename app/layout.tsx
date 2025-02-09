import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { BackgroundShapes } from "@/components/background-shapes";
import type React from "react";
import type { Metadata } from "next";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "picDash - Free SVG to PNG Converter",
    template: "%s | picDash",
  },
  description:
    "Convert SVG files to high-quality PNG images instantly. Free forever, no sign-up needed. Perfect for designers and developers.",
  keywords: [
    "SVG",
    "PNG",
    "converter",
    "image conversion",
    "free tool",
    "design",
    "development",
    "picDash",
    "QuickPic",
    "quickpic",
  ],
  authors: [{ name: "JR" }],
  creator: "JRSystems",
  publisher: "JRSystems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "picDash - Free SVG to PNG Converter",
    description:
      "Convert SVG files to high-quality PNG images instantly. Free forever, no sign-up needed.",
    url: "https://picDash.jrsystems.io",
    siteName: "picDash",
    images: [
      {
        url: "https://picDash.jrsystems.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickPic - SVG to PNG Converter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickPic - Free SVG to PNG Converter",
    description:
      "Convert SVG files to high-quality PNG images instantly. Free forever, no sign-up needed.",
    images: ["https://picDash.jrsystems.io/og-image.png"],
    creator: "@jrsystems",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <SpeedInsights />
      <Analytics />
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <BackgroundShapes />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
