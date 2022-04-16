import React, { useContext } from "react";
import Header from "../../components/header/index";
import Sidebar from "../../components/sidebar/index";
import * as S from "./style";
import { ModalContext } from "../../../../../contexts/ModalContext";
import Form from "../../components/form";

import icon from "../../../../../assets/image/icon.png";
import CardInfo from "../../components/cardInfo";

export function Profile() {
  const { sideBarUser } = useContext(ModalContext);
  return (
    <>
      <S.Grid>
        <Header />
        <Sidebar />
        <S.MainSection status={sideBarUser}>
          <S.FormContent>
            <S.Info>
              <S.First>
                <h4>Juliana Soba</h4>
                <p>
                  usuário desde,
                  {new Intl.DateTimeFormat("pt-BR").format(new Date())}
                </p>
              </S.First>
              <S.Second>
                <span>
                  <img alt="" src={icon} />
                </span>
              </S.Second>
            </S.Info>

            {!sideBarUser && <CardInfo />}
            <Form />
          </S.FormContent>
        </S.MainSection>
      </S.Grid>
    </>
  );
}
