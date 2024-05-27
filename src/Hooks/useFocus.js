import { useRef, useEffect } from 'react';

export const useFocus = () => {
  const ref = useRef();

  const setFocus = () => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  return [ref, setFocus];
};

export default useFocus