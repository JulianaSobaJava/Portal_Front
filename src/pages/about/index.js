import React, { useState } from "react";
import Faq from "../otherPages/faq/faq";
import AboutContainer from "../otherPages/about/aboutContainer";
import * as style from "./about.styled";
import Container from "../../components/container/container";
import WrapperContainer from "../../components/wrapper/wrapper";

export default function About() {
  const [click, setClick] = useState(true);

  return (
    <Container>
      <WrapperContainer tittle={"Sobre o Portal das Escolas"} />
      <style.MainAbout>
        <style.AsideLinks>
          <h1 style={{ fontWeight: "bold" }}>Outros Links</h1>
          <ul>
            <li key="1" onClick={() => setClick(true)}>
              Sobre
            </li>
            <li key="2" onClick={() => setClick(false)}>
              FAQ
            </li>
            <li>
              <style.LinkNav to="/artigos">Artigos</style.LinkNav>
            </li>
          </ul>
        </style.AsideLinks>
        <style.AboutPortal>
          {click ? <AboutContainer /> : <Faq />}
        </style.AboutPortal>
      </style.MainAbout>
    </Container>
  );
}