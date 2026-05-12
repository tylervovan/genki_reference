/**
 * Verifies the deterministic portion of the Google OAuth flow:
 *   home → click "Sign in" → Supabase /auth/v1/authorize → accounts.google.com
 *
 * We stop at Google's consent screen because completing it requires a real
 * Google account. The cases this test catches are the ones that the
 * Vercel→Cloudflare migration broke:
 *  - Supabase returning `{"error_code":"validation_failed","msg":"Unsupported
 *    provider: provider is not enabled"}` when Google isn't enabled.
 *  - OAuth client redirect URI pointing at a different Supabase project
 *    (Google rejects with redirect_uri_mismatch).
 *  - Misconfigured redirect_to allowlist in Supabase.
 */
import { test, expect } from "@playwright/test";

test.describe("Google OAuth sign-in", () => {
  test("button initiates OAuth and reaches Google's auth screen", async ({ page }) => {
    await page.goto("/");

    const signInButton = page.getByRole("button", { name: /^sign in$/i });
    await expect(signInButton).toBeVisible();
    await signInButton.click();

    // Supabase's /authorize redirects to Google. We just need the final hop
    // to be on accounts.google.com — any error en route would leave us on
    // Supabase or our own origin instead.
    await page.waitForURL(/accounts\.google\.com/, { timeout: 15_000 });

    const url = new URL(page.url());
    expect(url.host).toMatch(/accounts\.google\.com$/);
    expect(url.searchParams.get("client_id")).toBeTruthy();
    expect(url.searchParams.get("redirect_uri")).toMatch(
      /supabase\.co\/auth\/v1\/callback$/,
    );
  });

  test("Supabase /auth/v1/authorize does not return validation_failed", async ({ page }) => {
    const supabaseAuthFailures: Array<{ status: number; body: string }> = [];
    page.on("response", async (response) => {
      const url = response.url();
      if (url.includes(".supabase.co/auth/v1/authorize") && response.status() >= 400) {
        let body = "<unreadable>";
        try {
          body = await response.text();
        } catch {
          /* ignore */
        }
        supabaseAuthFailures.push({ status: response.status(), body });
      }
    });

    await page.goto("/");
    await page.getByRole("button", { name: /^sign in$/i }).click();
    await page
      .waitForURL(/accounts\.google\.com/, { timeout: 15_000 })
      .catch(() => {
        // Swallow the navigation timeout — the assertion below carries the
        // actionable error message when Supabase rejects us first.
      });

    expect(
      supabaseAuthFailures,
      `Supabase /authorize returned errors: ${JSON.stringify(supabaseAuthFailures, null, 2)}`,
    ).toEqual([]);
  });
});
