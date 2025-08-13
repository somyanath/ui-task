import { useState, useEffect } from 'react';

interface ImageTransform {
  transform: string;
  objectPosition: string;
}

interface BreakpointSettings {
  mobile: ImageTransform;
  tablet: ImageTransform;
  desktop: ImageTransform;
  largeDesktop?: ImageTransform;
}

/**
 * A hook that provides responsive image transformations based on viewport width
 * @param settings - Object containing transform settings for different breakpoints
 * @returns The appropriate image transform style object for the current viewport width
 */
export const useResponsiveImage = (settings: BreakpointSettings) => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate image transform based on screen size
  const getImageTransform = (): ImageTransform => {
    if (windowWidth < 640) {
      // Small mobile
      return settings.mobile;
    } else if (windowWidth < 768) {
      // Large mobile/small tablet
      return settings.tablet;
    } else if (windowWidth < 1280) {
      // Desktop
      return settings.desktop;
    } else {
      // Large desktop
      return settings.largeDesktop || settings.desktop;
    }
  };

  return getImageTransform();
};
