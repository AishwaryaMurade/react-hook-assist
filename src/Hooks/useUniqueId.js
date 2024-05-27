import { useState, useEffect } from 'react';

export const useUniqueId = (prefix = '') => {
  const [id, setId] = useState('');

  useEffect(() => {
    const uniqueId = prefix + Math.random().toString(36).substr(2, 9);
    setId(uniqueId);
  }, [prefix]);

  return id;
};

export default useUniqueId