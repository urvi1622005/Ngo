// import React from 'react';

const OurHistoryMission = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 px-6 py-12 md:px-24 lg:px-40">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800 md:text-5xl">Our History & Mission</h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-lg">
          "Helping today because tomorrow, the help you need might come from another."
        </p>
      </div>

      {/* History and Mission Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Our History */}
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-8 relative overflow-hidden">
          <img
            src="/src/assets/class.png"
            alt="Our History"
            className="w-full h-60 object-cover rounded-lg transform hover:scale-105 transition duration-300"
          />
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">Our History</h3>
            <p className="text-gray-600 mt-4 text-sm">
              Discover the journey that brought us to where we are today.
            </p>
            <button className="mt-6 bg-Brown-200 text-white font-medium py-2 px-6 border-2 border-Brown-200 rounded-lg p-8 hover:bg-Brown-200 hover:text-white transition duration-300 shadow-md">
             To be updated soon
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-30"></div>
        </div>

        {/* Our Mission */}
        <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow rounded-lg p-8 relative overflow-hidden">
          <img
            src="/src/assets/img 5.png"
            alt="Our Mission"
            className="w-full h-60 object-cover rounded-lg transform hover:scale-105 transition duration-300"
          />
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold mt-6 text-gray-800">Our Mission</h3>
            <p className="text-gray-600 mt-4 text-sm">
              Learn about our commitment to creating a positive impact.
            </p>
           <button className="mt-6 bg-Brown-200 text-white font-medium py-2 px-6 border-2 border-Brown-200 rounded-lg p-8 hover:bg-Brown-200 hover:text-white transition duration-300 shadow-md">

              To be updated soon
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default OurHistoryMission;
