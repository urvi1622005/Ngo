import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutPage = () => {
  const volunteers = [
    { id: 1, name: "John Doe", role: "Volunteer", image: "/placeholder.svg?height=300&width=300" },
    { id: 2, name: "Jane Smith", role: "Coordinator", image: "/placeholder.svg?height=300&width=300" },
    { id: 3, name: "Mike Johnson", role: "Director", image: "/placeholder.svg?height=300&width=300" },
    { id: 4, name: "Sarah Williams", role: "Volunteer", image: "/placeholder.svg?height=300&width=300" },
  ];

  return (
    <>
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
            src="/src/assets/pic1.png" // Placeholder path for the header image
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
            About
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

        

          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Help today, lead tomorrow</h2>
              <p className="text-gray-600">
                We are dedicated to making a positive impact in our community through education,
                support, and sustainable development initiatives.
              </p>
            </div>

            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Meet our Volunteers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {volunteers.map((volunteer) => (
                  <div key={volunteer.id} className="text-center">
                    <img
                      src={volunteer.image}
                      alt={volunteer.name}
                      className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="font-semibold">{volunteer.name}</h4>
                    <p className="text-gray-600">{volunteer.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        
      </main>
    </>
  );
};

export default AboutPage;
