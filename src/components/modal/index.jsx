import React from "react";
import Modal from "react-modal";
import close from "../../assets/image/close.svg";
import { ModalContext } from "../../contexts/ModalContext";
import Login from "../../pages/userRepository/Login";

Modal.setAppElement("#root");

export function LoginModal() {
  const { modalIsOpen, handleCloseModal } = React.useContext(ModalContext);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        className="react-modal-close"
        onClick={handleCloseModal}
      >
        <img src={close} alt="fechar modal" />
      </button>
      <Login />
    </Modal>
  );
}
