import React, { useState } from "react";
import { useFormik } from "formik";
import {
  AllInput,
  FormikForm,
  FieldInput,
  Error,
  FormGroup,
} from "../../../components/form/style";
import * as Icons from "react-icons/md";
import { sessionValidator } from "../../../validations/userValidation";
import * as style from "./style";
import { api } from "../../../config/axios";

const initialValues = {
  username: "",
  password: "",
};

export default function Login() {
  const [show, setShow] = useState(false);
  const [erro, setErro] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const onSubmit = async (values) => {
    setErro(null);
    const response = await api.post("/session", values).catch((err) => {
      if (err && err.response) setErro(err.response.data.message);
      setSuccess(null);
    });
    if (response) {
      alert("Welcome back");
    }
    // let newLogin;
    // await api
    //   .post("login", {
    //     password: await dataUser.password,
    //     contactId: await newContacto.id,
    //   })
    //   .then((response) => {
    //     console.log("novo login adicionado", response.data);
    //     newContacto = response.data;
    //   })
    //   .catch((error) => {
    //     console.log("erro ao cadastrar o login:", error);
    //   });
  };
  const formik = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema: sessionValidator,
  });

  console.log("error", formik.errors);
  return (
    <style.Container>
      <style.FirstColumn>
        <style.LinkLogo to="/">Logo</style.LinkLogo>
        <h3>Olá, Amigo!</h3>
        <p>Embarque nessa jornada, e</p>
        <p>encontre a escola e o curso,</p>
        <p>que melhor combinam consigo aqui</p>
        <p>Crie a sua conta agora!</p>

        <button>Criar Conta</button>
      </style.FirstColumn>
      <style.SecondColumn>
        {!erro && (
          <style.SuccessMessage>{success ? success : ""}</style.SuccessMessage>
        )}
        {!success && (
          <style.ErrorMessage>{erro ? erro : ""}</style.ErrorMessage>
        )}
        <h3>Fazer Login</h3>
        <FormikForm onSubmit={formik.handleSubmit}>
          <FormGroup>
            <AllInput>
              <Icons.MdOutlinePersonOutline />
              <FieldInput
                type="text"
                placeholder="Email"
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
      </style.SecondColumn>
    </style.Container>
  );
}
