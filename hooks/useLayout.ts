// we have a same implementation on @od-lego
import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

import {
  BREAKPOINT_LG,
  BREAKPOINT_MD,
  BREAKPOINT_SM,
  BREAKPOINT_XL,
  MEDIA_CONDITION_LG,
  MEDIA_CONDITION_MD,
  MEDIA_CONDITION_XL,
} from '@/constants/breakpoint';

type TBreakpoint = typeof BREAKPOINT_SM | typeof BREAKPOINT_MD | typeof BREAKPOINT_LG | typeof BREAKPOINT_XL;

function useLayout(): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isDesktopLG: boolean;
  isDesktopXL: boolean;
  currentBreakpoint: TBreakpoint;
} {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktopLG, setIsDesktopLG] = useState(false);
  const [isDesktopXL, setIsDesktopXL] = useState(false);

  useEffect(() => {
    const handleResize = throttle(() => {
      const isDesktopXLDevice = window.matchMedia(`(${MEDIA_CONDITION_XL})`).matches;
      const isDesktopLGDevice = !isDesktopXLDevice && window.matchMedia(`(${MEDIA_CONDITION_LG})`).matches;
      const isTabletDevice =
        !isDesktopXLDevice && !isDesktopLGDevice && window.matchMedia(`(${MEDIA_CONDITION_MD})`).matches;
      const isMobileDevice = !isDesktopXLDevice && !isDesktopLGDevice && !isTabletDevice;

      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice);
      setIsDesktopLG(isDesktopLGDevice);
      setIsDesktopXL(isDesktopXLDevice);
    }, 30);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop: isDesktopLG || isDesktopXL,
    isDesktopLG,
    isDesktopXL,
    currentBreakpoint:
      (isTablet && BREAKPOINT_MD) || (isDesktopLG && BREAKPOINT_LG) || (isDesktopXL && BREAKPOINT_XL) || BREAKPOINT_SM,
  };
}

export default useLayout;
