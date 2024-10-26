import React from 'react';
import galleryImage1 from '/src/assets/gallery-image1.jpg'; // Replace with actual image paths
import galleryImage2 from '/src/assets/gallery-image2.jpg';
import galleryImage3 from '/src/assets/gallery-image3.jpg';
// Add more images as needed

const Gallery = () => {
  return (
    <div className="bg-white py-12 px-6 sm:px-10 lg:px-20">
      {/* Header Section */}
      <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${galleryImage1})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl font-bold">Gallery</h1>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img src={galleryImage1} alt="Gallery Image 1" className="w-full h-auto rounded-lg shadow-md" />
          <img src={galleryImage2} alt="Gallery Image 2" className="w-full h-auto rounded-lg shadow-md" />
          <img src={galleryImage3} alt="Gallery Image 3" className="w-full h-auto rounded-lg shadow-md" />
          {/* Add more <img> elements with respective images */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
