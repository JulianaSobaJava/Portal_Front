import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import {
  AllInput,
  FormikForm,
  FieldInput,
  FormGroup,
  Error,
  Select,
} from "./style";
import { validationSchema } from "../../validations/userValidation";
import * as Icons from "react-icons/md";
import { AiOutlineIdcard } from "react-icons/ai";
import { api } from "../../services/axios";
import { ModalContext } from "../../contexts/ModalContext";
import { toast } from "react-toastify";

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

export default function Form({ show, handleShow }) {
  const [province, setProvince] = useState([]);
  const [municipe, setMunicipe] = useState([]);
  const [idMunicipe, setMunicipeId] = useState("");
  const [idProvinces, setIdProvinces] = useState("");

  const { handleOpenModal } = React.useContext(ModalContext);

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

    let bairro;
    await api
      .post("bairro", {
        name: dataUser.street,
        municipioId: idMunicipe,
      })
      .then((response) => {
        bairro = response.data;
      })
      .catch((err) => {
        if (err && err.response) toast.error(err.response.data.message);
      });
    const bairroId = await bairro.id;

    let newEndereco;
    await api
      .post("endereco", {
        provincia_id: idProvinces,
        municipio_id: idMunicipe,
        bairroId: bairroId,
      })
      .then((response) => {
        newEndereco = response.data;
      })
      .catch((error) => {});
    const enderecoId = await newEndereco.id;

    let newUser;
    await api
      .post("user", {
        enderecoId,
        name: dataUser.username,
        dateBorn: dataUser.dateBorn,
        bi: dataUser.bi,
        roleId: "aa2d0556-d182-4cb5-a33d-e97d4a374b92",
      })
      .then((response) => {
        newUser = response.data;
      })
      .catch((err) => {
        if (err && !err?.response) {
          toast.error("Sem resposta do servidor");
        } else if (err.response.status === 409) {
          console.log("Username taken");
        } else {
          toast.error("Falha ao cadastrar úsuario");
          toast.error(err.response.data.message);
        }
      });

    let newContacto;
    await api
      .post("contact", {
        descricao: await dataUser.telefone,
        userId: await newUser.result.id,
      })
      .then((response) => {
        newContacto = response.data;
      })
      .catch((error) => {
        toast.error(error.response.message);
      });

    await api
      .post("login", {
        password: await dataUser.password,
        contactId: await newContacto.id,
      })
      .then((response) => {
        newContacto = response.data;
        formik.resetForm();
        toast.success("Conta Criada");
        handleOpenModal();
      })
      .catch((error) => {
        console.log("erro ao cadastrar o login:", error);
      });
  };

  const formik = useFormik({
    initialValues: initialValues,
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  });

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
                Selecione o munícipio...
              </option>
              {municipe
                .sort()
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
      </FormikForm>
    </>
  );
}
