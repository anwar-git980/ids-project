// // import React, { useState } from 'react';
// // import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// // import { Link } from 'react-scroll';
// // import { FaFacebook } from "react-icons/fa";
// // import { FaInstagram } from "react-icons/fa";
// // import { FaWhatsapp } from "react-icons/fa";
// // import { FaXTwitter } from "react-icons/fa6";

// // const Navbar = () => {
// //   // State to toggle the mobile navigation menu
// //   const [nav, setNav] = useState(false);

// //   // Function to handle the toggle of the navigation menu
// //   const handleNav = () => {
// //     setNav(prevNav => !prevNav);
// //   };

// //   // Array of navigation items with their text and target section
// //   const navItems = [
// //     { id: 1, text: 'Home', href: 'home' },
// //     { id: 2, text: 'About Us', href: 'aboutus' },
// //     { id: 3, text: 'Services', href: 'services' },
// //     { id: 4, text: 'Projects', href: 'projects' },
// //     { id: 5, text: 'Contact Us', href: 'contact' },
// //   ];

// //   return (
// //     <>
// //       {/* Navbar Container */}
// //       <div className="bg-orange-50 flex justify-between items-center h-[80px] px-6 md:px-12 text-orange-400 fixed top-0 w-full z-10 shadow-lg">
// //         {/* Logo Section */}
// //         <h1 className="text-3xl font-bold">
// //           <Link to="home" smooth={true} duration={500} className="cursor-pointer">
// //             <img src="/src/IDSlogo.png" alt="Logo" className="h-20 w-30 md:h-25 md:w-30" />
// //           </Link>
// //         </h1>

// //         {/* Desktop Navigation Menu */}
// //         <div className="hidden md:flex flex-1 justify-center">
// //           <ul className="flex space-x-8">
// //             {navItems.map(item => (
// //               <li
// //                 key={item.id}
// //                 className="p-4 text-lg rounded-full transition-all cursor-pointer duration-300 hover:bg-orange-400 hover:text-white"
// //               >
// //                 <Link
// //                   to={item.href}
// //                   smooth={true}
// //                   duration={500}
// //                   spy={true}
// //                   offset={-80} // Adjusted offset to account for the navbar height
// //                   activeClass="text-white-400 underline" // Active class styling
// //                 >
// //                   {item.text}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Right Section: Social Icons */}
// //         <div className="flex space-x-4 ml-auto">
// //           <a href="https://www.facebook.com/mdalam.sk?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
// //             <FaFacebook size={30} />
// //           </a>
// //           <a href="https://www.instagram.com/alamshaikh1211/profilecard/?igsh=MTc0YWxodDYxNzhheg==" target="_blank" rel="noopener noreferrer">
// //             <FaInstagram size={30} />
// //           </a>
// //           <a href="https://wa.me/+919619836554" target="_blank" rel="noopener noreferrer">
// //             <FaWhatsapp size={30} />
// //            </a>
// //            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
// //             <FaXTwitter size={30}/>
// //            </a>
// //         </div>

// //         {/* Mobile Navigation Toggle Icon */}
// //         <div onClick={handleNav} className="block md:hidden cursor-pointer">
// //           {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
// //         </div>

// //         {/* Mobile Navigation Menu */}
// //         <ul
// //           className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-950 bg-orange-50 transition-transform duration-500 ${nav ? 'translate-x-0' : '-translate-x-full'}`}
// //         >
// //           {/* Mobile Logo Section */}
// //           <h1 className="text-3xl font-bold text-[#222222] m-4">
// //             <Link
// //               to="home"
// //               smooth={true}
// //               duration={500}
// //               onClick={() => setNav(false)} // Close menu on logo click
// //               className="cursor-pointer"
// //             >
// //               <img src="/src/IDSlogo.png" alt="Logo" style={{ height: '80px', width: '100px' }} />
// //             </Link>
// //           </h1>

// //           {/* Mobile Navigation Items */}
// //           {navItems.map(item => (
// //             <li
// //               key={item.id}
// //               className="p-4 border-b border-gray-900 rounded-xl duration-300 font-bold cursor-pointer hover:bg-orange-400 hover:text-white text-[#222222]"
// //             >
// //               <Link
// //                 to={item.href}
// //                 smooth={true}
// //                 duration={500}
// //                 spy={true}
// //                 offset={-80} // Adjusted offset for navbar height
// //                 activeClass="text-white-400 underline"// Active class styling
// //                 onClick={() => setNav(false)} // Close menu on item click
// //               >
// //                 {item.text}
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;





