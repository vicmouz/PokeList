import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 4rem;
  padding: 3rem;
  flex-direction: column;
  min-width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  cursor: pointer;
  .name::first-letter {
    text-transform: uppercase;
  }
`;
