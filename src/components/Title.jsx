import { useEffect, useState } from "react";

import gsap from "gsap";
import images from "./Images";

function Title() {
  const tl = gsap.timeline();
  useEffect(() => {
    tl.to("#title", {
      display: "flex",
      scale: 0.23,
      stagger: 0.3,
      delay:1,
    });
    tl.to("#title", {
      x: 140,
      scale: 0.23,
    });

    tl.to("#title-full", {
      opacity: 1,
      stagger: 0.1,
      delay:-0.5
    });
  });

  return (
    <main
      className="      
    w-screen
        h-screen
        flex
        flex-col
        items-center
        justify-center
        bg-slate-700   
        overflow-hidden
      "
    >
      {images[1].map((e, i) => (
        <img
          id="title"
          key={i}
          className="
            absolute
            h-[550px]
            bg-slate-700
            hidden
           
            "
          src={e}
        ></img>
      ))}
      <div
        className="
        flex
        -ml-20
      "
      >
        {images[2].map(
          (e, i) => (
          
            (
              <img
                id="title-full"
                key={i}
                className="
         flex
            h-[125px]
            
            bg-slate-700
          opacity-0
            "
                src={e}
              ></img>
            )
          )
        )}
      </div>
    </main>
  );
}

export default Title;
