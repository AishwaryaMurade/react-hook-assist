import { useEffect } from 'react';

export const useMount = (fn) => {
  useEffect(() => {
    fn();
  }, []);
};

export default useMount