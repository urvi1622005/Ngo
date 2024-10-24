import Image from 'next/image'

export default function Component() {
  return (
    <div className="bg-[#8B5E51] p-6 md:p-12 lg:p-16 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Recent Cause</h2>
            <p className="text-lg md:text-xl mb-6">
              Help today because tomorrow you may be the one who needs helping!
            </p>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto lg:mx-0 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Smiling girl in front of chalkboard"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="lg:w-2/3 space-y-6">
            {[
              {
                title: "Big charity: build school for poor children.",
                description: "Help today because tomorrow you may be the one who needs helping!",
              },
              {
                title: "Building clean-water system for rural poor.",
                description: "Help today because tomorrow you may be the one who needs helping!",
              },
              {
                title: "First charity activity of this summer.",
                description: "Help today because tomorrow you may be the one who needs helping!",
              },
            ].map((cause, index) => (
              <div key={index} className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{cause.title}</h3>
                <p className="text-gray-600">{cause.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}