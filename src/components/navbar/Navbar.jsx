import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { FaChevronDown, FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNav = () => {
    setNav(prevNav => !prevNav);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const servicesDropdown = [
    { id: 1, text: 'Trunkey Contract', link: '/ServicesPages/trunkey' },
    { id: 2, text: 'Interior Services', link: '/ServicesPages/interior' },
    { id: 3, text: 'Civil Services', link: '/ServicesPages/civil' },
    { id: 4, text: 'Exterior Services', link: '/ServicesPages/exterior' },
    { id: 5, text: 'Painting Services', link: '/ServicesPages/painting' },
    { id: 6, text: 'Electrical Services', link: '/ServicesPages/electrical' },
  ];

  const projectsDropdown = [
    { id: 1, text: 'Retail Projects', link: '/ProjectPages/retail' },
    { id: 2, text: 'Residential Projects', link: '/ProjectPages/residential' },
    { id: 3, text: 'Commercial Projects', link: '/ProjectPages/commercial' },
  ];

  const navItems = [
    { id: 1, text: 'Home', href: 'home' },
    { id: 2, text: 'About Us', href: 'aboutus' },
    { id: 3, text: 'Services', href: 'services' },
    { id: 4, text: 'Projects', href: 'projects' },
    { id: 5, text: 'Contact Us', href: 'contact' },
  ];

  const NavLink = ({ item, onClick }) => {
    if (isHomePage) {
      return (
        <ScrollLink
          to={item.href}
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          onClick={onClick}
        >
          {item.text}
        </ScrollLink>
      );
    }
    return (
      <RouterLink to={item.path} onClick={onClick}>
        {item.text}
      </RouterLink>
    );
  };

  return (
    <div className="bg-orange-50 flex justify-between items-center h-20 px-6 md:px-12 text-orange-400 fixed top-0 w-full z-10 shadow-lg">
      {/* Logo Section */}
      <h1 className="text-3xl font-bold">
        <RouterLink to="/" className="cursor-pointer">
          <img src="/IDSlogo.png" alt="Logo" className="h-20 w-30 md:h-25 md:w-30" />
        </RouterLink>
      </h1>

      {/* Desktop Navigation Menu */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-8">
          {navItems.map(item => (
            <li
              key={item.id}
              className="group relative p-4 text-lg rounded-full transition-all cursor-pointer duration-300 hover:bg-orange-400 hover:text-white hover:shadow-lg hover:scale-105"
              onClick={() => item.hasDropdown && toggleDropdown(item.text)}
            >
              <div className="flex items-center gap-1">
                <NavLink item={item} />
                {item.hasDropdown && (
                  <FaChevronDown
                    className={`transition-transform duration-300 ${activeDropdown === item.text ? 'rotate-180' : ''
                      }`}
                    size={14}
                  />
                )}
              </div>

              {/* Desktop Dropdown Menu */}
              {item.hasDropdown && (
                <ul
                  className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300 ${activeDropdown === item.text ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                >
                  {item.dropdownItems.map(dropdownItem => (
                    <li
                      key={dropdownItem.id}
                      className="p-3 text-orange-400 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 border-l-4 border-transparent hover:border-orange-400"
                    >
                      <RouterLink
                        to={dropdownItem.link}
                        className="block w-full"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.text}
                      </RouterLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="hidden md:flex space-x-4 ml-auto">
        <a href="https://www.facebook.com/mdalam.sk?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} className="hover:text-orange-600 transition-colors duration-300" />
        </a>
        <a href="https://www.instagram.com/alamshaikh1211/profilecard/?igsh=MTc0YWxodDYxNzhheg==" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="hover:text-orange-600 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={30} className="hover:text-orange-600 transition-colors duration-300" />
        </a>
        <a href="https://wa.me/+919619836554" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={30} className="hover:text-orange-600 transition-colors duration-300" />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-950 bg-orange-50 transition-transform duration-500 overflow-y-auto ${nav ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Mobile Logo */}
        <h1 className="text-3xl font-bold text-[#222222] m-4">
          <RouterLink
            to="/"
            onClick={() => setNav(false)}
            className="cursor-pointer"
          >
            <img src="/IDSlogo.png" alt="Logo" style={{ height: '80px', width: '100px' }} />
          </RouterLink>
        </h1>

        {/* Mobile Navigation Items with Dropdowns */}
        {navItems.map(item => (
          <div key={item.id}>
            <li
              className="p-4 border-b border-gray-900 rounded-xl duration-300 font-bold cursor-pointer hover:bg-orange-400 hover:text-white text-[#222222]"
              onClick={() => item.hasDropdown && toggleDropdown(item.text)}
            >
              <div className="flex items-center justify-between">
                {item.hasDropdown ? (
                  <>
                    <span>{item.text}</span>
                    <FaChevronDown
                      className={`transition-transform duration-300 ${activeDropdown === item.text ? 'rotate-180' : ''
                        }`}
                      size={14}
                    />
                  </>
                ) : (
                  <NavLink
                    item={item}
                    onClick={() => setNav(false)}
                  />
                )}
              </div>
            </li>

            {/* Mobile Dropdown Items */}
            {item.hasDropdown && activeDropdown === item.text && (
              <ul className="bg-orange-100 pl-8">
                {item.dropdownItems.map(dropdownItem => (
                  <li
                    key={dropdownItem.id}
                    className="p-3 border-b border-orange-700 hover:bg-orange-200 hover:text-orange-600 transition-all duration-300"
                  >
                    <RouterLink
                      to={dropdownItem.link}
                      onClick={() => {
                        setNav(false);
                        setActiveDropdown(null);
                      }}
                    >
                      {dropdownItem.text}
                    </RouterLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Mobile Social Media Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://www.facebook.com/mdalam.sk?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} className="hover:text-orange-600 transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com/alamshaikh1211/profilecard/?igsh=MTc0YWxodDYxNzhheg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="hover:text-orange-600 transition-colors duration-300" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} className="hover:text-orange-600 transition-colors duration-300" />
          </a>
          <a href="https://wa.me/+919619836554" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={24} className="hover:text-orange-600 transition-colors duration-300" />
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
