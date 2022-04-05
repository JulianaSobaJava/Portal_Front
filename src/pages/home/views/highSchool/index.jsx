import React from "react";

import * as S from "./style";

import slide1 from "../../../../assets/image/slide1.jpg";
import slide2 from "../../../../assets/image/slide2.jpg";
import slide3 from "../../../../assets/image/slide3.jpg";

export default function HighSchoolSection() {
  return (
    <S.HighSchoolSection>
      <S.ImageGroup>
        <S.Img img1 src={slide1} alt="item about" />
        <S.Img img2 src={slide2} alt="item about" />
        <S.Img img3 src={slide3} alt="item about" />
      </S.ImageGroup>
      <S.DescriptionHighSchoolSection>
        <h2>
          Projecte e prepara-se para o ensino médio bem antes de estar dentro
        </h2>
        <p>
          Melhorar a educação do país, proporcionar o ingresso dos alunos em um
          ensino de qualidade, dar transparência e acesso sobre as informações
          de todas as escolas Angolanas, incentivar e ajudar as escolas a
          aprimorarem os seus serviços, bem como serem conhecidas. Acreditamos
          que o acesso a educação pode mudar o mundo e trabalhamos para isso.
        </p>
      </S.DescriptionHighSchoolSection>
    </S.HighSchoolSection>
  );
}
