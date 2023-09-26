import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <main
      className="
      fixed
         hidden
         md:flex
         w-screen
         h-10
         bg-slate-100/[0.5]
         items-center
         z-20
        "
    >
      <ul
        className="
                w-full
                flex
                justify-around
                items-center                
            "
      >
        <li>
          <Link to="home" spy={true} smooth={"easeInOutQuart"} duration={2000}>
            Start
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={"easeInOutQuart"} duration={2000}>
            About me
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={"easeInOutQuart"}
            duration={2000}
          >
            Skills
          </Link>
        </li>
        <li>
        <Link
            to="projects"
            spy={true}
            smooth={"easeInOutQuart"}
            duration={2000}
          >Projects
          </Link></li>
        <li>Contact</li>
      </ul>
    </main>
  );
}
