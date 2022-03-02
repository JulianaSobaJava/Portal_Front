import React, { useState } from "react";
import { NavItems } from "../../helpers/data/NavItems";
import * as style from "./navbar.styled";

export default function NavBar() {
  const [click, setClick] = useState(false);
  const [colorNav, setColorNav] = useState(true);

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
          Logo
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
            <li>
              <style.NavLinkRegist
                color={colorNav}
                to="/registration"
                onClick={handleClick}
              >
                Criar Conta
              </style.NavLinkRegist>
            </li>
            <li>
              <style.NavLinkRegist
                color={colorNav}
                to="/registrationSchool"
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
