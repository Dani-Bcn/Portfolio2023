import React from "react";
import Links from "./Links";

export default function Contact() {
  return (
    <main
      id="contact"
      className="
            w-screen
            h-screen
            flex
            flex-col       
            justify-around
            items-center
            text-slate-50
            text-4xl
            md:text-2xl
            z-10
        "
    > <h2
      className="
        text-5xl
      "
    >Contact</h2>
      <section
        className="
          flex
          flex-col
          justify-around
          items-center
          w-10/12
          h-1/2
        "
      >
       
        <a href="mailto:nneodani@gmail.com">
          <h3
            className="                   
                    w-full
                    text-white
                    h-12
                    z-10
                    md:text-5xl
                    "
          >
            nneodani@gmail.com
          </h3>
        </a>
        <h3
          className="
            md:text-4xl
          "
        >651110553</h3>
      </section>
      <Links />
    </main>
  );
}
