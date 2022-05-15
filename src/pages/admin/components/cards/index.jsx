import React from "react";
import * as S from "./style";

export default function Cards({ image, text, total, newData, nameuser }) {
  return (
    <S.Container>
      <S.Content>
        <S.Span>
          <img src={image} alt="" />
        </S.Span>
        <S.Div>
          <h6>{text}</h6>
          <span>
            <label>{total}</label>
            <label>+{newData}</label>
          </span>
        </S.Div>
      </S.Content>
      <S.NewUsers>
        <span>{nameuser}</span>
        <span>{nameuser}</span>
      </S.NewUsers>
    </S.Container>
  );
}
