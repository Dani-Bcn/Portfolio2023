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

  gsap.registerPlugin(ScrollTrigger);

 
 

  useEffect(() => {
    const tl = gsap.timeline();

    const imagesComp = document.querySelectorAll("#imagesComp");

    for (let x = 0; x < imagesPojects.length; x++) {
      tl.to(imagesComp[x], {
        scrollTrigger: {
          trigger: imagesComp[x],
          start: "center 450",
          end: 150,
          scrub: 2,
        },      
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
      });
    }
  });

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
      <h2
        className="
            my-20
            text-5xl
            text-orange-200
            "
      >
        Projects
      </h2>

      {imagesPojects.map((e, i) => {
        return (
          <div key={i}>
           
              <h3
                className="
                    my-1
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
              <img
              id="imagesComp"
                width={500}
                src={e.img}
                alt="img-all"
                className="
                  my-10
                  rounded-xl
                  border-orange-300
                  border-[1px]
                  border-solid
                  md:w-1/2
                  w-10/12
                  m-auto
                  clip-box
                "
              />
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
