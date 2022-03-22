import React from "react";
import Container from "../../components/container/container";
import Wrapper from "../../components/wrapper/wrapper";
import * as style from "./news.styled";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";

export default function News() {
  return (
    <>
      <NavBar />
      <Container>
        <Wrapper tittle="Notícias" />
        <section>
          <aside> S uma Aside </aside>
          <div> Main Section</div>
        </section>
      </Container>
      <Footer />
    </>
  );
}
