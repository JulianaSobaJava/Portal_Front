import React, { useEffect } from "react";
import NavBar from "../../../components/navBar";
import { Banner } from "./views/banner";
import Container from "../../../components/container/index";
import { Content, Main, Numbers, Aditional, Extra } from "./style";
import Aside from "./views/aside";
import History from "./views/history";
import Organograma from "./views/organograma";
import Cursos from "./views/cursos";
import Galery from "./views/galery";
import Matricula from "./views/others";
import Info from "./views/info";

export default function SchoolProfile() {
  function Increment(i, max) {
    if (i > max) return;
    setTimeout(function () {
      Increment(i + 1, max);
    }, 20);
  }
  useEffect(() => {
    console.log(Increment(0, 200));
  }, []);

  return (
    <div>
      <NavBar />
      <Banner />
      <Container>
        <Content>
          <Main>
            <History />
            <Info />

            <Numbers>
              <span> alunos</span>
              <span>1000 professores</span>
              <span>15 professores</span>
            </Numbers>
            <Organograma />
            <Cursos />
            <Galery />
            <Aditional>
              <h3>Informações Adicionais</h3>
              <ul>
                <li>Limpezas</li>
                <li>Palestras</li>
              </ul>
            </Aditional>
            <Matricula />
            <Extra>
              <div>
                <h4>
                  "Whether I'm writing my master's thesis in ethics or
                  addressing structural causes of income inequality, I know the
                  quality of my Agnes education has prepared me to do well. From
                  my first classes at Agnes, my professors supported my
                  intellectual growth and encouraged me to question, analyze,
                  and think with both rigor and humility."
                  <p>Mallika Balakrishnan, alumnae, 2019</p>
                </h4>
              </div>
            </Extra>
          </Main>
          <Aside />
        </Content>
      </Container>
    </div>
  );
}
