import React from "react";
import images from "./Images";

export default function Projects() {
  return (
    <main
      id="projects"
      className="
            w-screen
            flex
            flex-col
            justify-start
            items-center
            bg-slate-700
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

      <h3
        className="
        text-orange-200
        text-2xl
        "
      >
        Poke Ahorcado
      </h3>
      <a href="https://pokeahorcado.netlify.app/" target="_blank">
        <img
          src={images[0]}
          alt="img-poke"
          width={600}
          className="
            
              my-5
                   clip-circle-25
                "
        />
      </a>
      <h3
        className="
        text-orange-200
        text-2xl
        "
      >
        App movies
      </h3>

      <a href="https://apiappmovies.netlify.app/" target="_blank">
        <img
          src={images[1]}
          alt="img-poke"
          width={600}
          className="
            my-5
               
                   clip-circle-25
                "
        />
      </a>
      <h3
        className="
        text-orange-200
        text-2xl
        "
      >
        Homeworks for kids
      </h3>
      <img
        src={images[2]}
        alt="img-poke"
        width={600}
        className="
                my-5
                   clip-circle-25
                "
      />
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
