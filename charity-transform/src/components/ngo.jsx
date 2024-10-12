import React from 'react';
import { motion } from 'framer-motion';

const Ngo = () => {
  return (
    <div className="min-h-screen bg-gray-100 relative ">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full bg-transparent text-white z-10">
        <ul className="flex justify-center space-x-9 py-5 border-b border-white">
          <li><a href="#" className="hover:text-gray-300">Home</a></li>
          <li><a href="#" className="hover:text-gray-300">About</a></li>
          <li><a href="#" className="hover:text-gray-300">Gallery</a></li>
          <li><a href="#" className="hover:text-gray-300">Blog</a></li>
          <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          <li><a href="#" className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600">Donate</a></li>
          <li><a href="#" className="hover:text-gray-300">Login</a></li>
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
          <img
            src="/src/assets/pic1.png"
            alt="Children smiling"
            className="w-full h-[calc(100vh)] object-cover"
          />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl mb-4"
            >
              Join Us Today to
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-7xl font-bold text-center leading-tight"
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
