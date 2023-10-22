import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import config from "../../config";
import { Index, Mfe, Pokemon, Type } from "./interfaces";
import { Container, Name } from "./styles";
// import { Container } from './styles';

const PokemonDetails: React.FC = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon>();

  const getPokemonDetails = useCallback(async () => {
    const { data } = await api.get(`${config.POKEMON_URL}/${id}`);
    setPokemon(data);
  }, [id]);

  useEffect(() => {
    getPokemonDetails();
  }, [getPokemonDetails]);
  return (
    <Container>
      <div className="generalDetails">
        <Name>{pokemon?.name}</Name>
        <div className="types">
          {pokemon?.types.map((type: Type) => (
            <p>{type?.type.name}</p>
          ))}
        </div>
      </div>
      <div className="abilities">
        <h1>Habilidades</h1>
        {pokemon?.moves.map((move: Mfe) => (
          <div>
            <p>
              Nome:
              <span>{move.move.name}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="indexGames">
        <h1>Aparição em jogos</h1>
        {pokemon?.game_indices.map((gameIndices: Index) => (
          <p>
            {gameIndices.version.name}: {gameIndices.game_index}
          </p>
        ))}
      </div>
    </Container>
  );
};

export default PokemonDetails;
