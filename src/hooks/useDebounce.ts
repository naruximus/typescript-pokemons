import { useState, useEffect } from 'react';

export const useDebounce = (value: string | number, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearInterval(handler);
    };
  }, [value]);

  return debouncedValue;
};
