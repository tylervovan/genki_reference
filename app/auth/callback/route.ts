/**
 * =============================================================================
 * OAUTH CALLBACK ROUTE
 * =============================================================================
 *
 * PURPOSE: Handles OAuth callback from Supabase providers (Google).
 *
 * IMPORTANT — cookie propagation under Cloudflare Workers / OpenNext.
 * The default Supabase SSR pattern (use the shared server `createClient()` +
 * cookieStore.set(), then return NextResponse.redirect()) relies on Next.js
 * implicitly forwarding cookieStore writes onto the response. Under
 * @opennextjs/cloudflare that propagation is unreliable for a redirect
 * response, and the session cookie silently drops — leaving the browser with
 * only the PKCE code-verifier cookies and an apparently-anonymous session.
 *
 * The fix below constructs the redirect response upfront and writes session
 * cookies straight onto `response.cookies` from inside the setAll callback,
 * so the Set-Cookie headers ride along on the 307 the browser receives.
 * Cache-Control: no-store keeps the CDN from caching the redirect (Cloudflare
 * can strip Set-Cookie from cached redirect responses).
 * =============================================================================
 */

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// Reject any redirect_to that isn't a same-origin absolute path. `//evil.com`,
// schemed URLs, and backslash variants all collapse to a safe default. Protects
// the post-OAuth flow from being weaponized as an open-redirect phishing chain.
function sanitizeRedirectPath(raw: string | null): string {
  if (!raw) return '/'
  if (raw === '/') return '/'
  if (!/^\/[^/\\]/.test(raw)) return '/'
  return raw
}

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const origin = requestUrl.origin
  const redirectTo = sanitizeRedirectPath(requestUrl.searchParams.get('redirect_to'))

  // Diagnostic logging — surface what the callback sees so we can read it via
  // `wrangler tail`. Remove after the OAuth flow is verified working.
  const errParam = requestUrl.searchParams.get('error')
  const errDesc = requestUrl.searchParams.get('error_description')
  console.log('[auth/callback] received', {
    hasCode: !!code,
    errorParam: errParam,
    errorDescription: errDesc?.slice(0, 200) ?? null,
  })

  if (!code) {
    console.error('[auth/callback] no code in query string; redirecting to /?auth_error=true')
    return NextResponse.redirect(`${origin}/?auth_error=true`)
  }

  // Build the success response first so cookies set during exchange ride along.
  const response = NextResponse.redirect(`${origin}${redirectTo}`)
  response.headers.set(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate'
  )

  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            // Keep the cookieStore in sync for any same-request consumers
            // (e.g. follow-up calls inside this handler). Swallowing errors
            // is safe: writing cookies on the response below is what
            // ultimately matters for the browser.
            try {
              cookieStore.set(name, value, options)
            } catch {
              /* ignored */
            }
            response.cookies.set(name, value, options)
          })
        },
      },
    }
  )

  const { data, error } = await supabase.auth.exchangeCodeForSession(code)
  if (error) {
    console.error('[auth/callback] exchangeCodeForSession failed', {
      message: error.message,
      status: (error as { status?: number }).status ?? null,
      name: error.name,
    })
    return NextResponse.redirect(`${origin}/?auth_error=true`)
  }

  console.log('[auth/callback] exchange ok', {
    hasSession: !!data?.session,
    userId: data?.user?.id ?? null,
    cookiesAttached: response.cookies.getAll().map((c) => c.name),
  })

  return response
}
