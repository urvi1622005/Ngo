import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Ngo = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative overflow-x-hidden">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-transparent text-white z-10">
        <ul className="flex justify-between lg:justify-center items-center space-x-4 lg:space-x-9 py-5 px-4 lg:px-0 border-b border-white/30">
          <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-500">About</Link></li>
          <li><Link to="/gallery" className="hover:text-gray-500">Gallery</Link></li>
          <li><Link to="/blog" className="hover:text-gray-500">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
          <li><Link to="/donate" className="bg-white/25 px-4 py-6">Donate</Link></li>
          <li><Link to="/login" className="hover:text-gray-500">Login</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-x-hidden" // Added overflow-x-hidden here as well
        >
          {/* Responsive Image */}
          <img
            src="/src/assets/pic1.png"
            alt="Children smiling"
            className="w-full h-[70vh] sm:h-[40vh] md:h-[70vh] lg:h-[98vh] object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className=" font-normal text-2xl lg:text-4xl mb-2 lg:mb-4"
            >
              Join Us Today to
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-9xl lg:text-6xl font-bold leading-tight"
            >
              TRANSFORM<br />THE SOCIETY
            </motion.h1>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Ngo;
