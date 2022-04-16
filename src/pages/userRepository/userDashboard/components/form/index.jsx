import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  AllInput,
  FieldInput,
  FormGroup,
  Error,
  Select,
} from "../../../../../components/form/style";
import { validationSchema } from "../../../../../validations/userValidation";
import * as Icons from "react-icons/md";
import { AiOutlineIdcard } from "react-icons/ai";
import { api } from "../../../../../services/axios";
import * as S from "./style";

const initialValues = {
  username: "Juliana Soba",
  email: "",
  password: "",
  telefone: "994394902",
  dateBorn: "",
  bi: "028373829LA837",
  province: "",
  municipe: "",
  street: "",
};

export default function Form({ show, handleShow }) {
  const [province, setProvince] = useState([]);
  const [municipe, setMunicipe] = useState([]);
  const [idMunicipe, setMunicipeId] = useState("");
  const [idProvinces, setIdProvinces] = useState("");

  useEffect(() => {
    api
      .get("provinces")
      .then((response) => {
        setProvince(response.data.ExistProvince);
        setIdProvinces(response.data.ExistProvince[0].id);
      })
      .catch((error) =>
        console.log("Response dê Error ou province => ", error)
      );

    api
      .get("municipios")
      .then((response) => {
        setMunicipe(response.data.ExistMunicipio);
      })
      .catch((error) =>
        console.log("Response dê Error no método get => ", error)
      );
  }, []);

  const onSubmit = async (values) => {
    const { confirmPassword, ...dataUser } = values;
    console.log("dataUser", dataUser);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });
  return (
    <>
      <S.FormikForm onSubmit={formik.handleSubmit}>
        <S.Content>
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
              <Icons.MdOutlinePersonOutline />
              <FieldInput
                type="email"
                placeholder="Email"
                name="email"
                value={formik.values.email}
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
        </S.Content>

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

        <S.Content>
          <FormGroup>
            <AllInput>
              <Icons.MdLockOutline />
              <FieldInput
                type={show ? "text" : "password"}
                placeholder="Senha Actual"
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
                type={show ? "text" : "password"}
                placeholder="Nova senha"
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
        </S.Content>

        <FormGroup>
          <AllInput>
            <AiOutlineIdcard />
            <FieldInput
              type="text"
              placeholder="N° do BI"
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
            <Select
              name="province"
              onChange={(value) => setIdProvinces(value.target.value)}
              onBlur={formik.handleBlur}
              value={idProvinces}
            >
              {province.map((data) => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </Select>

            <Select
              name="municipe"
              onBlur={formik.handleBlur}
              value={idMunicipe}
              onChange={(value) => {
                setMunicipeId(value.target.value);
              }}
            >
              <option value="" disabled selected hidden>
                Selecione a munícipio...
              </option>
              {municipe
                .filter((data_) => data_.provinceId.id === idProvinces)
                .map((data_) => (
                  <option key={data_.id} value={data_.id}>
                    {data_.name}
                  </option>
                ))}
            </Select>
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

        <button type="submit">Actualizar Perfil</button>
      </S.FormikForm>
    </>
  );
}
