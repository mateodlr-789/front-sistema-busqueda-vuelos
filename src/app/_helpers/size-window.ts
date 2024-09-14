'use client'

import { useEffect, useState } from "react"

export function useWindowSize() {
  const isClient = typeof window === 'object'
  const [windowSize, setWindowWidth] = useState<number>();

  useEffect(() => {
    if (!isClient) return
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize()
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  return {
    windowSize
  }
}
