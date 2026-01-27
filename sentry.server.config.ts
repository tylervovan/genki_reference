/**
 * =============================================================================
 * SENTRY SERVER CONFIGURATION
 * =============================================================================
 *
 * PURPOSE: Configures Sentry error tracking for the Node.js server runtime.
 *
 * WHAT IT DOES:
 * - Initializes Sentry SDK on the server
 * - Captures server-side errors (API routes, Server Components)
 * - Tracks performance traces for server operations
 * - Sends logs to Sentry for debugging
 *
 * WHY IT EXISTS:
 * Enables real-time error monitoring of server-side issues that users
 * may not see directly but impact functionality.
 *
 * CONFIGURATION:
 * - DSN: Set via NEXT_PUBLIC_SENTRY_DSN environment variable
 * - Traces: 100% in development, 10% in production (cost optimization)
 * - PII: Enabled (sends user info for debugging - adjust if needed)
 *
 * DEPENDENCIES:
 * - Uses: @sentry/nextjs
 * - Used by: Node.js server (loaded via instrumentation.ts)
 *
 * RELATED FILES:
 * - sentry.client.config.ts (browser config)
 * - sentry.edge.config.ts (edge runtime config)
 * - instrumentation.ts (server instrumentation entry)
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
