import React, { useEffect } from "react";
import images from "./Images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const imagesPojects = [
    {
      link: "https://pokeahorcado.netlify.app/",
      img: images[0],
      title: "Poke ahorcado",
    },
    {
      link: "https://apiappmovies.netlify.app/",
      img: images[1],
      title: "App movies",
    },
    {
      img: images[2],
      title: "Homeworks for kids",
    },
  ];

  const titleProjects = ["P", "r", "o", "j", "e", "c", "t", "s"];

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();
  useEffect(() => {
    tl.to("#titleProjects", {
      scrollTrigger: {
        trigger: "#titleProjects",
        start: "center 600",
        end: 550,
        scrub: 2,
      },
      stagger: 0.1,
      scale: 1,
      y: -50,
    });

    gsap.set("#imgProjects", {
      backgroundSize: "100% 100%",
      backgroundPositionX: "0px",
      scale: 5,
    });

  /*   gsap.set("#cntImgProjects", {
      scale: 0.1,
    }); */

    tl.to("#imgProjects", {
      scrollTrigger: {
        trigger: "#imgProjects",
        start: "center 900",
        end: 3500,
        scrub: 1,
      },
      scale: 1.5,
      stagger: 0.5,
    });
    /* tl.to("#cntImgProjects", {
      scrollTrigger: {
        trigger: "#imgProjects",
        start: "center 900",
        end: 4000,
        scrub: 1,
      },
      stagger: 0.5,
      scale: 1,
    }); */
  }, []);
  console.log(images[0]);

  return (
    <main
      id="projects"
      className="
            w-screen
            flex
            flex-col
            justify-start
            items-center
            z-10
        "
    >
      <article
        className="
          flex
        "
      >
        {titleProjects.map((e, i) => (
          <h2
            key={i}
            id="titleProjects"
            className="
           mt-52
            my-20
            text-5xl
            text-orange-200
            scale-0
            "
          >
            {e}
          </h2>
        ))}
      </article>

      {imagesPojects.map((e, i) => {
        return (
          <div key={i}>
            <h3
              className="
                    my-5
                    flex
                    items-center
                    justify-center
                    text-3xl
                    text-orange-200
                "
            >
              {e.title}
            </h3>
            <a key={i} href={e.link}>
              <div
              id="cntImgProjects"
                className="           
                 my-20
                 w-screen
                 h-70
                  mx-auto
                  bg-slate-100
                  clip-circle-full
                  flex
                  items-center
                  justify-center
                "
              >
                <img
                  id="imgProjects"
                  className="
              w-[1200px]
             "
                  src={e.img}
                  alt=""
                />
              </div>
            </a>
            <div
              className="
              w-screen
              text-orange-200
              flex
              items-center
              justify-around
            "
            >
              <a
                href="https://github.com/Dani-Bcn/Home-works-frontEnd"
                target="_blank"
              >
                <p
                  className="
                  cursor-pointer
              "
                >
                  front-end
                </p>
              </a>
              <a
                href="https://github.com/Dani-Bcn/Home-works-backEnd"
                target="_blank"
              >
                <p
                  className="
                  cursor-pointer
              "
                >
                  front-end
                </p>
              </a>
            </div>
          </div>
        );
      })}
    </main>
  );
}
