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
            bg-slate-800
            text-slate-50
            text-4xl
        "
    >
      <h2>Contact</h2>
      <a href="mailto:nneodani@gmail.com">
        <h3
          className="
                    text-[2rem]
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
      <Links/>

    </main>
  );
}
