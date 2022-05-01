import React from "react";
import * as style from "./style";
import Container from "../../components/container";
import Wrapper from "../../components/wrapper";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";

import Hexagono from "../../assets/image/Holland.gif";
import Hexagono2 from "../../assets/image/Hexágono-2.jpg";
import Hexagono3 from "../../assets/image/Hexágono-de-Holland.jpg";

import testebanner from "../../assets/image/testebanner.svg";

import { Link } from "react-router-dom";

export default function Instructor() {
  return (
    <>
      <NavBar />
      <Container>
        <Wrapper />
        <style.Slide>
          <style.BannerTeste>
            <span></span>
            <div>
              <h1>Teste Vocacional Gratuito</h1>
              <p>
                Como funciona - O teste é baseado na Teoria de Holland, que diz
                que existem 5 tipos de personalidades de acordo com suas
                características pessoais. O maior requisíto para o teste é o
                auto-conhecimento.
              </p>

              <Link to="/teste-vocacional">
                Fazer Teste <span className="fas fa-arrow-right"></span>
              </Link>
            </div>
            <img src={testebanner} alt="" />
          </style.BannerTeste>
        </style.Slide>

        <style.InfoTeste>
          <h3>Direcionamento Vocacional</h3>

          <p>
            Falar de Direcionamento vocacional é falar de Orientação
            Profissional, Académica, Social, psicológca e muito mais. Este tema
            é muito abrangente, sendo que muitos consideram que apenas
            descobrimos a nossa vocação atraves de Deus.! No entanto EM variados
            países existem pessoas que se formam em ajudar as pessoas a
            descobrir onde se encaixam como profissionais, e pessoas sociais que
            são.!
          </p>

          <style.Hexagonos>
            <img src={Hexagono3} alt="" />
            <img src={Hexagono} alt="" />
            <img src={Hexagono2} alt="" />
          </style.Hexagonos>

          <blockquote>
            O teste vocacional do Portal das Escolas é totalmente gratuito,
            Baseado na teoria de Holland das 6 personalidades, Topologia
            RIASEC.!
            <p>
              O maior requisito é o auto conhecimento.! Deves estar em um lugar
              calmo, no silêncio e sozinho se for possível.!
            </p>
            <ul>
              <caption> Vamos lhe pedir algumas coisas.</caption>
              <li> Seja o mais sincero Possível </li>
              <li>
                Responda as perguntas com calma, não tenha pressa, o tempo não
                faz parte da avaliação.!
              </li>
              <li>
                Responda as perguntas de acordo com o que você é, não como você
                quer ser. Por favor.
              </li>
              <li>
                Esteja no silêncio, Esteja calmo, tranquilo, e bora fazer o
                teste!
              </li>
            </ul>
          </blockquote>
        </style.InfoTeste>
      </Container>
      <Footer />
    </>
  );
}
