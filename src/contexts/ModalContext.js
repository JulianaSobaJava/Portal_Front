import React from "react";

export const ModalContext = React.createContext({});

export const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, handleOpenModal, handleCloseModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
