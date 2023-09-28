import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Title() {
  gsap.registerPlugin(ScrollTrigger);



useEffect(()=>{     
   
   gsap.to("#title1", {
      scrollTrigger: {
        trigger: "#title1",
        start: "bottom center",
        end: 1500,
        scrub: 2,
      },
      x: -1000,
      opacity:0
    });

    gsap.to("#title2", {
        scrollTrigger: {
          trigger: "#title1",
          start: "bottom center",
          end: 1500,
          scrub: 2,
        },
        x: 1000,
        opacity:0,
      
      })
      gsap.to("#circle", {
        scrollTrigger: {
          trigger: "#title1",
          start: "bottom center",
          end: 5000,
          scrub: 2,
        },
        scale:15,
        y:2000,
        backgroundColor: "rgb(100 6 8)",
      });
  })

  return (
    <main
      className="
            w-full
            h-screen
            bg-slate-700
            flex
            justify-center
            items-center
        "
    >
      <div
      id="circle"
        className="
            h-96
            w-96
            md:w-72
            md:h-72
            bg-indigo-400
            rounded-[500px]
            cursor-pointer
            z-1
        "
      ></div>
      <div
        className="
            absolute
            text-8xl
        "
      >
        <h1
          id="title1"
          className="
        font-Play
        text-orange-200
        opacity-1
        "
        >
          Dani
        </h1>
        <h1
          id="title2"
          className="
            ml-12 
            font-Play
            text-orange-200
            opacity-1
            "
        >
          Pérez
        </h1>
      </div>
    </main>
  );
}
