import React from "react";
import images from "../../../../helpers/data/Images";

import * as S from "./style";

export default function Slide() {
  return (
    <S.RandomSchools>
      <h4>
        Resultado de 4 escolas de <span>Luanda</span>
      </h4>
      <S.RandomContainer>
        {images.map((item) => {
          return (
            <S.Box key={item.id}>
              <img src={item.src} alt="" />
              <S.BoxContent>
                <h3>{item.nSchool}</h3>
                <p>{item.description}</p>
                <S.LinkButton to={item.link}>Ver Perfil</S.LinkButton>
              </S.BoxContent>
            </S.Box>
          );
        })}
      </S.RandomContainer>
    </S.RandomSchools>
  );
}
