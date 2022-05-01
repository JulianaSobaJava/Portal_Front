import React, { useContext } from "react";
import Header from "../../components/header/index";
import Sidebar from "../../components/sidebar/index";
import * as S from "../Profile/style";
import { ModalContext } from "../../../../../contexts/ModalContext";
import * as Ss from "./style";
import NavBar from "../../components/navbar";

import Cursos from "../../components/cursos/index";
import Escolas from "../../components/escolas/index";
import Teste from "../../components/testevocacional";
import Pesquisar from "../../components/pesquisar";

export function DashBoard() {
  const { sideBarUser, navItem } = useContext(ModalContext);

  function DashContent(content) {
    switch (content) {
      case "Cursos":
        return <Cursos />;
      case "Escolas":
        return <Escolas />;
      case "Teste Vocacional":
        return <Teste />;
      case "Pesquisar Escolas":
        return <Pesquisar />;
      default:
        console.log("Error");
    }
  }

  console.log("Context", navItem);

  return (
    <>
      <S.Grid>
        <Header />
        <Sidebar />
        <S.MainSection status={sideBarUser}>
          <Ss.Container>
            <h1>DashBoard</h1>
            <NavBar />
            <div>{DashContent(navItem)}</div>
          </Ss.Container>
        </S.MainSection>
      </S.Grid>
    </>
  );
}
