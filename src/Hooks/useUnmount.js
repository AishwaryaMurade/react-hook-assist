import { useEffect } from 'react';

export const useUnmount = (fn) => {
  useEffect(() => {
    return () => {
      fn();
    };
  }, []);
};

export default useUnmount