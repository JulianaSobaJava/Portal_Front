import React, { useState } from "react";
import * as style from "./sign.styled";
import Form from "../../../components/form/form";

export default function Sign({ setView }) {
  const [success, setSuccess] = useState(null);
  const [erro, setError] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <style.Container>
      <style.FirstColumn>
        <h3>Seja Bem-Vindo de Volta</h3>
        <p>Para continuar</p>
        <p>por favor faça login aqui!</p>
        <button
          onClick={() => {
            setView(false);
          }}
        >
          Fazer Login
        </button>
      </style.FirstColumn>
      <style.SecondColumn>
        {!erro && (
          <style.SuccessMessage>{success ? success : ""}</style.SuccessMessage>
        )}
        {!success && (
          <style.ErrorMessage>{erro ? erro : ""}</style.ErrorMessage>
        )}
        <h3>Criar Conta</h3>
        <p>Use um email para fazer o seu cadastro</p>
        <Form
          show={show}
          handleShow={handleShow}
          erro={erro}
          success={success}
          setSuccess={setSuccess}
          setError={setError}
        />
      </style.SecondColumn>
    </style.Container>
  );
}
