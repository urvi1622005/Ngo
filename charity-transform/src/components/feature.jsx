import React from "react";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <section className="bg-gray-100 border-rounded py-12 px-4 sm:px-8">
      <div className="rounded max-w-full mx-auto">
        {/* Featured Project Section */}
        <div className="relative w-full h-[calc(100vh)] flex flex-col md:flex-row items-center">
          {/* Left Image Section */}
          <motion.div
            initial={{ scale: 1.05, opacity: 0.9 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="border-r-8 w-full h-full relative overflow-hidden rounded-xl"
          >
            <img
              src="/assets/img 5.png" // Replace with actual image URL
              alt="Smiling Child"
              className="object-cover w-full h-full blur-sm" // Reduced blur effect
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-8 md:p-16 space-y-4 text-white">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-4"
              >
                <span className="bg-red-500 px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                  Goal: 45000 $ &nbsp; | &nbsp; Raised: 20000 $
                </span>
              </motion.div>
              <motion.h2
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="text-5xl md:text-6xl font-bold leading-tight"
              >
                Featured project <br /> to build a School.
              </motion.h2>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-4 text-lg md:text-xl font-light leading-relaxed max-w-lg"
              >
                The secret to happiness lies in helping others. Never
                underestimate the difference YOU can make in the lives of the
                poor, the abused, and the helpless.
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="mt-6"
              >
                <a
                  href="#"
                  className="inline-block px-8 py-3 bg-red-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-red-700 transition-colors"
                >
                  Read More
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
