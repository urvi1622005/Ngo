import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import scanner from '/src/assets/scanner2.jpg'; // Adjust path as needed
import { FaTimes, FaBars } from 'react-icons/fa'; // Importing FontAwesome icons
import { motion } from 'framer-motion'; // Import Framer Motion

const Ngo = () => {
  const location = useLocation(); // Get the current location to highlight active page
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility
  const [isCallConfirmationVisible, setIsCallConfirmationVisible] = useState(false); // State to manage call confirmation popup
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  // Function to toggle the popup visibility
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Handle phone number click
  const handlePhoneClick = () => {
    setIsCallConfirmationVisible(true); // Show confirmation before calling
  };

  // Close call confirmation
  const closeCallConfirmation = () => {
    setIsCallConfirmationVisible(false);
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Navbar with Hamburger Icon */}
      <nav className="font-poppins absolute top-0 left-0 w-full bg-transparent text-white z-10 backdrop-blur-sm bg-white/8 border-b-2 border-gray-400 border-opacity-50 py-5">
        <div className="flex justify-between lg:mx-2 sm:mx-8 items-center lg:px-60">
          {/* Hamburger Icon for Small Screens */}
          <div className="lg:hidden">
            <button onClick={toggleSidebar}>
              <FaBars size={30} />
            </button>
          </div>
          {/* Desktop Navbar */}
          <ul className="hidden lg:flex justify-center items-center space-x-6 lg:space-x-16 py-1">
            <li>
              <Link
                to="/"
                className={`hover:text-white py-6 transition duration-300 ${location.pathname === '/' ? 'font-bold text-white border-b-2 px-2' : 'text-gray-300'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-white py-6 transition duration-300 ${location.pathname === '/about' ? 'font-bold text-white border-b-2 px-2' : 'text-gray-300'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`hover:text-white transition duration-300 ${location.pathname === '/gallery' ? 'font-bold text-white border-b-2 px-2' : 'text-gray-300'} pb-6`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`hover:text-white transition duration-300 ${location.pathname === '/blog' ? 'font-bold text-white border-b-2 px-2' : 'text-gray-300'} pb-6`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-white transition duration-300 ${location.pathname === '/contact' ? 'font-bold text-white border-b-2 px-2' : 'text-gray-300'} pb-6`}
              >
                Contact
              </Link>
            </li>
            
          </ul>
          <li className='list-none'>
              <Link
                className={`bg-white/20 text-white px-6 py-6 rounded-lg font-semibold hover:bg-white/40 hover:text-gray-800 transition duration-300 ${location.pathname === '/donate' ? 'bg-white/30 font-bold text-white' : 'text-gray-300'}`}
                onClick={togglePopup} // Show the popup on click
              >
                Donate
              </Link>
            </li>
        </div>
      </nav>

      {/* Sidebar for Mobile with Glassy Effect */}
      <motion.div
        className={`fixed inset-0 bg-black/60 z-20 lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-3/4 h-full text-gray-50 bg-Brown-200/50 backdrop-blur-lg p-6 rounded-lg"
          initial={{ x: '-100%' }}
          animate={{ x: '0' }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-end">
            <button onClick={toggleSidebar}>
              <FaTimes size={30} />
            </button>
          </div>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className={`block py-4 text-lg ${location.pathname === '/' ? 'font-bold' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-4 text-lg ${location.pathname === '/about' ? 'font-bold' : ''}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`block py-4 text-lg ${location.pathname === '/gallery' ? 'font-bold' : ''}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`block py-4 text-lg ${location.pathname === '/blog' ? 'font-bold' : ''}`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-4 text-lg ${location.pathname === '/contact' ? 'font-bold' : ''}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>

     {/* Donation Popup with Framer Motion */}
     {isPopupOpen && (
        <motion.div
          className="fixed font-poppins inset-0 flex items-center justify-center z-20 backdrop-blur-sm bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white/90 p-8 rounded-lg shadow-lg w-[90%] max-w-2xl max-h-[90%] overflow-auto relative"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            {/* Donation Form Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-center">Make a Difference - Donate Today</h2>
              <p className="text-center mb-4">Your contribution directly impacts those in need. Help us create lasting change.</p>

              {/* UPI QR and Contact Section */}
              <div className="text-center mb-2">
                <p className="mb-4">Donate via UPI using the QR code:</p>
                <img src={scanner} alt="UPI QR Code" className="mx-auto w-[40vw] h-[40vh] mb-4 object-cover lg:h-[40vh] lg:w-[20vw]" />
                <p className="mb-4">For assistance or other donation methods, reach out to us:</p>
                <p className="font-semibold">Phone: +91-98966-48584</p>
                <p className="mb-4">Email: kaladharaktg@gmail.com</p>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  className="bg-Brown-200 text-white px-6 py-2 rounded-lg hover:bg-brown-400 transition-all duration-300"
                  onClick={handlePhoneClick} 
                >
                  Get in Touch
                </button>
                <button
              className="absolute top-4 left-4 text-lg text-gray-400 hover:text-gray-700"
              onClick={togglePopup} // Close the popup on click
            >
              <FaTimes />
            </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Call Confirmation Modal with Framer Motion */}
      {isCallConfirmationVisible && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-30 backdrop-blur-sm bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="bg-white relative p-8 rounded-lg shadow-lg w-[90%] max-w-lg"
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className="absolute top-4 right-4 text-lg text-gray-400 hover:text-gray-700"
              onClick={closeCallConfirmation} // Close the popup on click
            >
              <FaTimes />
            </button>

            <h3 className="text-xl font-bold mb-4 text-center">Confirm Your Call</h3>
            <p className="mb-4 text-center">Are you sure you want to reach out to us via the phone number <strong>+91-98966-48584</strong>?</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://wa.me/+919896648584"
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
              >
                WhatsApp
              </a>
              <a
                href="mailto:kaladharaktg@gmail.com"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-all duration-300"
              >
                Email
              </a>
              <a
                href="tel:+919896648584"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Ngo;
