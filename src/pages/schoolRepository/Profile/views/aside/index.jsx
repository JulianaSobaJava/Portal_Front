import React from "react";
import * as s from "./style";
import * as Icons from "react-icons/fa";

export default function Aside() {
  return (
    <s.Container>
      <div>
        <h3>Telefone</h3>
        <p>994394902</p>
      </div>
      <div>
        <h3>Tamanho</h3>
        <p>250 mil km</p>
      </div>
      <div>
        <h3>Avaliação</h3>
        <p>stars</p>
      </div>
      <div>
        <h3>Concorrência</h3>
        <p>entre 1 e 3 alunos/vaga</p>
      </div>
    </s.Container>
  );
}
