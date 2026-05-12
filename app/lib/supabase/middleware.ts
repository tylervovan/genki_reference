/**
 * =============================================================================
 * SUPABASE MIDDLEWARE CLIENT
 * =============================================================================
 *
 * PURPOSE: Creates a Supabase client for use in Next.js Middleware
 *
 * WHAT IT DOES:
 * - Refreshes user sessions before they expire
 * - Updates auth cookies on each request
 * - Enables protected route handling
 *
 * WHY IT EXISTS:
 * - Supabase auth tokens expire and need refreshing
 * - Middleware runs on every request, perfect for session management
 * - Keeps users logged in without manual token refresh
 *
 * HOW IT WORKS:
 * 1. Reads existing auth cookies from request
 * 2. Creates Supabase client with those cookies
 * 3. Calls getUser() to potentially refresh the session
 * 4. Writes updated cookies to response
 *
 * CONSTRAINTS/GOTCHAS:
 * - Must be used with the root middleware.ts file
 * - Returns both supabase client and response object
 *
 * DEPENDENCIES:
 * - Uses: @supabase/ssr, next/server
 * - Used by: middleware.ts (root)
 *
 * RELATED FILES:
 * - middleware.ts (root proxy that uses this)
 * - app/lib/supabase/client.ts (browser client)
 * - app/lib/supabase/server.ts (server client)
 * =============================================================================
 */

import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT: Do not remove this line
  // Calling getUser() ensures the session is refreshed if needed
  // This keeps users logged in and prevents unexpected logouts
  await supabase.auth.getUser()

  return supabaseResponse
}

