import React, { useState, useContext, useEffect } from "react";
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
import { ModalContext } from "../../../contexts/ModalContext";
import { AuthContext } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";

const initialValues = {
  contact: "",
  password: "",
};

export default function Login() {
  const [show, setShow] = useState(false);

  const { handleCloseModal } = React.useContext(ModalContext);
  const { LoginRequest, isAuthenticated } = useContext(AuthContext);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  useEffect(() => {
    if (isAuthenticated) {
      alert("Im logged");
    }
  }, [isAuthenticated]);

  const onSubmit = async (values) => {
    const loadToast = toast.loading("Processando");

    if (values) {
      console.log("dados de login", values);
      await LoginRequest(values);
      handleCloseModal();
    }
    toast.dismiss(loadToast);
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
                name="contact"
                value={formik.values.contact}
                onChange={formik.handleChange}
                autocomplete="off"
                onBlur={formik.handleBlur}
              />
            </AllInput>
            <Error>
              {formik.touched.contact && formik.errors.contact
                ? formik.errors.contact
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
