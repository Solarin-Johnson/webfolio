import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Home from "../components/home";
import Skills from "../components/skills";

export default function Layout({ browserWidth }) {
  return (
    <>
      <Home />
      <About />
      <Experience browserWidth={browserWidth} />
      <Skills browserWidth={browserWidth} />
      <Contact />
      <Footer />
    </>
  );
}
