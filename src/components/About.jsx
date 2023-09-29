import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import images from "./Images";

export default function About() {

  let lettersString ="Passionate about programming and, graphic design, I understood that my, professional life had to change. I, decided to leave my job after six years, at my six years in it, to start a, programming bootcamp and try to, dedicate myself programming and try, to dedicate myself to it professionally";

 

  gsap.registerPlugin(ScrollTrigger);

  let lettersArray = lettersString.split(", ");

  let lettersAbout = ["A","b","o","u","t"]


   useEffect(()=>{
let tl = gsap.timeline()
 const leters = document.querySelectorAll("#lettersArray");
 const lettersIdAbout = document.querySelectorAll("#lettersAbout")
 for(let x= 0 ; x < lettersAbout.length;x++){

  tl.to(lettersIdAbout[x],{
    scrollTrigger:{
      trigger:lettersIdAbout[x],
      start:"center 700",
      end:1000,
      scrub:2
    },
    y:-400,
    opacity:1
  })


}
    for(let x= 0 ; x < lettersArray.length;x++){

      tl.to(leters[x],{
        scrollTrigger:{
          trigger:leters[x],
          start:"center 700",
          end:1000,
          scrub:2
        },
        opacity:1,
        y:-500,
      })


    }

    gsap.to("#photo",{
      scrollTrigger:{
        trigger:"#photo",
        start:"center 1500",
        end:1500,
        scrub:2
      },
      x:650,
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
          <article id="lettersAbout"
            className="
              flex
              opacity-0
            "
          >
        {
          lettersAbout.map((e,i)=>(
           
         
        <h2
        key={i}
       
          className="
          pt-24
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
            >{e}
            
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
