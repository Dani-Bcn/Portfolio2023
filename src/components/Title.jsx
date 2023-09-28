import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Title() {

    gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    gsap.to("#title1", {
      scrollTrigger: {
        trigger: "#title1",
        start: "top 100",
        end: 1500,
        scrub: 2,
      },
      x: -1100,
    });
    gsap.to("#title2", {
        scrollTrigger: {
          trigger: "#title1",
          start:  "top 100",
          end: 1500,
          scrub: 2,
        },
        x: 1100,
      });
  },[]);

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
        className="
            h-96
            w-96
            md:w-72
            md:h-72
            bg-indigo-300
            rounded-[500px]
            cursor-pointer
        "
      ></div>
      <div
        className="
            absolute
            text-8xl
        "
      >
        <h1 id="title1" 
        className="
        font-Play
        text-orange-200
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
            " >Pérez</h1>
      </div>
    </main>
  );
}
