import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import heroImg from '/assets/pic1.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <div className="relative h-[300px]">
        <img
          src={heroImg}
          alt="Children playing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex gap-[30] items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-gray-100 font-bold ml-10 mr-20">
            Contact Us
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="w-[30vw] p-3 rounded-lg border border-transparent bg-white/30 backdrop-blur-sm text-gray-100 placeholder-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
          />
        </div>
      </div>
      <div className="flex container mx-auto flex-col items-center bg-gray-100 py-1 p-0 px-0">

        

        {/* Main Contact Form Section */}
        <motion.div
          className="bg-white shadow-lg rounded-lg border pb-1 border-gray-200 p-4 sm:p-12 mt-5 w-full max-w-5xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between pb-12 space-y-8 md:space-y-0 md:space-x-8">
            {/* Contact Information */}
            <div className="md:w-1/2 text-left space-y-2 text-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">GET IN TOUCH</h2>
              <p className="text-gray-600">
                The secret to happiness lies in helping others. Never underestimate
                the difference YOU can make in the lives of the poor, the abused, and the helpless.
              </p>
              <p><strong>Address:</strong> 20.43, SUNDER NAGAR, AMBALA CANTT (133004)</p>
              <p><strong>Phone:</strong> +91 8295305397, +91 9896648582</p>
              <p><strong>Email:</strong> kaladharakatg@gmail.com</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4 text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">DROP US A LINE</h2>
              <div className="flex space-x-4 flex-wrap md:flex-nowrap">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full md:w-1/2 p-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full md:w-1/2 p-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500 h-32 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-3 rounded shadow hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-center text-green-600 mt-4">Message sent successfully!</p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
