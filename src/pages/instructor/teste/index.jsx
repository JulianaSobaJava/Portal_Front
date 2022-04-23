import React, { useState } from "react";
import * as S from "./style";
import questions from "./data/questions";
import NavBar from "../../../components/navBar";
import Wrapper from "../../../components/wrapper";

export default function TesteUser() {
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
    <>
      <NavBar />
      <Wrapper />
      <S.Banner></S.Banner>
      <S.Container>
        <S.Content>
          <h1>Teste Vocacinal Online Grátis</h1>
          <p>
            Escolher qual curso seguir e em qual escola estudar no ensino médio,
            geram dúvidas e muitas incertezas
          </p>
          <p>
            Para te ajudar nessa missão, o PRAVALER disponibiliza um teste
            vocacional para tornar essa escolha um pouquinho mais fácil,
            trazendo pra você as carreiras que mais combinam com a sua
            personalidade.
          </p>
          <S.TesteQuestions>
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
          </S.TesteQuestions>
        </S.Content>
      </S.Container>
    </>
  );
}
