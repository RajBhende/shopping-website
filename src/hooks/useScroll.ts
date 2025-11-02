import { useState, useEffect } from "react";

/**
 * Hook to detect window scroll position
 * @param threshold - Scroll threshold to trigger state change (default: 50)
 * @returns boolean indicating if scrolled past threshold
 */
export function useScroll(threshold: number = 50): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
}
