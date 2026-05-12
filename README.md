# Japanese QuickRef - Genki Edition

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Auth_&_DB-3FCF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Cloudflare Workers](https://img.shields.io/badge/Deployed_on-Cloudflare_Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/)
[![License](https://img.shields.io/badge/License-Educational-blue?style=flat-square)](LICENSE)

**[🌸 Live Demo: genki-reference.tylervovan.com](https://genki-reference.tylervovan.com)**

A modern, QuickRef-style cheat sheet for studying Japanese using content from the Genki textbook series. Organized by topic with chapter attribution for easy reference and filtering.

## Features

- **Topic-Based Organization**: Content organized by Japanese language concepts (Particles, Verbs, Greetings, etc.)
- **Chapter Attribution**: Each item tagged with its source chapter from Genki
- **Audio Pronunciation**: Click-to-hear text-to-speech for all Japanese text
- **Dark Mode UI**: Beautiful, easy-on-the-eyes dark interface inspired by QuickRef.me
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Quick Navigation**: Sidebar navigation for instant access to any topic section
- **Rich Examples**: Japanese text with readings (romaji/hiragana) and English translations

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` (or the port shown in your terminal) to view the application.

## Current Content

The application currently includes reference materials from Genki I Chapters 1-10:

### Topics Covered

- **Vocabulary** (Chapters 1-10)
  - Comprehensive vocabulary lists organized by category
  - Includes kanji, readings, and meanings

- **Grammar** (Chapters 1-10)
  - Detailed grammar points with explanations
  - **NEW**: Usage examples with audio, readings, and translations for every grammar concept
  - Broken down by specific concept (e.g., "X is Y", "Te-form", "Short Forms")

- **Kanji** (Chapters 3-10)
  - Kanji characters with readings and meanings

## Project Structure

```
app/
├── api/
│   └── tts/
│       └── route.ts        # Text-to-speech API endpoint
├── components/
│   └── SpeakerButton.tsx   # Audio playback button component
├── hooks/
│   └── useAudioPlayer.ts   # Audio playback hook
├── data/
│   ├── types.ts            # TypeScript interfaces
│   └── genki-lessons.ts    # Content data (Genki vocabulary, grammar, etc.)
├── utils/
│   └── content.ts          # Content type utilities
├── globals.css             # Global styles
├── layout.tsx              # Root layout
└── page.tsx                # Main page

components/
├── StudyView.tsx           # Main view with progressive rendering system
├── RefCard.tsx             # Individual reference card component
├── Sidebar.tsx             # Navigation sidebar
└── FilterBar.tsx           # Content type filter UI
```

## Adding New Content

To add new content, edit `app/data/topics.ts`:

```typescript
{
  id: 'new-topic',
  title: 'New Topic Name',
  icon: '🎌',
  cards: [
    {
      title: 'Card Title',
      description: 'Optional description',
      type: 'list',
      items: [
        {
          japanese: '日本語',
          reading: 'nihongo',
          meaning: 'Japanese language',
          chapter: 1,
          example: {
            japanese: '日本語を勉強します',
            reading: 'nihongo o benkyou shimasu',
            english: 'I study Japanese'
          }
        }
      ]
    }
  ]
}
```

## Future Enhancements
- [x] Audio pronunciation
- [x] Wider grammar cards when filtering by grammar only
- [x] Flashcard study mode
- [x] Custom study sets

## Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | [![Next.js](https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js)](https://nextjs.org/) with App Router |
| **Language** | [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/) |
| **Styling** | [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/) |
| **Database** | [![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/) (PostgreSQL + Auth) |
| **TTS** | [![Google Cloud](https://img.shields.io/badge/Google_Cloud_TTS-4285F4?style=flat-square&logo=googlecloud&logoColor=white)](https://cloud.google.com/text-to-speech) |
| **Deployment** | [![Cloudflare Workers](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://workers.cloudflare.com/) via [@opennextjs/cloudflare](https://opennext.js.org/cloudflare) |
| **Font** | [Geist Sans](https://github.com/vercel/geist-font) (open-source) |

## Architecture Notes

### Progressive Rendering System

The `StudyView` component (`components/StudyView.tsx`) uses a progressive rendering system to prevent a critical mobile bug.

**The Problem**: When users navigate directly to a hash anchor (e.g., `/#l1-grammar`), the combination of thousands of DOM elements, complex CSS columns, and the browser's native hash scroll caused `RangeError: Maximum call stack size exceeded` on mobile devices (especially iOS).

**The Solution**: Content renders in 4 phases:

| Phase | What Happens |
|-------|--------------|
| `initial` | Minimal render, no content |
| `skeleton` | Loading skeleton with pulse animation |
| `content` | Topics render progressively (2 at a time) |
| `complete` | All content visible, IDs enabled, hash navigation ready |

**Key Implementation Details**:
- Element IDs are suppressed until render completes: `id={idsEnabled ? elementId : undefined}`
- Browser native hash scroll disabled via `history.scrollRestoration = 'manual'`
- Hash removed from URL immediately, restored after we control scrolling
- `requestIdleCallback` used to render during browser idle time
- CSS `content-visibility: auto` optimizes off-screen section layout

**If modifying `StudyView.tsx`**: Understand the render phases first. Test hash navigation at `http://localhost:3000/#l1-grammar` after changes.

---

### Audio System

Japanese text-to-speech using Google Cloud TTS API.

| Component | Purpose |
|-----------|---------|
| `app/components/SpeakerButton.tsx` | UI button with loading/playing/error states |
| `app/hooks/useAudioPlayer.ts` | Audio state management, API calls |
| `app/api/tts/route.ts` | Server-side proxy to Google TTS |

**Flow**: Click button → POST to /api/tts → Google TTS → Base64 MP3 → Play

**Requires**: `GOOGLE_CLOUD_API_KEY` environment variable

---

### Authentication System

Google OAuth authentication via Supabase Auth.

**Environment Variables:**

**Local Development (`.env.local`):**
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Cloudflare Workers deployment:**
- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` must be present at *build* time (Next.js inlines them) — set them in the build environment (CI env vars) or in `.env.local` if building locally.
- `GOOGLE_CLOUD_API_KEY` lives only as a Wrangler runtime secret: `wrangler secret put GOOGLE_CLOUD_API_KEY`.
- `NEXT_PUBLIC_SITE_URL` (optional): set to your custom domain to force the OAuth callback to that origin instead of `window.location.origin`.

**Supabase Dashboard Setup (Authentication → URL Configuration):**
- **Site URL**: `https://genki-reference.tylervovan.com`
- **Redirect URLs**:
  - `https://genki-reference.tylervovan.com/auth/callback`
  - `http://localhost:3000/auth/callback` (local dev)

---

### Filtering System

Content filtering by type (Grammar, Vocabulary, Kanji).

| Component | Purpose |
|-----------|---------|
| `components/FilterBar.tsx` | Toggle buttons for filter selection |
| `app/utils/content.ts` | `getCardType()` detects type from card ID |

**How filtering works**: Card IDs must contain `grammar`, `vocab`, or `kanji` for type detection. StudyView filters based on active selections.

---

### Navigation System

Hash anchor navigation via sidebar links.

| Component | Purpose |
|-----------|---------|
| `components/Sidebar.tsx` | Fixed navigation with topic/card links |
| `components/StudyView.tsx` | Hash capture, manual scroll, ID control |

**Why manual**: Native browser hash navigation + thousands of DOM elements = stack overflow. We suppress IDs until render complete, then manually scroll.

---

### Data Layer

Hierarchical content structure.

| File | Purpose |
|------|---------|
| `app/data/types.ts` | TypeScript interfaces |
| `app/data/genki-lessons.ts` | Vocabulary & grammar by lesson (~5000 lines) |
| `app/data/kanji.ts` | Kanji reference (~2200 lines) |
| `app/data/topics.ts` | Aggregates all data sources |

**Hierarchy**: Topic → RefCard[] → ContentItem[]

---

### Component Hierarchy

```
app/page.tsx (Server)
  └── StudyView.tsx (Client - Main Controller)
        ├── Sidebar.tsx
        ├── FilterBar.tsx
        └── RefCard.tsx
              └── SpeakerButton.tsx
```

See `CLAUDE.md` for AI coding assistant documentation.

## Data Source

Content based on "Genki: An Integrated Course in Elementary Japanese" (3rd Edition).

## Contributing

This is a study resource. To add content:

1. Fork the repository
2. Add content to `app/data/topics.ts`
3. Test locally with `npm run dev`
4. Submit a pull request

## License

Educational use only. Genki textbook content © Japan Times Publishing.

---

**Note**: This is a study companion tool. Please support the official Genki textbook series for complete learning materials.
