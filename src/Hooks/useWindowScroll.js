import { useState, useEffect } from 'react';

export const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: window.scrollX, y: window.scrollY });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

export default useWindowScroll