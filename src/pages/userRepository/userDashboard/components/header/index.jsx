import React, { useContext } from "react";
import Card from "../card/index";
import * as S from "./style";
import * as Icons from "react-icons/md";
import { ModalContext } from "../../../../../contexts/ModalContext";

export default function Header() {
  const { handleSidebarUserOpen, sideBarUser } = useContext(ModalContext);
  console.log(sideBarUser);
  return (
    <S.Container status={sideBarUser}>
      <div status={sideBarUser}>
        {sideBarUser ? (
          ""
        ) : (
          <S.Button status={sideBarUser} onClick={handleSidebarUserOpen}>
            <Icons.MdMenu />
          </S.Button>
        )}
        <Card />
      </div>
    </S.Container>
  );
}
