import React, { useEffect } from "react";
import images from "./Images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {

  const imagesPojects = [
    {
      link: "https://pokeahorcado.netlify.app/",
      img: images[0],
      title:"Poke ahorcado"
    },
    {
      link: "https://apiappmovies.netlify.app/",
      img: images[1],
      title:"App movies"
    },
    {
      link: "https://apiappmovies.netlify.app/",
      img: images[1],
      title:"Homeworks for kids"
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const tl = gsap.timeline();

    const imagesComp = document.querySelectorAll("#imagesComp");

    tl.set(imagesComp, {
      clipPath: "circle(0.1% at 50% 50%)",
      delay: 5,
    });

    for (let x = 0; x < imagesPojects.length; x++) {
      tl.to(imagesComp[x], {
        scrollTrigger: {
          trigger: imagesComp[x],
          start: "center center",
          end: 50,
          scrub: 2,
        },
        clipPath: "circle(20% at 50% 50%)",
      });
    }
  },);

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
          <a key={i} href={imagesPojects[i].link}>
            <h3
                className="
                    my-1
                    flex
                    items-center
                    justify-center
                    text-3xl
                    text-orange-200
                "
            >{imagesPojects[i].title}</h3>
            <img            
                id="imagesComp"
                className="
                w-screen
                clip-circle-0
                flex
                items-center
                justify-center
            "
                src={imagesPojects[i].img}
                alt="imgAll"
            />
          </a>
        );
      })}
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
    </main>
  );
}
