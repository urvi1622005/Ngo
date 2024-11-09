import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import aboutImage from '/src/assets/about-image.jpg'; // Adjust path as needed
import donationImage from '/src/assets/donation-image.jpg'; // Adjust path as needed

const About = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-white text-black z-20">
        <ul className="flex justify-between lg:justify-center items-center space-x-4 lg:space-x-9 py-5 px-4 lg:px-0 border-b border-gray-300">
          <li><Link to="/" className="hover:text-gray-700">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-700">About</Link></li>
          <li><Link to="/gallery" className="hover:text-gray-700">Gallery</Link></li>
          <li><Link to="/blog" className="hover:text-gray-700">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-gray-700">Contact</Link></li>
          <li><Link to="/donate" className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">Donate</Link></li>
          <li><Link to="/login" className="hover:text-gray-700">Login</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto">
        {/* Header Section */}
        <div className="relative mb-0">
          <img
            src="/src/assets/pic1.png" // Placeholder path for the header image
            alt="Blog Header"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          <motion.h1
            className="absolute inset-y-0 left-0 ml-8 mt-2 flex items-center text-7xl font-extrabold text-gray-300 pl-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About
          </motion.h1>

          {/* Search Bar */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-4 rounded-xl border border-gray-400 bg-gray-100 text-black pl-8 shadow-md focus:outline-none focus:shadow-lg transition-shadow duration-200"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-gray-100 py-12 px-6 sm:px-10 lg:px-20">
          {/* Header Section */}
          <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${aboutImage})` }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h1 className="text-4xl font-bold">Join Us Today to</h1>
              <h2 className="text-5xl font-extrabold mt-2">TRANSFORM THE SOCIETY</h2>
              <p className="text-lg mt-4">Kaladhara Group</p>
            </div>
          </div>

          {/* About Section */}
          <div className="mt-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">About Us</h2>
            <p className="text-gray-600 text-center text-lg mb-8">
              Help today because tomorrow you may be the one who needs more helping!
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <img src={aboutImage} alt="About Us" className="w-full md:w-1/2 rounded-lg shadow-md" />
              <div className="mt-8 md:mt-0 md:ml-8 p-6 bg-yellow-100 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">You are definitely intrigued to discover who we are.</h3>
                <p className="text-gray-700 mt-4">
                  The secret to happiness lies in helping others. Never underestimate the difference you can make in the lives of the poor, abused, and the helpless.
                </p>
                <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg font-semibold">
                  More about us
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
