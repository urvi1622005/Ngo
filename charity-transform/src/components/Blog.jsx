// eslint-disable-next-line no-unused-vars
import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="relative h-[300px]">
        <img
          src="./src/assets/pic1.png"
          alt="Children playing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex gap-[30] items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-gray-100 font-bold ml-10 mr-20">
            Blog
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="w-[30vw] p-3 rounded-lg border border-transparent bg-white/30 backdrop-blur-sm text-gray-100 placeholder-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
          />
        </div>
      </div>
      <div className="bg-gray-100 px-4 py-8 sm:px-8 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-3 rounded-lg border border-transparent bg-white/30 backdrop-blur-md text-gray-100 placeholder-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
            />
          </div> */}
        </div>

        {/* Subscription Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl text-black font-semibold mb-2">
            Inside NGO: Stories and Steps
          </h2>
          <p className="mb-4 text-black">
            Subscribe to learn more about us and receive our latest blogs
          </p>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-l-lg border border-transparent bg-white/30 backdrop-blur-md text-gray-100 placeholder-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition ease-in-out duration-200"
            />
            <button className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition ease-in-out duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Recent Blog Posts Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl text-black font-bold mb-4">Recent blog posts</h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Blog Post 1 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-48 bg-gray-300 rounded-md mb-4">
                <img
                  src="/src/assets/b2.png"
                  alt="Blog post 1"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-gray-500 text-sm mb-2">Posted on: 20 October 2024</p>
              <p className="text-gray-700 mb-4">
                At our organization, we focus on raising awareness and improving access to hygiene
                practices. Our latest program works on providing clean water and sanitation facilities.
              </p>
              <button className="text-blue-500 font-semibold hover:underline">
                Read more
              </button>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-48 bg-gray-300 rounded-md mb-4">
                <img
                  src="/src/assets/b1.png"
                  alt="Blog post 2"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-gray-500 text-sm mb-2">Posted on: 20 October 2024</p>
              <p className="text-gray-700 mb-4">
                Education is the backbone of progress, and our initiative aims to provide learning
                opportunities to underprivileged children.
              </p>
              <button className="text-blue-500 font-semibold hover:underline">
                Read more
              </button>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="h-48 bg-gray-300 rounded-md mb-4">
                <img
                  src="/src/assets/b3.png"
                  alt="Blog post 3"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <p className="text-gray-500 text-sm mb-2">Posted on: 20 October 2024</p>
              <p className="text-gray-700 mb-4">
                We are committed to creating a positive impact on the environment and society through
                our sustainable projects.
              </p>
              <button className="text-blue-500 font-semibold hover:underline">
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="text-center mt-8 text-gray-600">
          <p>For any technical support, write to support@example.com</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
