import React, { useState } from "react";
import * as S from "./style";
import questions from "./data/questions";

export default function Teste() {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(0);

  function endTeste() {}

  function showType(type) {
    switch (type) {
      case "Linguística":
        setType(type + 1);
        break;
      case "Lógico-Matemática":
        setType(type + 1);
        break;
      case "Espacial":
        setType(type + 1);
        break;
      case "Musical":
        setType(type + 1);
        break;
      case "Intrapessoal":
        setType(type + 1);
        break;
      case "Interpessoal":
        setType(type + 1);
        break;
      case "Naturalista":
        setType(type + 1);
        break;
      case "Corporal-Cinestésica":
        setType(type + 1);
        break;
      default:
        console.log("Error");
    }
  }

  return (
    <S.Container>
      <S.Content>
        <div>
          <h3>{questions[page].pergunta}</h3>
          <ul>
            {questions[page].respostas.map((item) => (
              <li>
                <button
                  onClick={() => {
                    if (page <= 15) {
                      page !== 15 ? setPage(page + 1) : endTeste();
                      console.log("Type => ", item.type);
                      showType(item.type);
                    }
                  }}
                >
                  {item.resposta}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </S.Content>
    </S.Container>
  );
}
