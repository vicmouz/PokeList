import React, { useEffect, useCallback, useState } from "react";
import { DevelopedBy, PokemonContainer, Wrapper } from "./styles";
import api from "../../services/api";
import { Outlet } from "react-router-dom";
import config from "../../config";
import { ListPokemonModel } from "./interfaces";
import PokemonCard from "../../components/PokemonCard";

const Home: React.FC = () => {
  const [pokemons, setPokemons] = useState<ListPokemonModel[] | []>([]);
  const getPokemons = useCallback(async () => {
    const { data } = await api.get(config.POKEMON_URL);
    setPokemons(data?.results);
  }, []);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  return (
    <Wrapper>
      {location.pathname === "/" && (
        <PokemonContainer>
          {pokemons.map((pokemon: ListPokemonModel) => {
            return (
              <PokemonCard
                name={pokemon.name}
                url={pokemon.url}
                key={pokemon.name}
              />
            );
          })}
        </PokemonContainer>
      )}
      <Outlet />
      <footer>
        <DevelopedBy>
          Desenvolvido com React + Vite + TypeScript `$
          {new Date().getFullYear()}`
        </DevelopedBy>
      </footer>
    </Wrapper>
  );
};

export default Home;
