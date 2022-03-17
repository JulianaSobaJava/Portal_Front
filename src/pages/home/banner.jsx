import React from "react";
import * as style from "./home.styled";

// import { Container } from './styles';

export default function Banner() {
  return (
    <style.Wrapper>
      <style.Text>
        <h1>Portal das Escolas</h1>
        <p>
          O primeiro portal Angolano, onde encontras todas as escolas e
          <br /> cursos nacionais a um click de distância.
          <br />
          Visite-nos e descubra!
        </p>
        <style.ButtonGroup>
          <style.LinkButton to="/about">Criar Conta</style.LinkButton>
          <style.LinkButton to="/search">Pesquisar Escola</style.LinkButton>
        </style.ButtonGroup>
      </style.Text>
    </style.Wrapper>
  );
}
