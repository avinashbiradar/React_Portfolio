import React from 'react'
import BackGround from "../assests/wall.jpg"
export default function Home() {
    return (
       <main>
       <img src={BackGround} alt="tech" className="absolute object-cover w-full h-full"/>
       <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
       <h1 className="text-6xl text-green-100 font-bold  cursive leading-none lg:leading-snug home-name">Namaskar , mi avinash biradar</h1>
       </section>
       
       </main>
    )
}


