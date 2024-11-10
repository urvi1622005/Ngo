import React from 'react';
import { motion } from 'framer-motion';

const President = () => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: President Image */}
          <motion.div
            className="flex justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }} // Delayed animation for the image
          >
            <img 
              src="/assets/v3.png" // Replace with actual president image
              alt="Ankur Misra" 
              className="rounded-lg w-64 h-64 object-cover"
            />
          </motion.div>

          {/* Right Section: Bio Details */}
          <motion.div
            className="text-center md:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }} // Delayed animation for text
          >
            <h2 className="text-gray-800 text-2xl font-bold">Ankur Misra</h2>
            <p className="text-gray-500 font-semibold mb-2">President, Kaladhara Group</p>
            <p className="text-gray-600 text-lg mb-4">
              I'm proud to lead an organization that is committed to making a positive impact in the lives of those in need. 
              Our group is dedicated to helping the poor in various ways, and we strive to make a difference in our community 
              every day. Together, we can create a brighter future for everyone.
            </p>
            <div className="mt-4">
              {/* Signature */}
              <img 
                src="/assets/sign 1.png" // Replace with actual signature image
                alt="Signature" 
                className="inline-block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default President;
