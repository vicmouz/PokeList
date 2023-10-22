import React from "react";
import { ListPokemon } from "./interfaces";
import { Wrapper } from "./styles";
import { useNavigate } from "react-router-dom";

// import { Container } from './styles';

const PokemonCard: React.FC<ListPokemon> = ({ name, url }) => {
  const navigate = useNavigate();
  return (
    <Wrapper
      onClick={() => {
        console.log(url.substring(url.length - 2).slice(0, 1));
        navigate(`details/${url.substring(url.length - 2).slice(0, 1)}`);
      }}
    >
      <p className="name">{name}</p>
    </Wrapper>
  );
};

export default PokemonCard;
