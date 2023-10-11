import gsap from "gsap";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function NavResponsive() {
  const [menuActive, setMenuActive] = useState(false);
  useEffect(() => {

    gsap.to("#button-menu",{
      y:200,
      delay:2.8,
      ease: "back.out(1.7)",     
    })
    gsap.to("#button-contact",{
      y:200,
      delay:2.7,
      ease: "back.out(1.7)", 
    })
    menuActive?
       gsap.to("#menu", {
          opacity:1,
          marginTop: 0,
          ease: "expo.out",
          clipPath: "circle( 70.7% at 50% 50%)",
          duration: 1,
        })
      : gsap.to("#menu", {
          marginTop: 750,
          ease: "expo.in",
          clipPath: "circle( 25.7% at 50% 50%)",
          duration: 0.5,
          opacity:0
        });
  }, [menuActive]);

  return (
    <main
      className="    
       xl:hidden   
        absolute
        w-screen
        h-screen
        items-center
        justify-center
        z-20     
        "
    >
      <div
        className="
            fixed
           xl:hidden
            w-full
            h-16
            flex
            items-center
            justify-between
            z-10
        "
      >
        <div
        id="button-contact"
          className="         
            w-20
            h-10
            -mt-96
            mx-5
            flex
            items-center
            justify-center
            bg-orange-300
            rounded-[100px]
            text-slate-50              
            "
          onClick={() => setMenuActive(!menuActive)}
        >
          <Link
            to="contact"
            spy={true}
            smooth={"easeInOutQuart"}
            duration={2000}
            onClick={() => setMenuActive(false)}
          >
            Contact
          </Link>
        </div>
        <div
        id="button-menu"
          onClick={() => setMenuActive(!menuActive)}
          className="
            w-20
            h-10
            -mt-96
            mx-5
            flex
            items-center
            justify-center
            bg-orange-300
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
            bg-indigo-300
            opacity-0
            text-slate-50         
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
            offset={-50}
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
