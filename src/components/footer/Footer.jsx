import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-500 py-8">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* For Business */}
        <div className="col-span-2">
          <br></br>
          <h3 className="text-white font-semibold text-xl mb-4 whitespace-nowrap">Interior Design Studio</h3>
          <p className="text-black text-lg leading-relaxed mb-8">
          Welcome to Interior Design Studio.<br></br>
          At Interior Design Studio, established in 2002, we provide complete interior design solutions, from planning and designing to installation.
          </p>
        </div>

      
        {/* Clients */}
        <div className="mt-4">
          <h3 className="text-white font-semibold text-xl mb-4 whitespace-nowrap">Services</h3>
          <ul>
          <li className="mb-2 text-lg"><Link to="/ServicesPages/trunkey" className="hover:underline">Trunkey Contract</Link></li>
          <li className="mb-2 text-lg"><Link to="/ServicesPages/interior" className="hover:underline">Interiors Services</Link></li>
          <li className="mb-2 text-lg"><Link to="/ServicesPages/civil" className="hover:underline">Civil Services</Link></li>
          <li className="mb-2 text-lg"><Link to="/ServicesPages/exterior" className="hover:underline">Exterior Services</Link></li>
          <li className="mb-2 text-lg"><Link to="/ServicesPages/painting" className="hover:underline">Painting Services</Link></li>
          <li className="mb-2 text-lg"><Link to="/ServicesPages/electrical" className="hover:underline">Electrical Services</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div className="mt-4">
          <h3 className="text-white font-semibold text-xl mb-4 whitespace-nowrap">Company</h3>
          <ul>
            <li className="mb-2 text-lg"><a href="/#aboutus" className="hover:underline">About us</a></li>
            <li className="mb-2 text-lg"><a href="/#projects" className="hover:underline">Projects</a></li>
            <li className="mb-2 text-lg"><a href="/#services" className="hover:underline">Services</a></li>
            <li className="mb-2 text-lg"><a href="/#contact" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        {/* Get Connected */}
        <div className="mt-4">
          <h3 className="text-white font-semibold text-xl mb-4 whitespace-nowrap">Get connected with us</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/mdalam.sk?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.instagram.com/alamshaikh1211/profilecard/?igsh=MTc0YWxodDYxNzhheg==" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={30} />
            </a>
            <a href="https://wa.me/+919619836554" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30} className="hover:text-orange-600 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8"></div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-4 mt-4 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>&copy;2025 Interior Design Studio, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
