import React, { useState } from "react";
import * as s from "./style";

export default function Cursos() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <s.Container>
      <h2>Cursos</h2>
      <ul>
        <li>
          <div></div>
          <button onclick={handleClick}>Informática</button>
        </li>
        <li>
          <div></div>
          <button>Informática</button>
        </li>
        <li>
          <div></div>
          <button>Informática</button>
        </li>
        <li>
          <div></div>
          <button>Informática</button>
        </li>
        <li>
          <div></div>
          <button>Informática</button>
        </li>
        <li>
          <div></div>
          <button>Informática</button>
        </li>
      </ul>
    </s.Container>
  );
}
