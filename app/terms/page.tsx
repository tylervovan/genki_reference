/**
 * =============================================================================
 * TERMS OF SERVICE PAGE
 * =============================================================================
 *
 * PURPOSE: Static terms of service for Genki Reference.
 *
 * BASED ON: TermsFeed boilerplate (via 0sumcode/0up Next.js starter, MIT).
 *   Tailored for actual usage: free service, no payments, no public
 *   user-generated content, Genki textbook attribution.
 *
 * EDIT-FIRST FIELDS: Update CONTACT_EMAIL, OPERATOR, and GOVERNING_LAW below
 *   before going live.
 * =============================================================================
 */

import LegalPage from '@/components/LegalPage';

const CONTACT_EMAIL = 'tylernvovan+genki@gmail.com';
const OPERATOR = 'Genki Reference';
const GOVERNING_LAW = 'the State of California, United States';
const LAST_UPDATED = 'May 12, 2026';

export const metadata = {
  title: 'Terms of Service · Genki Reference',
  description: 'Terms and conditions for using Genki Reference.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <p>
        Please read these Terms of Service (&quot;Terms&quot;) carefully before using the Genki
        Reference website and service (the &quot;Service&quot;) operated by {OPERATOR}
        (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using the Service,
        you agree to be bound by these Terms. If you do not agree, do not use the Service.
      </p>

      <h2>The Service</h2>
      <p>
        Genki Reference is a free study companion for the Genki textbook series. It provides
        browsable vocabulary, grammar, and kanji references, optional sign-in to create personal
        flashcard sets, and a text-to-speech feature for reading Japanese aloud.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 13 years old to use the Service. If you are between 13 and the age
        of majority in your jurisdiction, you may only use the Service with the involvement of a
        parent or legal guardian.
      </p>

      <h2>Accounts</h2>
      <p>
        Sign-in is provided through Google OAuth via Supabase. You are responsible for
        maintaining the security of the Google account you use to sign in. You agree to provide
        accurate information and to notify us promptly if you believe your account has been
        compromised.
      </p>

      <h2>Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Service for any unlawful purpose or in violation of any applicable law.</li>
        <li>
          Attempt to gain unauthorized access to other users&apos; data, our systems, or those of
          our service providers.
        </li>
        <li>
          Probe, scan, or test the vulnerability of the Service, or breach any security or
          authentication measures.
        </li>
        <li>
          Submit excessive or automated requests, including to the text-to-speech endpoint, beyond
          the rate limits we enforce.
        </li>
        <li>
          Use the Service to transmit unlawful, harmful, or infringing content, or to interfere
          with another user&apos;s use of the Service.
        </li>
        <li>
          Reverse engineer, decompile, or attempt to extract the source code of the Service,
          except to the extent permitted by applicable law.
        </li>
      </ul>

      <h2>Your Content</h2>
      <p>
        The Service lets you create personal flashcard sets and study records (&quot;Your
        Content&quot;). You retain all rights to Your Content. You grant us a limited,
        non-exclusive license to host, store, and display Your Content solely to provide the
        Service to you. Your Content is private to your account and is not made public by the
        Service.
      </p>
      <p>
        You are responsible for maintaining your own backups of Your Content. We do not guarantee
        that Your Content will not be lost or corrupted.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        The Service&apos;s code, design, and original reference material are owned by {OPERATOR}
        and its licensors and are protected by intellectual property laws.
      </p>
      <p>
        Genki Reference is an independent study companion and is not affiliated with, endorsed
        by, or sponsored by the publishers or authors of <em>Genki: An Integrated Course in
        Elementary Japanese</em>. The textbook title and series belong to their respective owners
        and are referenced here solely for educational identification.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        The Service relies on third-party providers, including Supabase (authentication and
        database), Google (OAuth and Cloud Text-to-Speech), and Cloudflare (hosting and edge
        infrastructure). Your use of features powered by these providers is also subject to their
        respective terms.
      </p>

      <h2>Service Availability and Changes</h2>
      <p>
        The Service is provided free of charge and on a best-effort basis. We may modify, suspend,
        or discontinue any part of the Service at any time, with or without notice. We are not
        liable for any modification, suspension, or discontinuation of the Service.
      </p>

      <h2>Termination</h2>
      <p>
        We may suspend or terminate your access to the Service at any time, including for
        violations of these Terms. You may stop using the Service at any time. Upon termination,
        your right to use the Service ceases immediately. We may delete data associated with
        terminated accounts after a reasonable period.
      </p>

      <h2>Disclaimer of Warranties</h2>
      <p>
        The Service is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties
        of any kind, whether express or implied, including without limitation warranties of
        merchantability, fitness for a particular purpose, non-infringement, accuracy, or
        uninterrupted operation. The reference content is provided for study purposes only and is
        not a substitute for an authoritative source. We make no warranty that the Service will
        meet your study goals or be error-free.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, in no event shall {OPERATOR} be liable for any
        indirect, incidental, special, consequential, or punitive damages, or any loss of data,
        profits, or goodwill, arising out of or in connection with your use of the Service. Our
        total liability for any claim arising from these Terms or the Service shall not exceed
        the amount you paid us to use the Service in the twelve months preceding the claim
        (which, for a free service, is zero).
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless {OPERATOR} from and against any claims,
        liabilities, damages, losses, and expenses (including reasonable legal fees) arising out
        of your use of the Service or violation of these Terms.
      </p>

      <h2>Governing Law and Venue</h2>
      <p>
        These Terms are governed by the laws of {GOVERNING_LAW}, without regard to its conflict
        of law provisions. You and we agree that the state and federal courts located in
        California shall have exclusive jurisdiction over any dispute arising out of or relating
        to these Terms or the Service, except where prohibited by applicable consumer-protection
        law.
      </p>

      <h2>California Consumer Notice</h2>
      <p>
        If you are a California resident, nothing in these Terms is intended to waive or limit
        any non-waivable right you have under California law, including under the California
        Consumer Privacy Act (as amended by the California Privacy Rights Act). Information
        about how we handle your personal information and how to exercise your rights is
        available in our <a href="/privacy">Privacy Policy</a>.
      </p>
      <p>
        Under California Civil Code §1789.3, California users are entitled to the following
        consumer rights notice: if you have a complaint regarding the Service, you may contact
        us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. You may also contact the
        Complaint Assistance Unit of the Division of Consumer Services of the California
        Department of Consumer Affairs in writing at 1625 N. Market Blvd., Suite N 112,
        Sacramento, CA 95834, or by telephone at (800) 952-5210.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Material changes will be reflected by
        updating the &quot;Last updated&quot; date at the top of this page. Continued use of the
        Service after a change constitutes acceptance of the revised Terms.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about these Terms, contact us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
