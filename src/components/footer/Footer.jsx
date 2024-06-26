import React from 'react';
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { SiCodecademy } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-kelp text-white py-4 text-5xl flex flex-col items-center space-y-2">
      <div className='flex space-x-6'>
        <a href="https://github.com/pfmojo84" target="_blank" rel="noopener noreferrer" aria-label='Github Profile'>
        <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/john-porrazzo/" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn Profile'>
        <LuLinkedin />
        </a>
        <a href="https://www.codecademy.com/profiles/johnPorrazzo_dev" target="_blank" rel="noopener noreferrer" aria-label='CodeCademy Profile'>
        <SiCodecademy />
        </a>
      </div>
      <p className="bg-kelp text-white text-center font-captain text-4xl flex flex-col items-center space-y-4">© 2024 John Porrazzo. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
