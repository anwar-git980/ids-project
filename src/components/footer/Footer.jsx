import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        {/* Social Links */}
        <div className="text-center mb-6">
          <p className="mb-2 font-semibold">Get connected with us on social networks:</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-google"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><i className="fab fa-github"></i></a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Interior Design Studio</h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* Products */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Products</h6>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Angular</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">React</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Vue</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Laravel</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Useful Links</h6>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Pricing</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Settings</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Orders</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="uppercase font-semibold mb-4">Contact</h6>
            <ul>
              <li className="mb-2"><i className="fas fa-home mr-2"></i> New York, NY 10012, US</li>
              <li className="mb-2"><i className="fas fa-envelope mr-2"></i> info@example.com</li>
              <li className="mb-2"><i className="fas fa-phone mr-2"></i> +01 234 567 88</li>
              <li className="mb-2"><i className="fas fa-print mr-2"></i> +01 234 567 89</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p>© 2024 Copyright: <a href="#" className="font-semibold hover:underline">YourCompany.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
