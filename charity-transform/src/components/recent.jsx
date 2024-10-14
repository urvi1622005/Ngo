import React from 'react';
import { motion } from 'framer-motion';

const Recent = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="flex flex-col items-center lg:flex-row lg:justify-between p-6 lg:p-12 bg-[#6f4f47] text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }} // Animation duration for the section
    >
      {/* Left Section - Image and Title */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex flex-col items-center">
        <motion.img
          className="w-60 h-40 rounded-lg object-cover mb-4"
          src="/src/assets/recent.png" // Replace with actual image URL
          alt="Charity cause"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }} // Animation duration for the image
        />
        <motion.h1
          className="text-3xl lg:text-4xl font-bold mb-2"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Recent Cause
        </motion.h1>
        <motion.p
          className="text-center lg:text-left"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Help today because tomorrow you may be the one who needs helping!
        </motion.p>
      </div>

      {/* Right Section - List of Causes */}
      <div className="lg:w-1/2 grid grid-cols-1 gap-6">
        {/* Cause 1 */}
        <motion.div
          className="p-4 bg-white text-black rounded-xl shadow-lg"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold">Big charity: build school for poor children.</h2>
          <p className="text-gray-500">Help today because tomorrow you <br/> may be the one who needs helping!</p>
        </motion.div>

        {/* Cause 2 */}
        <motion.div
          className="p-4 bg-white text-black rounded-xl shadow-lg"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold">Building clean-water system for rural poor.</h2>
          <p className="text-gray-500">Help today because tomorrow you may be the one who needs helping!</p>
        </motion.div>

        {/* Cause 3 */}
        <motion.div
          className="p-4 bg-white text-black rounded-xl shadow-lg"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold">First charity activity of this summer.</h2>
          <p className="text-gray-500">Help today because tomorrow you may be the one who needs helping!</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Recent;
