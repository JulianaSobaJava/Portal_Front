import React from "react";
import { Routes } from "react-router-dom";
import { AdminRoute } from "../../services/privateRoutes";
import { AdminArea } from "./pages/adminArea";
import { AdminHome } from "./pages/home";

export default function AdminRoutes() {
  return (
    <Routes>
      <AdminRoute exact path="/adminhome" element={<AdminHome />} />
      <AdminRoute path="/adminarea" element={<AdminArea />} />
    </Routes>
  );
}
