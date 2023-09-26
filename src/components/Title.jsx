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
            bg-slate-500
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
            bg-red-300
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
        <h1 id="title1" className="-ml-5">
          Dani
        </h1>
        <h1 
            id="title2"
            className="ml-12">Pérez</h1>
      </div>
    </main>
  );
}
