import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/global";
import MainRoutes from "./routes";
import { ModalProvider } from "./contexts/ModalContext";
import { LoginModal } from "./components/modal";

export default function App() {
  return (
    <Router>
      <ModalProvider>
        <MainRoutes />
        <GlobalStyles />
        <LoginModal />
      </ModalProvider>
    </Router>
  );
}
