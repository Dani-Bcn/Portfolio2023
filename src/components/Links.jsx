import React from "react";

export default function Links() {
  return (
    <main
      className="
           text-white
            text-xl
             w-[90%]
             h-10
             md:h-1
                    flex
                    items-center
                    justify-around
                    z-10
                "
    >
      <a
        href="https://www.linkedin.com/in/daniperezbnc/"
        target="_blank"
      >
        
        <button id="buttonLinks">       
          Linkedin
        </button>
      </a>
      <a
        href="https://www.domestika.org/es/nneodani/portfolio"
        target="_blank"
      >
        <button id="buttonLinks">       
          Domestika
        </button>
      </a>
      <a href="https://github.com/Dani-Bcn"  target="_blank">
      <button id="buttonLinks">       
          Github
        </button>
      </a>
    </main>
  );
}
