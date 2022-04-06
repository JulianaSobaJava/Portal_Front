import React, { useState } from "react";

import Container from "../../../components/container/index";

import * as S from "./style";
import Link from "./views/link";
import FormSchool from "./views/formSchool";
import Info from "./views/Info";

export default function RegistrationSchool() {
  const [show, setShow] = useState("false");
  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <Container>
      <S.Content>
        <Link />
        <S.FormContent>
          <Info />
          <FormSchool />
        </S.FormContent>
      </S.Content>
    </Container>
  );
}
