import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import { Title, PostContainer } from "./style";
import { Card } from "../components/Card/Card";
import { useGetFilms } from "../hooks/useGetFilms";
import { useRequestData } from "../hooks/useRequestData";

const FilmsListPage = () => {
  // const filmsList = useGetFilms([])
  const [filmsList, error, isLoading] = useRequestData(
    [],
    `${BASE_URL}/films/`
  );

  return (
    <div>
      <Title>Título dos filmes</Title>
      <PostContainer>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && (
          <p>Ocorreu um erro. Tente novamente mais tarde.</p>
        )}
        {!isLoading && filmsList && filmsList.length === 0 && (
          <p>Lista vazia.</p>
        )}
        {filmsList.map((film) => {
          return (
            <Card
              key={film.title}
              title={film.title}
              text={film.opening_crawl}
              backgroudColor={"gray"}
              textColor={"#ffffff"}
            />
          );
        })}
      </PostContainer>
    </div>
  );
};

export default FilmsListPage;
