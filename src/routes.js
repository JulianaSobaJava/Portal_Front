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
import { Profile } from "./pages/userRepository/userDashboard/pages/Profile";
import { DashBoard } from "./pages/userRepository/userDashboard/pages/DashBoard";
import { AdminArea } from "./pages/admin/pages/adminArea";
import { AdminHome } from "./pages/admin/pages/home";
import { AdminInfo } from "./pages/admin/pages/info";
import Pedidos from "./pages/admin/pages/pedidos";
import Teste from "./pages/admin/pages/teste";
import TesteAdd from "./pages/admin/pages/teste/data/testeAdd";
import TesteEdit from "./pages/admin/pages/teste/data/testeEdit";
import Escolas from "./pages/admin/pages/escolaRepository/style";
import EscolaAdd from "./pages/admin/pages/escolaRepository/data/escolaAdd";
import EscolaEdit from "./pages/admin/pages/escolaRepository/data/escolaEdit";
import SchoolProfile from "./pages/schoolRepository/Profile";

import TesteUser from "./pages/instructor/teste";

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cadastrar/user" element={<Sign />} />
      <Route path="/news" element={<News />} />
      <Route path="/schools" element={<SearchSchool />} />
      <Route path="/instructor" element={<Instructor />} />
      <Route path="/teste-vocacional" element={<TesteUser />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/cadastrar/escola" element={<RegistrationSchool />} />
      <Route path="/login/escola" element={<SchoolLogin />} />

      <Route path="/escola:id" element={<SchoolProfile />} />
      <Route path="/escola/dash" element={<AdminHome />} />

      <Route path="/admin/area" element={<AdminArea />} />
      <Route path="/admin/home" element={<AdminHome />} />
      <Route path="/admin/info" element={<AdminInfo />} />
      <Route path="/admin/pedidos" element={<Pedidos />} />
      <Route path="/admin/teste" element={<Teste />} />
      <Route path="/admin/teste/add" element={<TesteAdd />} />
      <Route path="/admin/teste/edit:id" element={<TesteEdit />} />
      <Route path="/admin/escolas" element={<Escolas />} />
      <Route path="/admin/escola/add" element={<EscolaAdd />} />
      <Route path="/admin/escola/edit:id" element={<EscolaEdit />} />

      <Route path="/user/dashboard/perfil" element={<Profile />} />
      <Route path="/user/dashboard" element={<DashBoard />} />
    </Routes>
  );
}
