import { useState, useEffect } from 'react';

export const useScript = (src) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    script.onload = () => setLoaded(true);
    script.onerror = () => setLoaded(false);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src]);

  return loaded;
};

export default useScript