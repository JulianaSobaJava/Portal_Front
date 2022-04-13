import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import SearchSchool from "./pages/searchSchool/index";
import News from "./pages/news/index";
import Instructor from "./pages/instructor/index";
import Page404 from "./pages/page404/index";
import RegistrationSchool from "./pages/schoolRepository/Sign/index";
import SchoolLogin from "./pages/schoolRepository/Login/index";
import Sign from "./pages/userRepository/Sign/index";
import AdminRoutes from "./pages/admin/routes";
import MyProfile from "./pages/userRepository/userDashboard/pages/MyProfile";
import DashBoard from "./pages/userRepository/userDashboard/pages/Dashboard";
import Favoritos from "./pages/userRepository/userDashboard/pages/Favoritos";
import PesquisarEscolas from "./pages/userRepository/userDashboard/pages/Pesquisar escolas";

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cadastrar" element={<Sign />} />
      <Route path="/news" element={<News />} />
      <Route path="/schools" element={<SearchSchool />} />
      <Route path="/instructor" element={<Instructor />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/cadastrarEscola" element={<RegistrationSchool />} />
      <Route path="/loginSchool" element={<SchoolLogin />} />

      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/pesquisar" element={<PesquisarEscolas />} />
      <Route path="/favoritos" element={<Favoritos />} />
      <Route path="/meuperfil" element={<MyProfile />} />
      {/* <AdminRoutes /> */}
    </Routes>
  );
}
