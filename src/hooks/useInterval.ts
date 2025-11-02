import { useEffect, useRef } from "react";

/**
 * Hook to create an interval that runs a callback function
 * @param callback - Function to call on each interval
 * @param delay - Delay in milliseconds (null to pause)
 */
export function useInterval(
  callback: () => void,
  delay: number | null
) {
  const savedCallback = useRef<() => void>();

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }

    if (delay !== null && delay > 0) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
