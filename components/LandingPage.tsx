import Link from 'next/link';
import DemoGallery from '@/components/DemoGallery';
import FaqAccordion from '@/components/FaqAccordion';
import OwnerSection from '@/components/OwnerSection';
import { WaitlistProvider } from '@/components/WaitlistProvider';
import WaitlistForm from '@/components/WaitlistForm';

function ProblemSolution() {
  return (
    <section className="mx-auto max-w-[900px] border-t border-[#2a2a2a] px-5 py-12 md:px-8">
      <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[1.5px] text-[#5c5c5c]">
        The problem &amp; the fix
      </p>
      <div className="grid grid-cols-1 gap-6 min-[640px]:grid-cols-[1fr_40px_1fr]">
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#5c5c5c]">Right now</p>
          <ul className="flex flex-col gap-2">
            {[
              'Bookings scattered across DMs, texts, and your calendar',
              'No clear picture of which jobs actually made money',
              'Clients get invoices one place, photos another — feels unprofessional',
            ].map((text) => (
              <li
                key={text}
                className="flex items-start gap-2.5 rounded-lg border border-[#2a2a2a] bg-[#1c1c1c] px-3.5 py-3 text-sm leading-snug text-[#9a9a9a]"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#5c5c5c]">
                  <span className="block h-px w-[7px] bg-[#5c5c5c]" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden items-start justify-center pt-7 min-[640px]:flex" aria-hidden="true">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#4caf50]/30 bg-[#4caf50]/10 text-sm text-[#4caf50]">
            →
          </div>
        </div>
        <div>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#4caf50]">With Rinse</p>
          <ul className="flex flex-col gap-2">
            {[
              'Online booking that lands straight in your job list',
              'Profit per job — not just revenue',
              'Client portal with before/after photos and invoices',
            ].map((text) => (
              <li
                key={text}
                className="flex items-start gap-2.5 rounded-lg border border-[#4caf50]/20 bg-[#1c1c1c] px-3.5 py-3 text-sm leading-snug text-[#f0f0f0]"
              >
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#4caf50] bg-[#4caf50]/10 text-[10px] font-bold text-[#4caf50]">
                  ✓
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CrmComparison() {
  const rows = [
    {
      other: 'Built for sales teams or broad home services — not a mobile detailing day',
      rinse: 'End-to-end for detailers: lead → quote → job → invoice → client portal',
    },
    {
      other: 'Calendar, texts, spreadsheets, and invoicing in separate tools',
      rinse: 'One app for your schedule, clients, jobs, and payments',
    },
    {
      other: 'Shows what you charged — not what you kept after products and time',
      rinse: 'Profit per job so you know which work is actually worth it',
    },
    {
      other: 'Before/after photos, damage records, and invoices scattered or missing',
      rinse: 'Vehicle records, pre-existing damage docs, and a client portal in one place',
    },
    {
      other: 'Feature requests disappear into a big company\'s backlog',
      rinse: 'Built and run by a mobile detailer — your feedback goes to the person shipping the product',
    },
  ];

  return (
    <section className="mx-auto max-w-[900px] border-t border-[#2a2a2a] px-5 py-12 md:px-8" aria-labelledby="compare-heading">
      <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[1.5px] text-[#5c5c5c]">
        Why not another CRM?
      </p>
      <h2
        id="compare-heading"
        className="mb-3 text-center font-[family-name:var(--font-syne)] text-[clamp(22px,5vw,28px)] font-bold tracking-tight text-[#f0f0f0]"
      >
        Generic CRMs weren&apos;t built for your market.
      </h2>
      <p className="mx-auto mb-8 max-w-[520px] text-center text-[15px] leading-relaxed text-[#9a9a9a]">
        Most tools are built for office sales teams or every trade under the sun. Rinse is built for how mobile detailers
        actually work — on the driveway, vehicle by vehicle.
      </p>
      <div className="overflow-hidden rounded-xl border border-[#2a2a2a]">
        <div className="hidden grid-cols-[1fr_1fr] border-b border-[#2a2a2a] bg-[#181818] min-[640px]:grid">
          <p className="px-4 py-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#5c5c5c]">Typical CRMs</p>
          <p className="border-l border-[#2a2a2a] px-4 py-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#4caf50]">
            Rinse
          </p>
        </div>
        <ul className="divide-y divide-[#2a2a2a]">
          {rows.map((row) => (
            <li key={row.other} className="grid grid-cols-1 min-[640px]:grid-cols-[1fr_1fr]">
              <div className="flex items-start gap-2.5 bg-[#1c1c1c] px-4 py-3.5 text-sm leading-snug text-[#9a9a9a] min-[640px]:border-r min-[640px]:border-[#2a2a2a]">
                <span className="mt-0.5 shrink-0 text-[#5c5c5c]" aria-hidden="true">
                  ×
                </span>
                <span>
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[1.5px] text-[#5c5c5c] min-[640px]:hidden">
                    Typical CRMs
                  </span>
                  {row.other}
                </span>
              </div>
              <div className="flex items-start gap-2.5 bg-[#1c1c1c] px-4 py-3.5 text-sm leading-snug text-[#f0f0f0]">
                <span className="mt-0.5 shrink-0 font-bold text-[#4caf50]" aria-hidden="true">
                  ✓
                </span>
                <span>
                  <span className="mb-1 block text-[10px] font-semibold uppercase tracking-[1.5px] text-[#4caf50] min-[640px]:hidden">
                    Rinse
                  </span>
                  {row.rinse}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BuilderSection() {
  const points = [
    {
      title: 'Operator-first',
      body: 'Built by a mobile detailer who runs jobs in the field — not a software company guessing from the outside.',
    },
    {
      title: 'Direct support',
      body: 'Talk to the person building it. No ticket queue, no call center — real help when something breaks before a job.',
    },
    {
      title: 'Your voice shapes the product',
      body: 'Feature requests and criticism from detailers on real jobs go straight into the roadmap.',
    },
  ];

  return (
    <section className="mx-auto max-w-[900px] px-5 py-14 md:px-8" aria-labelledby="builder-heading">
      <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[1.5px] text-[#5c5c5c]">
        Built by a detailer
      </p>
      <h2
        id="builder-heading"
        className="mb-4 text-center font-[family-name:var(--font-syne)] text-[clamp(22px,5vw,28px)] font-bold tracking-tight text-[#f0f0f0]"
      >
        I&apos;m a mobile detailer too.
      </h2>
      <p className="mx-auto mb-8 max-w-[540px] text-center text-[15px] leading-relaxed text-[#9a9a9a]">
        Rinse isn&apos;t from a big organization — it&apos;s the tool I&apos;m building for my own business and for
        detailers like you. I value every person on this waitlist because{' '}
        <strong className="font-medium text-[#f0f0f0]">you&apos;re the community I&apos;m part of</strong>.
      </p>
      <div className="grid grid-cols-1 gap-4 min-[640px]:grid-cols-3">
        {points.map((point) => (
          <div
            key={point.title}
            className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] px-5 py-[22px] text-center min-[640px]:text-left"
          >
            <h3 className="mb-2 font-[family-name:var(--font-syne)] text-[15px] font-bold tracking-tight text-[#4caf50]">
              {point.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#9a9a9a]">{point.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhoSection() {
  return (
    <section className="mx-auto max-w-[900px] px-5 py-14 md:px-8">
      <p className="mb-4 text-center text-[10px] font-semibold uppercase tracking-[1.5px] text-[#5c5c5c]">
        Is this for you?
      </p>
      <div className="grid grid-cols-1 gap-4 min-[560px]:grid-cols-2">
        <div className="rounded-xl border border-[#4caf50]/20 bg-[#1c1c1c] px-5 py-[22px]">
          <h3 className="mb-3.5 font-[family-name:var(--font-syne)] text-base font-bold tracking-tight text-[#4caf50]">
            Built for you if…
          </h3>
          <ul className="space-y-2.5">
            {[
              "You're a mobile detailer — you go to the client",
              'You juggle bookings across texts, DMs, and calendar apps',
              'You want to know profit per job, not just what you charged',
              "You're ready to run real jobs through the app and give feedback",
            ].map((item) => (
              <li key={item} className="relative pl-5 text-sm leading-snug text-[#9a9a9a] before:absolute before:left-0 before:text-xs before:font-bold before:text-[#4caf50] before:content-['✓']">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-[#2a2a2a] bg-[#1c1c1c] px-5 py-[22px]">
          <h3 className="mb-3.5 font-[family-name:var(--font-syne)] text-base font-bold tracking-tight text-[#5c5c5c]">
            Not for you if…
          </h3>
          <ul className="space-y-2.5">
            {[
              'You need enterprise fleet contracts or dealership workflows',
              'You want a free tool with zero commitment or feedback',
              "You're looking for a consumer car-wash booking app",
            ].map((item) => (
              <li key={item} className="relative pl-5 text-sm leading-snug text-[#9a9a9a] before:absolute before:left-0 before:text-sm before:font-semibold before:text-[#5c5c5c] before:content-['×']">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <WaitlistProvider>
      <div className="relative z-[1]">
        {/* Nav */}
        <nav className="sticky top-0 z-[100] flex h-[52px] items-center justify-between border-b border-[#2a2a2a] bg-[#111]/92 px-5 backdrop-blur-md">
          <Link href="/" className="font-[family-name:var(--font-syne)] text-lg font-bold tracking-tight text-[#f0f0f0] no-underline">
            Rinse<span className="text-[#4caf50]">.</span>
          </Link>
          <a
            href="#waitlist"
            className="inline-flex min-h-[44px] items-center rounded-lg bg-[#4caf50] px-4 py-2 text-[13px] font-semibold text-[#111] no-underline transition-[background,transform] hover:bg-[#66bb6a] active:scale-[0.97]"
          >
            Join the waitlist
          </a>
        </nav>

        {/* Hero */}
        <section id="waitlist" className="mx-auto max-w-[680px] px-5 pb-10 pt-9 text-center">
          <h1 className="mx-auto mb-3.5 max-w-[560px] font-[family-name:var(--font-syne)] text-[clamp(1.5rem,7.5vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.025em] text-balance text-[#f0f0f0] max-[480px]:text-[clamp(1.5rem,7.5vw,1.75rem)]">
            <span className="block">
              Run your detailing
              <br className="hidden max-[480px]:inline" /> business
            </span>
            <span className="block">
              from <em className="not-italic text-[#4caf50]">one app.</em>
            </span>
          </h1>
          <p className="mx-auto mb-7 max-w-[480px] text-base leading-snug text-[#9a9a9a]">
            Jobs, clients, invoices, booking, and profit per job — built by a mobile detailer, for mobile detailers.
          </p>
          <WaitlistForm inputId="email" showMicrocopy />
        </section>

        <DemoGallery />

        {/* Founding badge */}
        <section className="pb-8 pt-0 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#181818] px-5 py-2.5 text-[13px] font-medium text-[#9a9a9a]">
            <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#4caf50]" aria-hidden="true" />
            <strong className="font-semibold text-[#4caf50]">Early access</strong> — 20 free for life · next 100 get $10 off/mo for life
          </div>
        </section>

        <ProblemSolution />

        <CrmComparison />

        {/* Founding offer */}
        <section className="border-y border-[#2a2a2a] bg-[#181818] px-5 py-12 md:px-8" aria-labelledby="founding-heading">
          <div className="mx-auto max-w-[680px] text-center">
            <span className="mb-3.5 inline-block rounded-full bg-[#4caf50] px-3.5 py-1 text-[11px] font-bold tracking-wide text-[#111]">
              Founding Detailer program
            </span>
            <h2 id="founding-heading" className="mb-3 font-[family-name:var(--font-syne)] text-[clamp(22px,5vw,28px)] font-bold leading-tight tracking-tight text-[#f0f0f0]">
              Pro free for life. Then $10 off forever.
            </h2>
            <p className="mx-auto mb-4 max-w-[520px] text-[15px] leading-relaxed text-[#9a9a9a]">
              The first <strong className="font-medium text-[#f0f0f0]">20 founding detailers</strong> get Pro free for life.
              The <strong className="font-medium text-[#f0f0f0]">next 100</strong> lock in{' '}
              <strong className="font-medium text-[#f0f0f0]">$10 off per month for life</strong> ($19/mo when Pro is $29).
            </p>
            <p className="mx-auto mb-4 max-w-[500px] text-[14px] leading-relaxed text-[#9a9a9a]">
              Both tiers include the full Pro plan — booking site, client portal, job tracking, invoicing, and profit analytics.
            </p>
            <div className="mb-3 inline-block max-w-full rounded-lg border border-[#333] bg-[#1c1c1c] px-[18px] py-3 text-left text-sm text-[#9a9a9a]">
              <strong className="text-[#f0f0f0]">In exchange:</strong> Use it on real jobs, give honest feedback, and
              share a testimonial if you love it. As a fellow detailer, I read every note — good and bad.
            </div>
            <p className="mx-auto max-w-[480px] text-xs leading-relaxed text-[#5c5c5c]">
              Must complete at least 3 jobs in your first 30 days to keep founding status. SMS and payment processing may become paid add-ons later — core job management stays free for founding members.
            </p>
          </div>
        </section>

        <BuilderSection />

        <WhoSection />

        {/* FAQ */}
        <section className="mx-auto max-w-[680px] px-5 py-14 md:px-8">
          <h2 className="mb-6 text-center font-[family-name:var(--font-syne)] text-[clamp(22px,5vw,28px)] font-bold tracking-tight text-[#f0f0f0]">
            Questions
          </h2>
          <FaqAccordion />
        </section>

        {/* Bottom CTA */}
        <section id="waitlist-bottom" className="mx-auto max-w-[680px] border-t border-[#2a2a2a] px-5 py-12 text-center md:px-8">
          <h2 className="mb-2 font-[family-name:var(--font-syne)] text-[clamp(20px,5vw,26px)] font-bold tracking-tight text-[#f0f0f0]">
            Ready to claim your spot?
          </h2>
          <p className="mb-6 text-[15px] text-[#9a9a9a]">
            First 20 free for life · next 100 get $10 off/mo for life.
          </p>
          <WaitlistForm inputId="email-bottom" />
        </section>

        <OwnerSection />

        {/* Footer */}
        <footer className="mx-auto flex max-w-[900px] flex-col items-center gap-2.5 border-t border-[#2a2a2a] px-5 py-5 text-center min-[480px]:flex-row min-[480px]:justify-between min-[480px]:text-left">
          <div className="flex flex-wrap items-center justify-center gap-[18px]">
            <span className="font-[family-name:var(--font-syne)] text-sm font-bold text-[#9a9a9a]">
              Rinse<span className="text-[#4caf50]">.</span>
            </span>
            <Link href="/privacy" className="text-xs text-[#5c5c5c] no-underline hover:text-[#9a9a9a]">
              Privacy
            </Link>
          </div>
          <span className="text-xs text-[#5c5c5c]">© 2026 Rinse</span>
        </footer>
      </div>
    </WaitlistProvider>
  );
}
