import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * =============================================================================
   * SECURITY HEADERS
   * =============================================================================
   * Adds security headers to all responses to protect against common attacks.
   * 
   * Headers explained:
   * - X-Frame-Options: Prevents clickjacking by disabling iframe embedding
   * - X-Content-Type-Options: Prevents MIME type sniffing attacks
   * - Referrer-Policy: Controls what referrer info is sent with requests
   * - X-XSS-Protection: Legacy XSS filter (for older browsers)
   * - Permissions-Policy: Restricts browser features (camera, mic, etc.)
   * =============================================================================
   */
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: "tylervovan",

  project: "genki_reference",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,

  // Suppress warning if SENTRY_AUTH_TOKEN is missing (e.g. in Vercel builds without the secret)
  sourcemaps: {
    disable: !process.env.SENTRY_AUTH_TOKEN,
  },
});