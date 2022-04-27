import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import slide1 from "../../assets/image/future1.png";
import slide2 from "../../assets/image/book.png";
import slide3 from "../../assets/image/user-experience.png";

const Post = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
  height: 100%;
  padding: 0 3%;

  @media (max-width: 800px) {
    flex-wrap: nowrap;
    padding: 0 1%;
    overflow-x: scroll;
    background-color: blue;
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 90%;
  padding: 0 2em;
  color: var(--black-color);
  background: var(--white-color);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  margin: 30px;

  @media (max-width: 800px) {
    margin: 0 5px;
    width: 80%;
    padding: 0 1em;
  }

  p {
    margin-top: 20px;

    @media (max-width: 800px) {
      font-size: 8px;
      margin-top: 2px;
    }
  }
`;

const DivContent = styled.div`
  width: 100%;
  overflow: hidden; // Remove barra de rolagem
  text-overflow: ellipsis; // Adicionando "..." ao final
  display: -webkit-box;
  -webkit-line-clamp: 3; // Quantidade de linhas
  -webkit-box-orient: vertical;
`;
const Image = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: left;
  padding: 1em 0;
  margin-bottom: 1em;

  @media (max-width: 800px) {
    margin-bottom: 10px;
    background-color: yellow;
    height: 12vh;
  }

  img {
    height: 80%;
    width: 40%;
    object-fit: contain;
  }
`;
const LinkExplore = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 1em;
  color: var(--black-color);

  @media (max-width: 800px) {
    font-size: 0.6em;
  }
`;
const LinkTittle = styled(Link)`
  position: relative;
  margin-bottom: 1em;

  @media (max-width: 800px) {
    margin-bottom: 2px;
  }

  h4 {
    color: #232332;
    font-size: 26px;
    font-weight: 500;
    text-align: left;
    color: var(--black-color);
    margin-bottom: 0.6em;

    @media (max-width: 800px) {
      font-size: 0.6em;
      margin-bottom: 0.2em;
    }
  }
  p {
    margin: 0.2em 0;
    font-size: 14px;
    color: #232332;
    line-height: 1.5;
  }
`;

const postsData = [
  {
    img: slide1,
    title: "Porque a sua escolha é importante?",
    description: `Escolher correctamente onde estudar e qual curso seguir é
    importante... Pois acreditamos que vale a pena ver todas a opções e
    saber qual a mais acertada para nós.`,
    explore: "Veja porquê?",
    linkTitle: "/",
    linkExplore: "/",
  },
  {
    img: slide2,
    title: "Porque a sua escolha é importante?",
    description: `Uma das perguntas geralmente feitas pelos alunos é: 'Sou técnico
    médio. E agora?'. Eis as solução, bem antes de ingressar no ensino
    médio descubra quais possibilidades de emprego existem.`,
    explore: "Veja porquê?",

    linkTitle: "/",
    linkExplore: "/",
  },
  {
    img: slide3,
    title: "Minha jornada",
    description: `Mude a sua jornada aqui, seja você escola, aluno ou encarregado com
    a vontade e a preocupação de dar o melhor para seu educando.`,
    explore: "Como definir a minha jornada?",
    linkTitle: "/",
    linkExplore: "/",
  },
];

export default function Posts() {
  return (
    <Post>
      {postsData.map((post, index) => (
        <PostContent>
          <Image>
            <img src={post.img} alt="icon" />
          </Image>
          <LinkTittle to={post.linkTitle}>
            <h4>{post.title}</h4>
          </LinkTittle>
          <DivContent>
            <p>{post.description}</p>
          </DivContent>
          <LinkExplore to={post.linkExplore}>
            <h5>{post.explore}</h5> <Icons.FaAngleRight />
          </LinkExplore>
        </PostContent>
      ))}
    </Post>
  );
}
