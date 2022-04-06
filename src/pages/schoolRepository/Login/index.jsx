import React, { useState } from "react";
import Container from "../../../components/container/index";
import * as style from "./style";
import * as Icons from "react-icons/md";
import { useFormik } from "formik";
import {
  AllInput,
  FormikForm,
  FieldInput,
  Error,
  FormGroup,
} from "../../../components/form/style";
import { sessionValidator } from "../../../validations/userValidation";
import image from "../../../assets/image/login.png";
import Link from "../Sign/views/link/index";

const initialValues = {
  username: "",
  password: "",
};

export default function SchoolLogin() {
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const onSubmit = async (values) => {
    console.log("OLá");
  };

  const formik = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema: sessionValidator,
  });

  return (
    <Container>
      <Link to="/" h4="Portal das escolas" />
      <style.MainSection>
        <style.Text>
          <h2>Área do gestor</h2>
          <span>
            <p>
              Gerencie o desempenho da sua página, saiba as estratégias de seus
              concorrentes e aumente seus resultados na captação de alunos.
            </p>
          </span>
        </style.Text>
        <style.Form>
          <h2>Fazer Login</h2>
          <FormikForm onSubmit={formik.handleSubmit}>
            <FormGroup>
              <AllInput>
                <Icons.MdOutlinePersonOutline />
                <FieldInput
                  type="text"
                  placeholder="Nome Completo"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  autocomplete="off"
                  onBlur={formik.handleBlur}
                />
              </AllInput>
              <Error>
                {formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : ""}
              </Error>
            </FormGroup>
            <FormGroup>
              <AllInput>
                <Icons.MdLockOutline />
                <FieldInput
                  type={show ? "text" : "password"}
                  placeholder="Senha"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  name="password"
                  autocomplete="off"
                  onBlur={formik.handleBlur}
                />
                <div className="showEye">
                  {show ? (
                    <Icons.MdOutlineVisibility onClick={handleShow} />
                  ) : (
                    <Icons.MdOutlineVisibilityOff onClick={handleShow} />
                  )}
                </div>
              </AllInput>
              <Error>
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""}
              </Error>
            </FormGroup>

            <style.LinkP to="#">Esqueceu a senha?</style.LinkP>
            <button type="submit">Entrar</button>
          </FormikForm>
        </style.Form>
        <style.Sign>
          <h2>Quero conhecer a Área do Gestor</h2>
          <p>
            Utilize nossos serviços gratuitos para aprimorar sua gestão escolar
          </p>
          <div>
            <img src={image} alt="imag" />
          </div>
          <style.LinkButton to="/cadastrarEscola">Criar Conta</style.LinkButton>
        </style.Sign>
      </style.MainSection>
    </Container>
  );
}
