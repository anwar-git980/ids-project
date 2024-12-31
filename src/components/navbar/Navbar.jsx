import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(prevNav => !prevNav);
  };

  // Get the current route
  const location = useLocation();

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'About Us', path: '/about' },
    { id: 3, text: 'Services', path: '/services' },
    { id: 4, text: 'Projects', path: '/projects' },
    { id: 5, text: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Navbar */}
      <div className="bg-orange-50 flex justify-between items-center h-[88px] px-6 md:px-12 text-orange-500 fixed top-0 w-full z-10 shadow-lg">
        {/* Logo */}
        <h1 className="text-3xl font-bold">
          <Link to="/">
            <img
              src="/src/IDSstudio.png"
              alt="Logo"
              className="h-16 w-16 md:h-20 md:w-20"
            />
          </Link>
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map(item => (
            <li
              key={item.id}
              className={`p-4 text-lg rounded-full m-2 transition-all cursor-pointer duration-300 ${
                location.pathname === item.path
                  ? 'bg-orange-400 text-white'
                  : 'hover:bg-orange-400 hover:text-white'
              }`}
            >
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-950 bg-orange-50 transition-transform duration-500 ${
            nav ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <h1 className="text-3xl font-bold text-[#222222] m-4">
            <Link to="/">
              <img src='/src/IDSstudio.png' alt='Logo' style={{ height: '100px', width: '100px' }} /> 
            </Link>
          </h1>
          {navItems.map(item => (
            <li
              key={item.id}
              className={`p-4 border-b border-gray-900 rounded-xl duration-300 font-bold cursor-pointer ${
                location.pathname === item.path
                  ? 'bg-orange-400 text-white'
                  : 'hover:bg-orange-400 hover:text-white text-[#222222]'
              }`}
            >
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Page Content (to avoid overlap with navbar) */}
      <div className="pt-[88px]">
        {/* Add your page content here */}
      </div>
    </>
  );
};

export default Navbar;
