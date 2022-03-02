import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import About from "./pages/about/index";
// import SearchSchool from "./pages/searchSchool/index";
import News from "./pages/news/index";
import Instructor from "./pages/instructor/index";
import Page404 from "./pages/page404/index";
// import Article from "./pages/article/arcticle";
import Registration from "./pages/registration/index";

export default function MainRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* {/* <Route path="/schools" element={<SearchSchool />} /> */}
      <Route path="/registration" element={<Registration />} />
      <Route path="/news" element={<News />} />
      <Route path="/instructor" element={<Instructor />} />
      {/* <Route path="/artigos" element={<Article />} /> */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
