import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import images from "./Images";

export default function About() {

  let lettersString ="Passionate about programming and graphic design. I understood that my professional life had to change. I decided to leave my job after six years at my six years in it to start a programming bootcamp and try to dedicate myself programming and try to dedicate myself to it professionally";

   gsap.registerPlugin(ScrollTrigger);

  let lettersArray = lettersString.split(" ");
  console

  let lettersAbout = ["A","b","o","u","t"]


   useEffect(()=>{

let tl = gsap.timeline()


      gsap.set("#lettersAbout",{
        scale:0
      })
      gsap.set("#lettersArray",{
        scale:0
      })


      
         tl.to("#lettersAbout",{

          scrollTrigger:{
            trigger:"#lettersAbout",
            start:"center 600",
            end:400,
            scrub:1,
          },
          opacity:1,
          y:-50,
        scale:1.1,
        stagger:0.1,
        ease:"back"
      })  

      tl.to("#lettersArray",{
        scrollTrigger:{
          trigger:"#lettersArray",
          start:"center 750",
          end:500,
          scrub:2
        },
        scale:1,
        stagger:0.01,
        opacity:1,
        y:-50,
      })


    

    gsap.to("#photo",{
      scrollTrigger:{
        trigger:"#photo",
        start:"center 1500",
        end:1500,
        scrub:2
      },
      x:650,
      opacity:1,
      scale:1.5,
      clipPath:"circle(28% at 50% 30%)"
    })

   },[])

  return (
    <main
      id="about"
      className="
      oveflow-x-hidden
      w-screen
      h-screen
      -mt-80
      md:mt-20     
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
          <article 
            className="
              flex            
            "
          >
        {
          lettersAbout.map((e,i)=>(           
         
        <h2
        key={i} 
        id="lettersAbout"      
          className="
          opacity-0
          text-5xl
          text-orange-200
          z-10
        "
        > 
          {e}
        </h2>
          ))
} 
</article>
        <article
          className="
          flex         
          mt-10
            w-10/12
            md:w-1/2
            flex-wrap
          "
        >
          {
          lettersArray.map((e,i)=>(
            <h3 
            id="lettersArray"             
            key={i}
            className="
            text-[1.3rem]
            text-orange-200
            opacity-0
            "
            > {e}&nbsp;           
            </h3>
          ))          
          }
          
          </article>
      </span>
      <img
        src={images[3]}
        alt="photo"
        id="photo"
        width={600}
        className="  
        absolute
        md:ml-[-250px]
        md:-mt-36
        -ml-[1000px]
        mt-[600px]
        xl:ml-[60px]
         z-1
         clip-circle-photo
         opacity-0
        "
      />
    </main>
  );
}
