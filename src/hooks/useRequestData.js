import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";

export const useRequestData = (initialState, url) => {
  const [data, setData] = useState(initialState);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false)
        setData(response.data.results);
      })
      .catch((error) => {
        setIsLoading(false)
        setError(true);
        console.log(error);
      });
  }, [url]);

  return [data, error, isLoading];
};
