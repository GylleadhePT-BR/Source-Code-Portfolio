import React from 'react'
import "../src/styles/globals.css"
import perfil from "./img/perfil.png"
import Cards from './components/Cards'
import Skills from './components/Skills'
import Socials from './components/Socials'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
function App() {

  return (
    <div id="app" class="App bg-gradient-to-br from-gray-800 to-gray-900 p-4">
      <section class="Tudo min-h-screen ">
        <nav class='py-10 mb-13 flex justify-between mb-10'>
          <h1 class='text-lg  sm:text-2xl text-white font-semibold animate-bounce '> <span class="text-cyan-500">&lt; Dev.</span>Gylleadhe<span class="text-cyan-500"> &gt;</span></h1>
          <ul class='flex items-center'>
            <li class="transition .1s all ease-out hover:drop-shadow-2xl ">
              <a href="https://drive.google.com/u/0/uc?id=1fqk2tJJiLf9hOTe8Emi_-q3aakjbmpjd&export=download" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">Curriculum</a>
            </li>
          </ul>
        </nav>
        <div id="hero" class="text-center ">
          <section></section>
          <h1 id="name" class="text-3xl py-2 font-semibold animate-pulse sm:text-5xl">
           Gylleadhe Ferreira 
          </h1>
          <h2 class="font-semibold text-white text-lg py-2">I'Am a junior Developer 💻
          </h2>
          <div id="img-profile" class="flex justify-center animate-pulse" >
            <img class="relative mt-30 w-4/5 sm:w-80 " src={perfil} />
          </div>
          <p class="text-xl font-medium py-5 px-10 leading-10 text-white m-auto w-full lg:w-8/12 text-base"> <span class="font-bold text-cyan-500 text-lg">Hi there!! &#128075; </span> ,I'am a Software developer with just 3 years experience from Brazil , i'am so glad with your visit here ,I hope that you enjoy my Portfolio and contact me now or in t he future for more work opotunities , bye see you later &#128406; </p>
        </div>
      </section>

      <Socials />

      <Cards />

      <Skills />

      <Projects />

      <About />

      <Footer />


    </div>
  )
}

export default App
