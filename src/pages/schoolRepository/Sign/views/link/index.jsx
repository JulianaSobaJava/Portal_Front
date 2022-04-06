import React from "react";
import * as S from "./style";
import * as IconsFa from "react-icons/fa";

export default function Link() {
  return (
    <S.GoToLogin>
      <span>
        <S.LinkLogin to="/loginSchool">
          <IconsFa.FaRegArrowAltCircleLeft />
        </S.LinkLogin>
        <h4>Fazer Login</h4>
      </span>
      <S.LinkHome to="/">
        <IconsFa.FaHome />
      </S.LinkHome>
    </S.GoToLogin>
  );
}
