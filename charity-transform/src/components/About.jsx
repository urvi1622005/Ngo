import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from '/src/assets/about-image.jpg'; // Adjust path as needed
import donationImage from '/src/assets/donation-image.jpg'; // Adjust path as needed

const About = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-10 lg:px-20">
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
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">About US</h2>
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
  );
};

export default About;
