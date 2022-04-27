import React from "react";
import * as S from "./style";
import sol from "../../../../assets/image/sol.gif";

export default function Question() {
  return (
    <S.Question>
      <span>
        <img src={sol} alt="" />
      </span>
      <S.QuestionContent>
        <S.QuestionImg>
          <img
            src="https://images.pexels.com/photos/5905557/pexels-photo-5905557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
          />
        </S.QuestionImg>
        <S.QuestionDescription>
          <h1>Tem alguma questão?</h1>
          <label>
            <S.QuestionLink1 to="/about">Vá para as FAQ</S.QuestionLink1>
            <strong>ou</strong>
            <S.QuestionLink to="/contacto">
              Entre em contacto conosco
            </S.QuestionLink>
          </label>
        </S.QuestionDescription>
      </S.QuestionContent>
    </S.Question>
  );
}
