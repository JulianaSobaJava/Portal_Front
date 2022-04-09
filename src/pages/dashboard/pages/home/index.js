import React, { useState, useEffect } from "react";
import Container from "../../components/container/index";
import FeaturedInfo from "../../components/fearuredInfo/index";
import WidgetSchool from "../../components/widgetSchool/index";
import WidgetUser from "../../components/widgetUser/index";
import Charts from "../../components/charts/index";
import * as style from "./home.styled";
import { api } from "../../config/services/axios";

export default function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        setUser(response.data.ExistUser);
      })
      .catch((e) => {
        console.log("erro ups", e);
      });
  }, []);

  console.log("user", user);

  return (
    <Container>
      <FeaturedInfo />
      <Charts />
      <style.HomeWidget>
        <WidgetUser user={user} />
        <WidgetSchool user={user} />
      </style.HomeWidget>
    </Container>
  );
}
