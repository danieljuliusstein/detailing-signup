'use client';

import type { ReactNode } from 'react';
import { IPhoneMockup } from 'react-device-mockup';

type PhoneMockupFrameProps = {
  children: ReactNode;
};

export default function PhoneMockupFrame({ children }: PhoneMockupFrameProps) {
  return (
    <IPhoneMockup
      screenWidth={280}
      screenType="island"
      frameColor="#1a1a1a"
      statusbarColor="#0f0f0f"
      hideStatusBar={false}
    >
      <div className="relative h-full w-full overflow-hidden bg-black">{children}</div>
    </IPhoneMockup>
  );
}
