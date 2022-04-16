import React, { useContext } from "react";
import * as S from "../../pages/Profile/style";
import * as Ss from "../header/style";
import * as Icons from "react-icons/md";
import { ModalContext } from "../../../../../contexts/ModalContext";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const { handleSidebarUserClose, sideBarUser } = useContext(ModalContext);
  return (
    <S.Sidebar status={sideBarUser}>
      <strong>Portal das Escolas</strong>
      <Ss.Button onClick={handleSidebarUserClose}>
        <Icons.MdClose />
      </Ss.Button>
      <ul>
        <li>
          <Link to="/user/dashboard">DashBoard</Link>
        </li>
        <li>
          <Link to="/user/dashboard/perfil">Minha Conta</Link>
        </li>
      </ul>
    </S.Sidebar>
  );
}
