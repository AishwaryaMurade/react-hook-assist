import { useState, useEffect } from 'react';

export const useVirtualList = (totalItems, itemHeight, containerHeight) => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);

  useEffect(() => {

    const visibleItemsCount = Math.ceil(containerHeight / itemHeight);
    const end = startIndex + visibleItemsCount;
    setEndIndex(Math.min(end, totalItems));
  }, [totalItems, itemHeight, containerHeight, startIndex]);

  const virtualList = [];
  for (let i = startIndex; i < endIndex; i++) {
    virtualList.push(i);
  }

  return { startIndex, endIndex, virtualList };
};


export default useVirtualList