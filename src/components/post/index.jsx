import React from "react";
import * as S from "./style";
import image from "../../assets/image/IMIL.png";

export function Post() {
  return (
    <S.Container>
      <S.Image>
        <img src={image} alt="" />
      </S.Image>
      <S.Content>
        <h2>Instituto Politecnico Industrial de Luanda</h2>
        <S.data>
          Junho 03, 2020 <span>13:20</span>
        </S.data>

        <S.MainContent>
          <p>
            <span>
              O Instituto Politécnico Industrial de Luanda (IPIL) anunciou, ao
              público em geral, que a partir desta segunda-feira, 26 de Julho, a
              inscrição para a 10ª Classe também pode ser feita pela internet.
            </span>
          </p>
          <p>
            De acordo com o documento a que tivemos acesso, as inscrições online
            obedecem aos seguintes procedimentos:
            <p>
              Passo 1: Pré-inscrição online, por meio do preenchimento do
              formulário que poderá ser acedido pelo link
              inscricao.imil-makarenko.co.ao;
            </p>
            <p>
              Passo 2: Ao finalizar o processo de pré-inscrição, será enviado ao
              candidato, por e-mail, o recibo de inscrição e a nota de
              liquidação.
            </p>
            <p>
              Passo 3: Após efectuar o pagamento, o candidato deverá submeter o
              comprovativo no link de inscrição, e receberá pela mesma via o
              comprovativo de inscrição.
            </p>
          </p>

          <p>
            Caso não for possível o procedimento por esta via, o utente poderá
            dirigir-se a secretaria pedagógica da instituição onde fará a
            entrega de uma cópia do seu comprovativo de inscrição. Depois é só
            aguardar pela publicação das listas de candidatos seleccionados.
          </p>
        </S.MainContent>
      </S.Content>
    </S.Container>
  );
}
