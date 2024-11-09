import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-100 px-4 py-8 sm:px-8 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-8">
      
       BLOG
      <span className="absolute left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 -bottom-2"></span>
     
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none"
          />
        </div>
      </div>

      {/* Subscription Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl text-black-200 font-semibold mb-2">Inside NGO: Stories and Steps</h2>
        <p className="mb-4 text-black-200">Subscribe to learn more about us and receive our latest blogs</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg border border-gray-300 focus:outline-none"
          />
          <button className="bg-black text-black-200 p-3 rounded-r-lg">Subscribe</button>
        </div>
      </div>

      {/* Recent Blog Posts Section */}
      <div className="text-center mb-8">
        <h3 className="text-xl text-black-200 font-bold mb-4">Recent blog posts</h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Blog Post 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="h-48 bg-gray-300 rounded-md mb-4"> {/* Placeholder for image */}
              <img src="/src/assets/b2.png" alt="Blog post 1" className="w-full h-full object-cover rounded-md" />
            </div>
            <p className="text-gray-500 text-sm mb-2">Posted on: 20 October 2024</p>
            <p className="text-gray-700 mb-4">
              At our organization, we focus on raising awareness and improving access to hygiene
              practices. Our latest program works on providing clean water and sanitation facilities.
            </p>
            <button className="text-blue-500 font-semibold">Read more</button>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="h-48 bg-gray-300 rounded-md mb-4"> {/* Placeholder for image */}
              <img src="/src/assets/b1.png" alt="Blog post 2" className="w-full h-full object-cover rounded-md" />
            </div>
            <p className="text-gray-500 text-sm mb-2">Posted on: 20 October 2024</p>
            <p className="text-gray-700 mb-4">
              Education is the backbone of progress, and our initiative aims to provide learning
              opportunities to underprivileged children.
            </p>
            <button className="text-blue-500 font-semibold">Read more</button>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="h-48 bg-gray-300 rounded-md mb-4"> {/* Placeholder for image */}
              <img src="/src/assets/b3.png" alt="Blog post 3" className="w-full h-full object-cover rounded-md" />
            </div>
            <p className="text-gray-500 text-sm mb-2">Posted on: 20 October 2024</p>
            <p className="text-gray-700 mb-4">
              We are committed to creating a positive impact on the environment and society through
              our sustainable projects.
            </p>
            <button className="text-blue-500 font-semibold">Read more</button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-8 text-gray-600">
        <p>For any technical support, write to support@example.com</p>
      </div>
    </div>
  );
};

export default Blog;