// // import React, { useState } from 'react';
// // import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// // import { FaChevronDown } from 'react-icons/fa6';
// // import { Link } from 'react-scroll';
// // import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

// // const Navbar = () => {
// //   const [nav, setNav] = useState(false);
// //   const [activeDropdown, setActiveDropdown] = useState(null);

// //   const handleNav = () => {
// //     setNav(prevNav => !prevNav);
// //   };

// //   const toggleDropdown = (menu) => {
// //     setActiveDropdown(activeDropdown === menu ? null : menu);
// //   };

// //   // Dropdown content
// //   const servicesDropdown = [
// //     { id: 1, text: 'Marketing', href: 'marketing',  },
// //     { id: 2, text: 'Consulting', href: 'consulting' },
// //     { id: 3, text: 'Design', href: 'design' },
// //     { id: 4, text: 'Development', href: 'development' },
// //   ];

// //   const projectsDropdown = [
// //     { id: 1, text: 'Web Projects', href: 'web-projects' },
// //     { id: 2, text: 'Mobile Apps', href: 'mobile-apps' },
// //     { id: 3, text: 'UI/UX Design', href: 'ui-ux' },
// //     { id: 4, text: 'Branding', href: 'branding' },
// //   ];

// //   const navItems = [
// //     { id: 1, text: 'Home', href: 'home' },
// //     { id: 2, text: 'About Us', href: 'aboutus' },
// //     { 
// //       id: 3, 
// //       text: 'Services', 
// //       href: 'services',
// //       hasDropdown: true,
// //       dropdownItems: servicesDropdown 
// //     },
// //     { 
// //       id: 4, 
// //       text: 'Projects', 
// //       href: 'projects',
// //       hasDropdown: true,
// //       dropdownItems: projectsDropdown 
// //     },
// //     { id: 5, text: 'Contact Us', href: 'contact' },
// //   ];

// //   return (
// //     <>
// //       <div className="bg-orange-50 flex justify-between items-center h-[80px] px-6 md:px-12 text-orange-400 fixed top-0 w-full z-10 shadow-lg">
// //         {/* Logo Section */}
// //         <h1 className="text-3xl font-bold">
// //           <Link to="home" smooth={true} duration={500} className="cursor-pointer">
// //             <img src="/src/IDSlogo.png" alt="Logo" className="h-20 w-30 md:h-25 md:w-30" />
// //           </Link>
// //         </h1>

// //         {/* Desktop Navigation Menu */}
// //         <div className="hidden md:flex flex-1 justify-center">
// //           <ul className="flex space-x-8">
// //             {navItems.map(item => (
// //               <li
// //                 key={item.id}
// //                 className="group relative p-4 text-lg rounded-full transition-all cursor-pointer duration-300 hover:bg-orange-400 hover:text-white"
// //                 onClick={() => item.hasDropdown && toggleDropdown(item.text)}
// //               >
// //                 <div className="flex items-center gap-1">
// //                   <Link
// //                     to={item.href}
// //                     smooth={true}
// //                     duration={500}
// //                     spy={true}
// //                     offset={-80}
// //                     activeClass="text-white-400 underline"
// //                   >
// //                     {item.text}
// //                   </Link>
// //                   {item.hasDropdown && (
// //                     <FaChevronDown 
// //                       className={`transition-transform duration-300 ${
// //                         activeDropdown === item.text ? 'rotate-180' : ''
// //                       }`}
// //                       size={14}
// //                     />
// //                   )}
// //                 </div>
                
// //                 {/* Desktop Dropdown Menu */}
// //                 {item.hasDropdown && (
// //                   <ul className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300 ${
// //                     activeDropdown === item.text ? 'opacity-100 visible' : 'opacity-0 invisible'
// //                   }`}>
// //                     {item.dropdownItems.map(dropdownItem => (
// //                       <li
// //                         key={dropdownItem.id}
// //                         className="p-3 hover:bg-orange-400 hover:text"
// //                       >
// //                         <Link
// //                           to={dropdownItem.href}
// //                           smooth={true}
// //                           duration={500}
// //                           className="block w-full"
// //                         >
// //                           {dropdownItem.text}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 )}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Social Icons */}
// //         <div className="flex space-x-4 ml-auto">
// //           <a href="https://www.facebook.com/mdalam.sk?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
// //             <FaFacebook size={30} />
// //           </a>
// //           <a href="https://www.instagram.com/alamshaikh1211/profilecard/?igsh=MTc0YWxodDYxNzhheg==" target="_blank" rel="noopener noreferrer">
// //             <FaInstagram size={30} />
// //           </a>
// //           <a href="https://wa.me/+919619836554" target="_blank" rel="noopener noreferrer">
// //             <FaWhatsapp size={30} />
// //           </a>
// //           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
// //             <FaXTwitter size={30}/>
// //           </a>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div onClick={handleNav} className="block md:hidden cursor-pointer">
// //           {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
// //         </div>

