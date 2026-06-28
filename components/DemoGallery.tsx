'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import PhoneMockupFrame from '@/components/PhoneMockupFrame';

type FilterCategory = 'All' | 'CRM' | 'Pipeline' | 'Jobs' | 'Finance';

type DemoScreen = {
  id: string;
  eyebrow: string;
  title: string;
  src: string;
  width: number;
  height: number;
  groups: FilterCategory[];
};

const FILTERS: FilterCategory[] = ['All', 'CRM', 'Pipeline', 'Jobs', 'Finance'];

const SCREENS: DemoScreen[] = [
  { id: 'home_landing', eyebrow: 'Dashboard', title: 'Home', src: '/demo/home_landing.png', width: 482, height: 1024, groups: [] },
  { id: 'clients', eyebrow: 'CRM', title: 'Clients', src: '/demo/clients.png', width: 486, height: 1024, groups: ['CRM'] },
  { id: 'client_example', eyebrow: 'CRM', title: 'Client detail', src: '/demo/client_example.png', width: 476, height: 1024, groups: ['CRM'] },
  { id: 'edit_vehicle', eyebrow: 'Vehicles', title: 'Edit vehicle', src: '/demo/edit_vehicle.png', width: 476, height: 1024, groups: ['CRM'] },
  { id: 'lead_pipeline', eyebrow: 'Pipeline', title: 'Lead pipeline', src: '/demo/lead_pipeline.png', width: 482, height: 1024, groups: ['Pipeline'] },
  { id: 'quote_viewer', eyebrow: 'Pipeline', title: 'Quote viewer', src: '/demo/quote_viewer.png', width: 482, height: 1024, groups: ['Pipeline'] },
  { id: 'job_creation', eyebrow: 'Jobs', title: 'Job creation', src: '/demo/job_creation.png', width: 501, height: 1024, groups: ['Jobs'] },
  { id: 'scheduling', eyebrow: 'Jobs', title: 'Scheduling', src: '/demo/scheduling.png', width: 500, height: 1024, groups: ['Jobs'] },
  { id: 'jobs', eyebrow: 'Jobs', title: 'Job board', src: '/demo/jobs.png', width: 476, height: 1024, groups: ['Jobs'] },
  { id: 'job_example', eyebrow: 'Jobs', title: 'Job detail', src: '/demo/job_example.png', width: 484, height: 1024, groups: ['Jobs'] },
  { id: 'damage_documentation', eyebrow: 'Jobs', title: 'Damage docs', src: '/demo/damage_documentation.png', width: 476, height: 1024, groups: ['Jobs'] },
  { id: 'messages', eyebrow: 'Jobs', title: 'Messages', src: '/demo/messages.png', width: 482, height: 1024, groups: ['Jobs'] },
  { id: 'inventory', eyebrow: 'Finance', title: 'Inventory', src: '/demo/inventory.png', width: 486, height: 1024, groups: ['Finance'] },
  { id: 'invoice', eyebrow: 'Finance', title: 'Invoice', src: '/demo/invoice.png', width: 482, height: 1024, groups: ['Finance'] },
];

