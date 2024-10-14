import React from 'react';

const Group = () => {
  return (
    <div className="bg-brown-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-brown-500 rounded-lg overflow-hidden">
          {/* Image Section */}
          <img 
            src="/src/assets/p.png" // Replace with your actual image path
            alt="Kaladhara Group" 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="mt-8 text-white text-center">
          <h2 className="text-xl font-semibold uppercase">Kaladhara Group</h2>
          <h1 className="text-4xl font-bold">About Kaladhara Group</h1>
        </div>
      </div>
    </div>
  );
};

export default Group;
