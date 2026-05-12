/**
 * =============================================================================
 * USE AUTH HOOK
 * =============================================================================
 *
 * PURPOSE: Provides authentication state and methods for client components
 *
 * WHAT IT DOES:
 * - Tracks current user state (logged in/out)
 * - Provides signInWithGoogle() method for OAuth authentication
 * - Provides signOut() method for logging out
 * - Listens for auth state changes (login/logout in other tabs)
 *
 * WHY IT EXISTS:
 * - Centralizes auth logic instead of duplicating across components
 * - Provides reactive auth state that updates across the app
 * - Abstracts Supabase auth methods for easier use
 *
 * HOW IT WORKS:
 * 1. On mount, checks current session via getUser()
 * 2. Subscribes to onAuthStateChange for real-time updates
 * 3. Cleans up subscription on unmount
 *
 * USAGE:
 * ```tsx
 * const { user, loading, signInWithGoogle, signOut } = useAuth()
 * 
 * if (loading) return <Spinner />
 * if (user) return <UserProfile user={user} onSignOut={signOut} />
 * return <SignInButton onClick={signInWithGoogle} />
 * ```
 *
 * CONSTRAINTS/GOTCHAS:
 * - Must be used in client components only ('use client')
 * - Initial loading state may cause flash of unauthenticated content
 * - OAuth redirect URL: NEXT_PUBLIC_SITE_URL (if set) else window.location.origin
 * - Every redirect URL must be on Supabase's allow-list (Auth → URL Configuration)
 *
 * DEPENDENCIES:
 * - Uses: @/app/lib/supabase/client
 * - Used by: UserMenu component
 *
 * RELATED FILES:
 * - app/lib/supabase/client.ts - Browser Supabase client
 * - components/UserMenu.tsx - Uses this hook
 * - app/auth/callback/route.ts - Handles OAuth redirect
 * =============================================================================
 */

'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/app/lib/supabase/client'
import type { User } from '@supabase/supabase-js'

interface UseAuthReturn {
  user: User | null
  loading: boolean
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  
  // Initialize Supabase client once
  const supabase = createClient()

  useEffect(() => {
    // Get initial session
    const initAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    initAuth()

    // Listen for auth changes (login/logout, session refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase])

  const signInWithGoogle = useCallback(async () => {
    // Determine the correct site URL for OAuth redirect.
    // Priority: 1) Explicit NEXT_PUBLIC_SITE_URL (custom domain), 2) Current origin.
    // window.location.origin auto-adapts to whichever Cloudflare/local host the
    // user is on, so no platform-specific fallback is needed.
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? window.location.origin
    
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${siteUrl}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })

    if (error) {
      console.error('Sign in error:', error.message)
      throw error
    }
  }, [supabase])

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      console.error('Sign out error:', error.message)
      throw error
    }
    
    setUser(null)
  }, [supabase])

  return {
    user,
    loading,
    signInWithGoogle,
    signOut,
  }
}

