'use client';

import { FormEvent, useState } from 'react';
import { useWaitlist } from './WaitlistProvider';

const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '0d87c367-7eb8-4611-8823-475f51798222';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseWeb3FormsError(data: unknown): string {
  if (!data || typeof data !== 'object') return 'Something went wrong. Please try again.';
  const record = data as { message?: string };
  if (record.message) return record.message;
  return 'Something went wrong. Please try again.';
}

type WaitlistFormProps = {
  inputId: string;
  showMicrocopy?: boolean;
};

export default function WaitlistForm({ inputId, showMicrocopy = false }: WaitlistFormProps) {
  const { submitted, setSubmitted } = useWaitlist();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-[#4caf50]/30 bg-[#1c1c1c] px-[18px] py-4 text-center animate-[fadeUp_0.4s_ease]">
        <span className="mb-1.5 block text-xl text-[#4caf50]">✓</span>
        <p className="text-[15px] font-medium text-[#f0f0f0]">You&apos;re on the list.</p>
        <p className="mt-1 text-[13px] text-[#9a9a9a]">We&apos;ll email you when your batch opens.</p>
      </div>
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const trimmed = email.trim();

      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          email: trimmed,
          subject: 'New Rinse waitlist signup',
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data || data.success !== true) {
        throw new Error(parseWeb3FormsError(data));
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-[420px]">
      <label htmlFor={inputId} className="mb-[7px] block text-left text-xs font-medium text-[#9a9a9a]">
        Email address
      </label>
      <div className="flex flex-col gap-2 min-[480px]:flex-row">
        <input
          id={inputId}
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          placeholder="you@example.com"
          required
          autoComplete="email"
          inputMode="email"
          className={[
            'min-h-[44px] flex-1 rounded-lg border bg-[#1c1c1c] px-3.5 py-3 text-base text-[#f0f0f0] outline-none transition-[border-color,box-shadow]',
            error
              ? 'border-[#e84242] shadow-[0_0_0_3px_rgba(232,66,66,0.12)]'
              : 'border-[#333] focus:border-[#4caf50] focus:shadow-[0_0_0_3px_rgba(76,175,80,0.12)]',
          ].join(' ')}
        />
        <button
          type="submit"
          disabled={loading}
          className="min-h-[44px] shrink-0 rounded-lg border-none bg-[#4caf50] px-5 py-3 text-[15px] font-semibold text-[#111] transition-[background,transform] hover:bg-[#66bb6a] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 max-[479px]:w-full min-[480px]:w-auto"
        >
          {loading ? 'Joining…' : 'Join the waitlist'}
        </button>
      </div>
      {error && (
        <p className="mt-1.5 text-left text-xs text-[#e84242]" role="alert">
          {error}
        </p>
      )}
      {showMicrocopy && (
        <p className="mt-2.5 text-center text-[11.5px] leading-snug text-[#5c5c5c]">
          Early access · <strong className="font-medium text-[#9a9a9a]">First 20 free for life</strong> ·{' '}
          <strong className="font-medium text-[#9a9a9a]">Next 100 get $10 off/mo for life</strong>
        </p>
      )}
    </form>
  );
}