// //         {/* Mobile Navigation Menu */}
// //         <ul
// //           className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-950 bg-orange-50 transition-transform duration-500 overflow-y-auto ${
// //             nav ? 'translate-x-0' : '-translate-x-full'
// //           }`}
// //         >
// //           {/* Mobile Logo */}
// //           <h1 className="text-3xl font-bold text-[#222222] m-4">
// //             <Link
// //               to="home"
// //               smooth={true}
// //               duration={500}
// //               onClick={() => setNav(false)}
// //               className="cursor-pointer"
// //             >
// //               <img src="/src/IDSlogo.png" alt="Logo" style={{ height: '80px', width: '100px' }} />
// //             </Link>
// //           </h1>

// //           {/* Mobile Navigation Items with Dropdowns */}
// //           {navItems.map(item => (
// //             <div key={item.id}>
// //               <li
// //                 className="p-4 border-b border-gray-900 rounded-xl duration-300 font-bold cursor-pointer hover:bg-orange-400 text-[#222222]"
// //                 onClick={() => item.hasDropdown && toggleDropdown(item.text)}
// //               >
// //                 <div className="flex items-center justify-between">
// //                   {item.hasDropdown ? (
// //                     <>
// //                       <span>{item.text}</span>
// //                       <FaChevronDown 
// //                         className={`transition-transform duration-300 ${
// //                           activeDropdown === item.text ? 'rotate-180' : ''
// //                         }`}
// //                         size={14}
// //                       />
// //                     </>
// //                   ) : (
// //                     <Link
// //                       to={item.href}
// //                       smooth={true}
// //                       duration={500}
// //                       spy={true}
// //                       offset={-80}
// //                       activeClass="text-white-400 underline"
// //                       onClick={() => setNav(false)}
// //                     >
// //                       {item.text}
// //                     </Link>
// //                   )}
// //                 </div>
// //               </li>
              
// //               {/* Mobile Dropdown Items */}
// //               {item.hasDropdown && activeDropdown === item.text && (
// //                 <ul className="bg-orange-100 pl-8">
// //                   {item.dropdownItems.map(dropdownItem => (
// //                     <li
// //                       key={dropdownItem.id}
// //                       className="p-3 border-b border-gray-200 hover:bg-orange-400 "
// //                     >
// //                       <Link
// //                         to={dropdownItem.href}
// //                         smooth={true}
// //                         duration={500}
// //                         onClick={() => {
// //                           setNav(false);
// //                           toggleDropdown(null);
// //                         }}
// //                       >
// //                         {dropdownItem.text}
// //                       </Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               )}
// //             </div>
// //           ))}
// //         </ul>
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;





// // import React, { useState } from 'react';
// // import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// // import { FaChevronDown } from 'react-icons/fa6';
// // import { Link } from 'react-scroll';
// // import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

// // const Navbar = () => {
// //   const [nav, setNav] = useState(false);
// //   const [activeDropdown, setActiveDropdown] = useState(null);

// //   const handleNav = () => {
// //     setNav(prevNav => !prevNav);
// //   };

// //   const toggleDropdown = (menu) => {
// //     setActiveDropdown(activeDropdown === menu ? null : menu);
// //   };

// //   const servicesDropdown = [
// //     { id: 1, text: 'Trunkey Contract', href: 'trunkey' },
// //     { id: 2, text: 'Interior Services', href: 'interior' },
// //     { id: 3, text: 'Civil Services', href: 'civil' },
// //     { id: 4, text: 'Exterior Services', href: 'exterior' },
// //     { id: 5, text: 'Painting Services', href: 'painting' },
// //     { id: 6, text: 'Electrical Services', href: 'electrical' },
// //   ];

// //   const projectsDropdown = [
// //     { id: 1, text: 'Retail Projects', href: 'retail-projects' },
// //     { id: 2, text: 'Residential Projects', href: 'residential-projects' },
// //     { id: 3, text: 'Commercial Projects', href: 'commercial-projects' },
// //   ];

