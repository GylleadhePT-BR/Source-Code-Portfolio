import React from 'react'
import "../styles/globals.css"
const Projects = () => {
  return (
    <section class="p-4">
      <div class="mt-10 mb-10 w-full sm:p-10 text-center">
        <h1 class="mb-4 text-3xl font-extrabold text-white dark:text-white md:text-3xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Some Projects</span> Read about</h1>
        <p class="text-lg font-normal text-gray-400 lg:text-xl dark:text-gray-400">Here you will See some projects than I build in my carrer </p>
      </div>


      <div class="flex flex-center justify-center flex-wrap gap-10 ">
        <div id="store" class="card w-full max-w-sm h-96 bg-cover bg-center rounded-3xl shadow-md mt-20 ">
          <div class="">
            <div class="flex justify-center p-4">
              <a href="https://gylleadhept-br.github.io/My-Codes/E-commerce/Home.html" target="_blank"  class=" shadow-lg text-white transition .4s all ease-out hover text-lg p-3 rounded-2xl font-semibold bg-cyan-700 mt-64 hover:bg-cyan-500 hover:transition .4s all ease-out hover ">Visit This</a>
            </div>
          </div>
        </div>

        <div id="parallax" class="card w-full max-w-sm h-96 bg-cover bg-center rounded-3xl shadow-md mt-20">
          <div class="">
            <div class="flex justify-center p-4">
              <a href="https://gylleadhept-br.github.io/My-Codes/Paralax site/home.html"  target="_blank" class=" shadow-lg text-white transition .4s all ease-out hover text-lg p-3 rounded-2xl font-semibold bg-cyan-700 mt-64 hover:bg-cyan-500 hover:transition .4s all ease-out hover ">Visit This</a>
            </div>
          </div>
        </div>

        <div id="figma-pj" class="card w-full max-w-sm h-96 bg-cover bg-center rounded-3xl shadow-md mt-20">
          <div class="">
            <div class="flex justify-center p-4">
              <a href="https://framer.com/share/Hot-burguer-project--qBgVVdRDUPqYTrJtrVr8/nRpaPIQVM"  target="_blank" class=" shadow-lg text-white transition .4s all ease-out hover text-lg p-3 rounded-2xl font-semibold bg-cyan-700 mt-64 hover:bg-cyan-500 hover:transition .4s all ease-out hover ">Visit This</a>
            </div>
          </div>
        </div>

        <div id="framer-pj" class="card w-full max-w-sm h-96 bg-cover bg-center rounded-3xl shadow-md mt-20">
          <div class="">
            <div class="flex justify-center p-4">
              <a href="https://framer.com/share/Hot-burguer-project-copy--2t4QQNzPTm79EF3a1uBY"  target="_blank" class=" shadow-lg text-white transition .4s all ease-out hover text-lg p-3 rounded-2xl font-semibold bg-cyan-700 mt-64 hover:bg-cyan-500 hover:transition .4s all ease-out hover ">Visit This</a>
            </div>
          </div>
        </div>

        <div id="portfolio-pj" class="card w-full max-w-sm h-96 bg-cover bg-center rounded-3xl shadow-md mt-20">
          <div class="">
            <div class="flex justify-center p-4">
              <a href="https://gylleadhept-br.github.io/My-Codes/Portfolio/index.html"  target="_blank" class=" shadow-lg text-white transition .4s all ease-out hover text-lg p-3 rounded-2xl font-semibold bg-cyan-700 mt-64 hover:bg-cyan-500 hover:transition .4s all ease-out hover ">Visit This</a>
            </div>
          </div>
        </div>

        <div id="calc" class="card w-full max-w-sm h-96 bg-cover bg-center rounded-3xl shadow-md mt-20">
          <div class="">
            <div class="flex justify-center p-4">
              <a href="https://gylleadhept-br.github.io/My-Codes/Simple calculator/calc.html"  target="_blank" class=" shadow-lg text-white transition .4s all ease-out hover text-lg p-3 rounded-2xl font-semibold bg-cyan-700 mt-64 hover:bg-cyan-500 hover:transition .4s all ease-out hover ">Visit This</a>
            </div>
          </div>
        </div>
      </div>

    </section >
  )
}

export default Projects