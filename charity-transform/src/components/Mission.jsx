import React from 'react';

const OurHistoryMission = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 md:px-20">
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-700">Our History & Mission</h2>
        <p className="text-gray-500 mt-2">
          Help today because tomorrow you may be the one who needs helping!
        </p>
      </div>

      {/* History and Mission Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our History */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/src/assets/class.png" 
            alt="Our History"
            className="w-full h-56 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Our History</h3>
          <p className="text-gray-600 mt-2">
            Help today because tomorrow you may be the one who needs helping!
          </p>
          <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
            Read More
          </button>
        </div>

        {/* Our Mission */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <img
            src="/src/assets/img 5.png"
            alt="Our Mission"
            className="w-full h-56 object-cover rounded-lg"
          />
          <h3 className="text-xl font-semibold mt-4">Our Mission</h3>
          <p className="text-gray-600 mt-2">
            Help today because tomorrow you may be the one who needs helping!
          </p>
          <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurHistoryMission;
