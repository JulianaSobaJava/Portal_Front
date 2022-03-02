import React, { useState } from "react";
import * as style from "./registration.styled";
import Container from "../../components/container/container";
import Login from "../userRepository/userLogin/index";
import Sign from "../userRepository/userSign/index";

export default function Registration() {
  const [formProps, setFormProps] = useState(true);
  const handleFormProps = () => {
    setFormProps(!formProps);
  };
  return (
    <Container>
      <style.RegistrationContainer>
        <style.Content animatioContent={formProps}>
          {formProps ? (
            <Sign setView={handleFormProps} animatioContent={formProps} />
          ) : (
            <Login setView={handleFormProps} animatioContent={formProps} />
          )}
        </style.Content>
      </style.RegistrationContainer>
    </Container>
  );
}
