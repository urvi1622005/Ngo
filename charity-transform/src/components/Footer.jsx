import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div>
            <img
              src="https://via.placeholder.com/150" // Replace with actual logo
              alt="Kaladhara Group Logo"
              className="h-16 w-auto"
            />
            <p className="mt-4 text-gray-400">
              The secret to happiness lies in helping others. Never underestimate
              the difference YOU can make in the lives of the poor.
            </p>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className="text-xl font-bold">Kaladhara Contacts</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Email: kaladharaktg@gmail.com</li>
              <li>Phone: +91 8896648582, 91 9060478999</li>
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

        <div className="mt-8 text-center text-gray-500">
          <p>
            © 2023 Kaladhara Group. Powered by Timetune Technologies | Privacy
            Policy | Terms & Conditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
