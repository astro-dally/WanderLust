import { useState, useEffect } from "react";

/**
 * Custom hook for fetching data from an API.
 * @param {string} url The URL to fetch data from.
 * @param {object} [options] Optional fetch options.
 * @returns An object containing the loading state, fetched data, and any error encountered.
 */
const useFetchAPI = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log("useFetchAPI");
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]); // Depend on URL and options to refetch when they change

  return { loading, data, error };
};

export default useFetchAPI;
