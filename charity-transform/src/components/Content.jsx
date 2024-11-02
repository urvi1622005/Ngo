import React from 'react';
import { motion } from 'framer-motion';

const Content = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="bg-[#EBEBEB] py-12 px-4 sm:px-6 lg:px-8" // Updated background color
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 0.5 }} // Animation duration for the section
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }} // Delayed animation for the left section
          >
            <h2 className="text-gray-500 uppercase font-semibold text-sm mb-2">Founded in July 2021</h2>
            <h1 className="text-gray-800 text-3xl font-bold mb-4">
              Kaladhara NGO has been dedicated to fostering positive change in the realms of education, culture, and social welfare.
            </h1>
            <p className="text-gray-600 text-lg">
              Our journey began with a passionate group of individuals committed to addressing the pressing needs of underprivileged communities.
              From humble beginnings, Kaladhara has grown into a beacon of hope and transformation, impacting countless lives across [Regions/Cities/Countries].
            </p>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={containerVariants}
            gap="2rem"
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }} // Delayed animation for the right section
          >
            <h2 className="text-gray-500 uppercase font-semibold text-sm mb-2">Our Vision</h2>
            <h1 className="text-gray-800 text-3xl font-bold mb-4">
              Build empowered communities that are resilient, self-sufficient, and capable of driving their own development.
            </h1>
            <p className="text-gray-600 text-lg">
              Fostering a harmonious and equitable society where education is accessible to all, cultural heritage is preserved and celebrated,
              and social inequities are eradicated.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Content;
