import React from "react";
import { useFormik } from "formik";
import {
  AllInput,
  FormikForm,
  FieldInput,
  FormGroup,
  Error,
} from "./form.styed";
import { validationSchema } from "../../validations/userValidation";
import * as Icons from "react-icons/md";
import { AiOutlineIdcard } from "react-icons/ai";
import { api } from "../../config/axios";

const initialValues = {
  username: "",
  password: "",
  telefone: "",
  dateBorn: "",
  bi: "",
  confirmPassword: "",
  province: "",
  municipe: "",
  street: "",
};
export default function Form({ show, handleShow, setSuccess, setErro }) {
  const onSubmit = async (values) => {
    const { confirmPassword, ...data } = values;

    const response = await api.post("/user", data).catch((err) => {
      if (err && err.response) setErro(err.response.data.message);
      setSuccess(null);
    });

    if (response && response.data) {
      setErro(null);
      setSuccess(response.data.message);
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

  console.log("error", formik.errors);
  return (
    <>
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
            <Icons.MdOutlinePhoneIphone />
            <FieldInput
              type="tel"
              value={formik.values.telefone}
              onChange={formik.handleChange}
              placeholder="Digite seu telefone"
              name="telefone"
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

        <FormGroup>
          <AllInput>
            <Icons.MdLockOutline />
            <FieldInput
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              placeholder="Confirmar Senha"
              name="confirmPassword"
              onBlur={formik.handleBlur}
            />
          </AllInput>
          <Error>
            {formik.touched.confirmPassword && formik.errors.confirmPassword
              ? formik.errors.confirmPassword
              : ""}
          </Error>
        </FormGroup>

        <FormGroup>
          <AllInput>
            <AiOutlineIdcard />
            <FieldInput
              type="text"
              placeholder="NIF ou BI"
              name="bi"
              value={formik.values.bi}
              onChange={formik.handleChange}
              autocomplete="off"
              onBlur={formik.handleBlur}
            />
          </AllInput>
          <Error>
            {formik.touched.bi && formik.errors.bi ? formik.errors.bi : ""}
          </Error>
        </FormGroup>

        <FormGroup>
          <AllInput>
            <FieldInput
              type="date"
              name="dateBorn"
              value={formik.values.dateBorn}
              onChange={formik.handleChange}
              autocomplete="off"
              onBlur={formik.handleBlur}
            />
          </AllInput>
          <Error>
            {formik.touched.dateBorn && formik.errors.dateBorn
              ? formik.errors.dateBorn
              : ""}
          </Error>
        </FormGroup>

        <FormGroup>
          <AllInput>
            <FieldInput
              type="text"
              placeholder="Província"
              name="province"
              value={formik.values.province}
              onChange={formik.handleChange}
              autocomplete="off"
              onBlur={formik.handleBlur}
            />
            <FieldInput
              type="text"
              placeholder="Munícipio"
              name="municipe"
              value={formik.values.municipe}
              onChange={formik.handleChange}
              autocomplete="off"
              onBlur={formik.handleBlur}
            />
          </AllInput>
          <Error>
            {formik.touched.province && formik.errors.province
              ? formik.errors.province
              : ""}
          </Error>
        </FormGroup>

        <FormGroup>
          <AllInput>
            <Icons.MdOutlineLocationOn />
            <FieldInput
              type="text"
              placeholder="Bairro"
              name="street"
              value={formik.values.street}
              onChange={formik.handleChange}
              autocomplete="off"
              onBlur={formik.handleBlur}
            />
          </AllInput>
          <Error>
            {formik.touched.street && formik.errors.street
              ? formik.errors.street
              : ""}
          </Error>
        </FormGroup>

        <button type="submit">Register</button>
      </FormikForm>
    </>
  );
}
