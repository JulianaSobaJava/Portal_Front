import React, { useEffect, useState } from "react";
import * as Icons from "react-icons/md";
import * as S from "./style";
import { useFormik } from "formik";
import {
  AllInput,
  FieldInput,
  FormGroup,
  Error,
  Select,
} from "../../../../../components/form/style";
import { AiOutlineIdcard } from "react-icons/ai";
import { api } from "../../../../../config/axios";

const initialValues = {
  name: "",
  email: "",
  nif: "",
  description: "",
  numberStudents: "",
  numberEmployee: "",
  typeSchool: "",
  enderecoId: "",
  cursoId: "",
  userId: "",
};

export default function FormSchool() {
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
  });

  return (
    <S.SchoolForm>
      <S.Info>
        <h4>Sua escola</h4>
        <p>
          Para trazer informações mais acertivas precisamos saber mais sobre sua
          escola.
        </p>
      </S.Info>
      <S.FormikForm onSubmit={formik.handleSubmit}>
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
              type={true ? "text" : "password"}
              placeholder="Senha"
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              autocomplete="off"
              onBlur={formik.handleBlur}
            />
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

        <button type="submit">Criar conta</button>
      </S.FormikForm>
    </S.SchoolForm>
  );
}