// //   const navItems = [
// //     { id: 1, text: 'Home', href: 'home' },
// //     { id: 2, text: 'About Us', href: 'aboutus' },
// //     { 
// //       id: 3, 
// //       text: 'Services', 
// //       href: 'services',
// //       hasDropdown: true,
// //       dropdownItems: servicesDropdown 
// //     },
// //     { 
// //       id: 4, 
// //       text: 'Projects', 
// //       href: 'projects',
// //       hasDropdown: true,
// //       dropdownItems: projectsDropdown 
// //     },
// //     { id: 5, text: 'Contact Us', href: 'contact' },
// //   ];

// //   return (
// //     <>
// //       <div className="bg-orange-50 flex justify-between items-center h-[80px] px-6 md:px-12 text-orange-400 fixed top-0 w-full z-10 shadow-lg">
// //         {/* Logo Section */}
// //         <h1 className="text-3xl font-bold">
// //           <Link to="home" smooth={true} duration={500} className="cursor-pointer">
// //             <img src="/src/IDSlogo.png" alt="Logo" className="h-20 w-30 md:h-25 md:w-30" />
// //           </Link>
// //         </h1>

// //         {/* Desktop Navigation Menu */}
// //         <div className="hidden md:flex flex-1 justify-center">
// //           <ul className="flex space-x-8">
// //             {navItems.map(item => (
// //               <li
// //                 key={item.id}
// //                 className="group relative p-4 text-lg rounded-full transition-all cursor-pointer duration-300 hover:bg-orange-400 hover:text-white hover:shadow-lg hover:scale-105 "
// //                 onClick={() => item.hasDropdown && toggleDropdown(item.text)}
// //               >
// //                 <div className="flex items-center gap-1">
// //                   <Link
// //                     to={item.href}
// //                     smooth={true}
// //                     duration={500}
// //                     spy={true}
// //                     offset={-80}
// //                     // activeClass="text-white-400 underline"
// //                     activeClass="text-white-400 border-b-2 border-orange-400"
// //                     // activeClass="text-white-400 border-b-2 border-orange-400 hover:text-white hover:border-white"
// //                   >
// //                     {item.text}
// //                   </Link>
// //                   {item.hasDropdown && (
// //                     <FaChevronDown 
// //                       className={`transition-transform duration-300 ${
// //                         activeDropdown === item.text ? 'rotate-180' : ''
// //                       }`}
// //                       size={14}
// //                     />
// //                   )}
// //                 </div>
                
// //                 {/* Desktop Dropdown Menu */}
// //                 {item.hasDropdown && (
// //                   <ul className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300 ${
// //                     activeDropdown === item.text ? 'opacity-100 visible' : 'opacity-0 invisible'
// //                   }`}>
// //                     {item.dropdownItems.map(dropdownItem => (
// //                       <li
// //                         key={dropdownItem.id}
// //                         className="p-3 text-orange-400 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 border-l-4 border-transparent hover:border-orange-400"
// //                       >
// //                         <Link
// //                           to={dropdownItem.href}
// //                           smooth={true}
// //                           duration={500}
// //                           className="block w-full"
// //                         >
// //                           {dropdownItem.text}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 )}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Rest of the component remains the same... */}
// //         <div className="flex space-x-4 ml-auto">
// //           <a href="https://www.facebook.com/mdalam.sk?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
// //             <FaFacebook size={30} className="hover:text-orange-600 transition-colors duration-300" />
// //           </a>
// //           <a href="https://www.instagram.com/alamshaikh1211/profilecard/?igsh=MTc0YWxodDYxNzhheg==" target="_blank" rel="noopener noreferrer">
// //             <FaInstagram size={30} className="hover:text-orange-600 transition-colors duration-300" />
// //           </a>
// //           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
// //             <FaXTwitter size={30} className="hover:text-orange-600 transition-colors duration-300" />
// //           </a>
// //           <a href="https://wa.me/+919619836554" target="_blank" rel="noopener noreferrer">
// //             <FaWhatsapp size={30} className="hover:text-orange-600 transition-colors duration-300" />
// //           </a>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div onClick={handleNav} className="block md:hidden cursor-pointer">
// //           {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
// //         </div>

// //         {/* Mobile Navigation Menu */}
// //         <ul
// //           className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-950 bg-orange-50 transition-transform duration-500 overflow-y-auto ${
// //             nav ? 'translate-x-0' : '-translate-x-full'
// //           }`}
// //         >
// //           {/* Mobile Logo */}
// //           <h1 className="text-3xl font-bold text-[#222222] m-4">
// //             <Link
// //               to="home"
// //               smooth={true}
// //               duration={500}
// //               onClick={() => setNav(false)}
// //               className="cursor-pointer"
// //             >
// //               <img src="/src/IDSlogo.png" alt="Logo" style={{ height: '80px', width: '100px' }} />
// //             </Link>
// //           </h1>

