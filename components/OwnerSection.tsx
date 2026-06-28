'use client';

import { useState } from 'react';
import Image from 'next/image';

const OWNER_PHOTO = '/assets/owner.jpg';

function OwnerPhoto() {
  const [photoMissing, setPhotoMissing] = useState(false);

  if (photoMissing) {
    return (
      <div
        className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(76,175,80,0.15),transparent_60%)]"
        aria-hidden="true"
      >
        <span className="font-[family-name:var(--font-syne)] text-3xl font-bold text-[#4caf50]">DS</span>
      </div>
    );
  }

  return (
    <Image
      src={OWNER_PHOTO}
      alt="Daniel Stein, founder of Rinse"
      width={144}
      height={144}
      className="h-full w-full object-cover"
      onError={() => setPhotoMissing(true)}
      priority={false}
    />
  );
}

export default function OwnerSection() {
  return (
    <section
      className="border-t border-[#2a2a2a] bg-[#181818] px-5 py-14 md:px-8"
      aria-labelledby="owner-heading"
    >
      <div className="mx-auto flex max-w-[720px] flex-col items-center gap-8 min-[640px]:flex-row min-[640px]:items-start min-[640px]:gap-10">
        <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl border border-[#4caf50]/30 bg-[#1c1c1c] shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          <OwnerPhoto />
        </div>

        <div className="text-center min-[640px]:text-left">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#5c5c5c]">
            About the owner
          </p>
          <h2
            id="owner-heading"
            className="mb-4 font-[family-name:var(--font-syne)] text-[clamp(22px,5vw,26px)] font-bold leading-tight tracking-tight text-[#f0f0f0]"
          >
            Hi, I&apos;m Daniel — detailer first, builder second.
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-[#9a9a9a]">
            <p>
              I&apos;m a student at <strong className="font-medium text-[#f0f0f0]">Georgia Tech</strong> who runs mobile
              detailing on the side. Detailing isn&apos;t a side hustle I picked up last year — I&apos;ve been doing it
              since I was a kid, helping my whole family keep their cars as clean as possible and making sure I did my
              best work on every single vehicle.
            </p>
            <p>
              Running jobs between classes, I kept hitting the same walls: bookings in texts, profit buried in
              spreadsheets, photos and invoices in different places. So I built{' '}
              <strong className="font-medium text-[#f0f0f0]">Rinse</strong> — the app I actually wanted on the driveway:
              one place for leads, jobs, vehicles, damage docs, invoicing, and knowing what each job was really worth.
            </p>
            <p>
              Rinse is small on purpose. When you join early, you&apos;re not feeding a giant support queue — you&apos;re
              talking to the person who details cars and writes the code. That&apos;s the product I wish existed when I
              started.
            </p>
          </div>
          <p className="mt-5 text-sm font-medium text-[#5c5c5c]">
            Daniel Stein · Georgia Tech · Mobile detailer &amp; founder
          </p>
        </div>
      </div>
    </section>
  );
}
