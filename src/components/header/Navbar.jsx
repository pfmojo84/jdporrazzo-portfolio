import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-kelp p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-4xl md:text-6xl font-captain font-bold">John Porrazzo's Portfolio</div>
        
        {/* Burger Menu for Mobile View */}
        <div className="md:hidden">
          <label htmlFor="menu-toggle" className="cursor-pointer">
            <FaBars className="text-4xl text-white" />
          </label>
           {/* Hidden Checkbox that Controls the Menu Toggle */}
          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          {/* Menu Items: Initially Hidden, Shown When Checkbox is Checked */}
          <div className="hidden peer-checked:flex flex-col space-y-2 absolute bg-kelp p-4 right-0 mt-4 font-captain text-4xl">
            <Link to="/" className="text-white hover:text-ocean transition-colors duration-300">Home</Link>
            <Link to="/services" className="text-white hover:text-ocean transition-colors duration-300">Services</Link>
            <Link to="/portfolio" className="text-white hover:text-ocean transition-colors duration-300">Portfolio</Link>
            <Link to="/contact" className="text-white hover:text-ocean transition-colors duration-300">Contact</Link>
          </div>
        </div>

        {/* Links for Desktop View: Always Visible */}
        <div className="hidden md:flex space-x-4 text-4xl font-captain font-bold">
          <Link to="/" className="text-white hover:text-ocean transition-colors duration-300">Home</Link>
          <Link to="/services" className="text-white hover:text-ocean  transition-colors duration-300">Services</Link>
          <Link to="/portfolio" className="text-white hover:text-ocean transition-colors duration-300">Portfolio</Link>
          <Link to="/contact" className="text-white hover:text-ocean  transition-colors duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