// //           {/* Mobile Navigation Items with Dropdowns */}
// //           {navItems.map(item => (
// //             <div key={item.id}>
// //               <li
// //                 className="p-4 border-b border-gray-900 rounded-xl duration-300 font-bold cursor-pointer hover:bg-orange-400 hover:text-white text-[#222222]"
// //                 onClick={() => item.hasDropdown && toggleDropdown(item.text)}
// //               >
// //                 <div className="flex items-center justify-between">
// //                   {item.hasDropdown ? (
// //                     <>
// //                       <span>{item.text}</span>
// //                       <FaChevronDown 
// //                         className={`transition-transform duration-300 ${
// //                           activeDropdown === item.text ? 'rotate-180' : ''
// //                         }`}
// //                         size={14}
// //                       />
// //                     </>
// //                   ) : (
// //                     <Link
// //                       to={item.href}
// //                       smooth={true}
// //                       duration={500}
// //                       spy={true}
// //                       offset={-80}
// //                       // activeClass="text-white-400 underline"
// //                       activeClass="text-white-400 border-b-2 border-white-400"
// //                       onClick={() => setNav(false)}
// //                     >
// //                       {item.text}
// //                     </Link>
// //                   )}
// //                 </div>
// //               </li>
              
// //               {/* Mobile Dropdown Items */}
// //               {item.hasDropdown && activeDropdown === item.text && (
// //                 <ul className="bg-orange-100 pl-8">
// //                   {item.dropdownItems.map(dropdownItem => (
// //                     <li
// //                       key={dropdownItem.id}
// //                       className="p-3 border-b border-orange-700 hover:bg-orange-200 hover:text-orange-600 transition-all duration-300"
// //                     >
// //                       <Link
// //                         to={dropdownItem.href}
// //                         smooth={true}
// //                         duration={500}
// //                         onClick={() => {
// //                           setNav(false);
// //                           toggleDropdown(null);
// //                         }}
// //                       >
// //                         {dropdownItem.text}
// //                       </Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               )}
// //             </div>
// //           ))}
// //         </ul>
// //       </div>
// //     </>
// //   );
// // };

// // export default Navbar;








//  {/* Affan version*/}
// import React, { useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { FaChevronDown } from 'react-icons/fa6';
// import { Link } from 'react-scroll';
// import { FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const handleNav = () => {
//     setNav(prevNav => !prevNav);
//   };

//   const toggleDropdown = (menu) => {
//     setActiveDropdown(activeDropdown === menu ? null : menu);
//   };

//   const servicesDropdown = [
//     { id: 1, text: 'Trunkey Contract', link: '/ServicesPages/trunkey' },
//     { id: 2, text: 'Interior Services', link: '/ServicesPages/interior' },
//     { id: 3, text: 'Civil Services', link: '/ServicesPages/civil' },
//     { id: 4, text: 'Exterior Services', link: '/ServicesPages/exterior' },
//     { id: 5, text: 'Painting Services', link: '/ServicesPages/painting' },
//     { id: 6, text: 'Electrical Services', link: '/ServicesPages/electrical' },
//   ];

//   const projectsDropdown = [
//     { id: 1, text: 'Retail Projects', link: '/ProjectPages/retail' },
//     { id: 2, text: 'Residential Projects', link: '/ProjectPages/residential' },
//     { id: 3, text: 'Commercial Projects', link: '/ProjectPages/commercial' },
//   ];

//   const navItems = [
//     { id: 1, text: 'Home', href: 'home' },
//     { id: 2, text: 'About Us', href: 'aboutus' },
//     {
//       id: 3,
//       text: 'Services',
//       href: 'services',
//       hasDropdown: true,
//       dropdownItems: servicesDropdown,
//     },
//     {
//       id: 4,
//       text: 'Projects',
//       href: 'projects',
//       hasDropdown: true,
//       dropdownItems: projectsDropdown,
//     },
//     { id: 5, text: 'Contact Us', href: 'contact' },
//   ];

//   return (
//     <>
//       <div className="bg-orange-50 flex justify-between items-center h-[80px] px-6 md:px-12 text-orange-400 fixed top-0 w-full z-10 shadow-lg">
//         {/* Logo Section */}
//         <h1 className="text-3xl font-bold">
//           <Link to="home" smooth={true} duration={500} className="cursor-pointer">
//             <img src="/src/IDSlogo.png" alt="Logo" className="h-20 w-30 md:h-25 md:w-30" />
//           </Link>
//         </h1>

