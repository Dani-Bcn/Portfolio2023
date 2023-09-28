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
            bg-slate-700
            text-slate-50
            text-4xl
            md:text-2xl
            z-10
        "
    > <h2>Contact</h2>
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
                    "
          >
            nneodani@gmail.com
          </h3>
        </a>
        <h3>651110553</h3>
      </section>
      <Links />
    </main>
  );
}
