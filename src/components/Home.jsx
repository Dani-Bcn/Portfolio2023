import Navbar from "./Navbar";
import NavResponsive from "./NavResponsive";
import Title from "./Title";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import{motion as m} from "framer-motion"

export default function Home() {
  return (
    <m.main
      
    id="home"
    animate={{
        opacity:[0,1],
        transition:{
          duration:1
        }
    }}
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
    </m.main>
  );
}
