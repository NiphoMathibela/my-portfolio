import React from 'react'
import Contact from "./Contact"
import { AiFillGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillTwitterCircle } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <div className="w-full h-55 bg-gray mt-16">
      <Contact />

      <h2 className="font-bold text-4xl m-auto text-center mt-8">Socials</h2>

      <div className="flex space-between justify-center">

        <div className="w-20 m-4">
          <a href="https://github.com/NiphoMathibela"><AiFillGithub className='text-4xl' /></a>
        </div>

        <div className="w-20 m-4">
          <a href="https://www.linkedin.com/in/nipho/"><AiFillLinkedin className='text-4xl' /></a>
        </div>

        <div className="w-20 m-4">
          <a href="https://twitter.com/Niph0Mathibela"><AiFillTwitterCircle className='text-4xl' /></a>
        </div>

        <div className="w-20 m-4">
          <a href= "https://www.instagram.com/nipho.mathibela/"><AiFillInstagram className='text-4xl' /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer