import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function NavResponsive() {
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {
    menuActive
      ? gsap.to("#menu", {
          marginTop: 0,
          ease: "expo.out",
          clipPath:"circle( 70.7% at 50% 50%)",
          duration:1
        })
      : gsap.to("#menu", {
          marginTop: 750,
          ease: "expo.in",
          clipPath:"circle( 10.7% at 50% 50%)",
          duration:1
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
            bg-indigo-300
            rounded-[100px]
            text-slate-50              
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
            bg-indigo-300
            rounded-[100px]
            text-slate-50               
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
            text-slate-50
            ml-[1500px]
            clip-circle-25
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
