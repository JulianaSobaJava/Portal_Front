import NavBar from "../../components/navBar";
import Container from "../../components/container";
import Banner from "./views/banner";
import Question from "./views/questions";
import Search from "./views/searchContainer";
import Slide from "./views/slide";
import Future from "./views/future";
import HighSchoolSection from "./views/highSchool";
import Introduce from "./views/introduce";
// import Footer from "../../components/footer";

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
      {/* <Footer /> */}
    </>
  );
}
