import React, { useState } from "react";
import { Formik } from "formik";
import {
  AllInput,
  FormikForm,
  FieldInput,
  Error,
  FormGroup,
} from "../../../components/form/form.styed";
import * as Icons from "react-icons/md";
import { validationSchema } from "../../../validations/userValidation";
import * as style from "./login.styled";

const initialValues = {
  username: "",
  password: "",
};
export default function Login({ setView }) {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <style.Container>
      <style.FirstColumn>
        <h3>Olá, Amigo!</h3>
        <p>Embarque nessa jornada, e</p>
        <p>encontre a escola e o curso,</p>
        <p>que melhor combinam consigo aqui</p>
        <p>Crie a sua conta agora!</p>

        <button onClick={() => setView(true)}>Criar Conta</button>
      </style.FirstColumn>
      <style.SecondColumn>
        <h3>Fazer Login</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {(values, isSubmitting) => (
            <FormikForm method="POST">
              <FormGroup>
                <AllInput>
                  <Icons.MdOutlinePersonOutline />
                  <FieldInput
                    type="text"
                    placeholder="Nome Completo"
                    name="username"
                    autocomplete="off"
                  />
                </AllInput>
                <Error
                  name="username"
                  component="div"
                  className="text-danger"
                />
              </FormGroup>

              <FormGroup>
                <AllInput>
                  <Icons.MdLockOutline />
                  <FieldInput
                    type={show ? "text" : "password"}
                    placeholder="Senha"
                    name="password"
                  />
                  <div className="showEye">
                    {show ? (
                      <Icons.MdOutlineVisibility onClick={handleShow} />
                    ) : (
                      <Icons.MdOutlineVisibilityOff onClick={handleShow} />
                    )}
                  </div>
                </AllInput>
                <Error name="password" component="div" />
              </FormGroup>
              <style.LinkP to="#">Esqueceu a senha?</style.LinkP>
              <button type="submit">Entrar</button>
            </FormikForm>
          )}
        </Formik>
      </style.SecondColumn>
    </style.Container>
  );
}
