import { useEffect, RefObject } from "react";

/**
 * Hook to detect clicks outside of a component
 * @param ref - Ref object pointing to the element
 * @param handler - Function to call when clicking outside
 * @param excludeRefs - Optional array of refs to exclude from outside detection
 */
export function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void,
  excludeRefs?: Array<RefObject<HTMLElement | null>>
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;

      // Don't trigger if clicking on excluded elements
      if (excludeRefs) {
        for (const excludeRef of excludeRefs) {
          if (excludeRef.current && excludeRef.current.contains(target)) {
            return;
          }
        }
      }

      // Don't trigger if clicking inside the ref element
      if (!ref.current || ref.current.contains(target)) {
        return;
      }

      // Trigger handler if clicking outside
      handler(event);
    };

    // Add event listeners
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, excludeRefs]);
}
