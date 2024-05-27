import { useState, useEffect, useCallback } from 'react';

export const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setLoading(true);
    setError(null);
    return asyncFunction()
      .then((response) => setData(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, loading, error, execute };
};

export default useAsync