import React from "react";
import * as S from "./style";
import { navitems } from "./mock";

export function Sidebar() {
  return (
    <S.Container>
      <S.Content>
        <h2>Logo do Portal</h2>
        <S.Nav>
          {navitems.map((item, idx) => (
            <>
              <h4 key={idx}>{item.title}</h4>
              {item.itens.map((item, id) => (
                <S.LinkAside to={item.path}>
                  <div>{item.Icons}</div> <li>{item.name}</li>
                </S.LinkAside>
              ))}
            </>
          ))}
        </S.Nav>

        <S.Button type="button">Sair</S.Button>
      </S.Content>
    </S.Container>
  );
}
