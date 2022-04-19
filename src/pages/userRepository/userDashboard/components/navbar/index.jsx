import React, { useState, useContext } from "react";
import { NavItems } from "./data/navItems";
import styled from "styled-components";

import { ModalContext } from "../../../../../contexts/ModalContext";

const Nav = styled.nav`
  width: 100%;
  padding: 1% 1%;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
`;
const ListItem = styled.li`
  transition: 0.5s all;
  height: 5vh;

  padding: 0 0.6%;
  cursor: pointer;

  .active {
    background: blue;
    border-bottom: 4px solid var(--main-color);
  }

  & + li {
    margin-left: 15px;
  }
`;

const Button = styled.button`
  background-color: transparent;
  padding: 2% 0;
  height: 100%;

  &:hover {
    color: var(--main-color);
  }
`;

export default function NavBar() {
  const { setNavItem } = useContext(ModalContext);

  const handleActive = (item) => {
    setNavItem(item);
  };

  return (
    <Nav>
      <List>
        {NavItems.map((item, idc) => (
          <ListItem key={idc}>
            <Button key={idc} onClick={(e) => handleActive(e.target.innerText)}>
              {item.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
}
