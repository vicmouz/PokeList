import styled from "styled-components";

export const Wrapper = styled.main`
  justify-content: center;
  align-items: center;
  display: flex;
  footer {
    position: fixed;
    bottom: 0;
  }
`;
export const DevelopedBy = styled.span`
  font-family: "Inter", sans-serif;
`;

export const PokemonName = styled.p`
  font-family: "Inter", sans-serif;
  color: #000;
  font-weight: 500;
`;

export const PokemonContainer = styled.div`
  flex-direction: row;
  max-width: 70%;
  flex-wrap: wrap;
  display: flex;
`;
