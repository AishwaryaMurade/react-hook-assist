import { useState, useEffect } from 'react';

function useDebouncedCallback(callback, delay, dependencies) {
  const [debouncedCallback, setDebouncedCallback] = useState(null);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCallback(callback);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);

  useEffect(() => {
    if (debouncedCallback) {
      debouncedCallback();
    }
  }, [debouncedCallback, ...dependencies]);
}

export default useDebouncedCallback;
