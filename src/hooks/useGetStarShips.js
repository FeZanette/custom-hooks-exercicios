import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const useGetStarShips = () => {
    const [starShipsList, setStarShipsList] = useState([]);


    useEffect(() => {
      axios
        .get(`${BASE_URL}/starships`)
        .then((response) => {
          setStarShipsList(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },[]);
    
    return starShipsList
}