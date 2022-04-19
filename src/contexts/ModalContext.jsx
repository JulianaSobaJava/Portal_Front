import React from "react";

export const ModalContext = React.createContext({});

export const ModalProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [sideBarUser, setSideBarUser] = React.useState(false);
  const [navItem, setNavItem] = React.useState("Cursos");

  function handleSidebarUserOpen() {
    setSideBarUser(true);
  }
  function handleSidebarUserClose() {
    setSideBarUser(false);
  }

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        handleOpenModal,
        handleCloseModal,
        handleSidebarUserOpen,
        handleSidebarUserClose,
        sideBarUser,
        setNavItem,
        navItem,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
