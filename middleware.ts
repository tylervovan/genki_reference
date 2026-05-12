/**
 * =============================================================================
 * EDGE MIDDLEWARE
 * =============================================================================
 *
 * PURPOSE: Handles request-level operations before routes are processed.
 *
 * IMPORTANT — DO NOT add `export const runtime = 'edge'` here.
 * Next.js 16 treats a runtime export on middleware.ts as a route-segment
 * config and the build fails with "Page /middleware provided runtime 'edge',
 * the edge runtime for rendering is currently experimental." The legacy
 * `middleware.ts` filename inherently runs on the Edge runtime (its defining
 * characteristic — no explicit declaration needed). We use the legacy
 * filename rather than Next.js 16's `proxy.ts` because @opennextjs/cloudflare
 * doesn't yet support Node.js middleware (the new default for proxy.ts).
 *
 * WHAT IT DOES:
 * - Refreshes Supabase auth sessions on every request
 * - Keeps users logged in by updating auth cookies
 * - Can be extended for protected route handling
 *
 * WHY IT EXISTS:
 * - Supabase JWTs expire and need refreshing
 * - Running on every request ensures sessions stay valid
 * - Centralized auth handling instead of per-page checks
 *
 * HOW IT WORKS:
 * 1. Request comes in
 * 2. updateSession() reads auth cookies, refreshes if needed
 * 3. Updated cookies written to response
 * 4. Request continues to route handler
 *
 * FUTURE: Add protected route logic here when needed
 * Example: Redirect to /login if user not authenticated on /dashboard
 *
 * DEPENDENCIES:
 * - Uses: app/lib/supabase/middleware.ts
 * - Used by: Next.js (automatically on matching routes)
 *
 * RELATED FILES:
 * - app/lib/supabase/middleware.ts (session update logic)
 * =============================================================================
 */

import { type NextRequest } from 'next/server'
import { updateSession } from '@/app/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Public files (images, etc.)
     * - monitoring (Sentry tunnelRoute — see next.config.ts tunnelRoute);
     *   skipping prevents Supabase session refresh from intercepting every
     *   client-side error beacon.
     */
    '/((?!_next/static|_next/image|favicon.ico|monitoring|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

