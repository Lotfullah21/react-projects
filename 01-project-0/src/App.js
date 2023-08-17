import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <About></About>
      <Courses></Courses>
      <Contact></Contact>
      <Footer></Footer>
      <header id="home"></header>
    </>
  );
}

export default App;
