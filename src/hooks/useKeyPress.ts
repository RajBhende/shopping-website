import { useEffect } from "react";

/**
 * Hook to detect key press events
 * @param targetKey - The key to listen for (e.g., 'Escape', 'Enter', 'ArrowUp')
 * @param handler - Function to call when key is pressed
 * @param enabled - Whether the listener is enabled (default: true)
 */
export function useKeyPress(
  targetKey: string,
  handler: (event: KeyboardEvent) => void,
  enabled: boolean = true
) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        handler(event);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [targetKey, handler, enabled]);
}
