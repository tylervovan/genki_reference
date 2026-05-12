# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Japanese QuickRef - a study companion for the Genki textbook series. Next.js 16 app with Supabase backend, deployed to Cloudflare Workers via @opennextjs/cloudflare. Live at https://genki-reference.tylervovan.com.

## Commands

```bash
npm run dev          # Start Next.js dev server (http://localhost:3000)
npm run build        # Production build (vanilla Next, used by OpenNext too)
npm run lint         # Run ESLint
npm run preview:cf   # Build for Workers and run wrangler preview locally
npm run deploy:cf    # Build and deploy the Worker to Cloudflare
npm run cf-typegen   # Regenerate cloudflare-env.d.ts from wrangler.jsonc bindings
```

## Environment Variables

Build-time (`.env.local`, inlined by Next.js):
```
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon JWT>
NEXT_PUBLIC_SENTRY_DSN=<optional>
GOOGLE_CLOUD_API_KEY=<for `next dev` only — server-side reads this>
```

Worker runtime (Cloudflare):
- `GOOGLE_CLOUD_API_KEY` is stored as a wrangler secret (`wrangler secret put GOOGLE_CLOUD_API_KEY`).
- `.dev.vars` populates the same secret for `wrangler dev` / `opennextjs-cloudflare preview`.

Worker bindings (from `wrangler.jsonc`):
- `GENKI_TTS_CACHE` — KV namespace for cached TTS audio (30-day TTL)
- `GENKI_RATELIMIT` — KV namespace for per-user TTS rate limits (60s window)
- `ASSETS` — static asset fetcher

## Git Commit Rules

When creating commits, do NOT include "Co-Authored-By" lines in commit messages.

## Architecture

### Component Hierarchy

```
app/page.tsx (Server)
└── AppShell.tsx (Tab Controller)
      ├── TabNavigation.tsx
      ├── UserMenu.tsx
      ├── StudyView.tsx (Reference Tab)
      │     ├── Sidebar.tsx
      │     ├── FilterBar.tsx
      │     └── RefCard.tsx → SpeakerButton.tsx
      └── FlashcardsView.tsx (Flashcards Tab)
            ├── FlashcardSetCreator.tsx
            └── FlashcardStudy.tsx
```

### Data Layer

**Hierarchy**: Topic → RefCard[] → ContentItem[]

| File | Purpose |
|------|---------|
| `app/data/types.ts` | TypeScript interfaces |
| `app/data/genki-lessons.ts` | All lesson content (~6000+ lines) |
| `app/data/topics.ts` | Exports aggregated topics array |

**Every RefCard requires a `contentType` field**: `"vocabulary"`, `"grammar"`, or `"kanji"`

### Critical: Progressive Rendering System

`StudyView.tsx` uses a 4-phase progressive rendering system to prevent mobile stack overflow when loading with hash anchors.

**Phases**: `initial` → `skeleton` → `content` → `complete`

**Key constraints**:
- Element IDs are suppressed until `renderPhase === 'complete'`
- Use pattern: `id={idsEnabled ? elementId : undefined}`
- Hash navigation is controlled manually (browser native scroll disabled)
- Content renders progressively using `requestIdleCallback`

**After modifying StudyView.tsx**: Test hash navigation at `http://localhost:3000/#l1-grammar`

### Audio System (TTS)

Flow: SpeakerButton → useAudioPlayer hook → POST /api/tts → Google Cloud TTS

**Security**:
- Requires authentication (Supabase)
- Rate limited: 20 requests/minute per user
- Max 500 characters per request

**Caching**: Cloudflare KV (`GENKI_TTS_CACHE` binding) via `app/utils/tts-cache.ts`. SHA-256 of text is the cache key; TTL defaults to 30 days. The cache write is attached to `ctx.waitUntil()` so the Worker doesn't terminate before the KV put completes.

**Rate limit storage**: Cloudflare KV (`GENKI_RATELIMIT` binding), 60s window. Has an in-memory fallback used when bindings aren't available (e.g. plain `next dev`).

### Authentication

Google OAuth via Supabase Auth.

**Files**:
- `app/auth/callback/route.ts` - OAuth callback
- `app/hooks/useAuth.ts` - Auth state hook
- `app/lib/supabase/` - Client/server/middleware utilities
- `middleware.ts` - Session refresh. Uses the legacy `middleware.ts` filename (not Next.js 16's `proxy.ts`) because OpenNext on Cloudflare doesn't yet support Node.js middleware. The legacy filename runs on the Edge runtime, which OpenNext does support.

**Supabase clients**:
- Client components: `createClient()` from `@/app/lib/supabase/client`
- Server/API routes: `await createClient()` from `@/app/lib/supabase/server`

### Database (Supabase)

| Table | Purpose |
|-------|---------|
| `profiles` | User data, subscription status |
| `flashcard_sets` | User-created study sets |
| `flashcard_items` | Items within sets |
| `study_sessions` | Session history |
| `study_progress` | Per-item SRS tracking |

Schema in `supabase/schema.sql`. RLS policies restrict users to their own data.

## Documentation Requirements

When creating or significantly modifying files, add a block comment at the top:

```typescript
/**
 * =============================================================================
 * [COMPONENT NAME]
 * =============================================================================
 *
 * PURPOSE: [One sentence]
 * WHAT IT DOES: [Key functionality]
 * WHY IT EXISTS: [Problem solved]
 * CONSTRAINTS/GOTCHAS: [Important caveats]
 * =============================================================================
 */
```

Update this file and `README.md` Architecture Notes for major changes.
