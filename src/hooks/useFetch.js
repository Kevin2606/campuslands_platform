import { useState, useEffect } from 'react';

export const useFetch = (url, config) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, config);
          const json = await res.json();
          setData(json);
        } catch (error) {
          setError(error);
        }
        finally {
            setLoading(false);
        }
      };
      fetchData();
    }, [url]);
  
    return { data, loading, error };
};