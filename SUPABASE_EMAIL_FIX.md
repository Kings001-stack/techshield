# Fixing Supabase Email Validation Error

## Problem

Getting error: `Email address "test@gmail.com" is invalid` when trying to update email in admin profile.

## Root Cause

Supabase has email domain restrictions or validation rules configured in your project settings that are blocking certain email addresses.

## Solution: Update Supabase Auth Settings

### Step 1: Access Supabase Dashboard

1. Go to https://supabase.com/dashboard
2. Select your "lawfirm" project
3. Navigate to **Authentication** → **Providers** → **Email**

### Step 2: Check Email Settings

Look for these settings and adjust them:

#### Option A: Disable Email Confirmation (Development)

- Find "Enable email confirmations"
- Toggle it OFF for development/testing
- This allows any email format without confirmation

#### Option B: Remove Email Domain Restrictions

- Look for "Email domain allowlist" or "Email domain blocklist"
- If there's an allowlist, either:
  - Add the domains you want to allow (e.g., gmail.com, outlook.com)
  - Or remove the allowlist entirely to allow all domains
- If there's a blocklist, remove any domains you want to allow

#### Option C: Disable Email Validation

- Look for "Email validation" or "Email provider restrictions"
- Disable any strict validation rules
- Allow all email formats

### Step 3: Check Rate Limiting

- Navigate to **Authentication** → **Rate Limits**
- Ensure rate limits aren't too restrictive
- Recommended: 30 requests per hour for email updates

### Step 4: Check Email Templates

- Navigate to **Authentication** → **Email Templates**
- Ensure "Confirm signup" and "Change Email Address" templates are properly configured
- Make sure the redirect URLs are correct

## Alternative: Use Supabase Admin API

If you need to bypass email restrictions programmatically, you can use the Supabase Admin API with a service role key (not recommended for client-side code due to security).

## Testing After Changes

1. Save your Supabase settings
2. Wait 1-2 minutes for changes to propagate
3. Try updating your email again in the admin profile
4. Check browser console for any additional error messages

## Common Email Providers That Should Work

Once restrictions are removed, these should all work:

- Gmail (gmail.com)
- Outlook (outlook.com, hotmail.com)
- Yahoo (yahoo.com)
- ProtonMail (protonmail.com)
- Custom domains (yourdomain.com)

## Still Having Issues?

1. Check browser console (F12) for detailed error messages
2. Check Supabase logs in Dashboard → Logs → Auth Logs
3. Verify your Supabase project is on the correct plan (some features require paid plans)
4. Contact Supabase support if the issue persists

## Current Workaround in Code

The code now includes:

- Better error messages
- Console logging for debugging
- Automatic user data refresh after successful update
- Helpful UI hints about email restrictions
