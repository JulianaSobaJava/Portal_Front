import React, { useState } from "react";
import { useFormik } from "formik";
import {
  AllInput,
  FieldInput,
  Error,
  FormGroup,
} from "../../../components/form/style";
import * as Icons from "react-icons/md";
import { sessionValidator } from "../../../validations/userValidation";
import * as style from "./style";
import { api } from "../../../config/axios";
import { ModalContext } from "../../../contexts/ModalContext";
import { AuthContext } from "../../../contexts/AuthProvider";

const initialValues = {
  telefone: "",
  password: "",
};

export default function Login() {
  const [show, setShow] = useState(false);

  const { handleCloseModal } = React.useContext(ModalContext);
  const { setAuth } = React.useContext(AuthContext);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const onSubmit = async (values) => {
    const { telefone, password } = values;

    await api
      .post("session", {
        contact: telefone,
        password,
      })
      .then((response) => {
        console.log("session start", response?.data);
        const userName = response?.data?.user.name;
        const role = response?.data?.user.roleId.id;
        const roleName = response?.data?.user.roleId.descricao;
        const token = response?.data?.token;
        setAuth({ userName, role, roleName, token });
        console.log(userName, role, roleName, token);
        formik.resetForm();
        handleCloseModal();
      })
      .catch((error) => {
        if (!error?.response) {
          console.log("No server response");
        } else if (error?.response?.status === 400) {
          console.log("Missing Username or Password");
        } else if (error?.response?.status === 401) {
          console.log("Unauthorized");
        } else {
          console.log("Login Failed");
        }
      });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema: sessionValidator,
  });

  return (
    <style.Container>
      <style.FirstColumn>
        <h3>Olá, Amigo!</h3>
        <p>
          Embarque nessa jornada,
          <br />e encontre a escola e o curso,
          <br />
          que melhor combinam consigo
          <br />
          Crie a sua conta agora!
        </p>

        <style.LinkButton to="/cadastrar" onClick={handleCloseModal}>
          Criar Conta
        </style.LinkButton>
      </style.FirstColumn>
      <style.SecondColumn>
        <h3>Fazer Login</h3>
        <style.FormikForm onSubmit={formik.handleSubmit}>
          <FormGroup>
            <AllInput>
              <Icons.MdOutlinePhoneIphone />
              <FieldInput
                type="text"
                placeholder="Telefone"
                name="telefone"
                value={formik.values.telefone}
                onChange={formik.handleChange}
                autocomplete="off"
                onBlur={formik.handleBlur}
              />
            </AllInput>
            <Error>
              {formik.touched.telefone && formik.errors.telefone
                ? formik.errors.telefone
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
        </style.FormikForm>
      </style.SecondColumn>
    </style.Container>
  );
}
