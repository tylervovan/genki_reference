# Enable Leaked Password Protection

This document explains how to enable the leaked password protection feature in Supabase Auth.

## Why This Matters

Supabase Auth can prevent users from signing up with passwords that have appeared in known data breaches by checking against HaveIBeenPwned.org. This is a security best practice that helps protect user accounts.

## Steps to Enable

1. **Go to your Supabase Project Dashboard**
   - Navigate to https://supabase.com/dashboard
   - Select your project

2. **Navigate to Authentication Settings**
   - Click on **Authentication** in the left sidebar

3. **Try These Locations (in order):**
   
   **Option A: Attack Protection**
   - Under **CONFIGURATION** in the left sidebar, click **"Attack Protection"**
   - Look for password security or leaked password settings
   
   **Option B: Email Provider Settings**
   - Click on **"Email"** in the Auth Providers list
   - Look for password security options in the Email provider configuration
   
   **Option C: Policies**
   - Under **CONFIGURATION** in the left sidebar, click **"Policies"**
   - Look for password-related security policies

4. **Enable Leaked Password Protection**
   - Find the setting for **"Detect leaked passwords"**, **"Leaked password protection"**, or **"Password breach detection"**
   - Toggle it to **Enabled**

## Note About Location

The exact location of this setting can vary based on your Supabase project version and UI updates. If you don't see it in the above locations:
- Check if your project is on the latest version
- The setting may be under a different name (e.g., "Password breach detection", "HaveIBeenPwned check")
- Some features may only be available on paid plans

## Verification

After enabling:
1. Go to **Database** > **Linter** in your Supabase Dashboard
2. The `auth_leaked_password_protection` warning should be resolved

## Note

This is a dashboard-only setting and cannot be configured via SQL migrations. It must be enabled manually through the Supabase Dashboard.

