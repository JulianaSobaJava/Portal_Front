import React, { useState } from "react";
import * as S from "./style";
import { NavItems } from "./data/navItems";

export default function NavBar() {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <S.Container>
      <S.List>
        {NavItems.map((item, idc) => (
          <S.ListItem key={idc}>
            <S.LinkItem
              className={idc === activeLink ? "active" : ""}
              to={item.to}
              onClick={() => setActiveLink(idc)}
            >
              {item.name}
            </S.LinkItem>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
}
