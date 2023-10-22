import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  .generalDetails {
    display: flex;
    flex-direction: row;
    align-items: center;
    .types {
      margin-left: 10px;
      display: flex;
      flex-direction: row;
      p:first-of-type {
        margin-right: 20px;
      }
    }
  }
`;

export const Name = styled.h1`
  font-family: "Inter", sans-serif;
  ::first-letter {
    text-transform: uppercase;
  }
`;
