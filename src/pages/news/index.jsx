import React from "react";
import Container from "../../components/container/index";
import Wrapper from "../../components/wrapper";
import * as style from "./style";
import NavBar from "../../components/navBar/index";
import Footer from "../../components/footer";

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
