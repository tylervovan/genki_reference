/**
 * =============================================================================
 * PRIVACY POLICY PAGE
 * =============================================================================
 *
 * PURPOSE: Static privacy policy describing what data Genki Reference collects
 *   and how it is used.
 *
 * BASED ON: TermsFeed boilerplate (via 0sumcode/0up Next.js starter, MIT).
 *   Tailored for actual data flows in this app (Supabase Auth, Google Cloud
 *   TTS, Cloudflare KV cache, no payments, no public user-generated content).
 *
 * EDIT-FIRST FIELDS: Update CONTACT_EMAIL, OPERATOR, and GOVERNING_LAW below
 *   before going live or using as a Google OAuth privacy URL.
 * =============================================================================
 */

import LegalPage from '@/components/LegalPage';

const CONTACT_EMAIL = 'tylernvovan+genki@gmail.com';
const OPERATOR = 'Genki Reference';
const GOVERNING_LAW = 'the State of California, United States';
const LAST_UPDATED = 'May 12, 2026';

export const metadata = {
  title: 'Privacy Policy · Genki Reference',
  description: 'How Genki Reference collects, uses, and protects your data.',
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <p>
        This Privacy Policy describes the policies and procedures of {OPERATOR} (&quot;we&quot;,
        &quot;us&quot;, or &quot;our&quot;) on the collection, use, and disclosure of your
        information when you use the Genki Reference website and service (the &quot;Service&quot;).
        By using the Service, you agree to the collection and use of information in accordance
        with this Privacy Policy.
      </p>

      <h2>Information We Collect</h2>

      <h3>Account information</h3>
      <p>
        When you sign in with Google, we receive your email address, name, profile picture, and a
        Google account identifier from Google&apos;s OAuth flow. This information is stored in our
        authentication provider (Supabase) and is used to identify your account.
      </p>

      <h3>Study data you create</h3>
      <p>
        When you create flashcard sets or study them, we store your flashcard sets, the items they
        contain, your study sessions, and per-item spaced-repetition progress in our database
        (Supabase). This data is private to your account and protected by row-level security so
        that other users cannot read or modify it.
      </p>

      <h3>Text-to-speech requests</h3>
      <p>
        When you press the speaker button on a card, we send the Japanese text and voice
        parameters to Google Cloud Text-to-Speech to synthesize audio. We cache the resulting
        audio in Cloudflare KV keyed by a SHA-256 hash of the request (no user identifier is part
        of the cache key) for up to 30 days so subsequent plays do not re-bill the API. We also
        keep a short-lived per-user rate-limit counter (60-second window) in Cloudflare KV to
        prevent abuse.
      </p>

      <h3>Usage data</h3>
      <p>
        Like most websites, our infrastructure providers (Cloudflare, Supabase) automatically
        receive standard request metadata such as IP address, user agent, and request path. This
        data is used for security, abuse prevention, and operational diagnostics.
      </p>

      <h3>Error reporting</h3>
      <p>
        If error reporting is enabled, we may send unhandled exceptions and the URL where they
        occurred to Sentry to help us fix bugs. We do not intentionally include personal data in
        error reports.
      </p>

      <h2>How We Use Information</h2>
      <ul>
        <li>To provide and maintain the Service, including signing you in and saving your study data.</li>
        <li>To play back text-to-speech audio you request.</li>
        <li>To enforce rate limits and prevent abuse of the TTS endpoint.</li>
        <li>To diagnose errors and improve reliability.</li>
      </ul>
      <p>
        We do not sell your personal information. We do not run advertising on the Service.
      </p>

      <h2>Service Providers</h2>
      <p>
        We rely on the following processors to operate the Service. Each has its own privacy
        policy that governs how they handle data on our behalf:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> — authentication and database hosting (
          <a href="https://supabase.com/privacy" target="_blank" rel="noreferrer">privacy policy</a>).
        </li>
        <li>
          <strong>Google</strong> — OAuth sign-in and Google Cloud Text-to-Speech (
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">privacy policy</a>).
        </li>
        <li>
          <strong>Cloudflare</strong> — application hosting, edge caching, and key-value storage (
          <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noreferrer">privacy policy</a>).
        </li>
        <li>
          <strong>Sentry</strong> — optional error reporting (
          <a href="https://sentry.io/privacy/" target="_blank" rel="noreferrer">privacy policy</a>).
        </li>
      </ul>

      <h2>Cookies and Local Storage</h2>
      <p>
        We use cookies and similar storage strictly to keep you signed in (Supabase session
        cookies) and to remember UI preferences. We do not use third-party advertising or
        analytics tracking cookies.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain your account and study data for as long as your account is active. TTS audio
        cache entries expire automatically after 30 days. Rate-limit counters expire within
        minutes. You may request deletion of your account and associated data at any time by
        contacting us at the email below.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request to access, correct, export, or delete your personal data by contacting us
        at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Depending on your jurisdiction
        (for example, the EU/UK under GDPR, or California under the CCPA), you may have
        additional rights, including the right to object to or restrict processing, and the right
        to lodge a complaint with a supervisory authority.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        The Service is not directed at children under 13, and we do not knowingly collect personal
        information from children under 13. If you believe a child has provided us with personal
        information, please contact us so we can delete it.
      </p>

      <h2>International Transfers</h2>
      <p>
        Our service providers may process your data in countries other than your own. By using the
        Service you consent to this transfer, which is governed by the privacy practices of those
        providers and applicable law.
      </p>

      <h2>Security</h2>
      <p>
        We use commercially reasonable measures to protect your data, including TLS in transit and
        row-level security on database tables. No method of transmission or storage is 100%
        secure, however, and we cannot guarantee absolute security.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        The Service may link to third-party websites. We are not responsible for the privacy
        practices of those sites. We encourage you to review their privacy policies.
      </p>

      <h2>Your California Privacy Rights</h2>
      <p>
        This section provides additional disclosures required by the California Consumer Privacy
        Act, as amended by the California Privacy Rights Act (collectively, the &quot;CCPA&quot;),
        for California residents.
      </p>

      <h3>Categories of personal information we collect</h3>
      <p>
        In the preceding twelve months, we have collected the following CCPA categories of
        personal information:
      </p>
      <ul>
        <li>
          <strong>Identifiers</strong> — name, email address, Google account identifier, profile
          picture URL, IP address.
        </li>
        <li>
          <strong>Internet or other network activity</strong> — pages visited on the Service,
          request metadata (timestamps, user agent), and TTS requests you initiate.
        </li>
        <li>
          <strong>Inferences</strong> — per-item spaced-repetition state derived from your study
          activity. We do not draw inferences for advertising or profiling.
        </li>
      </ul>
      <p>
        We do <strong>not</strong> collect categories such as government identifiers, financial
        account numbers, precise geolocation, biometric information, health information, or
        sensitive personal information as defined by the CCPA.
      </p>

      <h3>Sources of personal information</h3>
      <ul>
        <li>Directly from you (when you sign in or create flashcard sets).</li>
        <li>Automatically from your device and browser (request metadata).</li>
        <li>From Google&apos;s OAuth flow (account profile fields you authorize).</li>
      </ul>

      <h3>Business and commercial purposes</h3>
      <p>We use personal information for the purposes described in &quot;How We Use Information&quot; above, namely:</p>
      <ul>
        <li>Providing, maintaining, and securing the Service.</li>
        <li>Authenticating you and saving your study data.</li>
        <li>Synthesizing and caching text-to-speech audio you request.</li>
        <li>Rate-limiting and abuse prevention.</li>
        <li>Diagnosing errors and improving reliability.</li>
      </ul>

      <h3>Categories of third parties we disclose to</h3>
      <p>
        We disclose personal information only to the service providers listed in the
        &quot;Service Providers&quot; section (Supabase, Google, Cloudflare, Sentry), each of
        which is contractually limited to processing data on our behalf.
      </p>

      <h3>No sale or sharing of personal information</h3>
      <p>
        We do <strong>not</strong> sell personal information, and we do <strong>not</strong>{' '}
        share personal information for cross-context behavioral advertising, as those terms are
        defined under the CCPA. We have not sold or shared personal information in the preceding
        twelve months. Because we do not sell or share personal information, we do not offer a
        &quot;Do Not Sell or Share My Personal Information&quot; link; this statement satisfies
        that disclosure.
      </p>

      <h3>Retention</h3>
      <p>
        We retain each category of personal information for the periods described in the
        &quot;Data Retention&quot; section, namely: account and study data for as long as your
        account is active; TTS audio cache entries for up to 30 days; rate-limit counters for
        minutes; and request logs as long as needed for security and operational diagnostics,
        consistent with our service providers&apos; retention policies.
      </p>

      <h3>Your rights under the CCPA</h3>
      <p>If you are a California resident, you have the right to:</p>
      <ul>
        <li>
          <strong>Know</strong> what personal information we collect, use, disclose, and (if
          applicable) sell or share about you.
        </li>
        <li>
          <strong>Access</strong> a copy of the specific pieces of personal information we have
          collected about you.
        </li>
        <li>
          <strong>Correct</strong> inaccurate personal information we maintain about you.
        </li>
        <li>
          <strong>Delete</strong> personal information we have collected from you, subject to
          certain exceptions.
        </li>
        <li>
          <strong>Opt out</strong> of the sale or sharing of personal information. (Not
          applicable — we do neither.)
        </li>
        <li>
          <strong>Limit</strong> our use and disclosure of sensitive personal information. (Not
          applicable — we do not collect sensitive personal information for purposes beyond what
          is permitted without a limit request.)
        </li>
        <li>
          <strong>Non-discrimination</strong> — we will not deny service, charge a different
          price, or provide a different level of quality because you exercised your CCPA rights.
        </li>
      </ul>

      <h3>How to submit a request</h3>
      <p>
        You may submit a verifiable consumer request by emailing us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. To protect your information we
        will verify your identity before fulfilling your request, typically by confirming
        ownership of the email address associated with your account. We will respond within the
        time periods required by the CCPA (generally 45 days, extendable once by 45 additional
        days with notice).
      </p>

      <h3>Authorized agents</h3>
      <p>
        You may designate an authorized agent to submit a request on your behalf. We may require
        the agent to provide proof of your written authorization and may require you to verify
        your identity directly with us.
      </p>

      <h3>Shine the Light</h3>
      <p>
        California Civil Code §1798.83 (the &quot;Shine the Light&quot; law) permits California
        residents to request information about disclosures of personal information to third
        parties for those third parties&apos; direct marketing purposes. We do not disclose
        personal information to third parties for their direct marketing purposes.
      </p>

      <h3>Minors</h3>
      <p>
        We do not knowingly sell or share personal information of consumers under 16 years of
        age. (And as noted, we do not sell or share personal information of anyone.)
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will indicate the date of the
        latest revision at the top of this page. Material changes will be communicated by updating
        the &quot;Last updated&quot; date. Continued use of the Service after a change constitutes
        acceptance of the revised policy.
      </p>

      <h2>Governing Law</h2>
      <p>This Privacy Policy is governed by the laws of {GOVERNING_LAW}.</p>

      <h2>Contact</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
