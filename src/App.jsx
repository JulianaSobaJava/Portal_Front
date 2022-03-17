import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./styles/global";
import MainRoutes from "./routes";

export default function App() {
  return (
    <Router>
      <MainRoutes />
      <GlobalStyles />
    </Router>
  );
}
