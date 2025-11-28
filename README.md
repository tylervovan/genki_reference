# Japanese QuickRef - Genki Edition

A modern, QuickRef-style cheat sheet for studying Japanese using content from the Genki textbook series. Organized by topic with chapter attribution for easy reference and future filtering capabilities.

## Features

- **Topic-Based Organization**: Content organized by Japanese language concepts (Particles, Verbs, Greetings, etc.)
- **Chapter Attribution**: Each item tagged with its source chapter from Genki
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

The application currently includes reference materials from Genki I Chapters 1-3:

### Topics Covered

- **Greetings & Basic Expressions** (Chapter 1)
  - Daily greetings
  - Courtesy expressions
  
- **Particles** (Chapters 1-3)
  - は (wa) - Topic marker
  - を (o) - Object marker
  - で (de) - Location of action
  - に (ni) - Direction/Time
  - の (no) - Possessive
  
- **Verbs** (Chapter 3)
  - Common verbs in ます-form
  
- **Numbers & Counting** (Chapter 1)
  - Numbers 0-10
  - Time expressions
  
- **Question Words** (Chapters 1-3)
  - 何 (what), 誰 (who), どこ (where), etc.

## Project Structure

```
app/
├── components/
│   ├── RefCard.tsx       # Individual reference card component
│   ├── Sidebar.tsx       # Navigation sidebar
│   └── TopicSection.tsx  # Topic section wrapper
├── data/
│   ├── types.ts          # TypeScript interfaces
│   └── topics.ts         # Content data (Genki vocabulary, grammar, etc.)
├── globals.css           # Global styles
├── layout.tsx            # Root layout
└── page.tsx              # Main page
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
- [ ] Filter by grammar type
- [ ] Flashcard study mode
- [ ] Audio pronunciation
- [ ] User progress tracking
- [ ] Custom study sets

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Geist Sans

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
