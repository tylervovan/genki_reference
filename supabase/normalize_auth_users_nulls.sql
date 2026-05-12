-- =============================================================================
-- NORMALIZE auth.users NULL token columns
-- =============================================================================
-- After restoring a paused Supabase project, the auth.users table can carry
-- NULL values in columns that newer versions of GoTrue (the auth service)
-- expect to be non-null strings. Symptom: every OAuth sign-in fails with
--   "unable to fetch records: sql: Scan error on column index 8, name
--    \"email_change\": converting NULL to string is unsupported"
-- and the user lands on /?auth_error=true.
--
-- Fix: coerce the affected columns to empty strings. Run via the Supabase
-- SQL editor (no `supabase db push` required for a one-off normalization).
-- =============================================================================

UPDATE auth.users
SET
  email_change                = COALESCE(email_change, ''),
  email_change_token_current  = COALESCE(email_change_token_current, ''),
  email_change_token_new      = COALESCE(email_change_token_new, ''),
  recovery_token              = COALESCE(recovery_token, ''),
  confirmation_token          = COALESCE(confirmation_token, ''),
  phone_change                = COALESCE(phone_change, ''),
  phone_change_token          = COALESCE(phone_change_token, ''),
  reauthentication_token      = COALESCE(reauthentication_token, '')
WHERE
  email_change IS NULL OR
  email_change_token_current IS NULL OR
  email_change_token_new IS NULL OR
  recovery_token IS NULL OR
  confirmation_token IS NULL OR
  phone_change IS NULL OR
  phone_change_token IS NULL OR
  reauthentication_token IS NULL;
