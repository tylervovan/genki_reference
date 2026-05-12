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
 *
 * WHY IT EXISTS:
 * Required by Next.js App Router. Single source for app-wide configuration
 * like fonts, metadata, and analytics.
 *
 * HOW IT WORKS:
 * - Fonts loaded via next/font/google for optimal performance
 * - CSS variables (--font-geist-sans, --font-geist-mono) available globally
 *
 * CONSTRAINTS/GOTCHAS:
 * - Must export metadata object for SEO
 * - Changes here affect all pages
 * - Font loading is automatic but adds small initial delay
 *
 * DEPENDENCIES:
 * - Uses: Next.js Metadata API
 * - Uses: Geist fonts from Google Fonts
 * - Uses: app/globals.css
 *
 * RELATED FILES:
 * - app/page.tsx - Main page rendered inside this layout
 * - app/globals.css - Global styles applied here
 * =============================================================================
 */

import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Plus_Jakarta_Sans,
  Shippori_Mincho,
  DM_Mono,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Brand fonts — see "Genki Stamp Handoff" design spec.
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  weight: ["600", "700", "800"],
  // Shippori Mincho's subsets are Japanese-only on Google Fonts; next/font requires
  // declaring weights but the default subset is auto-served.
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Genki Reference · 元気",
  description:
    "Quick reference for Genki I (3rd Edition) grammar, vocabulary, and kanji.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} ${shipporiMincho.variable} ${dmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
