import NavBar from "../../components/navBar/index";
import Container from "../../components/container/index";
import Banner from "./views/banner/index";
import Question from "./views/questions";
import Search from "./views/searchContainer";
import Slide from "./views/slide";
import Future from "./views/future";
import HighSchoolSection from "./views/highSchool";
import Introduce from "./views/introduce";
import Footer from "../../components/footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Banner />
        <Search />
        <Slide />
        <Future />
        <HighSchoolSection />
        <Introduce />
        <Question />
      </Container>
      <Footer />
    </>
  );
}
