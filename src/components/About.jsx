import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to("#textAbout", {
      scrollTrigger: {
        trigger: "#textAbout",
        start: "center 1200",
        end: 500,
        scrub: 2,
      },
      marginLeft: 0,
      opacity:1
    });
  },[]);

  return (
    <div
    id="about"
      className="
            w-screen
            h-screen
            flex
            flex-col
            justify-center
            items-center
            bg-slate-200
        "
    >
      <h2
        id="textAbout"
        className="
                text-5xl
                -ml-[1200px]
                opacity-0
            "
      >
        About
      </h2>
      <p
        className="
                w-5/6
                my-20
                text-2xl
            "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illo,
        fugiat sunt voluptas dolor maiores tenetur quae quibusdam, unde
        recusandae ab ipsa est, distinctio ipsum voluptatibus aut optio fugit
        pariatur.
      </p>
    </div>
  );
}
