import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { Title, NameContainer } from "./style";
import { Card } from "../components/Card/Card";
import { useGetCharacter } from "../hooks/useGetCharacter";
import { useRequestData } from "../hooks/useRequestData";

const CharactersListPage = () => {
  // const caractersList = useGetCharacter([])
  const [caractersList, error, isLoading] = useRequestData(
    [],
    `${BASE_URL}/people/`
  );

  return (
    <div>
      <Title>Nomes dos Personagens</Title>
      <NameContainer>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && (
          <p>Ocorreu um erro. Tente novamente mais tarde.</p>
        )}
        {!isLoading && caractersList && caractersList.length === 0 && (
          <p>Lista vazia.</p>
        )}
        {caractersList.map((caracter) => {
          return (
            <Card
              key={caracter.name}
              text={caracter.name}
              backgroudColor={"nome"}
              textColor={"nome"}
            />
          );
        })}
      </NameContainer>
    </div>
  );
};

export default CharactersListPage;
