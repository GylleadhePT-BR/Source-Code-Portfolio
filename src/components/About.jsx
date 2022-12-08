import React from 'react'
import "../styles/globals.css"
import gygy from "../img/perfil-about.jpg"
const About = () => {
    return (
        <div class="mx-auto p-0 scale-90 sm:p-0 sm:scale-90 ">
            <div class="mt-10 sm:p-10 text-center">
                <h1 class="mb-2 text-3xl font-extrabold text-white dark:text-white md:text-3xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">More About</span> Me</h1>
                <p class="text-lg mb-20 font-normal text-gray-400 lg:text-xl dark:text-gray-400">Just some considerations</p>
            </div>
            <div class="about grid grid-cols-1 md:grid-cols-2 h-screen">
                <div class="max-h-96 md:h-screen">
                    <img class="w-screen h-screen object-cover object-top rounded-t-xl sm:rounded-l-xl" src={gygy} alt="" />
                </div>
                <div class="flex bg-gray-100 p-10 rounded-b-xl sm:rounded-r-xl ">
                    <div class="mb-auto mt-auto max-w-lg rounded-b-xl flex flex-col justify-center ">
                        <h1 class="text-2xl text-cyan-500 uppercase font-semibold"> &lt; Who I'Am ??? &gt;</h1>
                        <p class="font-semibold mb-5">About me</p>
                        <p>
                        My name is Gylleadhe Inacio Santos Ferreira, I was born and currently live in Pernambuco, Brazil. My career with Technology started at the age of 12 when I decided to study the Python programming language and since then I have deepened myself in several areas such as web development, prototype design and others.</p>
                        <a href="mailto:gylleadheinacioferriera@gmail.com" class="mt-20 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-20 py-2.5 text-center ">Mail Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About