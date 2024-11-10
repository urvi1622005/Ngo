export default function Component() {
  return (
    <div className="bg-[#8B5E51] p-8 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="md:w-1/3 space-y-6">
          <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
            Recent <br />Cause
          </h1>
          <p className="text-white text-xl md:text-3xl">
            Help today because tomorrow you may be the one who needs helping!
          </p>
          <div className="rounded-full overflow-hidden w-64 h-64 mx-auto md:mx-0 border-4 border-white shadow-xl transform transition-transform duration-300 hover:scale-110">
            <img
              src="./src/assets/recent.png"
              alt="Smiling girl in front of chalkboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 space-y-6">
          {/* Cause Card 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Big Charity: Build School for Poor Children.
            </h2>
            <p className="text-gray-600 mb-4">
              Join us in making education accessible to children in need. Your support can change lives!
            </p>
            <p className="text-gray-500 text-sm">
              Goal: $45,000 | Raised: $20,000
            </p>
          </div>

          {/* Cause Card 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Building Clean-Water System for Rural Poor.
            </h2>
            <p className="text-gray-600 mb-4">
              Help us bring clean water to communities that need it the most. Every drop counts!
            </p>
            <p className="text-gray-500 text-sm">
              Goal: $30,000 | Raised: $15,000
            </p>
          </div>

          {/* Cause Card 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-lg transition-transform duration-300 transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              First Charity Activity of This Summer.
            </h2>
            <p className="text-gray-600 mb-4">
              Join us for our summer charity event where we aim to make a difference in our community.
            </p>
            <p className="text-gray-500 text-sm">
              Goal: $10,000 | Raised: $7,500
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
