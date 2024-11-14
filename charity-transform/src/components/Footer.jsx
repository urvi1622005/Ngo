// import React from "react";
import mapImage from "../assets/map.png"; // Update this path with the actual path to map.png

const Footer = () => {
  return (
    <footer className="relative bg-black-200 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left Section */}
          <div className="space-y-0.5">
            <img

              src="/assets/logo2.png" // Replace with actual logo path
              alt="Kaladhara Group Logo"
              className="h-[20vh] w-[40vw] object-cover"

              src="/src/assets/kala.png" // Replace with actual logo path
              alt="Kaladhara Group Logo"
              className="h-30 w-auto"

            />
            <p className="text-gray-400">
              The secret to happiness lies in helping others. Never underestimate
              the difference YOU can make in the lives of the poor.
            </p>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-xl font-bold">Kaladhara Contacts</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Email: kaladharaktg@gmail.com</li>
              <li>Phone: +91 8896648582, +91 9060478999</li>
              <li>Address: 20-A3, Sunder Nagar, Ambala Cantt</li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-xl font-bold">Follow Us</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
          <p>
            © 2023 Kaladhara Group. Powered by Timetune Technologies | Privacy
            Policy | Terms & Conditions
          </p>
        </div>
      </div>

      {/* Map Image in Right Corner */}
      <div className="absolute bottom-20 right-8 opacity-80"> {/* Adjusted right position */}
        <img
          src={mapImage}
          alt="Global Locations Map"
          className="w-96 h-auto" // Increased size to make it more prominent
        />
      </div>
    </footer>
  );
};

export default Footer;
