import React, { useEffect, useContext } from "react";
import Modal from "react-modal";
import close from "../../assets/image/close.svg";
import { ModalContext } from "../../contexts/ModalContext";
import Login from "../../pages/userRepository/Login";

Modal.setAppElement("#root");

export function LoginModal() {
  const { modalIsOpen, handleCloseModal } = useContext(ModalContext);

  useEffect(() => {
    modalIsOpen && (document.body.style.overflow = "hidden");
    !modalIsOpen && (document.body.style.overflow = "unset");
  }, [modalIsOpen]);

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
