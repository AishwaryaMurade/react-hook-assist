import { useState, useEffect } from 'react';
import styles from './useCustomHook.css'

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add(styles.darkMode);
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove(styles.darkMode);
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode