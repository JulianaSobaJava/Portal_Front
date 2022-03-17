import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import "./signschool.css";
import * as Icons from "react-icons/md";
import { AiOutlineIdcard } from "react-icons/ai";
import Container from "../../components/container/container";

// import { Container } from './styles';

export default function RegistrationSchool() {
  const [show, setShow] = useState("false");
  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <Container>
      <div className="mainSignSchoolContent">
        <div className="mainSignSchoolContainer">
          <div className="schoolLogin">
            <span className="goLogin">
              <Link to="/loginSchool">
                <FaRegArrowAltCircleLeft />
              </Link>
            </span>
            <span>Fazer Login</span>
          </div>
          <div className="mainSignForm">
            <div className="signFirstContent">
              <h2>Seja um parceiro nosso, cadastrando a sua escola!</h2>
              <p>
                Para ser o gestor e utilizar nossos serviços gratuitos para
                aprimorar sua gestão escolar. Crie uma conta caso não tenha
              </p>
            </div>
            <div className="signSecondContent">
              <form className="form-school" method="Post">
                <div className="infoGest">
                  <div className="info">
                    <h4>Criar Login de Admin</h4>
                    <p>
                      Olá, para começar a utilizar a área de gestor precisas
                      criar sua conta.
                    </p>
                  </div>
                  <div className="infoGestForm">
                    <div className="all-input">
                      <Icons.MdOutlinePersonOutline />
                      <input
                        type="text"
                        placeholder="Nome Completo"
                        className="userName"
                        id="userName"
                        name="userName"
                      />
                    </div>
                    <div className="all-input">
                      <Icons.MdMailOutline />
                      <input
                        type="email"
                        placeholder="Digite seu email"
                        className="userEmail"
                        id="userEmail"
                        name="userEmail"
                      />
                    </div>
                    <div className="all-input">
                      <Icons.MdOutlinePhoneIphone />
                      <input
                        type="telefone"
                        placeholder="Digite seu telefone"
                        className="userTelefone"
                        id="userTelefone"
                        name="userTelefone"
                      />
                    </div>
                    <div className="password-content all-input">
                      <Icons.MdLockOutline />
                      <input
                        type={show ? "text" : "password"}
                        placeholder="Senha"
                        className="userPassword"
                        id="userPassword"
                        name="userPassword"
                      />
                      <div className="showEye">
                        {show ? (
                          <Icons.MdOutlineVisibility onClick={handleShow} />
                        ) : (
                          <Icons.MdOutlineVisibilityOff onClick={handleShow} />
                        )}
                      </div>
                    </div>
                    <div className="all-input">
                      <Icons.MdLockOutline />
                      <input
                        type="password"
                        placeholder="Confirmar Senha"
                        className="userPasswordConfirm"
                        id="userPasswordConfirm"
                        name="userPasswordConfirm"
                      />
                    </div>

                    <div className="all-input">
                      <input type="date" id="date" name="date" />
                    </div>
                    <div className="all-input">
                      <Icons.MdOutlineLocationOn />
                      <input
                        type="text"
                        placeholder="Morada"
                        className="Morada"
                        id="Morada"
                        name="morada"
                      />
                    </div>
                    <div className="all-input">
                      <AiOutlineIdcard />
                      <input
                        type="text"
                        placeholder="NIF ou BI"
                        className="BI"
                        id="BI"
                        name="BI"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="infoSchool">
                  <div className="info">
                    <h4>Sua escola</h4>
                    <p>
                      Para trazer informações mais acertivas precisamos saber
                      mais sobre sua escola.
                    </p>
                  </div>

                  <div className="infoGestForm">
                    <div className="all-input">
                      <Icons.MdOutlinePersonOutline />
                      <input
                        type="text"
                        placeholder="Nome da escola"
                        className="schoolName"
                        id="schoolName"
                        name="scschoolName"
                      />
                    </div>
                    <div className="all-input">
                      <Icons.MdMailOutline />
                      <input
                        type="email"
                        placeholder="Email escolar"
                        className="schoolEmail"
                        id="schoolEmail"
                        name="schoolEmail"
                      />
                    </div>
                    <div className="all-input">
                      <input
                        type="text"
                        placeholder="Província"
                        className="schoolProvincia"
                        id="schoolProvincia"
                        name="schoolProvincia"
                      />
                    </div>
                    <div className="all-input">
                      <input
                        type="text"
                        placeholder="Município"
                        className="schoolProvincia"
                        id="schoolProvincia"
                        name="schoolProvincia"
                      />
                    </div>
                    <div className="all-input">
                      <input
                        type="text"
                        placeholder="Tipo de Escola"
                        className="schoolType"
                        id="schoolType"
                        name="schoolType"
                      />
                    </div>
                    <div className="all-input">
                      <input
                        type="text"
                        placeholder="Numero de alunos"
                        className="schoolStudentNumber"
                        id="schoolStudentNumber"
                        name="schoolStudentNumber"
                      />
                    </div>
                    <div className="all-input">
                      <input
                        type="text"
                        placeholder="NIF"
                        className="schoolNIF"
                        id="schoolNIF"
                        name="schoolNIF"
                      />
                    </div>

                    <button type="submit" className="btn btn-secondary">
                      Cadastrar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
