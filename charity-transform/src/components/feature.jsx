import React from "react";

const Feature = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Featured Project Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Left Image Section */}
          <div className="w-full h-full md:w-1/2 relative">
            <img
              src="/src/assets/img 5.png" // Replace with actual image URL
              alt="Smiling Child"
              className="rounded-xl object-cover"
            />
            <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-lg">
              <span>Goal: 45000 $</span> <span>Raised: 20000 $</span>
            </div>
          </div>

          {/* Right Text and Video Section */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h2 className="text-3xl font-bold text-gray-800">
              Featured project to build a School.
            </h2>
            <p className="mt-4 text-gray-600">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused, and the helpless.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-6 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition-colors"
              >
                Read More
              </a>
            </div>

            {/* Video Placeholder */}
            <div className="mt-8 relative">
              <img
                src="/src/assets/img 6.png" // Replace with actual image URL
                alt="Child Eating"
                className="rounded-xl object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-12 h-12 bg-red-600 p-2 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-5.197 3.023A1 1 0 018 13.293V7.207a1 1 0 011.555-.832l5.197 3.024a1 1 0 010 1.664z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
