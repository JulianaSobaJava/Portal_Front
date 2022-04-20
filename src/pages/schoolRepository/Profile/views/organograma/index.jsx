import React from "react";
import * as s from "./style";

export default function Organograma() {
  return (
    <s.Container>
      <s.First>
        <h2>Directories</h2>
        <p>Nome</p>
      </s.First>
      <s.Second>
        <div>
          <h2>Subdirector</h2>
          <p>Nome</p>
        </div>
        <div>
          <h2>Subdirector</h2>
          <p>Nome</p>
        </div>
      </s.Second>
      <s.Third>
        <div>
          <h2>Professores</h2>
          <p>Nome</p>
        </div>
        <div>
          <h2>Vigilantes</h2>
          <p>Nome</p>
        </div>
        <div>
          <h2>Funcionários</h2>
          <p>Nome</p>
        </div>
      </s.Third>
    </s.Container>
  );
}
