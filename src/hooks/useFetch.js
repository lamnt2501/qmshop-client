import { useCallback, useState } from "react";

export const useFetch = (url, method = "GET", body = null) => {
  const [data, setData] = useState([]);
  const [isSuccess, setIsSucess] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsloading(true);
    try {
      const res = await fetch(url, {
        method: method,
        body: body,
      });
      if (res.ok) {
        const dataResponse = await res.json();
        setData(dataResponse);
        setIsError(false);
        setIsSucess(true);
      } else {
        setIsSucess(false);
        setIsError(true);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsloading(false);
    }
  }, [url, method, body]);
  return { data, isLoading, isSuccess, isError, error, fetchData };
};
