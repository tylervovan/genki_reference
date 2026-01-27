/**
 * =============================================================================
 * SUPABASE BROWSER CLIENT
 * =============================================================================
 *
 * PURPOSE: Creates a Supabase client for use in Client Components (browser)
 *
 * WHAT IT DOES:
 * - Provides a singleton Supabase client for browser-side operations
 * - Handles authentication state via cookies
 * - Used for client-side data fetching and real-time subscriptions
 *
 * WHY IT EXISTS:
 * - Browser components need a client configured for the browser environment
 * - Separates browser client from server client for proper SSR handling
 *
 * HOW TO USE:
 * ```tsx
 * 'use client'
 * import { createClient } from '@/app/lib/supabase/client'
 * 
 * const supabase = createClient()
 * const { data } = await supabase.from('table').select()
 * ```
 *
 * DEPENDENCIES:
 * - Uses: @supabase/ssr
 * - Used by: Client Components needing Supabase access
 *
 * RELATED FILES:
 * - app/lib/supabase/server.ts (server-side client)
 * - app/lib/supabase/middleware.ts (session refresh)
 * =============================================================================
 */

import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

