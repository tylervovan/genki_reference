/**
 * =============================================================================
 * SUPABASE SERVER CLIENT
 * =============================================================================
 *
 * PURPOSE: Creates a Supabase client for use in Server Components & API Routes
 *
 * WHAT IT DOES:
 * - Provides a Supabase client configured for server-side operations
 * - Handles authentication state via cookies (read/write)
 * - Used for server-side data fetching and protected API routes
 *
 * WHY IT EXISTS:
 * - Server Components and API routes need cookie access for auth
 * - Must be created fresh per-request (not a singleton) for proper isolation
 *
 * HOW TO USE:
 * ```tsx
 * // In a Server Component
 * import { createClient } from '@/app/lib/supabase/server'
 * 
 * export default async function Page() {
 *   const supabase = await createClient()
 *   const { data } = await supabase.from('table').select()
 * }
 * ```
 *
 * ```tsx
 * // In an API Route
 * import { createClient } from '@/app/lib/supabase/server'
 * 
 * export async function GET() {
 *   const supabase = await createClient()
 *   const { data: { user } } = await supabase.auth.getUser()
 * }
 * ```
 *
 * CONSTRAINTS/GOTCHAS:
 * - Must use `await createClient()` - it's async
 * - Creates a new client per request (don't cache it)
 *
 * DEPENDENCIES:
 * - Uses: @supabase/ssr, next/headers
 * - Used by: Server Components, API Routes
 *
 * RELATED FILES:
 * - app/lib/supabase/client.ts (browser client)
 * - app/lib/supabase/middleware.ts (session refresh)
 * =============================================================================
 */

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}

