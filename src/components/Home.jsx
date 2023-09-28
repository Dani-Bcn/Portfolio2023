import Navbar from "./Navbar";
import NavResponsive from "./NavResponsive";
import Title from "./Title";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <main
      id="home"
      className="
        overflow-hidden
        w-screen
        flex
        flex-col
        justify-between
        absolute
        "
    >
      <Navbar />
      <NavResponsive />
      <Title />
      <About />
      <Skills />
      <Projects/>
      <Contact/> 
    </main>
  );
}
