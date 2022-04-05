import React from "react";
import * as S from "./style";

// import { Container } from './styles';

export default function Banner() {
  return (
    <S.Wrapper>
      <S.Text>
        <h1>Portal das Escolas</h1>
        <p>
          O primeiro portal Angolano, onde encontras todas as escolas e
          <br /> cursos nacionais a um click de distância.
          <br />
          Visite-nos e descubra!
        </p>
        <S.ButtonGroup>
          <S.LinkButton to="/cadastrar">Criar Conta</S.LinkButton>
          <S.LinkButton to="/search">Pesquisar Escola</S.LinkButton>
        </S.ButtonGroup>
      </S.Text>
    </S.Wrapper>
  );
}
