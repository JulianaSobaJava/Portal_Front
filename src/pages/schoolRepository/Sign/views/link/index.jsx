import React from "react";
import * as S from "./style";
import * as IconsFa from "react-icons/fa";

export default function Link({ to, h4 }) {
  return (
    <S.GoToLogin>
      <span>
        <S.LinkLogin to={to}>
          <IconsFa.FaRegArrowAltCircleLeft />
        </S.LinkLogin>
        <h4>{h4}</h4>
      </span>
      <S.LinkHome to="/">
        <IconsFa.FaHome />
      </S.LinkHome>
    </S.GoToLogin>
  );
}
