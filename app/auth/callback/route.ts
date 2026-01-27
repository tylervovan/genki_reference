/**
 * =============================================================================
 * OAUTH CALLBACK ROUTE
 * =============================================================================
 *
 * PURPOSE: Handles OAuth callback from Supabase authentication providers (Google)
 *
 * WHAT IT DOES:
 * - Receives the authorization code from OAuth provider after user authentication
 * - Exchanges the code for a session using Supabase
 * - Redirects user back to the application with authentication complete
 *
 * WHY IT EXISTS:
 * OAuth flow requires a callback URL where the provider redirects after login.
 * This route handles that redirect and completes the authentication process.
 *
 * HOW IT WORKS:
 * 1. Provider redirects here with ?code=XXX query parameter
 * 2. We exchange the code for a session via Supabase
 * 3. User is redirected to the main app (or error page if something went wrong)
 *
 * CONSTRAINTS/GOTCHAS:
 * - The callback URL must be registered in Supabase Dashboard:
 *   Authentication > URL Configuration > Site URL and Redirect URLs
 * - For local development: http://localhost:3000/auth/callback
 * - For production: https://your-domain.com/auth/callback
 *
 * DEPENDENCIES:
 * - Uses: @/app/lib/supabase/server
 * - Used by: Supabase OAuth flow
 *
 * RELATED FILES:
 * - app/lib/supabase/server.ts - Server-side Supabase client
 * - components/UserMenu.tsx - Initiates sign-in flow
 * =============================================================================
 */

import { createClient } from '@/app/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const origin = requestUrl.origin
  const redirectTo = requestUrl.searchParams.get('redirect_to') || '/'

  if (code) {
    const supabase = await createClient()
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    
    if (!error) {
      // Successful authentication - redirect to the app
      return NextResponse.redirect(`${origin}${redirectTo}`)
    }
  }

  // Something went wrong - redirect to home with error indication
  // You could create an error page or show a toast notification
  return NextResponse.redirect(`${origin}/?auth_error=true`)
}

