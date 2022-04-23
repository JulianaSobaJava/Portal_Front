import React from "react";
import Container from "../../components/container/index";
import Wrapper from "../../components/wrapper";
import * as S from "./style";
import NavBar from "../../components/navBar/index";
import Footer from "../../components/footer";
import image from "../../assets/image/slide1.jpg";
import { Post } from "../../components/post/index";
import { Loader } from "../../components/loader";

export default function News() {
  return (
    <>
      <NavBar />
      <Container>
        <Wrapper tittle="Notícias" />
        <S.Content>
          <S.Aside>
            <S.AsideContent>
              <S.SeachInput>
                <input type="text" placeholder="Pesquisar por notícias" />
              </S.SeachInput>
              <S.List>
                <h3>Categorias</h3>
                <S.ListItem>Todos</S.ListItem>
                <S.ListItem>Escolas (10)</S.ListItem>
                <S.ListItem>Cursos (5)</S.ListItem>
                <S.ListItem>Teste (12)</S.ListItem>
              </S.List>
              <S.List>
                <h3>Artigos</h3>
                <S.ListArticle>
                  <div>
                    <img src={image} alt="" />
                  </div>
                  <S.Span>
                    <p>O que é a intiligência</p>
                    <span>Fevereiro 03, 2020</span>
                  </S.Span>
                </S.ListArticle>
                <S.ListArticle>
                  <div>
                    <img src={image} alt="" />
                  </div>
                  <S.Span>
                    <p>Cursos em alta</p>
                    <span>Junho 12, 2022</span>
                  </S.Span>
                </S.ListArticle>
                <S.ListArticle>
                  <div>
                    <img src={image} alt="" />
                  </div>
                  <S.Span>
                    <p>O que é o bullying?</p>
                    <span>Março 03, 2021</span>
                  </S.Span>
                </S.ListArticle>
              </S.List>
              <S.List>
                <h3>Procurar por</h3>
                <S.Filter>
                  <li>Nome</li>
                  <li>Munícipio</li>
                  <li>Bairro</li>
                  <li>Cursos</li>
                </S.Filter>
              </S.List>
            </S.AsideContent>
          </S.Aside>
          <S.Main>
            <S.Postes>
              <Post />
              <Post />
            </S.Postes>
            <Loader />
          </S.Main>
        </S.Content>
      </Container>
      <Footer />
    </>
  );
}
