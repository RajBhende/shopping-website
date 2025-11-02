import { useState, useEffect } from "react";

/**
 * Hook to detect if component is mounted (useful for SSR)
 * @returns boolean indicating if component is mounted
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted;
}
