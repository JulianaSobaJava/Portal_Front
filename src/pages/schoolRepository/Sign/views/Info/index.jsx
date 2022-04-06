import React from "react";
import image from "../../../../../assets/image/login.png";
import { Infomation } from "./style";

export default function Info() {
  return (
    <Infomation>
      <h2>Seja um parceiro nosso, cadastrando a sua escola!</h2>
      <p>
        Para ser o gestor e utilizar nossos serviços gratuitos para aprimorar
        sua gestão escolar. Crie uma conta caso não tenha
      </p>
      <div>
        <img src={image} alt="sig up" />
      </div>
    </Infomation>
  );
}
