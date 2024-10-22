import React from 'react';
import { motion } from 'framer-motion';

const Ngo = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-transparent text-white z-10">
        <ul className="flex justify-between lg:justify-center items-center space-x-4 lg:space-x-9 py-5 px-4 lg:px-0 border-b border-white/30">
          <li><a href="#" className="hover:text-gray-500">Home</a></li>
          <li><a href="#" className="hover:text-gray-500">About</a></li>
          <li><a href="#" className="hover:text-gray-500">Gallery</a></li>
          <li><a href="#" className="hover:text-gray-500">Blog</a></li>
          <li><a href="#" className="hover:text-gray-500">Contact</a></li>
          <li><a href="#" className="bg-white/25 px-4 py-6 ">Donate</a></li>
          <li><a href="#" className="hover:text-gray-500">Login</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Responsive Image */}
          <img
            src="/src/assets/pic1.png"
            alt="Children smiling"
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[calc(100vh)] object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl lg:text-5xl mb-2 lg:mb-4"
            >
              Join Us Today to
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold leading-tight"
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
