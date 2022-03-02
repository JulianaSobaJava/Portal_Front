import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/global";
import MainRoutes from "./routes";
import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/navbar";

export default function App() {
  return (
    <Router>
      {window.location.pathname !== "/registration" ? <NavBar /> : ""}
      <MainRoutes />
      <GlobalStyles />
      {window.location.pathname !== "/registration" ? <Footer /> : ""}
    </Router>
  );
}
