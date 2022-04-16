import React from "react";
import Container from "../../components/container/index";
import Wrapper from "../../components/wrapper";
import * as S from "./style";
import NavBar from "../../components/navBar/index";
import Footer from "../../components/footer";

export default function News() {
  return (
    <>
      <NavBar />
      <Container>
        <Wrapper tittle="Notícias" />
        <S.Content>
          <S.Aside>
            <div>
              <div>
                <input type="text" placeholder="Pesquisar por notícias" />
              </div>
              <ul>
                <h3>Categorias</h3>
                <li>Todos</li>
                <li>Escolas</li>
                <li>Cursos</li>
                <li>Teste</li>
              </ul>
              <ul>
                <h3>Artigos</h3>
                <li>O que a intiligência</li>
                <li>Cursos em alta</li>
                <li>O que a intiligência</li>
              </ul>
              <ul>
                <h3>Procurar por</h3>
                <li>Nome</li>
                <li>Munícipio</li>
                <li>Bairro</li>
                <li>Cursos</li>
              </ul>
            </div>
          </S.Aside>
          <S.Main> Main Section</S.Main>
        </S.Content>
      </Container>
      <Footer />
    </>
  );
}
