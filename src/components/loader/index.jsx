import React from "react";
import { BallTriangle } from "react-loader-spinner";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: yellow;
`;
export function Loader() {
  return (
    <Container>
      <BallTriangle color="var(--main-color)" height={140} width={140} />
    </Container>
  );
}
