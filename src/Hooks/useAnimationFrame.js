import { useRef, useEffect } from 'react';

export const useAnimationFrame = (callback) => {
  const requestRef = useRef();

  const animate = (time) => {
    callback(time);
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
};

export default useAnimationFrame