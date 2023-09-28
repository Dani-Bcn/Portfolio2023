import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <main
      className="
      fixed
         hidden
         md:flex
         w-20
         h-screen
         items-center
         mx-5
         z-20
        "
    >
      <ul
        className="
                w-full
                h-screen
                flex
                flex-col
                justify-around
                items-center    
                text-orange-200            
            "
      >
        <li>
          <Link to="home"  id="buttonLinks" spy={true} smooth={"easeInOutQuart"} duration={2000}>
            Start
          </Link>
        </li>
        <li>
          <Link to="about"   id="buttonLinks"spy={true} smooth={"easeInOutQuart"} duration={2000}>
            About me
          </Link>
        </li>
        <li>
          <Link
           id="buttonLinks"
            to="skills"
            spy={true}
            offset={-50}
            smooth={"easeInOutQuart"}
            duration={2000}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
           id="buttonLinks"
            to="projects"
            spy={true}
            smooth={"easeInOutQuart"}
            duration={2000}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
           id="buttonLinks"
            to="contact"
            spy={true}
            smooth={"easeInOutQuart"}
            duration={2000}
          >
            Contact
          </Link>
        </li>
      </ul>
    </main>
  );
}
