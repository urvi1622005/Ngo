import React from "react";

const Feature = () => {
  return (
    <section className="bg-gray-100 border-rounded py-12 px-4 sm:px-8">
      <div className="rounded max-w-full mx-auto">
        {/* Featured Project Section */}
        <div className="relative w-full h-[calc(100vh)] flex flex-col md:flex-row items-center">
          {/* Left Image Section */}
          <div className="border-r-8   w-full h-full relative">
            <img
              src="/assets/img 5.png" // Replace with actual image URL
              alt="Smiling Child"
              className="object-cover w-full h-full rounded-xl"
            />
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-start p-8 md:p-16 space-y-4 text-white">
              <div className="mb-4">
                <span className="bg-red-500 px-4 py-2 rounded-lg text-sm font-semibold">
                  Goal: 45000 $ &nbsp; | &nbsp; Raised: 20000 $
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                Featured project <br /> to build a School.
              </h2>
              <p className="mt-4 text-lg md:text-xl font-light leading-relaxed max-w-lg">
                The secret to happiness lies in helping others. Never
                underestimate the difference YOU can make in the lives of the
                poor, the abused, and the helpless.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block px-8 py-3 bg-red-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-red-700 transition-colors"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="absolute right-0 bottom-[-100px] transform -translate-y-1/2 w-96 h-64">
            <img
              src="/assets/img 6.png" // Replace with actual image URL
              alt="Child Eating"
              className="object-cover w-[30vw] h-full rounded-xl"
            />
            {/* Play Button */}
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
    </section>
  );
};

export default Feature;
