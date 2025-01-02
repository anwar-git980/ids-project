import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  // State to toggle the mobile navigation menu
  const [nav, setNav] = useState(false);

  // Function to handle the toggle of the navigation menu
  const handleNav = () => {
    setNav(prevNav => !prevNav);
  };

  // Array of navigation items with their text and target section
  const navItems = [
    { id: 1, text: 'Home', href: 'home' },
    { id: 2, text: 'About Us', href: 'aboutus' },
    { id: 3, text: 'Services', href: 'services' },
    { id: 4, text: 'Projects', href: 'projects' },
    { id: 5, text: 'Contact Us', href: 'contact' },
  ];

  return (
    <>
      {/* Navbar Container */}
      <div className="bg-orange-50 flex justify-between items-center h-[80px] px-6 md:px-12 text-orange-400 fixed top-0 w-full z-10 shadow-lg">
        {/* Logo Section */}
        <h1 className="text-3xl font-bold">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <img src="/src/IDSlogo.png" alt="Logo" className="h-20 w-30 md:h-25 md:w-30" />
          </Link>
        </h1>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {navItems.map(item => (
              <li
                key={item.id}
                className="p-4 text-lg rounded-full transition-all cursor-pointer duration-300 hover:bg-orange-400 hover:text-white"
              >
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80} // Adjusted offset to account for the navbar height
                  activeClass="text-white-400 underline" // Active class styling
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Social Icons */}
        <div className="flex space-x-4 ml-auto">
          <a href="https://www.facebook.com/mdalam.sk?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} />
          </a>
          <a href="https://www.instagram.com/alamshaikh1211/profilecard/?igsh=MTc0YWxodDYxNzhheg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://wa.me/+919619836554" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} />
           </a>
           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={30}/>
           </a>
        </div>

        {/* Mobile Navigation Toggle Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-950 bg-orange-50 transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Mobile Logo Section */}
          <h1 className="text-3xl font-bold text-[#222222] m-4">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setNav(false)} // Close menu on logo click
              className="cursor-pointer"
            >
              <img src="/src/IDSlogo.png" alt="Logo" style={{ height: '80px', width: '100px' }} />
            </Link>
          </h1>

          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              className="p-4 border-b border-gray-900 rounded-xl duration-300 font-bold cursor-pointer hover:bg-orange-400 hover:text-white text-[#222222]"
            >
              <Link
                to={item.href}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80} // Adjusted offset for navbar height
                activeClass="text-white-400 underline"
                // Active class styling
                onClick={() => setNav(false)} // Close menu on item click
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
