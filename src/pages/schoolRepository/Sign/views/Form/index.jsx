import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as S from "./style";
import { validationSchema } from "../../../../../validations/userValidation";
import * as Icons from "react-icons/md";
import { AiOutlineIdcard } from "react-icons/ai";
import { api } from "../../../../../config/axios";
import { initialValues, TypeOfSchool } from "../../data";

export default function Form({ show, handleShow }) {
  const [province, setProvince] = useState([]);
  const [municipe, setMunicipe] = useState([]);
  const [idMunicipe, setMunicipeId] = useState("");
  const [idProvinces, setIdProvinces] = useState("");

  const user = false;

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

    let bairro;
    await api
      .post("bairro", {
        name: dataUser.street,
        municipioId: idMunicipe,
      })
      .then((response) => {
        console.log("bairro", response.data);
        bairro = response.data;
      })
      .catch((err) => {
        if (err && err.response)
          console.log("Erro cadastrar o bairro:", err.response.data.message);
      });
    const bairroId = await bairro.id;

    let newEndereco;
    await api
      .post("endereco", {
        provinceId: idProvinces,
        municipioId: idMunicipe,
        bairroId: bairroId,
      })
      .then((response) => {
        console.log("endereco", response.data);
        newEndereco = response.data;
      })
      .catch((error) => {
        console.log("Erro cadastrar o endereco:", error);
      });
    const enderecoId = await newEndereco.id;

    let newUser;
    await api
      .post("user", {
        enderecoId,
        name: dataUser.username,
        dateBorn: dataUser.dateBorn,
        bi: dataUser.bi,
        roleId: "77c09423-40d4-4c26-8b83-7ce91ff3cff8",
      })
      .then((response) => {
        console.log("novo usuario", response.data);
        newUser = response.data;
      })
      .catch((err) => {
        if (err && !err?.response) {
          console.log("Server Response");
        } else if (err.response.status === 409) {
          console.log("Username taken");
        } else {
          console.log("Registration Failed");
          console.log("Erro cadastrar o user:", err.response.data.message);
        }
      });

    let newContacto;
    await api
      .post("contact", {
        descricao: await dataUser.telefone,
        userId: await newUser.id,
      })
      .then((response) => {
        console.log("novo conacto adicionado", response.data);
        newContacto = response.data;
      })
      .catch((error) => {
        console.log("erro ao cadastrar o contacto:", error);
      });

    await api
      .post("login", {
        password: await dataUser.password,
        contactId: await newContacto.id,
      })
      .then((response) => {
        console.log("novo login adicionado", response.data);
        newContacto = response.data;
      })
      .catch((error) => {
        console.log("erro ao cadastrar o login:", error);
      });
    await api
      .post("school", {
        name: dataUser.name,
        description: dataUser.description,
        email: dataUser.email,
        nif: dataUser.nif,
        numberStudents: dataUser.numberStudents,
        numberEmployee: dataUser.numberEmployee,
        typeSchool: "Privada",
        userId: newUser.id,
        enderecoId,
        cursoId: [],
      })
      .then((response) => {
        console.log("nova escola adicionada", response.data);
        newContacto = response.data;
        formik.resetForm();
        window.location.href = "http://localhost:3000/schools";
      })
      .catch((error) => {
        console.log("erro escola:", error);
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
      <S.FormikForm onSubmit={formik.handleSubmit}>
        {!user && (
          <S.FormGestor>
            <S.Info>
              <h4>Sua escola</h4>
              <p>
                Para trazer informações mais acertivas precisamos saber mais
                sobre sua escola.
              </p>
            </S.Info>
            <S.DivForm>
              <S.FormGroup>
                <S.AllInput>
                  <Icons.MdOutlinePersonOutline />
                  <S.FieldInput
                    type="text"
                    placeholder="Nome Completo"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    autocomplete="off"
                    onBlur={formik.handleBlur}
                  />
                </S.AllInput>
                <S.Error>
                  {formik.touched.username && formik.errors.username
                    ? formik.errors.username
                    : ""}
                </S.Error>
              </S.FormGroup>

              <S.FormGroup>
                <S.AllInput>
                  <Icons.MdOutlinePhoneIphone />
                  <S.FieldInput
                    type="tel"
                    value={formik.values.telefone}
                    onChange={formik.handleChange}
                    placeholder="Digite seu telefone"
                    name="telefone"
                    autocomplete="off"
                    onBlur={formik.handleBlur}
                  />
                </S.AllInput>
                <S.Error>
                  {formik.touched.telefone && formik.errors.telefone
                    ? formik.errors.telefone
                    : ""}
                </S.Error>
              </S.FormGroup>

              <S.FormGroup>
                <S.AllInput>
                  <Icons.MdLockOutline />
                  <S.FieldInput
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
                </S.AllInput>
                <S.Error>
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ""}
                </S.Error>
              </S.FormGroup>

              <S.FormGroup>
                <S.AllInput>
                  <Icons.MdLockOutline />
                  <S.FieldInput
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    placeholder="Confirmar Senha"
                    name="confirmPassword"
                    onBlur={formik.handleBlur}
                  />
                </S.AllInput>
                <S.Error>
                  {formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? formik.errors.confirmPassword
                    : ""}
                </S.Error>
              </S.FormGroup>

              <S.FormGroup>
                <S.AllInput>
                  <AiOutlineIdcard />
                  <S.FieldInput
                    type="text"
                    placeholder="N° do Bi"
                    name="bi"
                    value={formik.values.bi}
                    onChange={formik.handleChange}
                    autocomplete="off"
                    onBlur={formik.handleBlur}
                  />
                </S.AllInput>
                <S.Error>
                  {formik.touched.bi && formik.errors.bi
                    ? formik.errors.bi
                    : ""}
                </S.Error>
              </S.FormGroup>

              <S.FormGroup>
                <S.AllInput>
                  <S.FieldInput
                    type="date"
                    name="dateBorn"
                    value={formik.values.dateBorn}
                    onChange={formik.handleChange}
                    autocomplete="off"
                    onBlur={formik.handleBlur}
                  />
                </S.AllInput>
                <S.Error>
                  {formik.touched.dateBorn && formik.errors.dateBorn
                    ? formik.errors.dateBorn
                    : ""}
                </S.Error>
              </S.FormGroup>

              <S.FormGroup>
                <S.AllInput>
                  <S.Select
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
                  </S.Select>

                  <S.Select
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
                  </S.Select>
                </S.AllInput>
                <S.Error>
                  {formik.touched.province && formik.errors.province
                    ? formik.errors.province
                    : ""}
                </S.Error>
              </S.FormGroup>

              <S.FormGroup>
                <S.AllInput>
                  <Icons.MdOutlineLocationOn />
                  <S.FieldInput
                    type="text"
                    placeholder="Bairro"
                    name="street"
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    autocomplete="off"
                    onBlur={formik.handleBlur}
                  />
                </S.AllInput>
                <S.Error>
                  {formik.touched.street && formik.errors.street
                    ? formik.errors.street
                    : ""}
                </S.Error>
              </S.FormGroup>
            </S.DivForm>
          </S.FormGestor>
        )}

        <S.SchoolForm>
          <S.Info>
            <h4>Sua escola</h4>
            <p>
              Para trazer informações mais acertivas precisamos saber mais sobre
              sua escola.
            </p>
          </S.Info>
          <S.DivForm>
            <S.FormGroup>
              <S.AllInput>
                <Icons.MdOutlinePersonOutline />
                <S.FieldInput
                  type="text"
                  placeholder="Nome da escola"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  autocomplete="off"
                  onBlur={formik.handleBlur}
                />
              </S.AllInput>
              <S.Error>
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : ""}
              </S.Error>
            </S.FormGroup>

            <S.FormGroup>
              <S.AllInput>
                <Icons.MdOutlinePhoneIphone />
                <S.FieldInput
                  type="text"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  placeholder="Descrição da escola"
                  name="description"
                  autocomplete="off"
                  onBlur={formik.handleBlur}
                />
              </S.AllInput>
              <S.Error>
                {formik.touched.description && formik.errors.description
                  ? formik.errors.description
                  : ""}
              </S.Error>
            </S.FormGroup>

            <S.FormGroup>
              <S.AllInput>
                <Icons.MdOutlinePhoneIphone />
                <S.FieldInput
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="Digite o email da Instituição"
                  name="email"
                  autocomplete="off"
                  onBlur={formik.handleBlur}
                />
              </S.AllInput>
              <S.Error>
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""}
              </S.Error>
            </S.FormGroup>

            <S.FormGroup>
              <S.AllInput>
                <AiOutlineIdcard />
                <S.FieldInput
                  type="text"
                  placeholder="NIF"
                  name="nif"
                  value={formik.values.nif}
                  onChange={formik.handleChange}
                  autocomplete="off"
                  onBlur={formik.handleBlur}
                />
              </S.AllInput>
              <S.Error>
                {formik.touched.nif && formik.errors.nif
                  ? formik.errors.nif
                  : ""}
              </S.Error>
            </S.FormGroup>
            <S.FormGroup>
              <S.AllInput>
                {TypeOfSchool.map((item, i) => (
                  <div key={i}>
                    <input
                      type="radio"
                      id="coding"
                      name="typeSchool"
                      value={formik.values.typeSchool}
                    />
                    <label for="coding">{item.name}</label>
                  </div>
                ))}
              </S.AllInput>
            </S.FormGroup>

            <S.FormGroup>
              <S.AllInput>
                <Icons.MdOutlinePhoneIphone />
                <S.FieldInput
                  type="number"
                  value={formik.values.numberStudents}
                  onChange={formik.handleChange}
                  placeholder="N° de estudantes"
                  name="numberStudents"
                  autocomplete="off"
                  onBlur={formik.handleBlur}
                />
              </S.AllInput>
              <S.Error>
                {formik.touched.numberStudents && formik.errors.numberStudents
                  ? formik.errors.numberStudents
                  : ""}
              </S.Error>
            </S.FormGroup>

            <S.FormGroup>
              <S.AllInput>
                <Icons.MdOutlinePhoneIphone />
                <S.FieldInput
                  type="number"
                  value={formik.values.numberEmployee}
                  onChange={formik.handleChange}
                  placeholder="N° de estudantes"
                  name="numberEmployee"
                  autocomplete="off"
                  onBlur={formik.handleBlur}
                />
              </S.AllInput>
              <S.Error>
                {formik.touched.numberEmployee && formik.errors.numberEmployee
                  ? formik.errors.numberEmployee
                  : ""}
              </S.Error>
            </S.FormGroup>

            <S.FormGroup>
              <S.AllInput>
                <Icons.MdOutlinePhoneIphone />
                <S.FieldInput
                  type="text"
                  value={formik.values.cursoId}
                  onChange={formik.handleChange}
                  placeholder="Cursos:"
                  name="curso"
                  autocomplete="off"
                  onBlur={formik.handleBlur}
                />
              </S.AllInput>
              <S.Error>
                {formik.touched.curso && formik.errors.curso
                  ? formik.errors.curso
                  : ""}
              </S.Error>
            </S.FormGroup>

            <S.FormGroup>
              <S.AllInput>
                <S.Select
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
                </S.Select>

                <S.Select
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
                </S.Select>
              </S.AllInput>
              <S.Error>
                {formik.touched.province && formik.errors.province
                  ? formik.errors.province
                  : ""}
              </S.Error>
            </S.FormGroup>

            <S.FormGroup>
              <S.AllInput>
                <Icons.MdOutlineLocationOn />
                <S.FieldInput
                  type="text"
                  placeholder="Bairro"
                  name="street"
                  value={formik.values.street}
                  onChange={formik.handleChange}
                  autocomplete="off"
                  onBlur={formik.handleBlur}
                />
              </S.AllInput>
              <S.Error>
                {formik.touched.street && formik.errors.street
                  ? formik.errors.street
                  : ""}
              </S.Error>
            </S.FormGroup>

            <button type="submit">Criar conta</button>
          </S.DivForm>
        </S.SchoolForm>
      </S.FormikForm>
    </>
  );
}
