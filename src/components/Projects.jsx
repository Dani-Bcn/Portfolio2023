import React from 'react'
import images from './Images'

export default function Projects() {
  return (
    <main
    id='projects'
        className='
            w-screen
            flex
            flex-col
            justify-start
            items-center
            bg-slate-700
        '
    >
        <h2
            className='
            my-20
            text-5xl
            text-orange-200
            '
        >Projects</h2>

        <section
            className='
                w-screen
            '
        >
            <img src={images[0]} 
            alt="img-poke"
            width={600}
                className='
                my-5
                   clip-circle-25
                '
            />
             <img src={images[1]} 
            alt="img-poke"
            width={600}
                className='
                my-10
                   clip-circle-25
                '
            />
             <img src={images[2]} 
            alt="img-poke"
            width={600}
                className='
                my-10
                   clip-circle-25
                '
            />
        </section>


        </main>
  )
}
