import About from "../components/about";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Home from "../components/home";
import Skills from "../components/skills";

export default function Layout() {
  return (
    <>
      <Home /> <About /> <Experience /> <Skills /> <Contact />
    </>
  );
}
