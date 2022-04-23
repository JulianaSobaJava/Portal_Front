import React from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { NavItems } from "../../helpers/data/NavItems";

import * as style from "./style";

export default function NavBar() {
  const [click, setClick] = React.useState(false);
  const [colorNav, setColorNav] = React.useState(true);

  const { handleOpenModal } = React.useContext(ModalContext);

  const handleClick = () => {
    setClick(!click);
  };
  const changeNavColor = () => {
    if (window.scrollY >= 10) {
      setColorNav(false);
    } else {
      setColorNav(true);
    }
  };
  window.addEventListener("scroll", changeNavColor);
  return (
    <style.Header color={colorNav}>
      <style.Navbar>
        <style.NavBarLogo to="/" color={colorNav}>
          Portal das Escolas
        </style.NavBarLogo>
        <style.FaBar onClick={handleClick} />
        <style.NavItemsContainer style={click ? { right: "0" } : {}}>
          <style.FaTime onClick={handleClick} />
          <ul>
            {NavItems.map((item) => {
              return (
                <li key={item.id}>
                  <style.NavLink
                    color={colorNav}
                    to={item.path}
                    onClick={handleClick}
                  >
                    {item.title}
                  </style.NavLink>
                </li>
              );
            })}
            {/* {!token ? ( */}
            <li>
              <style.ButtonLogin color={colorNav} onClick={handleOpenModal}>
                Fazer Login
              </style.ButtonLogin>
            </li>
            {/* ) : (
              <span>{userName.split(" ")[0].slice(0, 1)}</span>
            )} */}
            <li>
              <style.NavLinkRegist
                color={colorNav}
                to="/cadastrar/escola"
                onClick={handleClick}
              >
                Cadastrar Escola
              </style.NavLinkRegist>
            </li>
          </ul>
        </style.NavItemsContainer>
      </style.Navbar>
    </style.Header>
  );
}
