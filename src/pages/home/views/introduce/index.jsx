import React from "react";

import * as S from "./style";

import third from "../../../../assets/image/third.png";
import first from "../../../../assets/image/first.png";
import second from "../../../../assets/image/second.png";
import fourth from "../../../../assets/image/fourth.png";

export default function Introduce() {
  return (
    <S.Introduce>
      <S.Post>
        <img src={first} alt="" />
        <p>
          "O Portal das Escolas foi criado com o objetivo de ser o portal mais
          interativo no segmento da educação, trazendo soluções inovadoras na
          conexão entre escolas e alunos.
        </p>
      </S.Post>
      <S.Post>
        <img src={second} alt="" />
        <p>
          "A escolha da escola e do curso é, sem dúvida, uma escolha difícil e
          cheia de particularidades. Nem sempre as melhores escolas são as que
          combinam conosco e o portal das escolas é a solução."
        </p>
      </S.Post>
      <S.Post>
        <img src={third} alt="" />
        <p>
          "Não temos dúvidas que o Portal das Escolas é diferente no mercado
          Agolano. Temos convicção que em breve será a maior referência na busca
          por escolas em todo o país."
        </p>
      </S.Post>
      <S.Post>
        <img src={fourth} alt="" />
        <p>
          "O portal das escolas considera que o ensino médio é o ínicio de uma
          grande e importante caminhada. Pois é apartir dela que toma-se a
          decisão de qual será a nossa profissão."
        </p>
      </S.Post>
    </S.Introduce>
  );
}
