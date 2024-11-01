import React from "react";

const Volunteer = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Volunteer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/v1.png"
                alt="Volunteer 1"
                className="rounded-lg object-cover"
              />
              <p className="mt-2 text-gray-700">Dr. Shanky Jain</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/v2.png"
                alt="Volunteer 2"
                className="rounded-lg object-cover"
              />
              <p className="mt-2 text-gray-700">Karan</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/v3.png"
                alt="Volunteer 3"
                className="rounded-lg object-cover"
              />
              <p className="mt-2 text-gray-700">Ankur</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/src/assets/v4.png"
                alt="Volunteer 4"
                className="rounded-lg object-cover"
              />
              <p className="mt-2 text-gray-700">Anand</p>
            </div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Meet Our Volunteers
            </h2>
            <p className="mt-4 text-gray-600">
              Help today because tomorrow you may be the one who needs more
              help! Become a Volunteer? Join your hand with us for a better life
              and beautiful future.
            </p>
            <p className="mt-4 text-gray-600">
              The secret to happiness lies in helping others. Never
              underestimate the difference YOU can make in the lives of the
              poor, the abused, and the helpless.
            </p>
            <ul className="mt-4 text-gray-600 list-disc list-inside">
              <li>We are friendly to each other.</li>
              <li>If you join with us, we will give you free training.</li>
              <li>It’s an opportunity to help poor children.</li>
              <li>No goal requirements.</li>
              <li>Joining is totally free. We don’t need any money from you.</li>
            </ul>
            <div className="mt-6">
              <a
                href="#"
                className="inline-block px-6 py-2 bg-Brown-600 text-black font-medium rounded-lg shadow-md hover:bg-brown-700 transition-colors"
              >
                Join With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