//         {/* Desktop Navigation Menu */}
//         <div className="hidden md:flex flex-1 justify-center">
//           <ul className="flex space-x-8">
//             {navItems.map(item => (
//               <li
//                 key={item.id}
//                 className="group relative p-4 text-lg rounded-full transition-all cursor-pointer duration-300 hover:bg-orange-400 hover:text-white hover:shadow-lg hover:scale-105"
//                 onClick={() => item.hasDropdown && toggleDropdown(item.text)}
//               >
//                 <div className="flex items-center gap-1">
//                   <Link
//                     to={item.href}
//                     smooth={true}
//                     duration={500}
//                     spy={true}
//                     offset={-80}
//                     activeClass="text-white-400 border-b-2 border-orange-400"
//                   >
//                     {item.text}
//                   </Link>
//                   {item.hasDropdown && (
//                     <FaChevronDown
//                       className={`transition-transform duration-300 ${
//                         activeDropdown === item.text ? 'rotate-180' : ''
//                       }`}
//                       size={14}
//                     />
//                   )}
//                 </div>

//                 {/* Desktop Dropdown Menu */}
//                 {item.hasDropdown && (
//                   <ul
//                     className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300 ${
//                       activeDropdown === item.text ? 'opacity-100 visible' : 'opacity-0 invisible'
//                     }`}
//                   >
//                     {item.dropdownItems.map(dropdownItem => (
//                       <li
//                         key={dropdownItem.id}
//                         className="p-3 text-orange-400 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 border-l-4 border-transparent hover:border-orange-400"
//                       >
//                         <a
//                           href={dropdownItem.link}
//                           className="block w-full"
//                         >
//                           {dropdownItem.text}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Social Media Links */}
//         <div className="flex space-x-4 ml-auto">
//           <a href="https://www.facebook.com/mdalam.sk?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
//             <FaFacebook size={30} className="hover:text-orange-600 transition-colors duration-300" />
//           </a>
//           <a href="https://www.instagram.com/alamshaikh1211/profilecard/?igsh=MTc0YWxodDYxNzhheg==" target="_blank" rel="noopener noreferrer">
//             <FaInstagram size={30} className="hover:text-orange-600 transition-colors duration-300" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaXTwitter size={30} className="hover:text-orange-600 transition-colors duration-300" />
//           </a>
//           <a href="https://wa.me/+919619836554" target="_blank" rel="noopener noreferrer">
//             <FaWhatsapp size={30} className="hover:text-orange-600 transition-colors duration-300" />
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div onClick={handleNav} className="block md:hidden cursor-pointer">
//           {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
//         </div>

//         {/* Mobile Navigation Menu */}
//         <ul
//           className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-950 bg-orange-50 transition-transform duration-500 overflow-y-auto ${
//             nav ? 'translate-x-0' : '-translate-x-full'
//           }`}
//         >
//           {/* Mobile Logo */}
//           <h1 className="text-3xl font-bold text-[#222222] m-4">
//             <Link
//               to="home"
//               smooth={true}
//               duration={500}
//               onClick={() => setNav(false)}
//               className="cursor-pointer"
//             >
//               <img src="/src/IDSlogo.png" alt="Logo" style={{ height: '80px', width: '100px' }} />
//             </Link>
//           </h1>

//           {/* Mobile Navigation Items with Dropdowns */}
//           {navItems.map(item => (
//             <div key={item.id}>
//               <li
//                 className="p-4 border-b border-gray-900 rounded-xl duration-300 font-bold cursor-pointer hover:bg-orange-400 hover:text-white text-[#222222]"
//                 onClick={() => item.hasDropdown && toggleDropdown(item.text)}
//               >
//                 <div className="flex items-center justify-between">
//                   {item.hasDropdown ? (
//                     <>
//                       <span>{item.text}</span>
//                       <FaChevronDown
//                         className={`transition-transform duration-300 ${
//                           activeDropdown === item.text ? 'rotate-180' : ''
//                         }`}
//                         size={14}
//                       />
//                     </>
//                   ) : (
//                     <Link
//                       to={item.href}
//                       smooth={true}
//                       duration={500}
//                       spy={true}
//                       offset={-80}
//                       onClick={() => setNav(false)}
//                     >
//                       {item.text}
//                     </Link>
//                   )}
//                 </div>
//               </li>

