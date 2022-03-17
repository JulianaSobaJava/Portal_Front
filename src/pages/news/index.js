import React from "react";
import Container from "../../components/container/container";
import Wrapper from "../../components/wrapper/wrapper";
import * as style from "./news.styled";

export default function News() {
  return (
    <Container>
      <Wrapper tittle="Notícias" />
      <section>
        <aside> S uma Aside </aside>
        <div> Main Section</div>
      </section>
    </Container>
  );
}
