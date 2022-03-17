import React from "react";
import styled from "styled-components";
import mainImage from "../../assets/image/mainImage.jpg";

const WrapperContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-image: linear-gradient(rgba(4, 4, 20, 0.5), rgba(4, 4, 20, 0.5)),
    url(${mainImage});
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
`;

export default function Wrapper({ tittle }) {
  return (
    <WrapperContainer>
      <h1>{tittle}</h1>
    </WrapperContainer>
  );
}
