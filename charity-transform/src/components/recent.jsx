export default function Component() {
  return (
    <div className="bg-[#8B5E51] p-8 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 space-y-6">
          <h1 className="text-white text-6xl font-bold leading-tight">
            Recent<br />Cause
          </h1>
          <p className="text-white text-xl">
            Help today because tomorrow you may be the one who needs helping!
          </p>
          <div className="rounded-full overflow-hidden w-64 h-64 mx-auto md:mx-0">
            <img
              src="./src/assets/recent.png"
              alt="Smiling girl in front of chalkboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-2/3 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Big charity: build school for poor children.
            </h2>
            <p className="text-gray-600">
              Help today because tomorrow you may be the one who needs helping!
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Building clean-water system for rural poor.
            </h2>
            <p className="text-gray-600">
              Help today because tomorrow you may be the one who needs helping!
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">
              First charity activity of this summer.
            </h2>
            <p className="text-gray-600">
              Help today because tomorrow you may be the one who needs helping!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}