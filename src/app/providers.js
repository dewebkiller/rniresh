'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Providers({ children }) {
  useEffect(() => {
    AOS.init({
      disable: 'mobile',
      duration: 800,
      once: false,
    });
  }, []);

  return <>{children}</>;
}
