import React from "react";
import * as S from "./style";

const username = "Juliana";
const userticket = "008462782LA045";
const email = "julianasobajava23@gmail.com";

export default function Card() {
  return (
    <>
      <S.Container>
        <S.Info>
          <h4>Seja bem-vindo, {username}!</h4>
          <p>BI {userticket}</p>
          <p>{email}</p>
        </S.Info>
        <S.Others>
          <S.Button>
            <S.Settings />
          </S.Button>
          <span>Logout</span>
        </S.Others>
      </S.Container>
    </>
  );
}
