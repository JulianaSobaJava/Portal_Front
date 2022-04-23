import React from "react";

import Container from "../../../components/container/index";

import * as S from "./style";
import Link from "./views/link";
import Info from "./views/Info";
import Form from "./views/Form/index";

export default function RegistrationSchool() {
  return (
    <Container>
      <S.Content>
        <Link to="/login/escola" h4="Fazer Login" />
        <S.FormContent>
          <Info />
          <S.FormUser>
            <Form />
          </S.FormUser>
        </S.FormContent>
      </S.Content>
    </Container>
  );
}
