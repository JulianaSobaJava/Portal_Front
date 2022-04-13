import React from "react";
import * as S from "./style";
import Container from "../../../../../components/container/index";
import Header from "../../components/header/index";
import * as Ss from "../Dashboard/style";

export default function Favoritos() {
  return (
    <>
      <Header />
      <Container>
        <Ss.Content>
          <Ss.ContentBody>
            <S.Body>
              <S.SideBarSide>Sidebar</S.SideBarSide>
              <S.MainSection>Mian</S.MainSection>
            </S.Body>
          </Ss.ContentBody>
        </Ss.Content>
      </Container>
    </>
  );
}
