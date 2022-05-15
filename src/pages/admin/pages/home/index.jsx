import React from "react";
import Cards from "../../components/cards";
import { Sidebar } from "../../components/sidebar";
import NavBar from "./mock";
import * as S from "./style";
import image from "../../../../assets/image/mainImage.jpg";
import icon1 from "../../../../assets/image/studenticon.png";
import icon2 from "../../../../assets/image/schoolicon.png";
import icon3 from "../../../../assets/image/totalicon.png";

import Table from "../../components/table";
import Charts from "../../components/charts";

export function AdminHome() {
  const today = new Date(Date.now());
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <S.Container>
      <Sidebar />
      <S.Content>
        <S.NavContent>
          <NavBar />
        </S.NavContent>
        <S.HomeContent>
          <S.CardContent>
            <h4>Meu Dashboard</h4>
            <S.CardContentChildren>
              <S.Card>
                <h5>Seja Bem-vindo ao Dashboard</h5>
                <div>
                  <img src={image} alt="" />
                </div>
                <span>{today.toLocaleDateString("pt-AO", options)}</span>
              </S.Card>
              <S.CardsContent>
                <Cards
                  image={icon1}
                  text="Usuários"
                  total="11"
                  newData="19"
                  nameuser="JS"
                />
                <Cards
                  image={icon2}
                  text="Escolas"
                  total="11"
                  newData="19"
                  nameuser="No"
                />
                <Cards image={icon3} text="Total" total="11" newData="19" />
              </S.CardsContent>
            </S.CardContentChildren>
          </S.CardContent>
          <S.ContentBody>
            <Table />
            <Charts />
          </S.ContentBody>
        </S.HomeContent>
      </S.Content>
    </S.Container>
  );
}
