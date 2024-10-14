import React from 'react';
import { motion } from 'framer-motion';
import chartImage from '/src/assets/chart.png'; // Adjust the path based on where you place the image

const Donation = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-white py-12 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }} // Animation duration for the section
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-gray-800 text-3xl font-bold mb-4 text-center">
          How we spend your donations and where it goes
        </h1>
        <p className="text-gray-600 text-lg text-center mb-8">
          We understand that when you make a donation, you want to know exactly where your money is going, and we pledge to be transparent.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Text Description */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }} // Delayed animation for the text
          >
            <ul className="space-y-2">
              <li className="text-gray-600">
                <span className="font-semibold text-gray-800">40%</span> planting trees
              </li>
              <li className="text-gray-600">
                <span className="font-semibold text-gray-800">35%</span> cleanliness program
              </li>
              <li className="text-gray-600">
                <span className="font-semibold text-gray-800">10%</span> helping people
              </li>
              <li className="text-gray-600">
                <span className="font-semibold text-gray-800">10%</span> animal safety
              </li>
              <li className="text-gray-600">
                <span className="font-semibold text-gray-800">5%</span> feeding programs
              </li>
            </ul>
          </motion.div>

          {/* Right Section: Chart Image */}
          <motion.div
            className="flex justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }} // Delayed animation for the chart
          >
            <img 
              src={chartImage} 
              alt="Donation Chart" 
              className="w-64 h-64 object-cover rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Donation;
