import { useState, useEffect } from "react";

export function useDebounce(value, delay, fn) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
      fn(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay, fn]);

  return { value: debouncedValue };
}
