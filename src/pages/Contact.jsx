// // import React from 'react'
// // import Navbar from '../components/navbar/Navbar'
// // import Footer from '../components/Footer/footer'

// // function Contact() {
// //   return (
// //     <section id="contact" className="h-screen bg-gray-500 flex items-center justify-center">
// //       <h2 className="text-3xl font-bold">Contact Us</h2>
// //     </section>
// //   )
// // }

// // export default Contact

// import React from "react";

// const ContactPage = () => {
//   return (
//     <div style={styles.container}>
//       <div style={styles.infoSection}>
//         <h2 style={styles.heading}>Information</h2>
//         <p><strong>Address:</strong> 1234 Fifth Ave, Seattle, WA 98101, United States</p>
//         <h3 style={styles.subheading}>Connect with us</h3>
//         <div style={styles.socialIcons}>
//           <a href="#" style={styles.icon}>Facebook</a>
//           <a href="#" style={styles.icon}>Twitter</a>
//           <a href="#" style={styles.icon}>LinkedIn</a>
//         </div>
//         <p><strong>Technical Support:</strong> support@example.com</p>
//       </div>

//       <div style={styles.formSection}>
//         <h2 style={styles.heading}>Send a message</h2>
//         <form style={styles.form}>
//           <input type="email" placeholder="Email" style={styles.input} required />
//           <input type="text" placeholder="Your name" style={styles.input} required />
//           <input type="text" placeholder="Phone number" style={styles.input} />
//           <textarea placeholder="How can we help?" style={{ ...styles.input, height: "100px" }} required></textarea>
//           <button type="submit" style={styles.button}>Send</button>
//         </form>
//       </div>

//       <div style={styles.mapSection}>
//         <iframe
//           title="Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.510746967436!2d-122.33647418424273!3d47.608013979185485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102f3d482d7b%3A0xe8fca79a1ab47330!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sin!4v1636574371259!5m2!1sen!2sin"
//           width="100%"
//           height="300"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     padding: "20px",
//     maxWidth: "1200px",
//     margin: "auto",
//     gap: "20px",
//   },
//   infoSection: {
//     flex: 1,
//     backgroundColor: "#f9f9f9",
//     padding: "20px",
//     borderRadius: "8px",
//   },
//   formSection: {
//     flex: 1,
//     backgroundColor: "#f9f9f9",
//     padding: "20px",
//     borderRadius: "8px",
//   },
//   mapSection: {
//     flex: 1,
//     borderRadius: "8px",
//     overflow: "hidden",
//   },
//   heading: {
//     fontSize: "1.5rem",
//     marginBottom: "10px",
//   },
//   subheading: {
//     fontSize: "1.2rem",
//     marginTop: "20px",
//   },
//   socialIcons: {
//     display: "flex",
//     gap: "10px",
//     marginTop: "10px",
//   },
//   icon: {
//     textDecoration: "none",
//     color: "#007bff",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//   },
//   input: {
//     padding: "10px",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     width: "100%",
//   },
//   button: {
//     padding: "10px",
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

// export default ContactPage;


// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';

// const countries = [
//   { name: 'India', code: '+91', minLength: 10, maxLength: 10 },
//   { name: 'United States', code: '+1', minLength: 10, maxLength: 10 },
//   { name: 'United Kingdom', code: '+44', minLength: 10, maxLength: 11 },
//   { name: 'Australia', code: '+61', minLength: 9, maxLength: 9 },
//   // Add more countries as needed
// ];

