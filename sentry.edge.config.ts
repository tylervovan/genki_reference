/**
 * =============================================================================
 * SENTRY EDGE CONFIGURATION
 * =============================================================================
 *
 * PURPOSE: Configures Sentry error tracking for edge runtime (proxy/middleware).
 *
 * WHAT IT DOES:
 * - Initializes Sentry SDK in edge runtime
 * - Captures errors from middleware.ts and edge API routes
 * - Tracks performance traces for edge operations
 *
 * WHY IT EXISTS:
 * Edge runtime is a separate environment from Node.js server.
 * This config ensures Sentry works in edge functions.
 *
 * CONFIGURATION:
 * - DSN: Set via NEXT_PUBLIC_SENTRY_DSN environment variable
 * - Traces: 100% in development, 10% in production (cost optimization)
 * - PII: Enabled (sends user info for debugging - adjust if needed)
 *
 * NOTE: This config is required even when running locally, as Next.js
 * may use the edge runtime for certain features.
 *
 * DEPENDENCIES:
 * - Uses: @sentry/nextjs
 * - Used by: Edge runtime (loaded via instrumentation.ts)
 *
 * RELATED FILES:
 * - sentry.client.config.ts (browser config)
 * - sentry.server.config.ts (server config)
 * - middleware.ts (edge proxy that uses this)
 * =============================================================================
 */

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  // 1.0 = 100% of traces (expensive in production), 0.1 = 10% recommended for production
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  // Enable sending user PII (Personally Identifiable Information)
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,
});
