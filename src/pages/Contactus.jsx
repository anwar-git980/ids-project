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
        `Phone number must be between ${selectedCountry.minLength} and ${selectedCountry.maxLength} digits for ${selectedCountry.name}.`
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
          setStatus(`Failed to send: ${error.text}`);
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
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0135113364525!2d72.8902135749636!3d19.065313746118878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef22c4e3f9f%3A0x6c7f82873f1a47ed!2sEast%20Point%20Mall%2C%20SG%20Barve%20Marg%2C%20Jagruti%20Nagar%2C%20Kurla%20East%2C%20Mumbai%2C%20Maharashtra%20400024!5e0!3m2!1sen!2sin!4v1695297351707!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
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
