import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Ensure Link is imported

const Login = () => {
  return (
    <>
      {/* Navbar - Positioned over the header image */}
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

      {/* Main Content */}
      <main className="container mx-auto">
        {/* Header Section */}
        <div className="relative mb-0">
          <img
            src="/src/assets/pic1.png" // Adjust path for header image
            alt="login Header"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          <motion.h1
            className="absolute inset-y-0 left-0 ml-8 mt-2 flex items-center text-7xl font-extrabold text-gray-300 pl-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Login
          </motion.h1>

          {/* Search Bar */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-lg w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-4 rounded-xl border border-gray-400 bg-gray-100 text-black pl-8 shadow-md focus:outline-none focus:shadow-lg transition-shadow duration-200"
            />
          </div>
        </div>

        {/* Login Section */}
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white rounded-lg shadow-lg p-8 md:w-1/3 w-full">
            <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
            <p className="mt-2 text-center text-gray-600">
              Welcome back! Please login to your account.
            </p>
            <form className="mt-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
