'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'lenis/dist/lenis.css';
import { ReactLenis } from 'lenis/react';

export default function Providers({ children }) {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}

