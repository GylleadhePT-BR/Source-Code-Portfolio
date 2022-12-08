import React from 'react'
import { FaWhatsapp, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import "../styles/globals.css"
const Socials = () => {
  return (
    <section id="Socials" class="sm:text-xl flex justify-center gap-10 py-4 text-grey-600">
    <ul class="flex justify-center gap-10 animate-bounce">
      <a href="https://web.whatsapp.com/send?phone=558198817527" target="_blank" class="transition .4s all ease-out hover:scale-110  transition .1s all ease-out cursor-pointer text-white"><FaWhatsapp class="hover:text-cyan-500" size={'2em'} /></a>
      <a href="https://www.linkedin.com/in/gylleadhe-ferreira-082a93210/" target="_blank" class="transition .4s all ease-out hover:scale-110  transition .1s all ease-out cursor-pointer text-white"><FaLinkedin class="hover:text-cyan-500" size={'2em'} /></a>
      <a href="https://twitter.com/GylleadheF" target="_blank" class="transition .4s all ease-out hover:scale-110  transition .1s all ease-out cursor-pointer text-white"><FaTwitter class="hover:text-cyan-500" size={'2em'} /></a>
      <a href="https://github.com/GylleadhePT-BR" target="_blank" class="transition .4s all ease-out hover:scale-110  transition .1s all ease-out cursor-pointer text-white"><FaGithub class="hover:text-cyan-500" size={'2em'} /></a>
    </ul>
  </section>
  )
}

export default Socials