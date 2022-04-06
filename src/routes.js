import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about/index";
import SearchSchool from "./pages/searchSchool/index";
import News from "./pages/news/index";
import Instructor from "./pages/instructor/index";
import Page404 from "./pages/page404/index";
import RegistrationSchool from "./pages/schoolRepository/Sign/index";
import ShoolLogin from "./pages/schoolRepository/schoolLogin/index";
import Sign from "./pages/userRepository/Sign/index";

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cadastrar" element={<Sign />} />
      <Route path="/cadastrarEscola" element={<RegistrationSchool />} />
      {/* <Route path="/about" element={<About />} />
      <Route path="/schools" element={<SearchSchool />} />

      <Route path="/loginSchool" element={<ShoolLogin />} />
      <Route path="/news" element={<News />} />
      <Route path="/instructor" element={<Instructor />} />
      <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
}
