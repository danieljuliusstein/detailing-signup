import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Rinse',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[600px] px-5 py-10 pb-[60px] md:px-8">
      <Link href="/" className="mb-8 inline-block text-sm text-[#9a9a9a] no-underline hover:text-[#f0f0f0]">
        ← Back to Rinse
      </Link>
      <h1 className="mb-2 font-[family-name:var(--font-syne)] text-[28px] font-bold tracking-tight text-[#f0f0f0]">
        Privacy Policy
      </h1>
      <p className="mb-8 text-[13px] text-[#5c5c5c]">Last updated: June 25, 2026</p>

      <p className="mb-3 text-[15px] leading-relaxed text-[#9a9a9a]">
        This policy explains how Rinse (&quot;we&quot;, &quot;us&quot;) handles information when you join our founding waitlist.
      </p>

      <h2 className="mb-2.5 mt-7 font-[family-name:var(--font-syne)] text-[17px] font-bold text-[#f0f0f0]">What we collect</h2>
      <p className="mb-3 text-[15px] leading-relaxed text-[#9a9a9a]">
        When you submit the waitlist form, we collect your email address. We do not collect passwords, payment information, or other personal data on this page.
      </p>

      <h2 className="mb-2.5 mt-7 font-[family-name:var(--font-syne)] text-[17px] font-bold text-[#f0f0f0]">How we use it</h2>
      <p className="mb-3 text-[15px] leading-relaxed text-[#9a9a9a]">We use your email to:</p>
      <ul className="mb-3 list-disc space-y-1.5 pl-5 text-[15px] text-[#9a9a9a]">
        <li>Confirm your place on the waitlist</li>
        <li>Notify you when founding access opens</li>
        <li>Send occasional updates about the Rinse launch</li>
      </ul>
      <p className="mb-3 text-[15px] leading-relaxed text-[#9a9a9a]">We do not sell your email address to third parties.</p>

      <h2 className="mb-2.5 mt-7 font-[family-name:var(--font-syne)] text-[17px] font-bold text-[#f0f0f0]">How we store it</h2>
      <p className="mb-3 text-[15px] leading-relaxed text-[#9a9a9a]">
        Form submissions are processed by{' '}
        <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="text-[#4caf50] hover:text-[#66bb6a]">
          Formspree
        </a>
        , a third-party form service. Their privacy practices are governed by their own policy.
      </p>

      <h2 className="mb-2.5 mt-7 font-[family-name:var(--font-syne)] text-[17px] font-bold text-[#f0f0f0]">Your choices</h2>
      <p className="mb-3 text-[15px] leading-relaxed text-[#9a9a9a]">
        You can unsubscribe from waitlist emails at any time by clicking the unsubscribe link in any email we send, or by contacting us directly.
      </p>

      <h2 className="mb-2.5 mt-7 font-[family-name:var(--font-syne)] text-[17px] font-bold text-[#f0f0f0]">Contact</h2>
      <p className="text-[15px] leading-relaxed text-[#9a9a9a]">
        Questions about this policy? Email us at the address listed on our waitlist confirmation emails.
      </p>
    </div>
  );
}