//               {/* Mobile Dropdown Items */}
//               {item.hasDropdown && activeDropdown === item.text && (
//                 <ul className="bg-orange-100 pl-8">
//                   {item.dropdownItems.map(dropdownItem => (
//                     <li
//                       key={dropdownItem.id}
//                       className="p-3 border-b border-orange-700 hover:bg-orange-200 hover:text-orange-600 transition-all duration-300"
//                     >
//                       <a
//                         href={dropdownItem.link}
//                         onClick={() => {
//                           setNav(false);
//                           toggleDropdown(null);
//                         }}
//                       >
//                         {dropdownItem.text}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;






// // import React, { useState } from 'react';
// // import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// // import { FaChevronDown, FaFacebook, FaInstagram, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
// // import { Link as ScrollLink } from 'react-scroll';
// // import { Link as RouterLink, useLocation } from 'react-router-dom';

// // const Navbar = () => {
// //   const [nav, setNav] = useState(false);
// //   const [activeDropdown, setActiveDropdown] = useState(null);

// //   const location = useLocation();

// //   const handleNav = () => {
// //     setNav((prevNav) => !prevNav);
// //   };

// //   const toggleDropdown = (menu, event) => {
// //     if (event) event.stopPropagation(); // Prevent triggering the parent click
// //     setActiveDropdown(activeDropdown === menu ? null : menu);
// //   };

// //   const resetStates = () => {
// //     setNav(false);
// //     setActiveDropdown(null);
// //   };

// //   const servicesDropdown = [
// //     { id: 1, text: 'Turnkey Contract', link: '/ServicesPages/trunkey' },
// //     { id: 2, text: 'Interior Services', link: '/ServicesPages/interior' },
// //     { id: 3, text: 'Civil Services', link: '/ServicesPages/civil' },
// //     { id: 4, text: 'Exterior Services', link: '/ServicesPages/exterior' },
// //     { id: 5, text: 'Painting Services', link: '/ServicesPages/painting' },
// //     { id: 6, text: 'Electrical Services', link: '/ServicesPages/electrical' },
// //   ];

// //   const projectsDropdown = [
// //     { id: 1, text: 'Retail Projects', link: '/ProjectPages/retail' },
// //     { id: 2, text: 'Residential Projects', link: '/ProjectPages/residential' },
// //     { id: 3, text: 'Commercial Projects', link: '/ProjectPages/commercial' },
// //   ];

// //   const navItems = [
// //     { id: 1, text: 'Home', href: 'home', internal: true },
// //     { id: 2, text: 'About Us', href: 'aboutus', internal: true },
// //     {
// //       id: 3,
// //       text: 'Services',
// //       hasDropdown: true,
// //       dropdownItems: servicesDropdown,
// //       href: 'services',
// //       internal: true,
// //     },
// //     {
// //       id: 4,
// //       text: 'Projects',
// //       hasDropdown: true,
// //       dropdownItems: projectsDropdown,
// //       href: 'projects',
// //       internal: true,
// //     },
// //     { id: 5, text: 'Contact Us', href: 'contact', internal: true },
// //   ];

// //   const isHomePage = location.pathname === '/';

// //   return (
// //     <div className="bg-orange-50 flex justify-between items-center h-[80px] px-6 md:px-12 text-orange-400 fixed top-0 w-full z-10 shadow-lg">
// //       {/* Logo Section */}
// //       <h1 className="text-3xl font-bold">
// //         <RouterLink to="/" onClick={resetStates} className="cursor-pointer">
// //           <img src="/src/IDSlogo.png" alt="Company Logo" className="h-20 w-auto" />
// //         </RouterLink>
// //       </h1>

// //       {/* Desktop Navigation */}
// //       <div className="hidden md:flex flex-1 justify-center">
// //         <ul className="flex space-x-8">
// //           {navItems.map((item) => (
// //             <li
// //               key={item.id}
// //               className="group relative p-4 text-lg rounded-full transition-all cursor-pointer duration-300 hover:bg-orange-400 hover:text-white hover:shadow-lg hover:scale-105"
// //             >
// //               <div className="flex items-center gap-1">
// //                 {isHomePage && item.internal ? (
// //                   <ScrollLink
// //                     to={item.href}
// //                     smooth={true}
// //                     duration={500}
// //                     spy={true}
// //                     offset={-80}
// //                     activeClass="text-white-400 border-b-2 border-orange-400"
// //                   >
// //                     {item.text}
// //                   </ScrollLink>
// //                 ) : (
// //                   <RouterLink to={item.href} onClick={resetStates}>
// //                     {item.text}
// //                   </RouterLink>
// //                 )}
// //                 {item.hasDropdown && (
// //                   <FaChevronDown
// //                     className={`transition-transform duration-300 ${activeDropdown === item.text ? 'rotate-180' : ''}`}
// //                     size={14}
// //                     onClick={(event) => toggleDropdown(item.text, event)}
// //                   />
// //                 )}
// //               </div>

