import React from 'react';
import gdsc from "../../../images/gdsc.png";

const Navbar = () => {
  return (
    <header>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span><img src={gdsc} alt="Google Developer Student Clubs" className="h-8 mb-2" /></span>
          </div>
          <nav className="flex justify-end items-center flex-1 space-x-4">
            <ul className="flex space-x-4 text-[#555555] text-[14px] font-nunito">
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
              <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
              <li><a href="#faq" className="hover:text-gray-300">FAQ</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Join
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;



