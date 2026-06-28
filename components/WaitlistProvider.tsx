'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type WaitlistContextValue = {
  submitted: boolean;
  setSubmitted: (value: boolean) => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <WaitlistContext.Provider value={{ submitted, setSubmitted }}>
      {children}
    </WaitlistContext.Provider>
  );
}

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) throw new Error('useWaitlist must be used within WaitlistProvider');
  return ctx;
}
