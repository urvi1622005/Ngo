import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import heroImg from '/assets/pic1.png';

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
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px]">
        <img
          src={heroImg}
          alt="Children playing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center px-4">
          <h1 className="text-3xl md:text-5xl text-gray-100 font-bold">
            Contact Us
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="w-[80vw] md:w-[30vw] p-3 rounded-lg border bg-white/30 backdrop-blur-sm text-gray-100 placeholder-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col items-center bg-gray-100 py-8 px-4 md:py-10 md:px-8">
        
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full bg-transparent text-white z-10">
          <ul className="flex justify-between lg:justify-center items-center space-x-2 md:space-x-4 lg:space-x-9 py-5 px-4 lg:px-0 border-b border-white/30 text-xs md:text-sm">
            <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-500">About</Link></li>
            <li><Link to="/gallery" className="hover:text-gray-500">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-gray-500">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
            <li><Link to="/donate" className="bg-white/25 px-4 py-6">Donate</Link></li>
            <li><Link to="/login" className="hover:text-gray-500">Login</Link></li>
          </ul>
        </nav>

        {/* Contact Information & Form */}
        <motion.div
          className="bg-white shadow-lg rounded-lg border pb-1 border-gray-200 p-6 sm:p-8 mt-12 w-full max-w-4xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between pb-8 space-y-8 md:space-y-0 md:space-x-8">
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

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4 text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">DROP US A LINE</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500 h-32 resize-none"
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
