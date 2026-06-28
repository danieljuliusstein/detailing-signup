'use client';

import { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: 'What is Rinse?',
    answer:
      'Rinse is a business app for mobile detailers — jobs, clients, invoices, online booking, and profit tracking in one place. No more stitching together texts, calendars, and spreadsheets.',
  },
  {
    question: 'How is Rinse different from other CRMs?',
    answer:
      'Most CRMs are built for office sales teams or broad field-service trades — not mobile detailing. Rinse connects leads, quotes, jobs, vehicle records, damage documentation, invoicing, and a client photo portal in one workflow. You also get profit per job (not just revenue), and the product is built by a detailer who actually uses it.',
  },
  {
    question: "Who's behind Rinse?",
    answer:
      "Daniel Stein — a Georgia Tech student and mobile detailer who built Rinse after years of detailing (since he was a kid) and running into the same workflow problems on real jobs. Early members get direct access to the person building and using the product.",
  },
  {
    question: 'What does "Pro free for life" include?',
    answer:
      'Founding Detailers get the full Pro plan forever: your booking page, client portal with photos, job tracking, invoicing, and profit analytics. No monthly fee — ever — as long as you stay an active founding member.',
  },
  {
    question: 'What do the next 100 spots get?',
    answer:
      'After the first 20 founding spots, the next 100 early members lock in $10 off Pro every month for life — $19/mo when the standard price is $29. Same full Pro features; your discounted rate never goes up.',
  },
  {
    question: 'When will I get access?',
    answer:
      "We're onboarding in small batches so we can support every early member properly. Join the waitlist and we'll email you when your batch opens — first come, first served across 120 early spots (20 free, then 100 discounted).",
  },
  {
    question: 'What do I need to do to keep my founding spot?',
    answer:
      "Complete at least 3 real jobs in your first 30 days, use the app honestly on those jobs, and share feedback when we ask. That's it. We want operators who'll actually use it — not signups sitting idle.",
  },
  {
    question: 'Will SMS or payments cost extra later?',
    answer:
      'Possibly. SMS reminders and payment processing have real per-use costs, so those may become paid add-ons down the road. Core Pro features stay included for founding and early members — free for life if you\'re in the first 20, or at your locked-in $19/mo rate if you\'re in the next 100.',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-lg border border-[#2a2a2a] bg-[#1c1c1c]"
          >
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="relative min-h-[44px] w-full px-4 py-4 pr-11 text-left text-[15px] font-medium text-[#f0f0f0] transition-colors hover:text-[#4caf50]"
            >
              {item.question}
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-normal text-[#5c5c5c]">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div className="px-4 pb-4 text-sm leading-relaxed text-[#9a9a9a]">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
