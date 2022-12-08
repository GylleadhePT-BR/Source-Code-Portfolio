import React from 'react'
import "../styles/globals.css"
import figma from "../img/figma-logo.png"
import web from '../img/react.png'
import lang from '../img/language-translator.png'

const Cards = () => {
  return (
    <section class="sm:p-10">
      <div class="mt-10 sm:p-10 text-center">
        <h1 class="mb-4 text-3xl font-extrabold text-white dark:text-white md:text-3xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Services I offer</span> Read about</h1>
        <p class="text-lg font-normal text-gray-400 lg:text-xl dark:text-gray-400">Here you will know some tools and tecnologies than I use </p>
      </div>

      <div class="lg:flex gap-8">
        <div id="card" class="text-center text-lg p-10 my-10  dark:bg-white flex-1">
          <img class="m-auto animate-bounce w-28 sm:w-48" src={figma} />
          <h3 class="text-xl font-medium pt-8 pb-2 text-cyan-600 ">
            Protoype
          </h3>
          <p class="py-2 ">
            Using UX/UI Desing knowledge I will build a beathiful , modern and efficient screens for your needs , if you don't have any idea for colors and Designs for yours projects contact me
          </p>
          <h4 class="py-4 text-cyan-600">Design Tools I Use</h4>
          <p class="text-black-800 py-1">Figma</p>
          <p class="text-black-800 py-1">Adobe XD</p>
          <p class="text-black-800 py-1">Framer</p>
          <p class="text-black-700 py-1">Sketch</p>
        </div>
        <div id="card" class="text-center text-lg p-10  my-10 dark:bg-white flex-1">
          <img class="m-auto animate-spin w-28 sm:w-64" src={web} />
          <h3 class="text-xl font-medium pt-8 pb-2 text-cyan-700 ">
            Web developmnt
          </h3>
          <p class="py-2">
            With Web Development , you can expand your horizonts , do your brands to grow ,put your irtual store on Internet and much more !!
          </p>
          <h4 class="py-4 text-cyan-600">Development tools</h4>
          <p class="text-gray-800 py-1">Html5 and Css3</p>
          <p class="text-gray-800 py-1">Javascript</p>
          <p class="text-gray-800 py-1">ReactJs</p>
          <p class="text-gray-800 py-1">Tailwind Css</p>
        </div>
        <div id="card" class="text-center text-lg p-10  my-10 dark:bg-white flex-1">
          <img class="m-auto animate-pulse w-28 sm:w-64" src={lang} />
          <h3 class="text-xl font-medium pt-8 pb-2 text-cyan-700 ">Translations</h3>
          <p class="py-2">
            If you are the CEO of a large company in your country or a small business owner , you must have been quite frustrated with the fact that all the most modern systems use English , if you want to translate your website or software , get in touch
          </p>
        </div>
      </div>
    </section>
  )
}

export default Cards