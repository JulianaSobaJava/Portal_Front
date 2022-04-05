import React, { useState } from "react";
import * as style from "./style";
import Form from "../../../components/form/index";
import { ModalContext } from "../../../contexts/ModalContext";

export default function Sign() {
  const [success, setSuccess] = useState(null);
  const [erro, setError] = useState(null);
  const [show, setShow] = useState(false);

  const { handleOpenModal } = React.useContext(ModalContext);

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
        <button onClick={handleOpenModal}>Fazer Login</button>
      </style.FirstColumn>
      <style.SecondColumn>
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
