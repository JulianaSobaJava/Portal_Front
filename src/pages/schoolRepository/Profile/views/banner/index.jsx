import React from "react";
import * as s from "./style";
import image from "../../../../../assets/image/IMIL.png";

export function Banner() {
  return (
    <s.Container>
      <s.FotodeFundo></s.FotodeFundo>
      <s.Content>
        <s.ProfileFoto>
          <img src={image} alt="" />
        </s.ProfileFoto>
        <s.Info>
          <h1>Instituto Politécnico Industrial de Luanda</h1>
          <h4>Rede Pública</h4>
          <p>Luanda, Luanda, Largo Sweto</p>
        </s.Info>
      </s.Content>
    </s.Container>
  );
}
