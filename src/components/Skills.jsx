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
    var skillsFront = document.querySelectorAll("#skillsFront");

   

    tl.set(skillsFront, {
      color: "rgb(50,250,250)",
      delay: 1,
      opacity:0,
     
    });   

    for (let x = 0; x < wordsFrontEnd.length; x++) {

     
      tl.to(skillsFront[x], {
        scrollTrigger: {
          trigger: skillsFront[x],
          start: "center 500",
          end: 1000,
          scrub: 2,
        },
        color: "white",
        opacity: 1,
       
      
      });
    }
  });

  return (
    <main
      className="
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
          text-4xl
          text-orange-200
        "
      >Skills</h2>
      <div
        className="
          w-full
          h-0.5
          bg-orange-200
        "
      ></div>
      </span>
        <section
          className="
            mt-10
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
                    text-[20px]
                    my-2
                    mx-4
                    bg-indigo-300
                   
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
