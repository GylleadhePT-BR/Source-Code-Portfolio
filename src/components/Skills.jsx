import React from 'react'
import "../styles/globals.css"
import figma from "../img/figma-logo.png"
import web from '../img/react.png'
import lang from '../img/language-translator.png'
import ht from "../img/html.png"
import css_img from "../img/css3.png"
import framer from "../img/framer-logo.png"
import python from "../img/python.png"
import js_logo from "../img/javascript-logo.png"
import { FaPlusCircle } from 'react-icons/fa'

const Skills = () => {
	return (
		<div class="flex w-full justify-center">
			<section id="card-skill" className=" flex w-full flex-col md:text-black p-8 ">
			<div className="container mx-auto p-4 my-6 space-y-2 text-center">
				<h2 className="text-4xl font-bold">Skills</h2>
				<h3 className="text-grey-600 text-xl font-semibold">Check some projects below</h3>
			</div>
			<div className="container mx-auto justify-center gap-4 grid grid-cols-3">
				<div className="flex flex-col items-center p-4">
					<img class="w-20" src={figma} />
					<h3 className="my-3 text-xl font-semibold"> Figma</h3>
					<div class="w-full scale-90 h-5 rounded-full bg-stone-700">
						<div class="figma-s bg-cyan-600 h-5 rounded-full text-center text-white font-semibold">35%</div>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<img class="w-20" src={ht} />
					<h3 className="my-3 text-xl font-semibold">HTML5</h3>
					<div class="w-full scale-90 h-5 rounded-full bg-stone-700">
						<div class="html-s bg-cyan-600 h-5 rounded-full text-center text-white font-semibold">85%</div>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<img class="w-20" src={css_img} />
					<h3 className="my-3 text-xl font-semibold">CSS3</h3>
					<div class="w-full scale-90 h-5 rounded-full bg-stone-700">
						<div class="css3-s bg-cyan-600 h-5 rounded-full text-center text-white font-semibold">68%</div>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<img class="w-20" src={framer} />
					<h3 className="my-3 text-xl font-semibold">Framer</h3>
					<div class="w-full scale-90 h-5 rounded-full bg-stone-700">
						<div class="framer-s bg-cyan-600 h-5 rounded-full text-center text-white font-semibold">75%</div>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<img class="w-20" src={python} />
					<h3 className="my-3 text-xl font-semibold">Python</h3>
					<div class="w-full scale-90 h-5 rounded-full bg-stone-700">
						<div class="python-s bg-cyan-600 h-5 rounded-full text-center text-white font-semibold">60%</div>
					</div>
				</div>
				<div className="flex flex-col items-center p-4">
					<img class="w-20" src={js_logo} />
					<h3 className="my-3 text-xl font-semibold">Javascript</h3>
					<div class="w-full scale-90 h-5 rounded-full bg-stone-700">
						<div class="js-s bg-cyan-600 h-5 rounded-full text-center text-white font-semibold">50%</div>
					</div>
				</div>
			</div>
		</section>
		</div>
		
	)
}

export default Skills