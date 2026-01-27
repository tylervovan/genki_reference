/**
 * =============================================================================
 * ROOT LAYOUT
 * =============================================================================
 *
 * PURPOSE: Next.js App Router root layout - wraps all pages.
 *
 * WHAT IT DOES:
 * - Configures Geist Sans and Geist Mono fonts
 * - Sets HTML metadata (title, description)
 * - Applies global CSS styles
 * - Includes Vercel Speed Insights for performance monitoring
 * - Includes Vercel Analytics for web analytics (page views, visitors)
 *
 * WHY IT EXISTS:
 * Required by Next.js App Router. Single source for app-wide configuration
 * like fonts, metadata, and analytics.
 *
 * HOW IT WORKS:
 * - Fonts loaded via next/font/google for optimal performance
 * - CSS variables (--font-geist-sans, --font-geist-mono) available globally
 * - SpeedInsights component auto-tracks Core Web Vitals
 *
 * CONSTRAINTS/GOTCHAS:
 * - Must export metadata object for SEO
 * - Changes here affect all pages
 * - Font loading is automatic but adds small initial delay
 *
 * DEPENDENCIES:
 * - Uses: Next.js Metadata API
 * - Uses: Geist fonts from Google Fonts
 * - Uses: Vercel Speed Insights
 * - Uses: Vercel Analytics
 * - Uses: app/globals.css
 *
 * RELATED FILES:
 * - app/page.tsx - Main page rendered inside this layout
 * - app/globals.css - Global styles applied here
 * =============================================================================
 */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenkiRef - Japanese Cheat Sheets",
  description: "Quick reference for Genki I (3rd Edition) grammar and vocabulary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
