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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[350px] lg:h-[400px]">
        <img
          src={heroImg}
          alt="Children playing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-4 sm:gap-8 items-center justify-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-100 font-bold text-center">
            Contact Us
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="w-full sm:w-[70vw] md:w-[40vw] lg:w-[30vw] p-3 rounded-lg border border-transparent bg-white/30 backdrop-blur-sm text-gray-100 placeholder-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col items-center bg-gray-100 py-10 px-4 sm:px-8 md:px-12 lg:px-16">
        
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full bg-transparent text-white z-10">
          <ul className="flex justify-between items-center space-x-2 sm:space-x-4 lg:space-x-9 py-4 px-4 sm:px-8 lg:px-0 border-b border-white/30">
            <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
            <li><Link to="/about" className="hover:text-gray-500">About</Link></li>
            <li><Link to="/gallery" className="hover:text-gray-500">Gallery</Link></li>
            <li><Link to="/blog" className="hover:text-gray-500">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
            <li><Link to="/donate" className="bg-white/25 px-3 py-1 rounded-md">Donate</Link></li>
            <li><Link to="/login" className="hover:text-gray-500">Login</Link></li>
          </ul>
        </nav>

        {/* Contact Information & Form */}
        <motion.div
          className="bg-white shadow-lg rounded-lg border pb-1 border-gray-200 p-4 sm:p-8 md:p-12 mt-10 w-full max-w-5xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between pb-8 space-y-8 md:space-y-0 md:space-x-8">
            {/* Contact Information */}
            <div className="md:w-1/2 text-left space-y-4 text-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">GET IN TOUCH</h2>
              <p className="text-gray-600 text-center md:text-left">
                The secret to happiness lies in helping others. Never underestimate
                the difference YOU can make in the lives of the poor, the abused, and the helpless.
              </p>
              <p className="text-center md:text-left"><strong>Address:</strong> 20.43, SUNDER NAGAR, AMBALA CANTT (133004)</p>
              <p className="text-center md:text-left"><strong>Phone:</strong> +91 8295305397, +91 9896648582</p>
              <p className="text-center md:text-left"><strong>Email:</strong> kaladharakatg@gmail.com</p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4 text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left">DROP US A LINE</h2>
              <div className="flex flex-wrap space-y-4 md:space-y-0 md:flex-nowrap md:space-x-4">
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