function matchesFilter(screen: DemoScreen, filter: FilterCategory): boolean {
  if (filter === 'All') return true;
  return screen.groups.includes(filter);
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d={direction === 'left' ? 'M13 4L7 10l6 6' : 'M7 4l6 6-6 6'}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavButton({
  direction,
  onClick,
  disabled,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Previous screen' : 'Next screen'}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a] text-white transition-colors hover:border-[#4caf50] hover:text-[#4caf50] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/10 disabled:hover:text-white"
    >
      <ChevronIcon direction={direction} />
    </button>
  );
}

export default function DemoGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLElement>(null);

  const filteredScreens = useMemo(
    () => SCREENS.filter((screen) => matchesFilter(screen, activeFilter)),
    [activeFilter],
  );

  const currentScreen = filteredScreens[activeIndex] ?? filteredScreens[0];
  const hasMultiple = filteredScreens.length > 1;

  const goPrevScreen = useCallback(() => {
    setActiveIndex((current) => {
      if (filteredScreens.length === 0) return 0;
      return (current - 1 + filteredScreens.length) % filteredScreens.length;
    });
  }, [filteredScreens.length]);

  const goNextScreen = useCallback(() => {
    setActiveIndex((current) => {
      if (filteredScreens.length === 0) return 0;
      return (current + 1) % filteredScreens.length;
    });
  }, [filteredScreens.length]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrevLightbox = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null || filteredScreens.length === 0) return current;
      return (current - 1 + filteredScreens.length) % filteredScreens.length;
    });
  }, [filteredScreens.length]);

  const goNextLightbox = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null || filteredScreens.length === 0) return current;
      return (current + 1) % filteredScreens.length;
    });
  }, [filteredScreens.length]);

  useEffect(() => {
    setActiveIndex(0);
    setLightboxIndex(null);
  }, [activeFilter]);

  useEffect(() => {
    if (activeIndex >= filteredScreens.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, filteredScreens.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') goPrevLightbox();
      if (event.key === 'ArrowRight') goNextLightbox();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, goPrevLightbox, goNextLightbox]);

  useEffect(() => {
    const section = galleryRef.current;
    if (!section || lightboxIndex !== null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      if (!section.contains(document.activeElement)) return;

      event.preventDefault();
      if (event.key === 'ArrowLeft') goPrevScreen();
      if (event.key === 'ArrowRight') goNextScreen();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, goPrevScreen, goNextScreen]);

  const lightboxScreen = lightboxIndex !== null ? filteredScreens[lightboxIndex] : null;

  return (
    <section
      ref={galleryRef}
      id="preview"
      aria-labelledby="preview-heading"
      className="w-full bg-[#111111] pb-16 pt-2 md:pb-20"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#5c5c5c]">
            See it in action
          </p>
          <h2
            id="preview-heading"
            className="font-[family-name:var(--font-syne)] text-[clamp(22px,5vw,28px)] font-bold tracking-tight text-[#f0f0f0] md:text-4xl"
          >
            Your day, your jobs, one screen
          </h2>
          <p className="mt-3 font-[family-name:var(--font-dm-sans)] text-base text-[#9ca3af] md:text-lg">
            Browse by category — expand any screen to view full size.
          </p>
        </div>

        <div className="-mx-5 mb-10 overflow-x-auto px-5 pb-1 md:mx-0 md:px-0">
          <div className="flex w-max min-w-full gap-2 md:justify-center">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={[
                    'shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    'font-[family-name:var(--font-dm-sans)]',
                    isActive
                      ? 'bg-[#4caf50] text-black'
                      : 'border border-white/10 bg-transparent text-[#9ca3af] hover:border-white/20 hover:text-white',
                  ].join(' ')}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {currentScreen && (
          <div className="flex flex-col items-center">
            <div className="flex w-full max-w-[420px] items-center justify-center gap-4 md:max-w-none md:gap-8">
              <NavButton direction="left" onClick={goPrevScreen} disabled={!hasMultiple} />

              <PhoneMockupFrame>
                <Image
                  key={currentScreen.id}
                  src={currentScreen.src}
                  alt={`${currentScreen.title} — ${currentScreen.eyebrow}`}
                  width={currentScreen.width}
                  height={currentScreen.height}
                  className="h-full w-full object-cover object-top"
                  priority={activeIndex === 0}
                />
              </PhoneMockupFrame>

              <NavButton direction="right" onClick={goNextScreen} disabled={!hasMultiple} />
            </div>

            <p
              aria-live="polite"
              className="mt-6 text-center font-[family-name:var(--font-dm-sans)] text-sm text-[#9ca3af]"
            >
              <span className="font-medium text-[#4caf50]">{currentScreen.eyebrow}</span>
              <span className="text-[#5c5c5c]"> · </span>
              {currentScreen.title}
            </p>

            <p className="mt-1 text-center font-[family-name:var(--font-dm-sans)] text-xs text-[#5c5c5c]">
              {activeIndex + 1} / {filteredScreens.length}
            </p>

            <button
              type="button"
              onClick={() => setLightboxIndex(activeIndex)}
              className="mt-4 inline-flex min-h-[44px] items-center rounded-lg border border-white/10 bg-[#1c1c1c] px-5 py-2.5 text-sm font-medium text-[#f0f0f0] transition-colors hover:border-[#4caf50] hover:text-[#4caf50]"
            >
              Expand full size
            </button>
          </div>
        )}
      </div>

      {lightboxScreen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`${lightboxScreen.title} preview`}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a] text-white transition-colors hover:border-[#4caf50] hover:text-[#4caf50]"
            aria-label="Close preview"
          >
            <CloseIcon />
          </button>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goPrevLightbox();
                }}
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a] text-white transition-colors hover:border-[#4caf50] hover:text-[#4caf50] md:left-6"
                aria-label="Previous screen"
              >
                <ChevronIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  goNextLightbox();
                }}
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a] text-white transition-colors hover:border-[#4caf50] hover:text-[#4caf50] md:right-6"
                aria-label="Next screen"
              >
                <ChevronIcon direction="right" />
              </button>
            </>
          )}

          <div
            className="relative max-h-[90vh] max-w-[min(480px,100%)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={lightboxScreen.src}
              alt={`${lightboxScreen.title} — ${lightboxScreen.eyebrow} screen`}
              width={lightboxScreen.width}
              height={lightboxScreen.height}
              className="max-h-[85vh] w-auto object-contain"
              priority
            />
            <p className="mt-4 text-center font-[family-name:var(--font-dm-sans)] text-sm text-[#9ca3af]">
              <span className="text-[#4caf50]">{lightboxScreen.eyebrow}</span>
              {' · '}
              {lightboxScreen.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
