-- =============================================================================
-- GENKI REFERENCE - DATABASE SCHEMA
-- =============================================================================
-- Run this SQL in Supabase Dashboard > SQL Editor > New Query
--
-- PURPOSE: Sets up tables for flashcard study app with subscriptions
--
-- TABLES:
-- - profiles: User profiles with subscription status
-- - flashcard_sets: User-created study sets
-- - flashcard_items: Items within study sets
-- - study_sessions: Track when users study
-- - study_progress: Item-level mastery tracking (SRS data)
-- =============================================================================

-- Enable UUID extension (should already be enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================================================
-- PROFILES TABLE
-- =============================================================================
-- Extends Supabase Auth with app-specific user data
-- Automatically created when a user signs up via trigger

CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  display_name TEXT,
  avatar_url TEXT,
  
  -- Subscription fields
  subscription_status TEXT DEFAULT 'free' CHECK (subscription_status IN ('free', 'premium', 'cancelled')),
  subscription_id TEXT, -- Stripe subscription ID
  subscription_ends_at TIMESTAMPTZ,
  
  -- Stats
  total_items_studied INTEGER DEFAULT 0,
  total_study_time_minutes INTEGER DEFAULT 0,
  current_streak_days INTEGER DEFAULT 0,
  longest_streak_days INTEGER DEFAULT 0,
  last_study_date DATE,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Auto-create profile when user signs up
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_catalog
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, display_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'display_name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$;

-- Trigger to create profile on signup
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();

-- =============================================================================
-- FLASHCARD SETS TABLE
-- =============================================================================
-- User-created study sets (collections of items to study)

CREATE TABLE IF NOT EXISTS flashcard_sets (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT DEFAULT '📚', -- Emoji icon for the set
  color TEXT DEFAULT '#6366f1', -- Theme color
  
  -- Set type: 'custom' = user-created, 'lesson' = based on Genki lesson
  set_type TEXT DEFAULT 'custom' CHECK (set_type IN ('custom', 'lesson', 'mixed')),
  source_lesson INTEGER, -- If based on a Genki lesson (1-10)
  
  -- Content filters (for lesson-based sets)
  include_vocabulary BOOLEAN DEFAULT true,
  include_grammar BOOLEAN DEFAULT true,
  include_kanji BOOLEAN DEFAULT true,
  
  -- Stats (denormalized for performance)
  total_items INTEGER DEFAULT 0,
  items_mastered INTEGER DEFAULT 0,
  
  is_public BOOLEAN DEFAULT false, -- Future: share sets
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast user lookups
CREATE INDEX IF NOT EXISTS idx_flashcard_sets_user_id ON flashcard_sets(user_id);

-- =============================================================================
-- FLASHCARD ITEMS TABLE
-- =============================================================================
-- Individual items within a set (can reference Genki content or be custom)

CREATE TABLE IF NOT EXISTS flashcard_items (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  set_id UUID REFERENCES flashcard_sets(id) ON DELETE CASCADE NOT NULL,
  
  -- Content (for custom items)
  front_text TEXT NOT NULL, -- Question/Japanese text
  back_text TEXT NOT NULL, -- Answer/English meaning
  reading TEXT, -- Hiragana/romaji reading
  
  -- Example sentence (optional)
  example_japanese TEXT,
  example_reading TEXT,
  example_translation TEXT,
  
  -- Reference to Genki content (if not custom)
  source_type TEXT CHECK (source_type IN ('custom', 'vocabulary', 'grammar', 'kanji')),
  source_lesson INTEGER, -- Genki lesson number
  source_item_id TEXT, -- Original item ID from genki-lessons.ts
  
  -- Item order within set
  position INTEGER DEFAULT 0,
  
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast set lookups
CREATE INDEX IF NOT EXISTS idx_flashcard_items_set_id ON flashcard_items(set_id);

-- =============================================================================
-- STUDY SESSIONS TABLE
-- =============================================================================
-- Tracks individual study sessions for analytics

CREATE TABLE IF NOT EXISTS study_sessions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  set_id UUID REFERENCES flashcard_sets(id) ON DELETE SET NULL,
  
  started_at TIMESTAMPTZ DEFAULT NOW(),
  ended_at TIMESTAMPTZ,
  
  -- Session stats
  items_reviewed INTEGER DEFAULT 0,
  items_correct INTEGER DEFAULT 0,
  items_incorrect INTEGER DEFAULT 0,
  duration_seconds INTEGER,
  
  -- Study mode used
  study_mode TEXT DEFAULT 'review' CHECK (study_mode IN ('review', 'learn', 'quiz', 'cram'))
);

-- Index for user session history
CREATE INDEX IF NOT EXISTS idx_study_sessions_user_id ON study_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_study_sessions_started_at ON study_sessions(started_at DESC);

-- =============================================================================
-- STUDY PROGRESS TABLE
-- =============================================================================
-- Per-item progress tracking (SRS - Spaced Repetition System)

CREATE TABLE IF NOT EXISTS study_progress (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  item_id UUID REFERENCES flashcard_items(id) ON DELETE CASCADE NOT NULL,
  
  -- SRS fields
  ease_factor REAL DEFAULT 2.5, -- Difficulty multiplier (SM-2 algorithm)
  interval_days INTEGER DEFAULT 0, -- Days until next review
  repetitions INTEGER DEFAULT 0, -- Successful reviews in a row
  
  -- Review tracking
  next_review_at TIMESTAMPTZ DEFAULT NOW(),
  last_reviewed_at TIMESTAMPTZ,
  
  -- Stats
  times_reviewed INTEGER DEFAULT 0,
  times_correct INTEGER DEFAULT 0,
  times_incorrect INTEGER DEFAULT 0,
  
  -- Mastery level: 0=new, 1=learning, 2=reviewing, 3=mastered
  mastery_level INTEGER DEFAULT 0 CHECK (mastery_level BETWEEN 0 AND 3),
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  
  -- Ensure one progress record per user per item
  UNIQUE(user_id, item_id)
);

-- Indexes for SRS queries
CREATE INDEX IF NOT EXISTS idx_study_progress_user_id ON study_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_study_progress_next_review ON study_progress(user_id, next_review_at);

-- =============================================================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================================================
-- Users can only access their own data

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcard_sets ENABLE ROW LEVEL SECURITY;
ALTER TABLE flashcard_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_progress ENABLE ROW LEVEL SECURITY;

-- Profiles: Users can read/update their own profile
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Flashcard Sets: Users can CRUD their own sets
CREATE POLICY "Users can view own sets" ON flashcard_sets
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create sets" ON flashcard_sets
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sets" ON flashcard_sets
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own sets" ON flashcard_sets
  FOR DELETE USING (auth.uid() = user_id);

-- Flashcard Items: Access through set ownership
CREATE POLICY "Users can view items in own sets" ON flashcard_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM flashcard_sets 
      WHERE flashcard_sets.id = flashcard_items.set_id 
      AND flashcard_sets.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create items in own sets" ON flashcard_items
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM flashcard_sets 
      WHERE flashcard_sets.id = flashcard_items.set_id 
      AND flashcard_sets.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update items in own sets" ON flashcard_items
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM flashcard_sets 
      WHERE flashcard_sets.id = flashcard_items.set_id 
      AND flashcard_sets.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete items in own sets" ON flashcard_items
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM flashcard_sets 
      WHERE flashcard_sets.id = flashcard_items.set_id 
      AND flashcard_sets.user_id = auth.uid()
    )
  );

-- Study Sessions: Users can CRUD their own sessions
CREATE POLICY "Users can view own sessions" ON study_sessions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create sessions" ON study_sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own sessions" ON study_sessions
  FOR UPDATE USING (auth.uid() = user_id);

-- Study Progress: Users can CRUD their own progress
CREATE POLICY "Users can view own progress" ON study_progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create progress" ON study_progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON study_progress
  FOR UPDATE USING (auth.uid() = user_id);

-- =============================================================================
-- UPDATED_AT TRIGGER
-- =============================================================================
-- Auto-update updated_at timestamp on row changes

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public, pg_catalog
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_flashcard_sets_updated_at
  BEFORE UPDATE ON flashcard_sets
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_study_progress_updated_at
  BEFORE UPDATE ON study_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================================================
-- DONE! 
-- =============================================================================
-- Your database is ready for the flashcard study app.
-- Next steps:
-- 1. Enable Email Auth in Supabase Dashboard > Authentication > Providers
-- 2. (Optional) Enable Google/GitHub OAuth for social login
-- 3. Start building the flashcard UI!

