import { useEffect } from 'react';

export const useScrollToElement = (elementRef) => {
  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [elementRef]);
};

export default useScrollToElement
