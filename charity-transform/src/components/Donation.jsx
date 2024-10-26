import React from 'react';
import { motion } from 'framer-motion';
import chartImage from '/src/assets/chart.png'; // Update the path to your chart image if necessary

const Donation = () => {
  // Animation settings
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-gray-50 py-12 px-6 sm:px-10 lg:px-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-gray-900 text-3xl font-extrabold text-center mb-4">
          How we spend your donations and where it goes
        </h1>
        <p className="text-gray-600 text-center text-lg mb-10">
          We understand that when you make a donation, you want to know exactly where your money is going, and we pledge to be transparent.
        </p>

        {/* Content: Text on Left, Chart on Right */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Description */}
          <motion.div
            className="w-full md:w-1/2 space-y-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-green-300 rounded-full"></span>
              <span className="text-gray-800 font-semibold">40% planting trees</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-purple-300 rounded-full"></span>
              <span className="text-gray-800 font-semibold">35% cleanliness program</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
              <span className="text-gray-800 font-semibold">10% helping people</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-pink-300 rounded-full"></span>
              <span className="text-gray-800 font-semibold">10% animal safety</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
              <span className="text-gray-800 font-semibold">5% feeding the poor</span>
            </div>
          </motion.div>

          {/* Chart Image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img 
              src={chartImage} 
              alt="Donation Chart" 
              className="w-64 h-64 object-contain rounded-full shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Donation;