// const Contact = () => {
//   const form = useRef();
//   const [status, setStatus] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [countryCode, setCountryCode] = useState(countries[0].code); // Default to first country code
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for valid email

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const selectedCountry = countries.find(
//       (country) => country.code === countryCode
//     );

//     // Validate phone number length
//     if (
//       phoneNumber.length < selectedCountry.minLength ||
//       phoneNumber.length > selectedCountry.maxLength
//     ) {
//       setError(
//         Phone number must be between ${selectedCountry.minLength} and ${selectedCountry.maxLength} digits for ${selectedCountry.name}.
//       );
//       return;
//     }

//     // Validate email
//     if (!emailRegex.test(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     emailjs
//       .sendForm('service_smi3syt', 'template_0afjbke', form.current, {
//         publicKey: 'LBUvr8oEm1c7_2Xt7',
//       })
//       .then(
//         () => {
//           setStatus('Message Sent!');
//           form.current.reset();
//           setPhoneNumber('');
//           setCountryCode(countries[0].code); // Reset to default country code
//           setEmail(''); // Reset email state
//           setError(''); // Clear any error
//         },
//         (error) => {
//           setStatus(Failed to send: ${error.text});
//         }
//       );
//   };

//   return (
//     <section id="contact" className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap -mx-4">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
//           >
//             <h2 className="text-3xl font-bold text-orange-500 mb-4">Get In Touch With Us</h2>
//             <p className="text-gray-600 mb-6">
//               Give us a call or drop a WhatsApp message anytime, we endeavor to answer all enquiries within 24 hours on business days. We will be happy to answer your queries.
//             </p>
//             <div className="mb-4">
//               <strong className="text-gray-700">Location: </strong> 607, Royal Park Society, Ajit Glass Garden Road, Ram Mandir, Goregaon W, Mumbai- 400104, Maharastra, India.
//             </div>
//             <div className="mb-4">
//               <strong className="text-gray-700">Phone Number:</strong> <a  href="https://wa.me/+919619836554" className="text-orange-500 underline"> +91 961 983 6554</a>
//             </div>
//             <div className="mb-4">
//               <strong className="text-gray-700">Email Us: </strong><strong className="text-orange-500 ">alamshaikh1211@gmail.com</strong> 
//             </div>
//             {/* Google Maps Embed */}
//             <div className="mb-4">
//               <iframe
//                 title="Location Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0135113364525!2d72.8902135749636!3d19.065313746118878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef22c4e3f9f%3A0x6c7f82873f1a47ed!2sEast%20Point%20Mall%2C%20SG%20Barve%20Marg%2C%20Jagruti%20Nagar%2C%20Kurla%20East%2C%20Mumbai%2C%20Maharashtra%20400024!5e0!3m2!1sen!2sin!4v1695297351707!5m2!1sen!2sin"
//                 width="100%"
//                 height="300"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </div>
//             <a 
//               href="https://www.google.com/maps/dir/?api=1&destination=EAST+POINT+MALL,+SHOP+NO+10,+SG+BARVE+MARG,+JAGRUTI+NAGAR,+KURLA+EAST+MUMBAI,+MAHARASHTRA+400024" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-orange-500 underline"
//             >
//               Open in Google Maps
//             </a>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="w-full lg:w-1/2 px-4"
//           >
//             <form ref={form} onSubmit={sendEmail} className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-3xl font-bold text-orange-500 mb-4 text-center">Please fill the form below and we'll get in touch with you.</h2> {/* Centered heading */}
//               <input
//                 type="text"
//                 name="from_name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full mb-4 p-2 border border-orange-300 rounded"
//               />
//               <input
//                 type="email"
//                 name="from_email"
//                 placeholder="Email Address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full mb-4 p-2 border border-orange-300 rounded"
//               />
//               <div className="flex mb-4">
//                 <select
//                   name="country_code"
//                   value={countryCode}
//                   onChange={(e) => setCountryCode(e.target.value)}
//                   className="w-1/3 mb-0 p-2 border border-orange-300 rounded mr-2"
//                 >
//                   {countries.map((country) => (
//                     <option key={country.code} value={country.code}>
//                       {country.name} ({country.code})
//                     </option>
//                   ))}
//                 </select>
//                 <input
//                   type="tel"
//                   name="user_phone"
//                   placeholder="Phone Number"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   required
//                   className="w-2/3 mb-0 p-2 border border-orange-300 rounded"
//                 />
//               </div>
//               {error && <p className="text-red-500">{error}</p>}
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Your Subject"
//                 className="w-full mb-4 p-2 border border-orange-300 rounded"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Message"
//                 rows="5"
//                 required
//                 className="w-full mb-4 p-2 border border-orange-300 rounded"
//               ></textarea>
//               <motion.button
//                 type="submit"
//                 className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-400 transition duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Submit
//               </motion.button>
//               {status && <p className="mt-4 text-green-600">{status}</p>}
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import emailjs from '@emailjs/browser';

// const countries = [
//   { name: 'India', code: '+91', minLength: 10, maxLength: 10 },
//   { name: 'United States', code: '+1', minLength: 10, maxLength: 10 },
//   { name: 'United Kingdom', code: '+44', minLength: 10, maxLength: 11 },
//   { name: 'Australia', code: '+61', minLength: 9, maxLength: 9 },
//   // Add more countries as needed
// ];

// const Contact = () => {
//   const form = useRef();
//   const [status, setStatus] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [countryCode, setCountryCode] = useState(countries[0].code); // Default to first country code
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for valid email

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const selectedCountry = countries.find(
//       (country) => country.code === countryCode
//     );

//     // Validate phone number length
//     if (
//       phoneNumber.length < selectedCountry.minLength ||
//       phoneNumber.length > selectedCountry.maxLength
//     ) {
//       setError(
//         Phone number must be between ${selectedCountry.minLength} and ${selectedCountry.maxLength} digits for ${selectedCountry.name}.
//       );
//       return;
//     }

//     // Validate email
//     if (!emailRegex.test(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     emailjs
//       .sendForm('service_4y7eood', 'template_abwshvr', form.current, {
//         publicKey: 'LLTGgc09jG69nstos',
//       })
//       .then(
//         () => {
//           setStatus('Message Sent!');
//           form.current.reset();
//           setPhoneNumber('');
//           setCountryCode(countries[0].code); // Reset to default country code
//           setEmail(''); // Reset email state
//           setError(''); // Clear any error
//         },
//         (error) => {
//           setStatus(Failed to send: ${error.text});
//         }
//       );
//   };

//   return (
//     <section id="contact" className="bg-gray-100 py-16">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap -mx-4">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0"
//           >
//             <h2 className="text-3xl font-bold text-orange-500 mb-4">Get In Touch With Us</h2>
//             <p className="text-gray-600 mb-6">
//               Give us a call or drop a WhatsApp message anytime, we endeavor to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.
//             </p>
//             <div className="mb-4">
//               <strong className="text-gray-700">Location: </strong> 607, Royal Park Society, Ajit Glass Garden Road, Ram Mandir, Goregaon W, Mumbai- 400104, Maharastra, India.
//             </div>
//             <div className="mb-4">
//               <strong className="text-gray-700">Phone Number:</strong> <a  href="https://wa.me/+919619836554" className="text-orange-500 underline"> +91 961 983 6554</a>
//             </div>
//             <div className="mb-4">
//               <strong className="text-gray-700">Email Us: </strong><strong className="text-orange-500 ">alamshaikh1211@gmail.com</strong> 
//             </div>
//             {/* Google Maps Embed */}
//             <div className="mb-4">
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.609094623261!2d72.8422687788715!3d19.14705243584659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63440ef2545%3A0x5ca68ab1266d2b4a!2sP-9%2C%20Ram%20Mandir%20Rd%2C%20Amrut%20Nagar%2C%20Jogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400104!5e1!3m2!1sen!2sin!4v1735843263326!5m2!1sen!2sin" 
//             width="600" 
//             height="450" s
//             tyle="border:0;" 
//             allowfullscreen="" 
//             loading="lazy" 
//             referrerpolicy="no-referrer-when-downgrade">
//             </iframe>
//             </div>
//             <a 
//               href="https://www.google.com/maps/dir/?api=1&destination=EAST+POINT+MALL,+SHOP+NO+10,+SG+BARVE+MARG,+JAGRUTI+NAGAR,+KURLA+EAST+MUMBAI,+MAHARASHTRA+400024" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="text-orange-500 underline"
//             >
//               Open in Google Maps
//             </a>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="w-full lg:w-1/2 px-4"
//           >
//             <form ref={form} onSubmit={sendEmail} className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-3xl font-bold text-orange-500 mb-4 text-center">Please fill the form below and we'll get in touch with you.</h2> {/* Centered heading */}
//               <input
//                 type="text"
//                 name="from_name"
//                 placeholder="Your Name"
//                 required
//                 className="w-full mb-4 p-2 border border-orange-300 rounded"
//               />
//               <input
//                 type="email"
//                 name="from_email"
//                 placeholder="Enter Your Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full mb-4 p-2 border border-orange-300 rounded"
//               />
//               <div className="flex mb-4">
//                 <select
//                   name="country_code"
//                   value={countryCode}
//                   onChange={(e) => setCountryCode(e.target.value)}
//                   className="w-1/3 mb-0 p-2 border border-orange-300 rounded mr-2"
//                 >
//                   {countries.map((country) => (
//                     <option key={country.code} value={country.code}>
//                       {country.name} ({country.code})
//                     </option>
//                   ))}
//                 </select>
//                 <input
//                   type="tel"
//                   name="user_phone"
//                   placeholder="Phone Number"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   required
//                   className="w-2/3 mb-0 p-2 border border-orange-300 rounded"
//                 />
//               </div>
//               {error && <p className="text-red-500">{error}</p>}
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Your Subject"
//                 className="w-full mb-4 p-2 border border-orange-300 rounded"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Your Query"
//                 rows="5"
//                 required
//                 className="w-full mb-4 p-2 border border-orange-300 rounded"
//               ></textarea>
//               <motion.button
//                 type="submit"
//                 className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-400 transition duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Submit
//               </motion.button>
//               {status && <p className="mt-4 text-green-600">{status}</p>}
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;




import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const countries = [
  { name: 'India', code: '+91', minLength: 10, maxLength: 10 },
  { name: 'United States', code: '+1', minLength: 10, maxLength: 10 },
  { name: 'United Kingdom', code: '+44', minLength: 10, maxLength: 11 },
  { name: 'Australia', code: '+61', minLength: 9, maxLength: 9 },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState(countries[0].code);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const sendEmail = (e) => {
    e.preventDefault();

    const selectedCountry = countries.find(
      (country) => country.code === countryCode
    );

    if (
      phoneNumber.length < selectedCountry.minLength ||
      phoneNumber.length > selectedCountry.maxLength
    ) {
      setError(
        `Phone number must be between ${ selectedCountry.minLength } and ${ selectedCountry.maxLength } digits for ${ selectedCountry.name }.`
      );
      return;
    }

    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    emailjs
      .sendForm('service_4y7eood', 'template_abwshvr', form.current, {
        publicKey: 'LLTGgc09jG69nstos',
      })
      .then(
        () => {
          setStatus('Message Sent!');
          form.current.reset();
          setPhoneNumber('');
          setCountryCode(countries[0].code);
          setEmail('');
          setError('');
        },
        (error) => {
          setStatus(Failed to send: ${ error.text });
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-orange-500 mb-4">Get In Touch With Us</h2>
            <p className="text-gray-600 mb-6">
              Give us a call or drop a WhatsApp message anytime. We endeavor to answer all inquiries within 24 hours on business days.
            </p>
            <div className="mb-4">
              <strong className="text-gray-700">Location:</strong> 607, Royal Park Society, Ajit Glass Garden Road, Ram Mandir, Goregaon W, Mumbai-400104, Maharashtra, India.
            </div>
            <div className="mb-4">
              <strong className="text-gray-700">Phone Number:</strong>{' '}
              <a
                href="https://wa.me/+919619836554"
                className="text-orange-500 underline"
              >
                +91 961 983 6554
              </a>
            </div>
            <div className="mb-4">
              <strong className="text-gray-700">Email Us:</strong>{' '}
              <strong className="text-orange-500">alamshaikh1211@gmail.com</strong>
            </div>
            <div className="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.609094623261!2d72.8422687788715!3d19.14705243584659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63440ef2545%3A0x5ca68ab1266d2b4a!2sP-9%2C%20Ram%20Mandir%20Rd%2C%20Amrut%20Nagar%2C%20Jogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400104!5e1!3m2!1sen!2sin!4v1735843263326!5m2!1sen!2sin"
                className="w-full h-64 rounded"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=EAST+POINT+MALL,+SHOP+NO+10,+SG+BARVE+MARG,+JAGRUTI+NAGAR,+KURLA+EAST+MUMBAI,+MAHARASHTRA+400024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 underline"
            >
              Open in Google Maps
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form ref={form} onSubmit={sendEmail} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-3xl font-bold text-orange-500 mb-4 text-center">
                Fill the form below, and we'll contact you!
              </h2>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full mb-4 p-2 border border-orange-300 rounded"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full mb-4 p-2 border border-orange-300 rounded"
              />
              <div className="flex mb-4">
                <select
                  name="country_code"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-1/3 p-2 border border-orange-300 rounded mr-2"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-2/3 p-2 border border-orange-300 rounded"
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="w-full mb-4 p-2 border border-orange-300 rounded"
              />
              <textarea
                name="message"
                placeholder="Your Query"
                rows="5"
                required
                className="w-full mb-4 p-2 border border-orange-300 rounded"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-400 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
              {status && <p className="mt-4 text-green-600">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;