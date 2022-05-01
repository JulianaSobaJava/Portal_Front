import React from "react";
import * as S from "./style";

// import { Container } from './styles';

export default function Banner() {
  return (
    <S.Wrapper>
      <ul>
        <div>
          <S.Text>
            <h1>Portal das Escolas</h1>
            <p>
              O primeiro portal Angolano, onde encontras todas as escolas e
              <br /> cursos nacionais a um click de distância.
              <br />
              Visite-nos e descubra!
            </p>
            <S.ButtonGroup>
              <S.LinkButton to="/cadastrar/user">Criar Conta</S.LinkButton>
              <S.LinkButton to="/schools">Pesquisar Escola</S.LinkButton>
            </S.ButtonGroup>
          </S.Text>
        </div>

        <div>
          <S.Text>
            <h1>Portal das Escolas</h1>
            <p>
              O primeiro portal Angolano, onde encontras todas as escolas e
              <br /> cursos nacionais a um click de distância.
              <br />
              Visite-nos e descubra!
            </p>
            <S.ButtonGroup>
              <S.LinkButton to="/cadastrar/user">Criar Conta</S.LinkButton>
              <S.LinkButton to="/schools">Pesquisar Escola</S.LinkButton>
            </S.ButtonGroup>
          </S.Text>
        </div>

        <div>
          <S.Text>
            <h1>Faça o teste</h1>
            <p>
              Não sabe qual curso fazer no ensino médio? Não se preocupe.
              <br /> Faça o teste vocacional e descubra quais as suas
              inclinações
              <br />
              Visite-nos e descubra!
            </p>
            <S.ButtonGroup>
              <S.LinkButton to="/cadastrar/user">Criar Conta</S.LinkButton>
              <S.LinkButton to="/instructor">Fazer Teste</S.LinkButton>
            </S.ButtonGroup>
          </S.Text>
        </div>

        <div>
          <S.Text>
            <h1>Encontre a escola e </h1>
            <p>
              o curso que melhor combinam consigo e o seu bolso
              <br />
              sem precisar sair de casa e a click de distância.
              <br />
              Visite-nos e descubra!
            </p>
            <S.ButtonGroup>
              <S.LinkButton to="/cadastrar/user">Criar Conta</S.LinkButton>
              <S.LinkButton to="/school">Pesquisar Escola</S.LinkButton>
            </S.ButtonGroup>
          </S.Text>
        </div>

        <div>
          <S.Text>
            <h1>Portal das Escolas</h1>
            <p>
              O primeiro portal Angolano, onde encontras todas as escolas e
              <br /> cursos nacionais a um click de distância.
              <br />
              Visite-nos e descubra!
            </p>
            <S.ButtonGroup>
              <S.LinkButton to="/cadastrar/user">Criar Conta </S.LinkButton>
              <S.LinkButton to="/school">Pesquisar Escola</S.LinkButton>
            </S.ButtonGroup>
          </S.Text>
        </div>
      </ul>
    </S.Wrapper>
  );
}