// //               {/* Desktop Dropdown */}
// //               {item.hasDropdown && activeDropdown === item.text && (
// //                 <ul className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-300">
// //                   {item.dropdownItems.map((dropdownItem) => (
// //                     <li
// //                       key={dropdownItem.id}
// //                       className="p-3 text-orange-400 hover:bg-orange-100 hover:text-orange-600 transition-all duration-300 border-l-4 border-transparent hover:border-orange-400"
// //                     >
// //                       <RouterLink to={dropdownItem.link} onClick={resetStates}>
// //                         {dropdownItem.text}
// //                       </RouterLink>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               )}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>

// //       {/* Social Media Links */}
// //       <div className="flex space-x-4 ml-auto">
// //         <a href="https://www.facebook.com/mdalam.sk?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
// //           <FaFacebook size={30} className="hover:text-orange-600 transition-colors duration-300" />
// //         </a>
// //         <a href="https://www.instagram.com/alamshaikh1211/profilecard/?igsh=MTc0YWxodDYxNzhheg==" target="_blank" rel="noopener noreferrer">
// //           <FaInstagram size={30} className="hover:text-orange-600 transition-colors duration-300" />
// //         </a>
// //         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
// //           <FaXTwitter size={30} className="hover:text-orange-600 transition-colors duration-300" />
// //         </a>
// //         <a href="https://wa.me/+919619836554" target="_blank" rel="noopener noreferrer">
// //           <FaWhatsapp size={30} className="hover:text-orange-600 transition-colors duration-300" />
// //         </a>
// //       </div>

// //       {/* Mobile Menu Button */}
// //       <div onClick={handleNav} className="block md:hidden cursor-pointer">
// //         {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
// //       </div>

// //       {/* Mobile Navigation Menu */}
// //       <ul
// //         className={`fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-gray-950 bg-orange-50 transition-transform duration-500 overflow-y-auto ${nav ? 'translate-x-0' : '-translate-x-full'}`}
// //       >
// //         <h1 className="text-3xl font-bold text-[#222222] m-4">
// //           <RouterLink to="/" onClick={() => setNav(false)} className="cursor-pointer">
// //             <img src="/src/IDSlogo.png" alt="Mobile Logo" style={{ height: '80px', width: '100px' }} />
// //           </RouterLink>
// //         </h1>

// //         {navItems.map((item) => (
// //           <div key={item.id}>
// //             <li
// //               className="p-4 border-b border-gray-900 rounded-xl duration-300 font-bold cursor-pointer hover:bg-orange-400 hover:text-white text-[#222222]"
// //               onClick={() => item.hasDropdown && toggleDropdown(item.text)}
// //             >
// //               <div className="flex items-center justify-between">
// //                 {item.hasDropdown ? (
// //                   <>
// //                     <span>{item.text}</span>
// //                     <FaChevronDown
// //                       className={`transition-transform duration-300 ${activeDropdown === item.text ? 'rotate-180' : ''}`}
// //                       size={14}
// //                     />
// //                   </>
// //                 ) : (
// //                   <RouterLink to={item.href} onClick={() => setNav(false)}>
// //                     {item.text}
// //                   </RouterLink>
// //                 )}
// //               </div>
// //             </li>

// //             {item.hasDropdown && activeDropdown === item.text && (
// //               <ul className="bg-orange-100 pl-8">
// //                 {item.dropdownItems.map((dropdownItem) => (
// //                   <li
// //                     key={dropdownItem.id}
// //                     className="p-3 border-b border-orange-700 hover:bg-orange-200 hover:text-orange-600 transition-all duration-300"
// //                   >
// //                     <RouterLink
// //                       to={dropdownItem.link}
// //                       onClick={() => {
// //                         setNav(false);
// //                         toggleDropdown(null);
// //                       }}
// //                     >
// //                       {dropdownItem.text}
// //                     </RouterLink>
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //           </div>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Navbar;







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
    { id: 1, text: 'Home', href: 'home', path: '/' },
    { id: 2, text: 'About Us', href: 'aboutus', path: '/#aboutus' },
    {
      id: 3,
      text: 'Services',
      href: 'services',
      path: '/#services',
      hasDropdown: true,
      dropdownItems: servicesDropdown,
    },
    {
      id: 4,
      text: 'Projects',
      href: 'projects',
      path: '/#projects',
      hasDropdown: true,
      dropdownItems: projectsDropdown,
    },
    { id: 5, text: 'Contact Us', href: 'contact', path: '/#contact' },
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