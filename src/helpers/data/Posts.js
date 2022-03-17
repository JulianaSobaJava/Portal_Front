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
  width: 100%;
  height: 100%;
  padding: 0 3%;
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 90%;
  padding: 0 2em;
  margin: 0 38px;
  color: var(--black-color);
  background: var(--white-color);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);

  p {
    margin-top: 20px;
  }
`;

const DivContent = styled.div`
  width: 100%;
  height: 15vh;
`;
const Image = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  align-items: left;
  padding: 1em 0;
  margin-bottom: 1em;
  background: var(--main-color);

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
`;
const LinkTittle = styled(Link)`
  position: relative;
  margin-bottom: 1em;

  h4 {
    text-align: left;
    color: var(--black-color);
    margin-bottom: 1em;
  }
`;
export default function Posts() {
  return (
    <Post>
      <PostContent>
        <Image>
          <img src={slide1} alt="icon" />
        </Image>
        <LinkTittle to="/">
          <h4>Porque a sua escolha é importante?</h4>
        </LinkTittle>
        <DivContent>
          <p>
            Escolher correctamente onde estudar e qual curso seguir é
            importante... Pois acreditamos que vale a pena ver todas a opções e
            saber qual a mais acertada para nós.
          </p>
        </DivContent>
        <LinkExplore to="/">
          <h5>Veja porquê</h5> <Icons.FaAngleRight />
        </LinkExplore>
      </PostContent>

      <PostContent>
        <Image>
          <img src={slide2} alt="icon" />
        </Image>
        <LinkTittle to="/">
          <h4>Porque a sua escolha é importante?</h4>
        </LinkTittle>
        <DivContent>
          <p>
            Uma das perguntas geralmente feitas pelos alunos é: 'Sou técnico
            médio. E agora?'. Eis as solução, bem antes de ingressar no ensino
            médio descubra quais possibilidades de emprego existem.
          </p>
        </DivContent>
        <LinkExplore to="/">
          <h5>Veja porquê</h5> <Icons.FaAngleRight />
        </LinkExplore>
      </PostContent>

      <PostContent>
        <Image>
          <img src={slide3} alt="icon" />
        </Image>
        <LinkTittle to="/">
          <h4>Minha jornada</h4>
        </LinkTittle>
        <DivContent>
          <p>
            Mude a sua jornada aqui, seja você escola, aluno ou encarregado com
            a vontade e a preocupação de dar o melhor para seu educando.
          </p>
        </DivContent>
        <LinkExplore to="/">
          <h5>Como definir a minha jornada?</h5> <Icons.FaAngleRight />
        </LinkExplore>
      </PostContent>
    </Post>
  );
}
