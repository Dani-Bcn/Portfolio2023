import { useEffect} from "react";

import gsap from "gsap";
import images from "./Images";

function Title() {
  const tl = gsap.timeline();
  useEffect(() => {
    tl.to("#title", {
      display: "flex",
      scale: 0.3,
      stagger: 0.3,
      y:-45,
      delay: 1,
    });
     tl.to("#title", {     
      x: 100,
      scale: 0.3,
    }); 

    tl.to("#title-full", {
      opacity: 1,
      stagger: 0.1,
      delay: -0.5,
    });
    tl.to("#name2", {
      opacity: 1,
      x: -50,
      delay: -0.5,
    });
  });

  return (
    <main
      className="      
        h-screen
        flex
        flex-col
        items-center
        justify-center
        bg-slate-700   
        overflow-hidden
        z-10
      "
    >
      <div
        className="
        absolute
        w-screen
        h-[450px]
        md:w-[450px]
        bg-indigo-200
        clip-circle-full
        "
      ></div>
     
        {images[1].map((e, i) => (
          <img
            id="title"
            key={i}
            className="
            absolute
            h-[325px]
            scale-0.7
            w-42
            bg-indigo-200
            -mt-2
            hidden           
            "
            src={e}
          ></img>
        ))}
    
      <div
        className="
          flex
          flex-col
        "
      >
        <div
          className="
        flex
        ml-[75px]
      "
        >
          {images[2].map((e, i) => (
            <img
              id="title-full"
              key={i}
              className="
         flex
            h-[100px]
            
            bg-indigo-200
          opacity-0
          z-10
            "
              src={e}
            ></img>
          ))}
        </div>
        <div
          className="
          flex
          ml-24
        "
        >
          {
          images[3].map((e, i) => (
            <img
              id="name2"
              key={i}
              className="
                flex
                h-[100px]            
                bg-indigo-200
                opacity-0
                z-10
              "
              src={e}
            ></img>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Title;
