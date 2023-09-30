import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Skills() {
  
  gsap.registerPlugin(ScrollTrigger);
  
  const wordsFrontEnd = [
    "Html",
    "Css",
    "Js",
    "React",
    "Api-rest",
    "npm",
    "Node.js",
    "Express",
    "MongoDB",
    "Postman",
    "GitHub",
    "Heroku",
    "Cloudinary",
    "Netlify",
    "Taildwin",
    "Gsap",
    "Framer-motion",
    "Three.js",
    "Figma",
    "Photoshop",
    "Ilustrator",
    "Cinema4D",
    "Blender",
  ];
  const clipEfects=[
    "polygon(25% 550%, 100% 0%, 30% 10%, 0% 100%)",
    "polygon(105% 550%, 100% 50%, 30% 10%, 0% 100%)"
  ]

  const tl = gsap.timeline();

  useEffect(() => {

   
    tl.set("#skillsFront", {
     
      delay: 1,
      opacity:0,
      scale:0
     
    });   

  
     
      tl.to("#skillsFront", {
        scrollTrigger: {
          trigger: "#skillsFront",
          start: "center 600",
          end: 1250,
          scrub: 2,
        },
        scale:1,
        duration:2,
        stagger:0.5,
        transform:"rotate(0deg)",
        color: "white",
        opacity: 1,   
      });
    })


  return (
    <main
      className="
      mt-32
      md:mt-32
      xl:-mt-20
        z-10
        w-screen
      "
    >
      <section
        id="skills"
        className="
          flex
          flex-col
          items-center
          justify-between
          md:1/2
          m-auto
       "
      >
        <span>
        <h2
        className="
          text-5xl
          text-orange-200
        "
      >Skills</h2>
      </span>
        <section
          className="
            mt-10
            md:ml-10
            w-screen 
            md:w-[80%]
            z-10    
          "
        >
          {wordsFrontEnd.map((e, i) => {
            return (
              <p
                key={i}
                id="skillsFront"
                  className={`
                    float-left
                    flex
                    items-center
                    justify-around
                    h-24
                    w-24
                    text-[18px]
                    my-2
                    mx-4
                    text-slate-100/[0]
                    border-orange-200
                    border-solid
                    border-2
                    rounded-xl
                    rotate-90
                    opacity-0
                    z-10
                  `}
              >
                {e}
              </p>
            );
          })}
        </section>
      </section>
    </main>
  );
}
