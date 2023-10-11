import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { Title, PostContainer } from "./style";
import { Card } from "../components/Card/Card";
import { useGetStarShips } from "../hooks/useGetStarShips";
import { useRequestData } from "../hooks/useRequestData";

const StarShipsListPage = () => {
  // const starShipsList = useGetStarShips([]);
  const [starShipsList, error, isLoading] = useRequestData(
    [],
    `${BASE_URL}/starships/`
  );

  return (
    <div>
      <Title>Título das Naves</Title>
      <PostContainer>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && (
          <p>Ocorreu um erro. Tente novamente mais tarde.</p>
        )}
        {!isLoading && starShipsList && starShipsList.length === 0 && (
          <p>Lista vazia.</p>
        )}
        {starShipsList.map((starShip) => {
          return (
            <Card
              key={starShip.name}
              title={starShip.name}
              text={starShip.manufacturer}
              backgroudColor={"gray"}
              textColor={"#ffffff"}
            />
          );
        })}
      </PostContainer>
    </div>
  );
};

export default StarShipsListPage;
