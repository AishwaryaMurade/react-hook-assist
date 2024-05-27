import { useRef, useEffect } from 'react';

export const useWhyDidYouUpdate = (name, props) => {
  const previousProps = useRef();

  useEffect(() => {
    if (previousProps.current) {
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      const changes = {};

      allKeys.forEach((key) => {
        if (previousProps.current[key] !== props[key]) {
          changes[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });

      if (Object.keys(changes).length > 0) {
        console.log('[why-did-you-update]', name, changes);
      }
    }

    previousProps.current = props;
  });
};

export default useWhyDidYouUpdate