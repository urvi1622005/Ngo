import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

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
    <>
      <div className="flex container mx-auto flex-col items-center bg-gray-100 py-1 p-0 px-0">
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full bg-transparent text-white z-10">
          <ul className="flex justify-between lg:justify-center items-center space-x-4 lg:space-x-9 py-5 px-4 lg:px-0 border-b border-white/30">
            <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-500">About</Link></li>
            <li><Link to="/gallery" className="hover:text-gray-500">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-gray-500">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
            <li><Link to="/donate" className="bg-white/25 px-4 py-6">Donate</Link></li>
            <li><Link to="/login" className="hover:text-gray-500">Login</Link></li>
          </ul>
        </nav>

        {/* Header Section with Image */}
        <main className="container mx-auto relative">
          <img
            src="/src/assets/pic1.png"
            alt="Blog Header"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          <motion.h1
            className="absolute inset-y-0 left-0 ml-8 mt-2 flex items-center text-7xl font-extrabold text-gray-300 pl-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact
          </motion.h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-4 rounded-xl border border-gray-400 bg-gray-100 text-black pl-8 shadow-md focus:outline-none focus:shadow-lg transition-shadow duration-200"
            />
          </div>
        </main>

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
    </>
  );
};

export default Contact;
