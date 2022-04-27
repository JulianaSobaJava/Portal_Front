import React from "react";

import * as S from "./style";

import Posts from "../../../../helpers/data/Posts";

export default function Future() {
  return (
    <S.FutureContainer>
      <S.FutureContent>
        <S.FutureDescripion>
          <h1>Planeja o seu futuro</h1>
          <p>
            Esteja conectado a tudo que você precisa para, saber sobre saídas de
            empregos para o curso que escolheu, instrutor virtual e econtrar a
            sua futura escola a um click!
          </p>
        </S.FutureDescripion>
        <span>
          <S.Cloud />
          <S.Book />
        </span>
      </S.FutureContent>
      <S.PostFuture>
        <Posts />
      </S.PostFuture>
    </S.FutureContainer>
  );
}
