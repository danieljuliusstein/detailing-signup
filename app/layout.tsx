import type { Metadata } from 'next';
import { DM_Sans, Syne } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['700', '600', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Rinse — Founding Detailer Waitlist',
  description:
    'Rinse — Run your detailing business from one app. Built by a mobile detailer. Jobs, clients, invoices, booking, and profit per job.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="relative font-[family-name:var(--font-dm-sans)] bg-[#111111] text-[#f0f0f0] antialiased">
        <div
          className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[480px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(76,175,80,0.08),transparent)]"
          aria-hidden="true"
        />
        {children}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script id="vercel-analytics" strategy="afterInteractive">
              {`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`}
            </Script>
            <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
          </>
        )}
      </body>
    </html>
  );
}
