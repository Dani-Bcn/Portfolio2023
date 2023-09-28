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

    useEffect(()=>{
      gsap.to("#photo",{
        scrollTrigger:{
          trigger:"#photo",
          start:"center center",
          end:1000,
          scrub:2
        },
        x:1500,
        opacity:0.7,
        scale:1,
        clipPath: "circle(28% at 50% 25%)",
      })
    })

  return (
    <main
      id="about"
      className="
      oveflow-x-hidden
      w-screen
      h-screen
      md:-mt-0
      -mt-64
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
        "
      >About</h2>
      <div
        className="
          w-32
          h-0.5
          bg-orange-200
        "
      ></div>

      <p
        className="
          w-4/5
          mt-10
          text-orange-200
          text-2xl
        "
      >{lettersString}</p>
    </span>
    <img 
    src={images[3]} 
    alt="img-photo" 
    width={700}
    id="photo"
    className="
      -ml-96
      md:-mt-32
      md:-ml-[1900px]
      sm:mt-80
      absolute
      opacity-0
      clip-circle-photo
    "
    />
    </main>
  );
}
