/**
 * =============================================================================
 * USER MENU COMPONENT
 * =============================================================================
 *
 * PURPOSE: Displays user authentication status with sign-in/sign-out controls
 *
 * WHAT IT DOES:
 * - Shows Google sign-in button when logged out
 * - Displays user avatar/info when logged in
 * - Provides dropdown menu with sign-out option
 * - Handles loading states gracefully
 *
 * WHY IT EXISTS:
 * - Users need a clear way to sign in to save flashcard sets
 * - Provides consistent auth UI across the application
 * - Integrates with Supabase Google OAuth flow
 *
 * HOW IT WORKS:
 * 1. Uses useAuth hook to get current auth state
 * 2. Renders sign-in button or user dropdown based on state
 * 3. Sign-in initiates Google OAuth flow
 * 4. Dropdown shows user info and sign-out button
 *
 * CONSTRAINTS/GOTCHAS:
 * - Dropdown closes on outside click or Escape key
 * - Avatar falls back to first letter of email if no photo
 * - Loading state prevents flash of wrong UI
 *
 * DEPENDENCIES:
 * - Uses: useAuth hook from app/hooks/useAuth.ts
 * - Used by: AppShell component
 *
 * RELATED FILES:
 * - app/hooks/useAuth.ts - Auth state management
 * - components/AppShell.tsx - Parent component
 * - app/auth/callback/route.ts - OAuth callback handler
 * =============================================================================
 */

'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '@/app/hooks/useAuth'

export default function UserMenu() {
  const { user, loading, signInWithGoogle, signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [isSigningIn, setIsSigningIn] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  const handleSignIn = async () => {
    setIsSigningIn(true)
    try {
      await signInWithGoogle()
      // Note: The page will redirect to Google, so this won't complete
    } catch (error) {
      console.error('Failed to sign in:', error)
      setIsSigningIn(false)
    }
  }

  const handleSignOut = async () => {
    setIsOpen(false)
    try {
      await signOut()
    } catch (error) {
      console.error('Failed to sign out:', error)
    }
  }

  // Loading state - show skeleton
  if (loading) {
    return (
      <div className="w-9 h-9 rounded-full bg-slate-700 animate-pulse" />
    )
  }

  // Not signed in - show sign in button
  if (!user) {
    return (
      <button
        onClick={handleSignIn}
        disabled={isSigningIn}
        className="
          flex items-center gap-2 px-3 py-2 rounded-lg
          bg-slate-800 border border-slate-600
          hover:bg-slate-700 hover:border-slate-500
          text-sm font-medium text-slate-200
          transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {isSigningIn ? (
          <>
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
              <circle 
                className="opacity-25" 
                cx="12" cy="12" r="10" 
                stroke="currentColor" 
                strokeWidth="4" 
                fill="none" 
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
              />
            </svg>
            <span className="hidden sm:inline">Signing in...</span>
          </>
        ) : (
          <>
            {/* Google icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="hidden sm:inline">Sign in</span>
          </>
        )}
      </button>
    )
  }

  // Signed in - show user menu
  const avatarUrl = user.user_metadata?.avatar_url
  const name = user.user_metadata?.full_name || user.email
  const email = user.email
  const initials = (name || email || 'U').charAt(0).toUpperCase()

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2 p-0.5 rounded-full
          bg-slate-800 border-2 border-transparent
          hover:border-indigo-500/50
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900
        "
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name || 'User avatar'}
            className="w-8 h-8 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <span className="text-sm font-semibold text-white">{initials}</span>
          </div>
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className="
            absolute right-0 mt-2 w-64
            bg-slate-800 border border-slate-700 rounded-xl
            shadow-xl shadow-black/20
            overflow-hidden
            animate-in fade-in slide-in-from-top-2 duration-200
          "
        >
          {/* User Info */}
          <div className="px-4 py-3 border-b border-slate-700">
            <div className="flex items-center gap-3">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-lg font-semibold text-white">{initials}</span>
                </div>
              )}
              <div className="flex-1 min-w-0">
                {name && name !== email && (
                  <p className="text-sm font-medium text-slate-200 truncate">
                    {name}
                  </p>
                )}
                <p className="text-xs text-slate-400 truncate">
                  {email}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-2">
            <button
              onClick={handleSignOut}
              className="
                w-full flex items-center gap-3 px-3 py-2 rounded-lg
                text-sm text-slate-300
                hover:bg-slate-700/50 hover:text-slate-200
                transition-colors duration-150
              "
            >
              <svg 
                className="w-4 h-4 text-slate-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                />
              </svg>
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

