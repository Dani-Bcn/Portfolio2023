import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import images from "./Images";

export default function About() {
  let lettersString =
    "Passionate about programming and graphic design, I understood that my professional life had to change. I decided to leave my job after six years at my six years in it, to start a programming bootcamp and try to dedicate myself programming and try to dedicate myself to it professionally";

  gsap.registerPlugin(ScrollTrigger);

  let lettersArray = lettersString.split(" ,");

  const leters = document.querySelectorAll("#lettersArray");

  let mm = gsap.matchMedia();

   useEffect(()=>{

    gsap.to("#photo",{
      scrollTrigger:{
        trigger:"#photo",
        start:"center 1500",
        end:1500,
        scrub:2
      },
      x:500,
      clipPath:"circle(28% at 50% 30%)"
    })

   })
   
 

  return (
    <main
      id="about"
      className="
      oveflow-x-hidden
      w-screen
      h-screen
      -mt-80
      md:-mt-0     
      flex
      flex-col
      items-center
      justify-around
      md:justify-start
      z-10
      "
    >
      <span
        className="
          w-screen
          flex
          flex-col
          items-center
          justify-centen
        "
      >
        <h2
          className="
          pt-24
          text-5xl
          text-orange-200
          z-10
        "
        >
          About
        </h2>
        <p
          className="
          w-10/12
          md:w-2/4
          py-10
          text-orange-200
          text-2xl
          z-10
        "
        >
          {lettersString}
        </p>
      </span>
      <img
        src={images[3]}
        alt="photo"
        id="photo"
        width={600}
        className="  
        absolute
        md:ml-[-250px]
        md:mt-20
        -ml-[1000px]
        mt-[800px]
        xl:ml-[60px]
         z-1
         clip-circle-photo
        "
      />
    </main>
  );
}
