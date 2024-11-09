import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <>
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

      {/* Main Content */}
      <main className="container mx-auto">
        {/* Header Section */}
        <div className="relative mb-0">
          {/* Image Space */}
          <img
            src="/src/assets/pic1.png" // Placeholder path for the header image
            alt="Blog Header"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          <motion.h1
            className="absolute ml-8 mt-2 inset-y-0 left-0 flex justify-center items-center text-7xl font-extrabold text-gray-300 pl-20"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Blog
          </motion.h1>

          {/* Search Bar */}
          <div className="absolute top-60 mt-2 left-1/2 transform -translate-y-20 transform -translate-x-1/2 max-w-lg w-full ">
         <input
             type="text"
             placeholder="Search..."
             className="w-full p-4 rounded-xl border border-gray-400 bg-gray-200 text-white pl-8 shadow-md focus:outline-none focus:shadow-lg transition-shadow duration-200"
         />
        </div>
        </div>

        {/* Content starts here */}
        
          <div className="bg-gray-100 px-4 py-10 sm:px-8 lg:px-16">
            {/* Header Section */}
            <div className="text-center mb-10">
              <motion.h1 
                className="text-5xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-500 relative inline-block"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                Inside NGO: Stories and Steps
                <span className="absolute left-0 right-0 h-1 bg-gray-500 -bottom-2"></span>
              </motion.h1>
              <div className="relative max-w-md mx-auto"></div>
            

            {/* Subscription Section */}
            <div className="text-center mb-10">
              <motion.h2 
                className="text-3xl font-semibold mb-3 text-gray-800"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Subscribe for the Latest Updates
              </motion.h2>
              <p className="mb-5 text-gray-600">
                Subscribe to learn more about us and receive our latest blogs
              </p>
              <div className="flex justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-3 rounded-l-lg border border-gray-400 focus:outline-none shadow-md focus:shadow-lg transition-shadow duration-200"
                />
                <button className="bg-gray-800 text-gray-100 p-3 rounded-r-lg hover:bg-gray-700 transition-colors duration-200 border border-gray-600">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Recent Blog Posts Section */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-5">Recent Blog Posts</h3>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {/* Blog Post 1 */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="h-48 bg-gray-300 rounded-md mb-4 overflow-hidden">
                    <img src="/src/assets/b2.png" alt="Blog post 1" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <p className="text-gray-500 text-sm mb-2">Posted on: 20 October 2024</p>
                  <p className="text-gray-700 mb-4">
                    At our organization, we focus on raising awareness and improving access to hygiene practices. Our latest program works on providing clean water and sanitation facilities.
                  </p>
                  <button className="text-gray-800 font-semibold hover:text-gray-600">Read more</button>
                </motion.div>

                {/* Blog Post 2 */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="h-48 bg-gray-300 rounded-md mb-4 overflow-hidden">
                    <img src="/src/assets/b1.png" alt="Blog post 2" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <p className="text-gray-500 text-sm mb-2">Posted on: 20 October 2024</p>
                  <p className="text-gray-700 mb-4">
                    Education is the backbone of progress, and our initiative aims to provide learning opportunities to underprivileged children.
                  </p>
                  <button className="text-gray-800 font-semibold hover:text-gray-600">Read more</button>
                </motion.div>

                {/* Blog Post 3 */}
                <motion.div 
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="h-48 bg-gray-300 rounded-md mb-4 overflow-hidden">
                    <img src="/src/assets/b3.png" alt="Blog post 3" className="w-full h-full object-cover rounded-md" />
                  </div>
                  <p className="text-gray-500 text-sm mb-2">Posted on: 20 October 2024</p>
                  <p className="text-gray-700 mb-4">
                    We are committed to creating a positive impact on the environment and society through our sustainable projects.
                  </p>
                  <button className="text-gray-800 font-semibold hover:text-gray-600">Read more</button>
                </motion.div>
              </div>
            </div>

            {/* Footer Section */}
            <div className="text-center mt-10 text-gray-600">
              <p>For any technical support, write to support@example.com</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
