import { useState, useEffect } from 'react';

export const useIdle = (timeout) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let idleTimer;
    const resetTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setIsIdle(true), timeout);
    };

    resetTimer();

    const clearTimer = () => {
      clearTimeout(idleTimer);
    };

    const handleActivity = () => {
      setIsIdle(false);
      resetTimer();
    };

    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keydown', handleActivity);
    document.addEventListener('mousedown', handleActivity);
    document.addEventListener('touchstart', handleActivity);

    return () => {
      clearTimer();
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keydown', handleActivity);
      document.removeEventListener('mousedown', handleActivity);
      document.removeEventListener('touchstart', handleActivity);
    };
  }, [timeout]);

  return isIdle;
};


export default useIdle