import React, { useState, useEffect, useMemo } from "react";
import { NavItems } from "./data/navItems";
import styled from "styled-components";

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
  const [active, setActive] = useState(0);

  const handleActive = (idc, e) => {
    console.log(e);
    console.log("active", active, "idc", idc);
  };

  return (
    <Nav>
      <List>
        {NavItems.map((item, idc) => (
          <ListItem key={idc} className={active === 0 ? "active" : ""}>
            <Button key={idc} onChange={handleActive(idc)}>
              {item.name}
            </Button>
          </ListItem>
        ))}
      </List>
    </Nav>
  );
}
