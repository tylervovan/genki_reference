-- =============================================================================
-- FIX SUPABASE SECURITY WARNINGS
-- =============================================================================
-- Run this SQL in Supabase Dashboard > SQL Editor > New Query
--
-- PURPOSE: Fixes mutable search_path warnings for database functions
--
-- WARNINGS ADDRESSED:
-- 1. function_search_path_mutable - handle_new_user
-- 2. function_search_path_mutable - update_updated_at_column
-- =============================================================================

-- Fix handle_new_user function
-- Adds explicit search_path to prevent security vulnerabilities
CREATE OR REPLACE FUNCTION public.handle_new_user()
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

-- Fix update_updated_at_column function
-- Adds explicit search_path to prevent security vulnerabilities
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public, pg_catalog
AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$;

-- =============================================================================
-- VERIFICATION
-- =============================================================================
-- After running this script, verify the fixes worked:
-- 1. Check Supabase Dashboard > Database > Linter
-- 2. The two function_search_path_mutable warnings should be resolved
-- =============================================================================


