
import React from 'react';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import resume from '../../assets/JPorrazzo_Resume_Summer_2024.pdf'


function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-ocean to-sunset flex flex-col items-center justify-center font-funky">
      <header className="w-full py-6">
        <h1 className="text-3xl md:text-5xl text-tech text-center mt-6">Hey There!<br/>Check Out My <a href={ resume } download className="text-blue-700 hover:text-red-700">Resume</a></h1>
        </header>
      <main className="w-full flex-grow flex flex-col items-center mt-12 px-4">
        <p className="text-4xl md:text-6xl text-tech font-fun font-bold text-center">Some of the tech I use...</p>
        <ul className="text-6xl md:text-9xl text-sand mt-8 flex space-x-7">
          <li className='text-teal-900'><FaReact /></li>
          <li><IoLogoJavascript /></li>
          <li className='text-blue-500'><RiTailwindCssLine /></li>
          <li className='text-red-600'><FaNode /></li>
          <li className='text-black'><SiMysql /></li>
          <li className='text-green-900'><DiMongodb /></li>
        </ul>
        <p className="text-5xl md:text-7xl text-service font-bold font-fun mt-12 mb-6 text-center">Services and Specialities</p>
        <ul className="text-2xl md:text-4xl font-bold grid grid-cols-1 gap-4 font-fun text-center w-full px-28">
          <li className='text-black'>Full Stack Web Development</li>
          <li className='text-black'>UI/UX Design</li>
          <li className='text-black'>Program and Project Management</li>
          <li className='text-black'>Agile, Lean, Six Sigma Methodolgies</li>
          <li className='text-black'>Service Excellence and Client Success</li>
          <li className='text-black'>Leadership Development and Coaching</li>
        </ul>
      </main>
    </div>
  );
}

export default Services;
