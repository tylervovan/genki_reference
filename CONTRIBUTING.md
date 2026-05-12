# Contributing to Japanese QuickRef

Thanks for your interest in improving Japanese QuickRef! This project is a study companion for the Genki textbook series, built with Next.js 16, Supabase, and Cloudflare Workers.

## Quick Start

1. Fork and clone the repo
2. Install dependencies: `npm install`
3. Copy env templates:
   ```bash
   cp .env.example .env.local
   cp .dev.vars.example .dev.vars
   ```
4. Fill in your Supabase + Google Cloud TTS credentials (see `.env.example` for sources)
5. Run the dev server: `npm run dev`

## Project Layout

See [CLAUDE.md](./CLAUDE.md) for the full architecture overview — component hierarchy, data layer, audio pipeline, and the progressive rendering system in `StudyView.tsx`.

## How to Contribute

### Bug reports

Open an issue using the **Bug report** template. Include:
- Steps to reproduce
- Expected vs actual behavior
- Browser / OS
- Console errors (if any)

### Feature requests

Open an issue using the **Feature request** template. Describe the problem first, then the proposed solution.

### Pull requests

1. Create a branch off `main` (`feat/your-feature`, `fix/your-bug`)
2. Make focused changes — one logical change per PR
3. Run `npm run lint` and `npm run build` before pushing
4. If you change lesson content, double-check the corresponding Genki source
5. If you touch `StudyView.tsx`, test hash navigation: `http://localhost:3000/#l1-grammar`
6. Open the PR against `main` with a clear summary

### Commit messages

Conventional commit prefixes preferred:
- `feat:` new feature
- `fix:` bug fix
- `chore:` tooling / build / dependencies
- `docs:` documentation only
- `refactor:` code change without behavior change
- `test:` tests only

## Content Contributions

Lesson content lives in `app/data/genki-lessons.ts`. Every `RefCard` needs a `contentType` (`"vocabulary" | "grammar" | "kanji"`). When adding entries:
- Match the Genki textbook lesson exactly (lesson number, chapter)
- Preserve macron-style romanization (e.g. `ō`, `ū`)
- Include `meaning`, and where relevant `kanji`, `hiragana`, `notes`

## Code Style

- TypeScript strict mode
- Tailwind for styling
- Prefer small, focused components
- No `any` unless escaping a third-party gap (and comment why)

## Reporting Security Issues

Please **do not** open public issues for security vulnerabilities. Email the maintainer instead.

## License

By contributing, you agree your contributions will be licensed under the [MIT License](./LICENSE).
