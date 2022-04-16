import React from "react";
import * as S from "./style";

export default function CardInfo() {
  return (
    <S.Container>
      <h3>Pré-Visualizar Informações</h3>
      <S.Content>
        <S.Table>
          <tbody>
            <tr>
              <td>
                <h5>Nome</h5>
              </td>
              <td>
                <label>Juliana Soba</label>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Data de Nascimento</h5>
              </td>
              <td>
                <label>12/062002</label>
              </td>
            </tr>

            <tr>
              <td>
                <h5>Bilhete de Identidade</h5>
              </td>
              <td>
                <label>743837382LA837</label>
              </td>
            </tr>
          </tbody>
        </S.Table>

        <S.Table>
          <tbody>
            <tr>
              <td>
                <h5>Email</h5>
              </td>
              <td>
                <label>julianasobajava23@gmail.com</label>
              </td>
            </tr>
            <tr>
              <td>
                <h5>Telefone</h5>
              </td>
              <td>
                <label>994394902</label>
              </td>
            </tr>

            <tr>
              <td>
                <h5>Endereço</h5>
              </td>
              <td>
                <label>Luanda, Palanca</label>
              </td>
            </tr>
          </tbody>
        </S.Table>
      </S.Content>
    </S.Container>
  );
}
