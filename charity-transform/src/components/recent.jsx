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
      className="flex flex-col lg:flex-row p-6 lg:p-12 bg-[#f2f2f2] text-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      {/* Left Section - Brown Box with Image and Title */}
      <div className="lg:w-1/3 bg-[#6f4f47] p-6 rounded-lg text-white flex flex-col items-center justify-center">
        <motion.img
          className="w-40 h-40 rounded-lg object-cover mb-4"
          src="/src/assets/recent.png" // Replace with actual image URL
          alt="Charity cause"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="text-3xl font-bold mb-2 text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Recent Cause
        </motion.h1>
        <motion.p
          className="text-center"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          Help today because tomorrow you may be the one who needs helping!
        </motion.p>
      </div>

      {/* Right Section - List of Causes */}
      <div className="lg:w-2/3 grid grid-cols-1 lg:grid-cols-1 gap-6 lg:pl-8">
        {/* Cause 1 */}
        <motion.div
          className="p-6 bg-white text-black rounded-lg shadow-lg"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold">Big charity: build school for poor children.</h2>
          <p className="text-gray-500">
            Help today because tomorrow you <br /> may be the one who needs helping!
          </p>
        </motion.div>

        {/* Cause 2 */}
        <motion.div
          className="p-6 bg-white text-black rounded-lg shadow-lg"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold">Building clean-water system for rural poor.</h2>
          <p className="text-gray-500">
            Help today because tomorrow you <br /> may be the one who needs helping!
          </p>
        </motion.div>

        {/* Cause 3 */}
        <motion.div
          className="p-6 bg-white text-black rounded-lg shadow-lg"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-lg font-bold">First charity activity of this summer.</h2>
          <p className="text-gray-500">
            Help today because tomorrow you <br /> may be the one who needs helping!
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Recent;
