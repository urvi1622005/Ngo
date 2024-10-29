import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = ['/src/assets/gallery1.jpg', '/src/assets/gallery2.jpg', '/src/assets/gallery3.jpg']; // Add paths to gallery images

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h2 className="text-4xl text-center font-bold mb-10">Our Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {images.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-lg shadow-lg"
          >
            <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
