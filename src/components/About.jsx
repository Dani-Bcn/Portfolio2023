import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function About() {
  let lettersString =
    "An LA-based , award-winning design ,director and UI/UX ,design ,expert with 10 years ,of experience in ,design and ,management.";

  gsap.registerPlugin(ScrollTrigger);

  let lettersArray = lettersString.split(" ,"); 

    const leters = document.querySelectorAll("#lettersArray");



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
          text-4xl
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
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolorem ea assumenda exercitationem perspiciatis temporibus amet dolor nihil fugit, soluta laudantium in voluptate? In, debitis odit assumenda saepe totam quisquam.</p>
    </span>
    </main>
  );
}
