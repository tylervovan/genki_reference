# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Japanese QuickRef - a study companion for the Genki textbook series. Next.js 16 app with Supabase backend, featuring vocabulary/grammar/kanji reference cards with audio pronunciation and custom flashcard sets.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm run test     # Run TTS cache tests
```

## Environment Variables

Required in `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
GOOGLE_CLOUD_API_KEY=your-google-cloud-key
```

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

**Caching**: Vercel KV in production, file-based (`.tts-cache/`) locally

### Authentication

Google OAuth via Supabase Auth.

**Files**:
- `app/auth/callback/route.ts` - OAuth callback
- `app/hooks/useAuth.ts` - Auth state hook
- `app/lib/supabase/` - Client/server/middleware utilities
- `proxy.ts` - Session refresh (Next.js 16 convention, formerly middleware.ts)

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

Update `.cursorrules` for new systems/features. Update `README.md` Architecture Notes for major changes.
