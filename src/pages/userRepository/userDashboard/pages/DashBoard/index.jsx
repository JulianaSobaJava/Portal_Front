import React, { useContext } from "react";
import Header from "../../components/header/index";
import Sidebar from "../../components/sidebar/index";
import * as S from "../Profile/style";
import { ModalContext } from "../../../../../contexts/ModalContext";
import * as Ss from "./style";
import NavBar from "../../components/navbar";

export function DashBoard() {
  const { sideBarUser } = useContext(ModalContext);
  return (
    <>
      <S.Grid>
        <Header />
        <Sidebar />
        <S.MainSection status={sideBarUser}>
          <Ss.Container>
            <h1>DashBoard</h1>
            <NavBar />
          </Ss.Container>
        </S.MainSection>
      </S.Grid>
    </>
  );
}
