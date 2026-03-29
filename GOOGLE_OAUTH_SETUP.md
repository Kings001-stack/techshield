# 🔐 Google OAuth Configuration Guide

This document provides a step-by-step walkthrough for configuring Google Sign-In for your TechShield Legal Services administrator portal. To enable secure Google access, you'll need to link your **Google Cloud Console** with your **Supabase Dashboard**.

---

## Part 1: Google Cloud Console Setup

1.  **Enter the Vault**: Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  **Create a New Registry**: 
    *   Click on the **Project Dropdown** (top-left) and select **New Project**.
    *   Name it `TechShield-Legal-Admin` and click **Create**.
3.  **Configure the Consent Screen**:
    *   Navigate to **APIs & Services** > **OAuth consent screen** via the sidebar.
    *   Choose **External** (unless you have a Google Workspace) and click **Create**.
    *   **App Information**: Set "App name" to `TechShield Legal Admin` and provide your support email.
    *   **Developer Contact**: Enter your email address at the bottom.
    *   Click **Save and Continue** until the end, then click **Back to Dashboard**.
4.  **Issue Security Credentials**:
    *   Go to **APIs & Services** > **Credentials**.
    *   Click **+ CREATE CREDENTIALS** and select **OAuth client ID**.
    *   **Application type**: Select **Web application**.
    *   **Name**: `Supabase Auth Redirect`.
    *   **Authorized redirect URIs**: You will get this from Part 2 (Supabase).
    *   Click **Create**.

---

## Part 2: Linking with Supabase

1.  **Retrieve Redirect URI**:
    *   Go to your [Supabase Dashboard](https://supabase.com/dashboard).
    *   Navigate to **Authentication** > **Providers** > **Google**.
    *   Locate the **Callback URL (Redirect URI)** field. **Copy this URL**.
2.  **Authorize the URI in Google**:
    *   Return to your Google Cloud Credential (created in Part 1).
    *   Paste the URL into the **Authorized redirect URIs** section.
    *   Click **Save**.
3.  **Transfer Security Keys**:
    *   Your Google Credential will display a **Client ID** and **Client Secret**.
    *   Copy and paste these directly into the corresponding fields in the **Supabase Google Provider** settings.
    *   Click **Save** in the Supabase Dashboard.

---

## Part 3: Final Dashboard Alignment

To ensure the login journey is seamless, you must whitelist your application's routes:

1.  In **Supabase**, go to **Authentication** > **URL Configuration**.
2.  **Site URL**: Set this to your production URL (or `http://localhost:3000` during development).
3.  **Redirect URLs**: Add the following precisely:
    *   `http://localhost:3000/admin/bookings`
    *   `http://localhost:3000/admin/reset-password`

---

## ✅ Deployment Verification
Once complete, you can return to the `/admin/login` page on your local site. Clicking **"Sign in with Google"** will now trigger an encrypted handshake with Google, granting you secure administrator access to the TechShield registry.
