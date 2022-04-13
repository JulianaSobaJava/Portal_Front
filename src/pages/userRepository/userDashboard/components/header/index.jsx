import React from "react";
import NavBar from "../navbar/index";
import Card from "../card/index";
import * as S from "./style";

export default function Header() {
  return (
    <S.Container>
      <div>
        <strong>Portal das Escolas</strong>
        <Card />
      </div>
      <NavBar />
    </S.Container>
  );
}
