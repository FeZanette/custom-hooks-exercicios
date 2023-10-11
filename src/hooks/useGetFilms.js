import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const useGetFilms = () => {
  const [filmsList, setFilmsList] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/films`)
      .then((response) => {
        setFilmsList(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return filmsList;
};
