import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function NavResponsive() {
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {
    menuActive
      ? gsap.to("#menu", {
          marginLeft: 0,
          ease: "expo.out",
        })
      : gsap.to("#menu", {
          marginLeft: 1500,
          ease: "expo.in",
        });
  }, [menuActive]);

  return (
    <main
      className="    
      md:hidden   
        absolute
        w-screen
        h-screen
        items-center
        justify-center
        z-10
        "
    >
      <div
        className="
            fixed
            md:hidden
            w-full
            h-16
            flex
            items-center
            justify-between
            z-10
        "
      >
        <div
          className="         
            w-20
            h-10
            mx-5
            flex
            items-center
            justify-center
            bg-blue-300
            rounded-[100px]
            text-slate-800              
            "
        >
          Contact
        </div>
        <div
          onClick={() => setMenuActive(!menuActive)}
          className="
            w-20
            h-10
            mx-5
            flex
            items-center
            justify-center
            bg-blue-300
            rounded-[100px]
            text-slate-800               
            "
        >
          Menu
        </div>
      </div>
      <ul
        id="menu"
        className="
            fixed
            text-3xl
            w-full
            h-screen
            flex
            flex-col
            justify-around
            items-center
            bg-red-300
            ml-[1500px]
            "
      >
        <li>
          <Link
            to="home"
            spy={true}
            smooth={"easeInOutQuart"}
            duration={2000}
            onClick={() => setMenuActive(!menuActive)}
          >
            Start
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={"easeInOutQuart"}
            duration={2000}
            onClick={() => setMenuActive(!menuActive)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={"easeInOutQuart"}
            duration={2000}
            onClick={() => setMenuActive(!menuActive)}
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
            onClick={() => setMenuActive(!menuActive)}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={"easeInOutQuart"}
            duration={2000}
            onClick={() => setMenuActive(!menuActive)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </main>
  );
}
