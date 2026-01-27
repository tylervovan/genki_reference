/**
 * =============================================================================
 * SENTRY CLIENT CONFIGURATION
 * =============================================================================
 *
 * PURPOSE: Configures Sentry error tracking for the browser/client-side.
 *
 * WHAT IT DOES:
 * - Initializes Sentry SDK in the browser
 * - Captures client-side JavaScript errors
 * - Records session replays for debugging
 * - Tracks performance traces
 *
 * WHY IT EXISTS:
 * Enables real-time error monitoring and debugging of production issues
 * that occur in users' browsers.
 *
 * CONFIGURATION:
 * - DSN: Set via NEXT_PUBLIC_SENTRY_DSN environment variable
 * - Traces: 100% in development, 10% in production (cost optimization)
 * - Replays: 10% of sessions, 100% of sessions with errors
 *
 * DEPENDENCIES:
 * - Uses: @sentry/nextjs
 * - Used by: Browser (loaded via instrumentation-client.ts)
 *
 * RELATED FILES:
 * - sentry.server.config.ts (server-side config)
 * - sentry.edge.config.ts (edge runtime config)
 * - instrumentation-client.ts (client instrumentation entry)
 * =============================================================================
 */

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
  ],

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  // 1.0 = 100% of traces (expensive in production), 0.1 = 10% recommended for production
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});

